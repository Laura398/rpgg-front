import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import GeneralInfos from './general-infos/GeneraInfos';

const steps = ['Informations Générales', 'Statistiques Principales', 'Statistiques Secondaires', 'Talents', 'Personalité', 'Inventaire'];

function getStepContent(step: number, generalInfos: any, setGeneralInfos: any) {
    switch (step) {
        case 0:
            return <GeneralInfos generalInfos={generalInfos} setGeneralInfos={setGeneralInfos} />;
            // return <Typography variant="h1">Informations Générales</Typography>;
        case 1:
            // return <PaymentForm />;
            return <Typography variant="h1">Statistiques Principales</Typography>;
        case 2:
            // return <Review />;
            return <Typography variant="h1">Statistiques Secondaires</Typography>;
        case 3:
            return <Typography variant="h1">Talents</Typography>;
        case 4:
            return <Typography variant="h1">Personalité</Typography>;
        case 5:
            return <Typography variant="h1">Inventaire</Typography>;
        default:
            throw new Error('Une erreur est survenue...');
    }
  }

export default function CreateCharacter() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [generalInfos, setGeneralInfos] = React.useState({} as any);

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
                <Paper variant="outlined" sx={{  p: { xs: 2, md: 3 }, m: "0 40px" }}>
                    <Typography component="h1" variant="h4" align="center">
                        Création de personnage
                    </Typography>
                    <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                        {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                        ))}
                    </Stepper>
                        <React.Fragment>
                            {getStepContent(activeStep, generalInfos, setGeneralInfos)}
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