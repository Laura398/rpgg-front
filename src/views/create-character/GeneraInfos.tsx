import CasinoIcon from '@mui/icons-material/Casino';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import { Avatar, IconButton } from '@mui/joy';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';
import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createCharacter, updateCharacter } from '../../api/Characters';
import CreateCharacterCard from '../../components/CreateCharacterCard';
import Selector from '../../components/Selector';
import BasicModal from '../../components/modals/Modal';
import { getAvatar } from '../../helpers/get-avatar';
import { ANIMALS } from '../../types/Character.animals.constant';
import { FIRSTNAMES, LASTNAMES } from '../../types/Character.names.constants';
import { Character } from '../../types/Character.type';
import { CHARACTER_CLASSES, FAMILY_SITUATIONS, GENDERS, ORIGINS, RACES, RACES_NEED_TYPE, SEXUALITIES, SOCIAL_STATUSES, TYPES_FOR_HALFLINGS, TYPES_FOR_LUTINS_FEMALES, TYPES_FOR_LUTINS_MALES } from '../../types/Characters.constants';
import { ShoAlertFunction } from '../../helpers/show-alert';

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

export default function GeneralInfos(props: { generalInfos: Character , setGeneralInfos: (generalInfos: Character) => void, edit: boolean, setShowAlert: (showAlert: boolean) => void, setAlertMessage: (alertMessage: string) => void, setAlertSeverity: (alertSeverity: string) => void}) {
    const navigate = useNavigate();
    const { generalInfos, setGeneralInfos } = props;
    const [open, setOpen] = useState<boolean>(false);
    const [needsType, setNeedsType] = useState(false);
    const [typesList, setTypesList] = useState([] as string[]);
    const [gender, setGender] = useState<string>(generalInfos.gender || 'Genre');
    const [race, setRace] = useState<string>(generalInfos.race || 'Race');
    const [avatar, setAvatar] = useState<string>("/static/images/avatar/1.jpg");
    const sortedAnimals = Array.from(ANIMALS).sort();

    useMemo(async() => {
        if (generalInfos.avatar) {
          const avatarUrl = await getAvatar(generalInfos.avatar);
          if (avatarUrl) setAvatar(avatarUrl);
        }
    }, [generalInfos, setGeneralInfos, generalInfos.avatar]);

    const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
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

    const save = async () => {
        if (props.edit) {
            const hrefId = window.location.href.split('/')[5];
            const updatedCharacter = await updateCharacter(hrefId, generalInfos);
            if (!updatedCharacter) {
                props.setAlertMessage('Erreur lors de la mise à jour du personnage');
                props.setAlertSeverity('error');
                return ShoAlertFunction(props.setShowAlert);
            }
            props.setAlertMessage('Personnage mis à jour');
            props.setAlertSeverity('success');
            ShoAlertFunction(props.setShowAlert);
        } else if (!generalInfos.firstname) {
            props.setAlertMessage('Le prénom est obligatoire');
            props.setAlertSeverity('warning');
            ShoAlertFunction(props.setShowAlert);
        } else {
          console.log(generalInfos);
        
          const createdCharacter = await createCharacter(generalInfos);
          console.log(createdCharacter);
          if (!createdCharacter) {
              props.setAlertMessage('Erreur lors de la création du personnage');
              props.setAlertSeverity('error');
              return ShoAlertFunction(props.setShowAlert);
          }
          if (createdCharacter._id) navigate('/character/edit/' + createdCharacter._id);
          props.setAlertMessage('Personnage créé');
          props.setAlertSeverity('success');
          ShoAlertFunction(props.setShowAlert);
        }
    }
    
  const content = (
    <Box sx={{ position: 'relative' }}>
          <AspectRatio
                ratio="1"
                maxHeight={200}
                sx={{ width: 200, borderRadius: '100%', margin: 'auto' }}
              >
                <Avatar src={avatar} sx={{ '--Avatar-size': '200px' }} />
              </AspectRatio>
              <IconButton
                aria-label="upload new picture"
                size="sm"
                variant="outlined"
                color="neutral"
                sx={{
                  bgcolor: 'background.body',
                  position: 'absolute',
                  zIndex: 2,
                  borderRadius: '50%',
                  left: '52%',
                  top: 175,
                  boxShadow: 'sm',
                }}
                onClick={() => setOpen(true)}
              >
                <EditRoundedIcon />
              </IconButton>
          <Stack
            width={{ xs: '100%', md: '80%'}}
            direction="row"
            spacing={0}
            sx={{ display: { xs: 'block', md: 'flex' }, my: 1 }}
          >
            <Stack width="70vw" spacing={1} sx={{ flexGrow: 1 }}>
              <Stack spacing={1}>
                <Stack
                    gap="2"
                    direction={{ xs: 'column', md: 'row' }}
                    sx={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <Input
                    size='sm'
                    name="firstname"
                    placeholder="Prénom*"
                    sx={{ margin: "10px", flexGrow: 1 }}
                    onChange={changeValue} value={generalInfos.firstname || ''}
                    endDecorator={<CasinoIcon onClick={randomFirstName} />}
                  />
                  <Input
                    size='sm'
                    name="lastname"
                    placeholder="Nom"
                    sx={{ margin: "10px", flexGrow: 1 }}
                    onChange={changeValue} value={generalInfos.lastname || ''}
                    endDecorator={<CasinoIcon onClick={randomLastName} />}
                  />
                  <Input
                    size='sm'
                    name="nickname"
                    placeholder="Surnom"
                    sx={{ margin: "10px", flexGrow: 2 }}
                    onChange={changeValue}
                    value={generalInfos.nickname || ''} />
                </Stack>
              </Stack>
              <Stack
                    gap="2"
                    direction={{ xs: 'column', md: 'row' }}
                    sx={{ display: 'flex', justifyContent: 'space-between' }}
              >
                    <Selector
                      name="gender"
                      title='Gender'
                      list={Array.from(GENDERS)}
                      value={generalInfos.gender || gender || 'Genre'}
                      action={changeSelect}
                      random={randomGender}
                    />
                    <Selector
                      name="sexuality"
                      title='Sexualité'
                      list={Array.from(SEXUALITIES)}
                      value={generalInfos.sexuality || 'Sexualité'}
                      action={changeSelect}
                      random={randomSexuality}
                    />
                    <Selector
                      name="children"
                      title="Nombre d'Enfants"
                      list={Array.from(children)}
                      value={generalInfos.children?.toString() || "Nombre d'Enfants"}
                      action={changeSelect}
                      random={randomChildren}
                    />
                    <Selector
                      name="familySituation"
                      title='Situation Familiale'
                      list={Array.from(FAMILY_SITUATIONS)}
                      value={generalInfos.familySituation || 'Situation Familiale'}
                      action={changeSelect}
                      random={randomFamilySituation}
                    />
                </Stack>
              <Stack
                    gap="2"
                    direction={{ xs: 'column', md: 'row' }}
                    sx={{ display: 'flex', justifyContent: 'left' }}
              >
                    <Selector
                      name="race"
                      title='Race'
                      list={Array.from(RACES)}
                      value={generalInfos.race || race || 'Race'}
                      action={changeSelect}
                      random={randomRace}
                    />
                    {needsType &&
                      <Selector
                        name="type"
                        title='Type'
                        list={Array.from(typesList)}
                        value={generalInfos.type || 'Type'}
                        action={changeSelect}
                        random={randomType}
                      />
                    }
                </Stack>
                <Stack
                     gap="2"
                     direction={{ xs: 'column', md: 'row' }}
                     sx={{ display: 'flex', justifyContent: 'space-between' }}
                >
                    <Selector
                      name="origin"
                      title='Origine'
                      list={Array.from(ORIGINS)} value={generalInfos.origin || 'Origine'}
                      action={changeSelect}
                      random={randomOrigin}
                    />
                    <Selector
                      name="socialStatus"
                      title='Statut Social'
                      list={Array.from(SOCIAL_STATUSES)}
                      value={generalInfos.socialStatus || 'Statut Social'}
                      action={changeSelect}
                      random={randomSocialStatus}
                    />
                    <Selector
                      name="class"
                      title='Classe'
                      list={Array.from(CHARACTER_CLASSES)}
                      value={generalInfos.class || 'Classe'}
                      action={changeSelect}
                      random={randomClass}
                    />
                </Stack>
                <Stack
                   gap="2"
                   direction={{ xs: 'column', md: 'row' }}
                   sx={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <Input
                    size='sm'
                    name="height"
                    type="number"
                    placeholder="Taille (en cm)"
                    sx={{ margin: "10px", flexGrow: 1 }}
                    onChange={changeValue}
                    value={generalInfos.height || ''}
                    onKeyDown={(e) =>["e", "E", "+", "-"].includes(e.key) && e.preventDefault()}
                    endDecorator={<CasinoIcon onClick={randomHeight} />}
                  />
                  <Input
                    size='sm'
                    name="weight"
                    type="number"
                    placeholder="Poids (en kg)"
                    sx={{ margin: "10px", flexGrow: 1 }}
                    onChange={changeValue}
                    value={generalInfos.weight || ''}
                    onKeyDown={(e) =>["e", "E", "+", "-"].includes(e.key) && e.preventDefault()}
                    endDecorator={<CasinoIcon onClick={randomWeight} />}
                  />
                  <Input
                    size='sm'
                    name="eyesColor"
                    placeholder="Couleur des yeux"
                    sx={{ margin: "10px", flexGrow: 1 }}
                    onChange={changeValue}
                    value={generalInfos.eyesColor || ''}
                    endDecorator={<CasinoIcon onClick={randomEyesColor} />}
                  />
                  <Input
                    size='sm'
                    name="hairColor"
                    placeholder="Couleur des cheveux"
                    sx={{ margin: "10px", flexGrow: 1 }}
                    onChange={changeValue}
                    value={generalInfos.hairColor || ''}
                    endDecorator={<CasinoIcon onClick={randomHairColor} />}
                  />
                </Stack>
            </Stack>
          </Stack>
          <BasicModal open={open} setOpen={setOpen} generalInfos={generalInfos} setGeneralInfos={setGeneralInfos} />
    </Box>
  );

  return (
    <CreateCharacterCard save={save} title="Informations Générales" buttonText="Enregistrer les informations générales" content={content} />
  )
}