import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import GeneralInfos from './GeneraInfos';
import { getCharacterById } from '../../api/Characters';
import Stats from './Stats';
import { Character } from '../../types/Character.type';

export default function CreateCharacter() {
    const hrefId = window.location.href.split('/')[5];
    console.log(hrefId);
    const [edit, setEdit] = React.useState(false);
    const [activeStep, setActiveStep] = React.useState(0);
    const [generalInfos, setGeneralInfos] = React.useState({} as Character);
    const [stats, setStats] = React.useState({} as any);

    const steps = [
        { label: 'Informations Générales', component: <GeneralInfos generalInfos={generalInfos} setGeneralInfos={setGeneralInfos} />},
        { label: 'Statistiques', component: <Stats stats={stats} setStats={setStats} />},
        { label: 'Talents', component: <Typography variant="h1">Talents</Typography>},
        { label: 'Personalité', component: <Typography variant="h1">Personalité</Typography>},
        { label: 'Inventaire', component: <Typography variant="h1">Inventaire</Typography>},
    ]

    React.useMemo(async () => {
        if (hrefId) {
            const character = await getCharacterById(hrefId);
            setGeneralInfos(character);
            setEdit(true);
        }
    }, [hrefId])

    const getStepContent = (step: number) => {
        return steps[step].component;
    }

    const handleNext = () => {
        if (activeStep + 1 === steps.length) {
            console.log('Finish');
        } else {
            setActiveStep(activeStep + 1);
        }
    };

    const handleBack = () => {
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
                    <Stepper activeStep={activeStep} sx={{ display: {xs: 'none'}, pt: 3, pb: 5 }}>
                        {steps.map((step, index) => (
                        <Step key={index}>
                            <StepLabel>{step.label}</StepLabel>
                        </Step>
                        ))}
                    </Stepper>
                        <React.Fragment>
                            {getStepContent(activeStep)}
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                {activeStep !== 0 && (
                                <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                                    Back
                                </Button>
                                )}
                                <Button
                                variant="contained"
                                onClick={handleNext}
                                sx={{ mt: 3, ml: 1 }}
                                >
                                {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                                </Button>
                            </Box>
                        </React.Fragment>
                    </Paper>
            </React.Fragment>
        </main>
    );
}