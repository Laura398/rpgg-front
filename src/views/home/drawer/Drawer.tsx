import Done from '@mui/icons-material/Done';
import SearchIcon from '@mui/icons-material/Search';
import { Input } from '@mui/joy';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Checkbox from '@mui/joy/Checkbox';
import DialogContent from '@mui/joy/DialogContent';
import DialogTitle from '@mui/joy/DialogTitle';
import Divider from '@mui/joy/Divider';
import Drawer from '@mui/joy/Drawer';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ModalClose from '@mui/joy/ModalClose';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import Sheet from '@mui/joy/Sheet';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import * as React from 'react';
import { findOneUser } from '../../../api/User';
import { Character } from '../../../types/Character.type';
import { CHARACTER_CLASSES, RACES } from '../../../types/Characters.constants';
import useAuthStore from '../../../store/Auth';
import Box from '@mui/joy/Box';

export default function DrawerFilters(props: { open: boolean; setOpen: (open: boolean) => void; characters: Character[]; setCharacters: (characters: Character[]) => void; allCharacters: Character[];}) {
    const localStorageWho = localStorage.getItem('filter-who');
    const localStorageClasses = localStorage.getItem('filter-classes');
    const localStorageRaces = localStorage.getItem('filter-races');
    const { user } = useAuthStore();
    const { open, setOpen } = props;
    const [type, setType] = React.useState(localStorageWho ? localStorageWho : "Tous");
    const [characterClasses, setCharacterClasses] = React.useState<string[]>(localStorageClasses ? JSON.parse(localStorageClasses) : []);
    const [races, setRaces] = React.useState<string[]>(localStorageRaces ? JSON.parse(localStorageRaces) : []);
    const [username, setUsername] = React.useState("");
    const [characterName, setCharacterName] = React.useState("");

    const changeCharacterName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCharacterName(event.target.value);
    }

    const changeUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    }

    const searchUser = async () => {
        const selectedUser = await findOneUser({ username: username }, { fields: { _id: 1, username: 1 } })
        const newCharacters = props.allCharacters.filter(character => character.user === selectedUser._id);
        props.setCharacters(newCharacters);
        props.setOpen(false);
    }

    const searchCharacter = () => {
        const selectedCharacter = props.allCharacters.filter(character => character.firstname === characterName || character.lastname === characterName || character.firstname + " " + character.lastname === characterName || character.nickname === characterName);
        props.setCharacters(selectedCharacter);
        props.setOpen(false);
    }

    const validate = () => {
        localStorage.setItem('filter-who', type);
        localStorage.setItem('filter-classes', JSON.stringify(characterClasses));
        localStorage.setItem('filter-races', JSON.stringify(races));
        const selectedCharacters = props.allCharacters.filter(character => {
            if (user && type === "Seulement les miens") {
                return character.user === user._id;
            }
            if (!character.class || (character.class && characterClasses.length > 0 && !characterClasses.includes(character.class))) {
                return false;
            }
            if (!character.race || (character.race && races.length > 0 && !races.includes(character.race))) {
                return false;
            }
            return true;
        });
        props.setCharacters(selectedCharacters);
        props.setOpen(false);
    };

    return (
        <React.Fragment>
            <Drawer
                size="md"
                variant="plain"
                open={open}
                onClose={() => setOpen(false)}
                slotProps={{
                content: {
                    sx: {
                    bgcolor: 'transparent',
                    p: { md: 3, sm: 0 },
                    boxShadow: 'none',
                    },
                },
                }}
            >
                <Sheet
                sx={{
                    borderRadius: 'md',
                    p: { md: 4, sm: 1 },
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    height: '100%',
                    overflow: 'auto',
                }}
                >
                <DialogTitle>Filtres</DialogTitle>
                <ModalClose />
                <Divider sx={{ mt: 'auto' }} />
                <DialogContent sx={{ gap: 2 }}>
                    <FormControl>
                        <FormLabel sx={{ typography: 'title-md', fontWeight: 'bold' }}>
                            Utilisateur
                        </FormLabel>
                        <Input
                            onChange={changeUserName}
                            startDecorator={<SearchIcon />}
                            endDecorator={<Button onClick={searchUser}>Rechercher</Button>}
                        ></Input>
                    </FormControl>
                    <FormControl>
                        <FormLabel sx={{ typography: 'title-md', fontWeight: 'bold' }}>
                        Personnages
                        </FormLabel>
                        <Input
                            onChange={changeCharacterName}
                            startDecorator={<SearchIcon />}
                            endDecorator={<Button onClick={searchCharacter}>Rechercher</Button>}
                        ></Input>
                    </FormControl>
                    <FormControl></FormControl>
                    {user && <FormControl>
                    <RadioGroup
                        value={type}
                        onChange={(event) => {
                        setType(event.target.value);
                        }}
                    >
                        <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
                            gap: 1.5,
                        }}
                        >
                        {[
                            {
                            name: 'Tous',
                            },
                            {
                            name: 'Seulement les miens',
                            },
                        ].map((item) => (
                            <Card
                            key={item.name}
                            sx={{
                                boxShadow: 'none',
                                '&:hover': { bgcolor: 'background.level1' },
                            }}
                            >
                            <CardContent>
                                <Typography level="title-md">{item.name}</Typography>
                            </CardContent>
                            <Radio
                                disableIcon
                                overlay
                                checked={type === item.name}
                                variant="outlined"
                                color="neutral"
                                value={item.name}
                                sx={{ mt: -2 }}
                                slotProps={{
                                action: {
                                    sx: {
                                    ...(type === item.name && {
                                        borderWidth: 2,
                                        borderColor:
                                        'var(--joy-palette-primary-outlinedBorder)',
                                    }),
                                    '&:hover': {
                                        bgcolor: 'transparent',
                                    },
                                    },
                                },
                                }}
                            />
                            </Card>
                        ))}
                        </Box>
                    </RadioGroup>
                    </FormControl>}

                    <Typography level="title-md" fontWeight="bold" sx={{ mt: 1 }}>
                    Classes
                    </Typography>
                    <div role="group" aria-labelledby="rank">
                    <List
                        orientation="vertical"
                        size="sm"
                        sx={{
                        '--List-gap': '12px',
                        '--ListItem-radius': '20px',
                        }}
                    >
                        {CHARACTER_CLASSES.map((item, index) => {
                        const selected = characterClasses.includes(item);
                        return (
                            <ListItem key={index}>
                            <AspectRatio
                                variant={selected ? 'solid' : 'outlined'}
                                color={selected ? 'primary' : 'neutral'}
                                ratio={1}
                                sx={{ width: 20, borderRadius: 20, ml: -0.5, mr: 0.75 }}
                            >
                                <div>{selected && <Done fontSize="medium" />}</div>
                            </AspectRatio>
                            <Checkbox
                                size="sm"
                                color="neutral"
                                disableIcon
                                overlay
                                label={item}
                                variant="outlined"
                                checked={selected}
                                onChange={() => {
                                    if (characterClasses.includes(item)) {
                                        setCharacterClasses(characterClasses.filter((chClass) => chClass !== item));
                                    } else {
                                        setCharacterClasses([...characterClasses, item]);
                                    }
                                }}
                                slotProps={{
                                action: {
                                    sx: {
                                    '&:hover': {
                                        bgcolor: 'transparent',
                                    },
                                    },
                                },
                                }}
                            />
                            </ListItem>
                        );
                        })}
                    </List>
                    </div>

                    <Typography level="title-md" fontWeight="bold" sx={{ mt: 1 }}>
                    Races
                    </Typography>
                    <div role="group" aria-labelledby="rank">
                    <List
                        orientation="vertical"
                        size="sm"
                        sx={{
                        '--List-gap': '12px',
                        '--ListItem-radius': '20px',
                        }}
                    >
                        {RACES.map((item, index) => {
                        const selected = races.includes(item);
                        return (
                            <ListItem key={index}>
                            <AspectRatio
                                variant={selected ? 'solid' : 'outlined'}
                                color={selected ? 'primary' : 'neutral'}
                                ratio={1}
                                sx={{ width: 20, borderRadius: 20, ml: -0.5, mr: 0.75 }}
                            >
                                <div>{selected && <Done fontSize="medium" />}</div>
                            </AspectRatio>
                            <Checkbox
                                size="sm"
                                color="neutral"
                                disableIcon
                                overlay
                                label={item}
                                variant="outlined"
                                checked={selected}
                                onChange={() => {
                                    if (races.includes(item)) {
                                        setRaces(races.filter((race) => race !== item));
                                    } else {
                                        setRaces([...races, item]);
                                    }
                                }}
                                slotProps={{
                                action: {
                                    sx: {
                                    '&:hover': {
                                        bgcolor: 'transparent',
                                    },
                                    },
                                },
                                }}
                            />
                            </ListItem>
                        );
                        })}
                    </List>
                    </div>
                </DialogContent>

                <Divider sx={{ mt: 'auto' }} />
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    useFlexGap
                    spacing={1}
                >
                    <Button
                    variant="outlined"
                    color="neutral"
                    onClick={() => {
                        setType('Tous');
                        setCharacterClasses([]);
                        setRaces([]);
                    }}
                    >
                    Tout effacer
                    </Button>
                    <Button onClick={validate}>Valider</Button>
                </Stack>
                </Sheet>
            </Drawer>
        </React.Fragment>
    );
}