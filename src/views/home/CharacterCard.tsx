import Avatar from '@mui/joy/Avatar';
import Button from '@mui/joy/Button';
import ButtonGroup from '@mui/joy/ButtonGroup';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import { useMemo, useState } from 'react';
import { getById } from '../../api/User';
import { Character } from '../../types/Character.type';
import { User } from '../../types/User.type';
import Box from '@mui/joy/Box';
import { getAvatar } from '../../helpers/get-avatar';
import { useNavigate } from 'react-router-dom';
import useCharacterStore from '../../store/Character';

export default function CharacterCard(props: { character: Character }) {
    const navigate = useNavigate();
    const { character } = props;
    
    const [user, setUser] = useState({} as User);
    const [avatar, setAvatar] = useState("/avatar.png");

    const { setCharacter } = useCharacterStore();
    
    useMemo(async () => {
        const characterUser = await getById(character.user!);
        setUser(characterUser);
        if (character.avatar) {
            const avatarUrl = await getAvatar(character.avatar);
            if (avatarUrl) setAvatar(avatarUrl);
        }
    }, []);

    const goToCharacter = () => {
        if (!character._id) return;
        setCharacter(character._id)
        navigate(`/character/${character._id}`);
    };

    return (
        <Card
        component="div" // Add the missing component prop
        sx={{
            width: 320,
            height: 300,
            maxWidth: '100%',
            boxShadow: 'lg',
            // margin: { xs: "2em 0", sm: "2em" }
        }}
        >
        <CardContent sx={{ alignItems: 'center', textAlign: 'center' }}>
            <Avatar src={avatar} sx={{ '--Avatar-size': '4rem' }} />
            <Typography level="title-lg">{character.firstname}{character.lastname && ` ${character.lastname}`}</Typography>
            <Typography level="body-sm" sx={{ maxWidth: '24ch' }}>
                {character.race && character.race}{character.type && ` - ${character.type}`}
            </Typography>
            <Typography level="body-sm" sx={{ maxWidth: '24ch' }}>
                {character.class && character.class}
            </Typography>
            <Box
            sx={{
                display: 'flex',
                gap: 2,
                mt: 2,
                '& > button': { borderRadius: '2rem' },
            }}
            >
            <IconButton size="sm" variant="plain" color="neutral">
                <Typography level="body-sm" sx={{ maxWidth: '24ch' }}>
                    Createur : {user.username && user.username}
                </Typography>
            </IconButton>
            </Box>
        </CardContent>
        <CardOverflow sx={{ bgcolor: 'background.level1' }}>
            <CardActions buttonFlex="1">
            <ButtonGroup variant="outlined" sx={{ bgcolor: 'background.surface' }}>
                <Button onClick={goToCharacter}>Voir plus</Button>
            </ButtonGroup>
            </CardActions>
        </CardOverflow>
        </Card>
    );
}