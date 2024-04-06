import { Button } from '@mui/joy';
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { useDropzone } from 'react-dropzone';
import { Character } from '../../types/Character.type';
import './DropZone.css';

const typeValidator = (file: any) => {
    if (file.type.startsWith("video/")) {
        return {
          code: "no-video-allowed",
          message: "Les vidéos ne sont pas autorisées",
        };
    } else if (file.type.startsWith("image/")) {
      if (file.size > 3 * 1024 * 1024) {
        // 10MB limit
        return {
          code: "size-too-large",
          message: "La taille de l'image est trop grande.",
        };
      }
    }
    return null;
  };

const formatBytes =(a: number,b=2) => {if(!+a)return"0 Bytes";const c=0>b?0:b,d=Math.floor(Math.log(a)/Math.log(1024));return`${parseFloat((a/Math.pow(1024,d)).toFixed(c))} ${["Bytes","KB","MB","GB"][d]}`}


interface DropZoneProps {
    open: boolean;
    setOpen: (open: boolean) => void
    generalInfos: Character;
    setGeneralInfos: (generalInfos: Character) => void;
}

export default function DropZone(props: DropZoneProps) {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    validator: typeValidator,
    accept: {
        'image/png': ['.png'],
        'image/jpeg': ['.jpg', '.jpeg'],
    },
    maxFiles:1
  });

  const files = acceptedFiles.map((file: any) => {
    const size = formatBytes(file.size);
    return (
    <li key={file.path}>
      {file.path} - {size}
    </li>
  )});

    const saveProfilePicture = async () => {
        // Create a root reference
        const storage = getStorage();
        const fileName = Math.floor(Math.random() * Date.now()).toString(36);
        const imageRef = ref(storage, 'images/characters-profile-pics/' + fileName);
        const snapshot = await uploadBytes(imageRef, acceptedFiles[0])
        if (snapshot?.metadata?.name) {
            console.log('Uploaded a blob or file!', snapshot.metadata.name);
            
            props.setGeneralInfos({...props.generalInfos, avatar: snapshot.metadata.fullPath});
        }
        props.setOpen(false);
    }

  return (
    <section className="container">
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <p>Faites glisser l'image ou cliquez</p>
        <p><i>Taille maximum : 3MB</i></p>
        <p><i>Formats acceptés: png, jpg, jpeg</i></p>
      </div>
      {acceptedFiles.length > 0 && <aside>
        <h4>Image</h4>
        <ul>{files}</ul>
      </aside>}
      <Button variant="solid" color="neutral" sx={{margin: 'auto', display: 'flex'}} onClick={saveProfilePicture}>Envoyer</Button>
    </section>
  );
}