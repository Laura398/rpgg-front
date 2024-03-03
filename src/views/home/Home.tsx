import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CasinoIcon from '@mui/icons-material/Casino';
import TuneIcon from '@mui/icons-material/TuneRounded';
import { Box, Button, Stack } from "@mui/joy";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createRandomCharacter, getAllCharacters } from "../../api/Characters";
import useAuthStore from "../../store/Auth";
import { Character } from "../../types/Character.type";
import CharacterCard from "./CharacterCard";
import DrawerFilters from "./drawer/Drawer";

export default function Home() {
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const [characters, setCharacters] = useState<Character[]>([]);
  const [allCharacters, setAllCharacters] = useState<Character[]>([]);
  const [open, setOpen] = useState(false);

    useMemo(async () => {
      const allCharacters = await getAllCharacters();
      setCharacters(allCharacters);
      setAllCharacters(allCharacters);
    }, []);

    const randomise = async () => {
      const character = await createRandomCharacter();
      setCharacters([...characters, character]);
    }

    return (
      <main>
        <Stack
          margin={{ xs: "2em 3em", sm: "1en 2em" }}
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
        >
          <Button
            variant="soft"
            color="neutral"
            sx={{ margin: "1em"}}
            startDecorator={<TuneIcon />}
            onClick={() => setOpen(true)}
          >
            Filtres
          </Button>
          {open && <DrawerFilters open={open} setOpen={setOpen} characters={characters} setCharacters={setCharacters} allCharacters={allCharacters} />}
          {user && 
          <Box>
            <Button
              variant="soft"
              color="neutral"
              sx={{ margin: "1em"}}
              startDecorator={<AddCircleOutlineIcon />}
              onClick={() => navigate('/character')}
            >
              Nouveau personnage
            </Button>
            <Button
              variant="soft"
              color="neutral"
              sx={{ margin: "1em"}}
              startDecorator={<CasinoIcon />}
              onClick={randomise}
            >
              Nouveau personnage random
            </Button>
          </Box>}
          
        </Stack>
        <Stack
          margin={{ xs: "0", sm: "0 2em" }}
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
          sx={{ '&::after': {
            content: '""',
            flex: "auto",
            width: "320px"
          }}}
        >
          {characters.map((character, index) => (
            <div key={index}>
              <CharacterCard character={character} />
            </div>
          
          ))}
        </Stack>
      </main>
    );
}