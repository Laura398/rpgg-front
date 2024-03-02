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

export default function CharacterCard(props: { character: Character }) {
    const { character } = props;
    const [user, setUser] = useState({} as User);
    
    useMemo(async () => {
        const characterUser = await getById(character.user);
        setUser(characterUser);
    }, []);

    return (
        <Card
        component="div" // Add the missing component prop
        sx={{
            width: 320,
            maxWidth: '100%',
            boxShadow: 'lg',
            margin: { xs: "2em 0", sm: "2em" }
        }}
        >
        <CardContent sx={{ alignItems: 'center', textAlign: 'center' }}>
            <Avatar src="/static/images/avatar/1.jpg" sx={{ '--Avatar-size': '4rem' }} />
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
                <Button>Voir plus</Button>
            </ButtonGroup>
            </CardActions>
        </CardOverflow>
        </Card>
    );
}