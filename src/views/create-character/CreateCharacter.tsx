import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { getCharacterById } from '../../api/Characters';
import AlertMessage from '../../components/alerts/AlertMessage';
import { Character } from '../../types/Character.type';
import GeneralInfos from './general-infos/GeneraInfos';
import Stats from './stats/Stats';
import { showAlertFunction } from '../../helpers/show-alert';
import Talents from './talents/Talents';
import Skills from './skills/Skills';
import Languages from './languages/Languages';

export default function CreateCharacter() {
    const hrefId = window.location.href.split('/')[5];
    const [edit, setEdit] = React.useState(false);
    const [showAlert, setShowAlert] = React.useState(false);
    const [alertMessage, setAlertMessage] = React.useState('' as string);
    const [alertSeverity, setAlertSeverity] = React.useState('' as string);
    const [activeStep, setActiveStep] = React.useState(Number(localStorage.getItem('step')) | 0);
    const [generalInfos, setGeneralInfos] = React.useState({} as Character);
    const [mainStats, setMainStats] = React.useState({} as Character['mainStats']);
    const [secondaryStats, setSecondaryStats] = React.useState({} as Character['secondaryStats']);
    const [talent, setTalent] = React.useState({ name: '', skills: [] } as unknown as Character['talent']);
    const [weakness, setWeakness] = React.useState({} as Character['weakness']);
    const [special, setSpecial] = React.useState([] as Character['special']);
    const [skills, setSkills] = React.useState({} as Character['skills']);

    const steps = [
        { 
            id: 1,
            label: 'Informations Générales',
            component: <GeneralInfos
                generalInfos={generalInfos}
                setGeneralInfos={setGeneralInfos}
                edit={edit}
                setShowAlert={setShowAlert}
                setAlertMessage={setAlertMessage}
                setAlertSeverity={setAlertSeverity}
            />
        },
        {
            id: 2,
            label: 'Statistiques',
            component: <Stats
                className={generalInfos.class}
                mainStats={mainStats}
                setMainStats={setMainStats}
                secondaryStats={secondaryStats}
                setSecondaryStats={setSecondaryStats}
            />
        },
        { 
            id: 3,
            label: 'Talents',
            component: <Talents
                talent={talent}
                setTalent={setTalent}
                weakness={weakness}
                setWeakness={setWeakness}
                special={special}
                setSpecial={setSpecial}
            />
        },
        {
            id: 4,
            label: 'Compétences',
            component: <Skills
                skills={skills}
                setSkills={setSkills}
            />
        },
        {
            id: 5,
            label: 'Langages',
            component: <Languages />
        },
        {
            id: 6,
            label: 'Personalité',
            component: <Typography variant="h1">Personalité</Typography>
        },
        {
            id: 7,
            label: 'Inventaire',
            component: <Typography variant="h1">Inventaire</Typography>
        },
    ]

    React.useMemo(async () => {
        if (hrefId) {
            const character = await getCharacterById(hrefId);
            setGeneralInfos(character);
            setMainStats(character.mainStats);
            setSecondaryStats(character.secondaryStats);
            setTalent(character.talent);
            setWeakness(character.weakness);
            setSpecial(character.special);
            setSkills(character.skills);
            setEdit(true);
        }
    }, [hrefId])

    React.useEffect(() => {
        const unloadCallback = () => {
            localStorage.removeItem('step');
        };
    
        window.addEventListener("beforeunload", unloadCallback);
    
        return () => {
            window.removeEventListener("beforeunload", unloadCallback);
        };
    
      }, []);

    function closeAlert() {
        setShowAlert(false);
    }

    const getStepContent = (step: number) => {
        return steps[step].component;
    }

    const handleNext = () => {
        if (activeStep === 0 && !hrefId) {
            setAlertMessage('Veuillez enregistrer les informations générales avant de passer à l\'étape suivante');
            setAlertSeverity('warning');
            showAlertFunction(setShowAlert);
        } else if (activeStep + 1 === steps.length) {
            console.log('Finish');
            // don't forget to remove step from localstorage
            // localStorage.removeItem('step');
        } else {
            localStorage.setItem('step', JSON.stringify(activeStep + 1));
            setActiveStep(activeStep + 1);
        }
    };

    const handleBack = () => {
        localStorage.setItem('step', JSON.stringify(activeStep - 1));
        setActiveStep(activeStep - 1);
    };

    return (
        <main>
            <React.Fragment>
                <CssBaseline />
                <Paper variant="outlined" sx={{  p: { xs: 2, md: 3 }, m: { xs: 0, md: "0 40px"} }}>
                    <Typography component="h1" variant="h4" align="center">
                        {edit ? "Edition de personnage" : "Création de personnage"}
                    </Typography>
                    <Stepper activeStep={activeStep} sx={{ display: {xs: 'none', md: 'flex'}, pt: 3, pb: 5 }}>
                        {steps.map((step, index) => (
                        <Step key={index}>
                            <StepLabel>{step.label}</StepLabel>
                        </Step>
                        ))}
                    </Stepper>
                    <Typography align="center" sx={{ display: {xs: 'block', md: "none"}, pt: 3, pb: 5, fontSize: '1.5em' }}>
                        Etape {steps[activeStep].id}/7
                    </Typography>
                        <React.Fragment>
                            {getStepContent(activeStep)}
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                {activeStep !== 0 && (
                                <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }} color="inherit">
                                    Précédent
                                </Button>
                                )}
                                <Button
                                variant="contained"
                                color="inherit"
                                onClick={handleNext}
                                sx={{ mt: 3, ml: 1 }}
                                >
                                {activeStep === steps.length - 1 ? 'Valider le personnage' : 'Suivant'}
                                </Button>
                            </Box>
                        </React.Fragment>
                    </Paper>
                    {showAlert && <AlertMessage severity={alertSeverity} message={alertMessage} onClose={closeAlert} />}
            </React.Fragment>
        </main>
    );
}