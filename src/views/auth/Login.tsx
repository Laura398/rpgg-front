import Button from '@mui/joy/Button';
import CssBaseline from '@mui/joy/CssBaseline';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Link from '@mui/joy/Link';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import { useState } from 'react';
import AlertMessage from '../../components/alerts/AlertMessage';
import useAuthStore from '../../store/Auth';
import { useMutation } from '@tanstack/react-query';
import { register } from '../../api/Auth';
import { useNavigate } from 'react-router-dom';
import { ShoAlertFunction } from '../../helpers/show-alert';

export default function Login() {
    const { login } = useAuthStore();
    const navigate = useNavigate();
    const [isRegistering, setIsRegistering] = useState(false);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertSeverity, setAlertSeverity] = useState('');

    const registerUser = useMutation({
        mutationFn: register,
      });

    function check() {
        if (isRegistering) {
            const validUsername = username !== '' && username.length >= 3;
            if (!validUsername) {
                return warning('Veillez entrer un nom d\'utilisateur valide. (3 caractères minimum)');
            }
        }
        const validEmail = email !== '' && email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        if (!validEmail) {
            return warning('Veillez entrer une adresse email valide.');
        }
        const validPassword = password !== '' && password.length >= 8;
        if (!validPassword) {
            return warning('Veillez entrer un mot de passe valide. (8 caractères minimum)');
        }
        if (isRegistering) {
            validate();
            return signUp();
        }
        logIn();
    }

    function validate() {  
        setAlertMessage('Inscription réussie !');
        setAlertSeverity('success');
        ShoAlertFunction(setShowAlert);
    }

    function warning(message: string) {
        setAlertMessage(message);
        setAlertSeverity('warning');
        ShoAlertFunction(setShowAlert);
    }

    function closeAlert() {
        setShowAlert(false);
    }

    const toggleRegister = () => {
        setIsRegistering(!isRegistering);
        setUsername("");
        setEmail("");
        setPassword("");
    };

    const changeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    }

    const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const logIn = async () => {
        closeAlert();
        const response = await login({ email, password });        
        if (response) {
            warning(response);
        } else {
            navigate('/');
        }
    };

    const signUp = () => {
        registerUser.mutate({ username, email, password});
        if (registerUser.isSuccess) {
            setTimeout(() => {
            validate();
            setIsRegistering(false);
            }, 3000);
        } else {
            warning('Inscription échouée');
        }
    };

    return (
        <main style={{padding: "20vh 0 0 0"}}>
            <CssBaseline />
            <Sheet
                sx={{
                width: 300,
                mx: 'auto', // margin left & right
                my: 4, // margin top & bottom
                py: 3, // padding top & bottom
                px: 2, // padding left & right
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                borderRadius: 'sm',
                boxShadow: 'md',
                }}
                variant="outlined"
            >
                <div>
                    <Typography level="h4" component="h1">
                        <b>Bienvenue sur Mundi Bellum !</b>
                    </Typography>
                </div>
                {isRegistering && 
                    <FormControl>
                        <FormLabel>Nom d'utilisateur</FormLabel>
                        <Input
                            // html input attribute
                            name="username"
                            type="username"
                            placeholder="JonhDoe123"
                            value={username}
                            onChange={changeUsername}
                        />
                    </FormControl>
                }
                <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input
                        // html input attribute
                        name="email"
                        type="email"
                        placeholder="johndoe@email.com"
                        value={email}
                        onChange={changeEmail}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>Mot de passe</FormLabel>
                    <Input
                        // html input attribute
                        name="password"
                        type="password"
                        placeholder="mot de passe"
                        value={password}
                        onChange={changePassword}
                    />
                </FormControl>
                <Button type='button' sx={{ mt: 1 /* margin top */ }} onClick={(event) => {
                    event.preventDefault();
                    check();
                }}>
                    {isRegistering ? "S'inscrire" : "Se connecter"}
                </Button>
                <Typography
                    endDecorator={<Link href='#' onClick={toggleRegister}>{isRegistering ? "Se connecter" : "S'inscrire"}</Link>}
                    fontSize="sm"
                    sx={{ alignSelf: 'center' }}
                >
                    {isRegistering ? "Déjà un compte ?" : "Pas encore de compte ?"}
                </Typography>
            </Sheet>
            {showAlert && <AlertMessage severity={alertSeverity} message={alertMessage} onClose={closeAlert} />}
        </main>
    );
}