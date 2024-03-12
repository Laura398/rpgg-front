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
import { showAlertFunction } from '../../helpers/show-alert';
import { Character } from '../../types/Character.type';
import GeneralInfos from './general-infos/GeneraInfos';
import Inventory from './inventory/Inventory';
import Languages from './languages/Languages';
import Personality from './personality/Personality';
import Skills from './skills/Skills';
import Stats from './stats/Stats';
import Talents from './talents/Talents';

export default function CreateCharacter() {
    const hrefId = window.location.href.split('/')[4];
    const [edit, setEdit] = React.useState(false);
    const [showAlert, setShowAlert] = React.useState(false);
    const [alertMessage, setAlertMessage] = React.useState('' as string);
    const [alertSeverity, setAlertSeverity] = React.useState('' as string);
    const [activeStep, setActiveStep] = React.useState(Number(localStorage.getItem('step')) | 0);

    const [characterData, setCharacterData] = React.useState({} as Character);
    const [mainStats, setMainStats] = React.useState({} as Character['mainStats']);
    const [secondaryStats, setSecondaryStats] = React.useState({} as Character['secondaryStats']);
    const [talent, setTalent] = React.useState({ name: '', skills: [] } as unknown as Character['talent']);
    const [weakness, setWeakness] = React.useState({} as Character['weakness']);
    const [special, setSpecial] = React.useState([] as Character['special']);
    const [skills, setSkills] = React.useState({} as Character['skills']);
    const [languages, setLanguages] = React.useState({} as Character['languages']);

    const [generalInfosDone, setGeneralInfosDone] = React.useState(false);
    const [statsDone, setStatsDone] = React.useState(false);
    const [talentsDone, setTalentsDone] = React.useState(false);
    const [skillsDone, setSkillsDone] = React.useState(false);
    const [languagesDone, setLanguagesDone] = React.useState(false);
    const [personalityDone, setPersonalityDone] = React.useState(false);
    const [inventoryDone, setInventoryDone] = React.useState(false);
    // const [equipmentsDone, setEquipmentsDone] = React.useState(false);

    const steps = [
        { 
            id: 1,
            label: 'Informations Générales',
            component: <GeneralInfos
                generalInfos={characterData}
                setGeneralInfos={setCharacterData}
                edit={edit}
                setShowAlert={setShowAlert}
                setAlertMessage={setAlertMessage}
                setAlertSeverity={setAlertSeverity}
                setGeneralInfosDone={setGeneralInfosDone}
            />
        },
        {
            id: 2,
            label: 'Statistiques',
            component: <Stats
                className={characterData.class}
                mainStats={mainStats}
                setMainStats={setMainStats}
                secondaryStats={secondaryStats}
                setSecondaryStats={setSecondaryStats}
                setStatsDone={setStatsDone}
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
                setTalentsDone={setTalentsDone}
            />
        },
        {
            id: 4,
            label: 'Compétences',
            component: <Skills
                skills={skills}
                setSkills={setSkills}
                setSkillsDone={setSkillsDone}
            />
        },
        {
            id: 5,
            label: 'Langages',
            component: <Languages
                languages={languages}
                setLanguages={setLanguages}
                setLanguagesDone={setLanguagesDone}
            />
        },
        {
            id: 6,
            label: 'Personalité',
            component: <Personality
                personality={characterData}
                setPersonality={setCharacterData}
                setPersonalityDone={setPersonalityDone}
            />
        },
        {
            id: 7,
            label: 'Inventaire',
            component: <Inventory
                character={characterData}
                setCharacter={setCharacterData}
                setInventoryDone={setInventoryDone}
            />
        },
        {
            id: 8,
            label: 'Equipements',
            component: <Typography>Equipements</Typography>
        }
    ]

    React.useMemo(async () => {
        if (hrefId) {
            const character = await getCharacterById(hrefId);
            setCharacterData(character);
            setMainStats(character.mainStats);
            setSecondaryStats(character.secondaryStats);
            setTalent(character.talent);
            setWeakness(character.weakness);
            setSpecial(character.special);
            setSkills(character.skills);
            setLanguages(character.languages);
            setEdit(true);
        } else {
            localStorage.removeItem('step');
        }
    }, [hrefId])

    React.useEffect(() => {
        const unloadCallback = (e: any) => {
            if (generalInfosDone && statsDone && talentsDone && skillsDone && languagesDone && personalityDone && inventoryDone) {
                localStorage.removeItem('step');
            } else {
                e.preventDefault();
                e.returnValue = '';
            }

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
            localStorage.removeItem('step');
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
                        {steps.map((step, index) => 
                                <Step key={index}>
                                    <StepLabel>{step.label}</StepLabel>
                                </Step>
                            )}
                    </Stepper>
                    <Typography align="center" sx={{ display: {xs: 'block', md: "none"}, pt: 3, pb: 5, fontSize: '1.5em' }}>
                        Etape {steps[activeStep].id}/{steps.length}
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