import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';


import { Avatar } from '@mui/joy';
import { useState } from 'react';
import Selector from '../../../components/Selector';
import { ANIMALS } from '../../../types/Character.animals.constant';
import { Character } from '../../../types/Character.type';
import { FAMILY_SITUATIONS, GENDERS, ORIGINS, RACES, RACES_NEED_TYPE, SEXUALITIES, SOCIAL_STATUSES, TYPES_FOR_HALFLINGS, TYPES_FOR_LUTINS_FEMALES, TYPES_FOR_LUTINS_MALES } from '../../../types/Characters.constants';
import AlertMessage from '../../../components/alerts/AlertMessage';

const children = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function GeneralInfos(props: { generalInfos: Character , setGeneralInfos: any }) {
    const { generalInfos, setGeneralInfos } = props;
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertSeverity, setAlertSeverity] = useState('');
    const [needsType, setNeedsType] = useState(false);
    const [typesList, setTypesList] = useState([] as string[]);
    const [gender, setGender] = useState<string>(generalInfos.gender || 'Genre');
    const [race, setRace] = useState<string>(generalInfos.race || 'Race');
    const sortedAnimals = Array.from(ANIMALS).sort();

    function closeAlert() {
        setShowAlert(false);
    }

    const changeFirstname = (e: React.ChangeEvent<HTMLInputElement>) => {
        setGeneralInfos({...generalInfos, firstname: e.target.value});
    }

    const changeLastname = (e: React.ChangeEvent<HTMLInputElement>) => {
        setGeneralInfos({...generalInfos, lastname: e.target.value});
    }

    const changeNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
        setGeneralInfos({...generalInfos, nickname: e.target.value});
    }

    const changeGender = (gender: string) => {
        setNeedsType(false);
        const generalInfosWithoutType = { ...generalInfos };
        delete generalInfosWithoutType.type;
        setGender(gender);
        setGeneralInfos({ ...generalInfosWithoutType, gender: gender });
        if (race && (RACES_NEED_TYPE as unknown as string[]).includes(race)) {
            if (race === "Lutin") {
                if (gender === "Femme") setTypesList([...TYPES_FOR_LUTINS_FEMALES]);
                else setTypesList([...TYPES_FOR_LUTINS_MALES]);
            }
            else if (race === "Demi-Divinité") setTypesList([...TYPES_FOR_HALFLINGS]);
            else setTypesList([...sortedAnimals]);
            setNeedsType(true);
        }
    }

    const changeSexuality = (sexuality: string) => {
        setGeneralInfos({...generalInfos, sexuality: sexuality});
    }

    const changeChildren = (children: number) => {
        setGeneralInfos({...generalInfos, children: +children});
    }

    const changeFamSit = (famSit: string) => {
        setGeneralInfos({...generalInfos, familySituation: famSit});
    }

    const changeRace = (race: string) => { 
        setRace(race);
        setGeneralInfos({...generalInfos, type: undefined, race: race});
        if (race && (RACES_NEED_TYPE as unknown as string[]).includes(race)) {
            if (race === "Lutin") {
                if (gender === "Femme") setTypesList([...TYPES_FOR_LUTINS_FEMALES]);
                else setTypesList([...TYPES_FOR_LUTINS_MALES]);
            }
            else if (race === "Demi-Divinité") setTypesList([...TYPES_FOR_HALFLINGS]);
            else setTypesList([...sortedAnimals]);
            setNeedsType(true);
        } else {
            const generalInfosWithoutType = { ...generalInfos };
            delete generalInfosWithoutType.type;
            setGeneralInfos(generalInfosWithoutType);
            setNeedsType(false);
        }
    }

    const changeType = (type: string) => {
        setGeneralInfos({...generalInfos, type: type});        
    }

    const changeOrigin = (origin: string) => {
        setGeneralInfos({...generalInfos, origin: origin});
    }

    const changeSocialStatus = (socialStatus: string) => {
        setGeneralInfos({...generalInfos, socialStatus: socialStatus});
    }

    const changeHeight = (e: React.ChangeEvent<HTMLInputElement>) => {
        setGeneralInfos({...generalInfos, height: +e.target.value});
    }

    const changeWeight = (e: React.ChangeEvent<HTMLInputElement>) => {
        setGeneralInfos({...generalInfos, weight: +e.target.value});
    }

    const deleteAll = () => {
        setGeneralInfos({});
    }

    const save = () => {
        if (!generalInfos.firstname) {
            setAlertMessage('Le prénom est obligatoire');
            setAlertSeverity('warning');
            return setShowAlert(true);
        }
        console.log(generalInfos);
        setAlertMessage('Informations Générales enregistrées');
        setAlertSeverity('success');
        setShowAlert(true);
    }
    

  return (
    <Box sx={{ flex: 1, width: '100%', overflow: 'auto' }}>
      <Stack
        spacing={4}
        sx={{
          display: 'flex',
          maxWidth: { xs: '100vw', md: '80vw' },
          mx: 'auto',
          px: { xs: 2, md: 6 },
          py: { xs: 2, md: 3 },
        }}
      >
        <Card>
          <Box sx={{ mb: 1 }}>
            <Typography level="title-md">Informations Générales</Typography>
          </Box>
          <Divider />
          <AspectRatio
                ratio="1"
                maxHeight={200}
                sx={{ minWidth: 120, maxWidth: 200, borderRadius: '100%', margin: 'auto' }}
              >
                <Avatar src="/static/images/avatar/1.jpg" sx={{ '--Avatar-size': '120px' }} />
              </AspectRatio>
          <Stack
            direction="row"
            spacing={3}
            sx={{ display: { xs: 'none', md: 'flex' }, my: 1 }}
          >
            <Stack direction="column" spacing={1}>
              {/* <IconButton
                aria-label="upload new picture"
                size="sm"
                variant="outlined"
                color="neutral"
                sx={{
                  bgcolor: 'background.body',
                  position: 'absolute',
                  zIndex: 2,
                  borderRadius: '50%',
                  left: 100,
                  top: 170,
                  boxShadow: 'sm',
                }}
              >
                <EditRoundedIcon />
              </IconButton> */}
            </Stack>
            <Stack spacing={2} sx={{ flexGrow: 1 }}>
              <Stack spacing={1}>
                {/* <FormLabel sx={{paddingLeft: "10px"}}>Nom</FormLabel> */}
                <Stack
                    gap="2"
                    direction={{ xs: 'column', md: 'row' }}
                    sx={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <Input size="sm" placeholder="Prénom*" sx={{ flexGrow: 1, margin: "10px" }} onChange={changeFirstname} value={generalInfos.firstname || ''} />
                  <Input size="sm" placeholder="Nom" sx={{ flexGrow: 1, margin: "10px" }} onChange={changeLastname} value={generalInfos.lastname || ''} />
                  <Input size="sm" placeholder="Surnom" sx={{ flexGrow: 3, margin: "10px" }} onChange={changeNickname} value={generalInfos.nickname || ''} />
                </Stack>
              </Stack>
              <Stack direction="row" spacing={2}>
                    <Selector title='Gender' list={Array.from(GENDERS)} value={generalInfos.gender || gender || 'Genre'} action={changeGender} />
                    <Selector title='Sexualité' list={Array.from(SEXUALITIES)} value={generalInfos.sexuality || 'Sexualité'} action={changeSexuality} />
                    <Selector title="Nombre d'Enfants" list={Array.from(children)} value={generalInfos.children || "Nombre d'Enfants"} action={changeChildren} />
                    <Selector title='Situation Familiale' list={Array.from(FAMILY_SITUATIONS)} value={generalInfos.familySituation || 'Situation Familiale'} action={changeFamSit} />
                </Stack>
              <Stack direction="row" spacing={2}>
                    <Selector title='Race' list={Array.from(RACES)} value={generalInfos.race || race || 'Race'} action={changeRace} />
                    {needsType && <Selector title='Type' list={Array.from(typesList)} value={generalInfos.type || 'Type'} action={changeType}/>}
                </Stack>
                <Stack direction="row" spacing={2}>
                    <Selector title='Origine' list={Array.from(ORIGINS)} value={generalInfos.origin || 'Origine'} action={changeOrigin} />
                    <Selector title='Statut Social' list={Array.from(SOCIAL_STATUSES)} value={generalInfos.socialStatus || 'Statut Social'} action={changeSocialStatus} />
                </Stack>
                <Stack direction="row" spacing={2}>
                    <Input type="number" size="sm" placeholder="Taille" sx={{ flexGrow: 1, margin: "10px" }} onChange={changeHeight} value={generalInfos.height || 'Taille'} />
                    <Input type="number" size="sm" placeholder="Poids" sx={{ flexGrow: 1, margin: "10px" }} onChange={changeWeight} value={generalInfos.weight || 'Poids'} />
                </Stack>
            </Stack>
          </Stack>
          <CardOverflow sx={{ borderTop: '1px solid', borderColor: 'divider' }}>
            <CardActions sx={{ alignSelf: 'flex-end', pt: 2 }}>
              <Button size="sm" variant="outlined" color="neutral" onClick={deleteAll}>
                Cancel
              </Button>
              <Button size="sm" variant="solid" onClick={save}>
                Save
              </Button>
            </CardActions>
          </CardOverflow>
        </Card>
      </Stack>
      {showAlert && <AlertMessage severity={alertSeverity} message={alertMessage} onClose={closeAlert} />}
    </Box>
  );
}