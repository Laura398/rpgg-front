import { Divider } from '@mui/joy';
import Box from '@mui/joy/Box';
import Stack from '@mui/joy/Stack';
import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createCharacter, updateCharacter } from '../../../api/Characters';
import CreateCharacterCard from '../../../components/CreateCharacterCard';
import BasicModal from '../../../components/modals/Modal';
import { getAvatar } from '../../../helpers/get-avatar';
import { showAlertFunction } from '../../../helpers/show-alert';
import { ANIMALS } from '../../../types/Character.animals.constant';
import { FIRSTNAMES, LASTNAMES } from '../../../types/Character.names.constants';
import { Character } from '../../../types/Character.type';
import { CHARACTER_CLASSES, FAMILY_SITUATIONS, GENDERS, ORIGINS, RACES, RACES_NEED_TYPE, SEXUALITIES, SOCIAL_STATUSES, TYPES_FOR_HALFLINGS, TYPES_FOR_LUTINS_FEMALES, TYPES_FOR_LUTINS_MALES } from '../../../types/Characters.constants';
import CharacterProfile from './CharacterProfile';
import CasinoIcon from '@mui/icons-material/Casino';
import Choices from './Choices';

const children = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const colors = ["bleu", "vert", "marron", "noir", "rouge", "violet", "jaune", "gris", "blanc"];

const defineHeight = (race: string | undefined, gender: string | undefined) => {
  switch (race) {
      case "Nain":
          if (gender === "Femme") {
              return 130 + Math.floor(Math.random() * 20);
          } else {
              return 140 + Math.floor(Math.random() * 20);
          }
      case "Lutin":
          if (gender === "Femme") {
              return 130 + Math.floor(Math.random() * 20);
          } else {
              return 140 + Math.floor(Math.random() * 20);
          }
      default:
          if (gender === "Femme") {
              return 150 + Math.floor(Math.random() * 30);
          } else {
              return 160 + Math.floor(Math.random() * 30);
          }
  }
}

const defineWeight = (race: string, gender: string) => {
  switch (race) {
      case "Nain":
          if (gender === "Femme") {
              return 60 + Math.floor(Math.random() * 20);
          } else {
              return 70 + Math.floor(Math.random() * 20);
          }
      case "Lutin":
          if (gender === "Femme") {
              return 40 + Math.floor(Math.random() * 20);
          } else {
              return 50 + Math.floor(Math.random() * 20);
          }
      default:
          if (gender === "Femme") {
              return 50 + Math.floor(Math.random() * 30);
          } else {
              return 60 + Math.floor(Math.random() * 30);
          }
  }
}

export default function GeneralInfos(props: { generalInfos: Character , setGeneralInfos: (generalInfos: Character) => void, edit: boolean, setShowAlert: (showAlert: boolean) => void, setAlertMessage: (alertMessage: string) => void, setAlertSeverity: (alertSeverity: string) => void, setGeneralInfosDone: (generalInfosDone: boolean) => void}) {
    const navigate = useNavigate();
    const { generalInfos, setGeneralInfos } = props;
    const [open, setOpen] = useState<boolean>(false);
    const [needsType, setNeedsType] = useState(false);
    const [typesList, setTypesList] = useState([] as string[]);
    const [gender, setGender] = useState<string>(generalInfos.gender || 'Genre');
    const [race, setRace] = useState<string>(generalInfos.race || 'Race');
    const [avatar, setAvatar] = useState<string>("/static/images/avatar/1.jpg");
    const [selectsList, setSelectsList] = useState([] as any[]);
    const sortedAnimals = Array.from(ANIMALS).sort();

    useMemo(async() => {
        if (generalInfos.avatar) {
          const avatarUrl = await getAvatar(generalInfos.avatar);
          if (avatarUrl) setAvatar(avatarUrl);
        }
    }, [generalInfos, setGeneralInfos, generalInfos.avatar]);

    useEffect(() => {
        defineSelectsList();
    }, [generalInfos]);

    const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e);
        
      if (e.target.type === "number") return setGeneralInfos({...generalInfos, [e.target.name]: +e.target.value});
      setGeneralInfos({...generalInfos, [e.target.name]: e.target.value});
    }

    const changeSelect = (value: any, name: string) => {
      if (name === "gender") {
        setNeedsType(false);
        const generalInfosWithoutType = { ...generalInfos };
        delete generalInfosWithoutType.type;
        setGender(value);
        setGeneralInfos({ ...generalInfosWithoutType, [name]: value });
        if (race && (RACES_NEED_TYPE as unknown as string[]).includes(race)) {
            if (race === "Lutin") {
                if (value === "Femme") setTypesList([...TYPES_FOR_LUTINS_FEMALES]);
                else setTypesList([...TYPES_FOR_LUTINS_MALES]);
            }
            else if (race === "Demi-Divinité") setTypesList([...TYPES_FOR_HALFLINGS]);
            else setTypesList([...sortedAnimals]);
            setNeedsType(true);
        }
      } else if (name === "race") {
        setRace(value);
        setGeneralInfos({...generalInfos, type: undefined, [name]: value});
        if (value && (RACES_NEED_TYPE as unknown as string[]).includes(value)) {
            if (value === "Lutin") {
                if (gender === "Femme") setTypesList([...TYPES_FOR_LUTINS_FEMALES]);
                else setTypesList([...TYPES_FOR_LUTINS_MALES]);
            }
            else if (value === "Demi-Divinité") setTypesList([...TYPES_FOR_HALFLINGS]);
            else setTypesList([...sortedAnimals]);
            setNeedsType(true);
        } else {
            const generalInfosWithoutType = { ...generalInfos, [name]: value };
            delete generalInfosWithoutType.type;
            setGeneralInfos(generalInfosWithoutType);
            setNeedsType(false);
        }
      } else {
        setGeneralInfos({...generalInfos, [name]: value});
      }
    }

    const randomFirstName = () => {
        const randomIndex = Math.floor(Math.random() * FIRSTNAMES.length);
        setGeneralInfos({...generalInfos, firstname: FIRSTNAMES[randomIndex]});
    }

    const randomLastName = () => {
        const randomIndex = Math.floor(Math.random() * LASTNAMES.length);
        setGeneralInfos({...generalInfos, lastname: LASTNAMES[randomIndex]});
    }

    const randomGender = () => {
        const randomIndex = Math.floor(Math.random() * GENDERS.length);
        setGeneralInfos({...generalInfos, gender: GENDERS[randomIndex]});
    }

    const randomSexuality = () => {
        const randomIndex = Math.floor(Math.random() * SEXUALITIES.length);
        setGeneralInfos({...generalInfos, sexuality: SEXUALITIES[randomIndex]});
    }

    const randomChildren = () => {
        const hasChildren = Math.random() > 0.5;
        if (hasChildren) {
          const randomIndex = Math.floor(Math.random() * children.length);
          setGeneralInfos({...generalInfos, children: children[randomIndex]});
        } else {
          setGeneralInfos({...generalInfos, children: 1-1});
        }
    }

    const randomRace = () => {
        const randomIndex = Math.floor(Math.random() * RACES.length);
        const race = RACES[randomIndex];
        setRace(race);
        setGeneralInfos({...generalInfos, race: race});
        if (race && (RACES_NEED_TYPE as unknown as string[]).includes(race)) {
            if (race === "Lutin") {
                if (gender === "Femme") setTypesList([...TYPES_FOR_LUTINS_FEMALES]);
                else setTypesList([...TYPES_FOR_LUTINS_MALES]);
            }
            else if (race === "Demi-Divinité") setTypesList([...TYPES_FOR_HALFLINGS]);
            else setTypesList([...sortedAnimals]);
            setNeedsType(true);
        } else {
            const generalInfosWithoutType = { ...generalInfos, race: race};
            delete generalInfosWithoutType.type;
            setGeneralInfos(generalInfosWithoutType);
            setTypesList([]);
            setNeedsType(false);
        }
    }

    const randomType = () => {
        const randomIndex = Math.floor(Math.random() * typesList.length);
        setGeneralInfos({...generalInfos, type: typesList[randomIndex]});
    }

    const randomOrigin = () => {
        const randomIndex = Math.floor(Math.random() * ORIGINS.length);
        setGeneralInfos({...generalInfos, origin: ORIGINS[randomIndex]});
    }

    const randomSocialStatus = () => {
        const randomIndex = Math.floor(Math.random() * SOCIAL_STATUSES.length);
        setGeneralInfos({...generalInfos, socialStatus: SOCIAL_STATUSES[randomIndex]});
    }

    const randomFamilySituation = () => {
        const randomIndex = Math.floor(Math.random() * FAMILY_SITUATIONS.length);
        setGeneralInfos({...generalInfos, familySituation: FAMILY_SITUATIONS[randomIndex]});
    }

    const randomClass = () => {
        const randomIndex = Math.floor(Math.random() * CHARACTER_CLASSES.length);
        setGeneralInfos({...generalInfos, class: CHARACTER_CLASSES[randomIndex]});
    }

    const randomHeight = () => {
        const randomHeight = defineHeight(generalInfos.race, generalInfos.gender)
        setGeneralInfos({...generalInfos, height: randomHeight});
    }

    const randomWeight = () => {
        const randomWeight = defineWeight(race, gender)
        setGeneralInfos({...generalInfos, weight: randomWeight});
    }

    const randomEyesColor = () => {
        const eyesColor = colors[Math.floor(Math.random() * colors.length)];
        setGeneralInfos({...generalInfos, eyesColor: eyesColor});
    }

    const randomHairColor = () => {
        const hairColor = colors[Math.floor(Math.random() * colors.length)];
        setGeneralInfos({...generalInfos, hairColor: hairColor});
    }

    const randomAll = () => {
        const firstname = FIRSTNAMES[Math.floor(Math.random() * FIRSTNAMES.length)];
        const lastname = LASTNAMES[Math.floor(Math.random() * LASTNAMES.length)];
        const randomGender = GENDERS[Math.floor(Math.random() * GENDERS.length)];
        const sexuality = SEXUALITIES[Math.floor(Math.random() * SEXUALITIES.length)];
        const hasChildren = Math.random() > 0.5;
        let randomChildren = 1-1;
        if (hasChildren) randomChildren = Math.floor(Math.random() * children.length);
        const randomRace = RACES[Math.floor(Math.random() * RACES.length)];
        const origin = ORIGINS[Math.floor(Math.random() * ORIGINS.length)];
        const socialStatus = SOCIAL_STATUSES[Math.floor(Math.random() * SOCIAL_STATUSES.length)];
        const familySituation = FAMILY_SITUATIONS[Math.floor(Math.random() * FAMILY_SITUATIONS.length)];
        const randomClass = CHARACTER_CLASSES[Math.floor(Math.random() * CHARACTER_CLASSES.length)];
        const height = defineHeight(randomRace, randomGender);
        const weight = defineWeight(randomRace, randomGender);
        const eyesColor = colors[Math.floor(Math.random() * colors.length)];
        const hairColor = colors[Math.floor(Math.random() * colors.length)];
        let randomType = '';
        if (RACES_NEED_TYPE.includes(randomRace as any)) {
          setNeedsType(true);
          if (randomRace === "Lutin") {
            if (randomGender === "Femme") {
              setTypesList([...TYPES_FOR_LUTINS_FEMALES]);
              randomType = TYPES_FOR_LUTINS_FEMALES[Math.floor(Math.random() * TYPES_FOR_LUTINS_FEMALES.length)];
            } else {
              setTypesList([...TYPES_FOR_LUTINS_MALES]);
              randomType = TYPES_FOR_LUTINS_MALES[Math.floor(Math.random() * TYPES_FOR_LUTINS_MALES.length)];
            }
          } else if (randomRace === "Demi-Divinité") {
              setTypesList([...TYPES_FOR_HALFLINGS]);
              randomType = TYPES_FOR_HALFLINGS[Math.floor(Math.random() * TYPES_FOR_HALFLINGS.length)];
          } else {
              setTypesList([...sortedAnimals]);
              randomType = sortedAnimals[Math.floor(Math.random() * sortedAnimals.length)];
          }
        } else {
          setNeedsType(false);
        }
        setGeneralInfos({
          firstname,
          lastname,
          gender: randomGender,
          sexuality,
          children: randomChildren,
          race: randomRace,
          origin,
          socialStatus,
          familySituation,
          class: randomClass,
          height,
          weight,
          eyesColor,
          hairColor,
          type: randomType,
        });
    }

    const save = async () => {
        console.log(generalInfos);
        
        if (props.edit) {
            const hrefId = window.location.href.split('/')[4];
            const updatedCharacter = await updateCharacter(hrefId, generalInfos);
            if (!updatedCharacter) {
                props.setAlertMessage('Erreur lors de la mise à jour du personnage');
                props.setAlertSeverity('error');
                return showAlertFunction(props.setShowAlert);
            }
            props.setGeneralInfosDone(true);
            props.setAlertMessage('Personnage mis à jour');
            props.setAlertSeverity('success');
            showAlertFunction(props.setShowAlert);
        } else if (!generalInfos.firstname) {
            props.setAlertMessage('Le prénom est obligatoire');
            props.setAlertSeverity('warning');
            showAlertFunction(props.setShowAlert);
        } else {        
          const createdCharacter = await createCharacter(generalInfos);
          if (!createdCharacter) {
              props.setAlertMessage('Erreur lors de la création du personnage');
              props.setAlertSeverity('error');
              return showAlertFunction(props.setShowAlert);
          }
          props.setGeneralInfosDone(true);
          if (createdCharacter._id) navigate('/character/' + createdCharacter._id + '/edit');
          props.setAlertMessage('Personnage créé');
          props.setAlertSeverity('success');
          showAlertFunction(props.setShowAlert);
        }
    }

    const inputsList = [
      {name: "firstname", placeholder: "Prénom*", onChange: changeValue, value: generalInfos.firstname || '', startDecorator: <CasinoIcon onClick={randomFirstName} />},
      {name: "lastname", placeholder: "Nom", onChange: changeValue, value: generalInfos.lastname || '', startDecorator: <CasinoIcon onClick={randomLastName} />},
      {name: "nickname", placeholder: "Surnom", onChange: changeValue, value: generalInfos.nickname || ''},
      {name: "height", placeholder: "Taille (en cm)", type: "number", onChange: changeValue, value: generalInfos.height || '', startDecorator: <CasinoIcon onClick={randomHeight} />},
      {name: "weight", placeholder: "Poids (en kg)", type: "number", onChange: changeValue, value: generalInfos.weight || '', startDecorator: <CasinoIcon onClick={randomWeight} />},
      {name: "eyesColor", placeholder: "Couleur des Yeux", onChange: changeValue, value: generalInfos.eyesColor || '', startDecorator: <CasinoIcon onClick={randomEyesColor} />},
      {name: "hairColor", placeholder: "Couleur des Cheveux", onChange: changeValue, value: generalInfos.hairColor || '', startDecorator: <CasinoIcon onClick={randomHairColor} />},
    ];

    const defineSelectsList = () => setSelectsList([
        {name: "gender", placeholder: "Genre", onChange: changeSelect, value: generalInfos.gender || gender || 'Genre', startDecorator: <CasinoIcon onClick={randomGender} />, options: GENDERS},
        {name: "sexuality", placeholder: "Sexualité", onChange: changeSelect, value: generalInfos.sexuality || 'Sexualité', startDecorator: <CasinoIcon onClick={randomSexuality} />, options: SEXUALITIES},
        {name: "children", placeholder: "Nombre d'Enfants", onChange: changeSelect, value: generalInfos.children?.toString() || "Nombre d'Enfants", startDecorator: <CasinoIcon onClick={randomChildren} />, options: children},
        {name: "familySituation", placeholder: "Situation Familiale", onChange: changeSelect, value: generalInfos.familySituation || 'Situation Familiale', startDecorator: <CasinoIcon onClick={randomFamilySituation} />, options: FAMILY_SITUATIONS},
        {name: "race", placeholder: "Race", onChange: changeSelect, value: generalInfos.race || 'Race', startDecorator: <CasinoIcon onClick={randomRace} />, options: RACES},
        {name: "type", placeholder: "Type", onChange: changeSelect, value: generalInfos.type || 'Type', startDecorator: <CasinoIcon onClick={randomType} />, disabled: !needsType, options: typesList},
        {name: "origin", placeholder: "Origine", onChange: changeSelect, value: generalInfos.origin || 'Origine', startDecorator: <CasinoIcon onClick={randomOrigin} />, options: ORIGINS},
        {name: "socialStatus", placeholder: "Statut Social", onChange: changeSelect, value: generalInfos.socialStatus || 'Statut Social', startDecorator: <CasinoIcon onClick={randomSocialStatus} />, options: SOCIAL_STATUSES},
        {name: "class", placeholder: "Classe", onChange: changeSelect, value: generalInfos.class || 'Classe', startDecorator: <CasinoIcon onClick={randomClass} />, options: CHARACTER_CLASSES},
    ]);
    
  const content = (
    <Box sx={{ position: 'relative' }}>
            <Stack spacing={2} direction={{sm: "column", md: "row"}} justifyContent="space-around">
                <CharacterProfile avatar={avatar} setOpen={setOpen} inputsList={inputsList} />
                <Divider orientation="vertical" sx={{ display: "flex", opacity: {sm: 0, md: 1} }} />
                <Choices selectsList={selectsList} />
            </Stack>
            <BasicModal open={open} setOpen={setOpen} generalInfos={generalInfos} setGeneralInfos={setGeneralInfos} />

            {/* {showAlert && <AlertMessage severity="success" message="Personnage mis à jour" onClose={closeAlert} />} */}
        </Box>
  );

  return (
    <CreateCharacterCard save={save} title="Informations Générales" buttonText="Enregistrer les informations générales" content={content} randomAll={randomAll} />
  )
}