import AutoFixNormalIcon from '@mui/icons-material/AutoFixNormal';
import BoltIcon from '@mui/icons-material/Bolt';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import HardwareIcon from '@mui/icons-material/Hardware';
import InfoIcon from '@mui/icons-material/Info';
import ModeStandbyIcon from '@mui/icons-material/ModeStandby';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SecurityIcon from '@mui/icons-material/Security';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import { Tooltip } from '@mui/joy';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import { Character } from '../../../types/Character.type';

export default function ShowCharacterCard(props: {character: Character}) {
  const character = props.character;  
  
  return (
    <Box>
      <Box sx={{ display: {sm: "block", md: 'flex'}, marginTop: "20px", gap: 1.5 }}>
        <Card variant="outlined" color="neutral" sx={{ textAlign: "left", margin: "10px auto", flex: 1 }}>
          <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
            Genre: {character.gender}
          </Typography>
          <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
            Taille : {character.height}
          </Typography>
          <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
            Poids : {character.weight}
          </Typography>
          <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
            Couleur des yeux : {character.eyesColor}
          </Typography>
          <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
            Couleur des cheveux : {character.hairColor}
          </Typography>
        </Card>
        <Card variant="soft" color="neutral" sx={{ textAlign: "left", margin: "10px auto", flex: 1, color: "white" }}>
          <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
            Orientation Sexuelle : {character.sexuality}
          </Typography>
          <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
            Origine : {character.origin}
          </Typography>
          <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
            Statut Social : {character.socialStatus}
          </Typography>
          <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
            Situation Familiale : {character.familySituation}
          </Typography>
          <Typography level="body-sm" fontWeight="lg" textColor="text.tertiary">
            Nombre d'enfants : {character.children}
          </Typography>
        </Card>
      </Box>
      <Sheet
        sx={{
          bgcolor: 'background.level1',
          borderRadius: 'sm',
          p: 1.5,
          my: 1.5,
          display: 'flex',
          gap: 2,
          '& > div': { flex: 1 },
        }}
      >
        <div>
          <Typography level="body-xs" fontWeight="lg">
            <Tooltip title="Points de Vitalité" placement="top" variant="plain">
              <FavoriteBorderIcon />
            </Tooltip>
          </Typography>
          <Typography fontWeight="lg">{character.mainStats?.hp}</Typography>
        </div>
        <div>
          <Typography level="body-xs" fontWeight="lg">
            <Tooltip title="Points de Mana" placement="top" variant="plain">
              <AutoFixNormalIcon />
            </Tooltip>
          </Typography>
          <Typography fontWeight="lg">{character.mainStats?.mp}</Typography>
        </div>
        <div>
          <Typography level="body-xs" fontWeight="lg">
            <Tooltip title="Niveau" placement="top" variant="plain">
              <InfoIcon />
            </Tooltip>
          </Typography>
          <Typography fontWeight="lg">{character.mainStats?.level}</Typography>
        </div>
        <div>
          <Typography level="body-xs" fontWeight="lg">
            <Tooltip title="Attaque" placement="top" variant="plain">
              <HardwareIcon />
            </Tooltip>
          </Typography>
          <Typography fontWeight="lg">{character.mainStats?.atk}</Typography>
        </div>
        <div>
          <Typography level="body-xs" fontWeight="lg">
            <Tooltip title="Parade" placement="top" variant="plain">
              <SecurityIcon />
            </Tooltip>
          </Typography>
          <Typography fontWeight="lg">{character.mainStats?.def}</Typography>
        </div>
      </Sheet>
      <Sheet
        sx={{
          border: '1px solid #f1f4f9',
          borderRadius: 'sm',
          p: 1.5,
          my: 1.5,
          display: 'flex',
          gap: 2,
          '& > div': { flex: 1 },
        }}
      >
        <div>
          <Typography level="body-xs" fontWeight="lg">
            <Tooltip title="Condition Physique" placement="top" variant="plain">
              <FitnessCenterIcon />
            </Tooltip>
          </Typography>
          <Typography fontWeight="lg">{character.secondaryStats?.phy}</Typography>
        </div>
        <div>
          <Typography level="body-xs" fontWeight="lg">
            <Tooltip title="Capacité Intellectuelle" placement="top" variant="plain">
              <PsychologyIcon />
            </Tooltip>
          </Typography>
          <Typography fontWeight="lg">{character.secondaryStats?.int}</Typography>
        </div>
        <div>
          <Typography level="body-xs" fontWeight="lg">
            <Tooltip title="Dextérité" placement="top" variant="plain">
              <ModeStandbyIcon />
            </Tooltip>
          </Typography>
          <Typography fontWeight="lg">{character.secondaryStats?.dxt}</Typography>
        </div>
        <div>
          <Typography level="body-xs" fontWeight="lg">
            <Tooltip title="Force Mentale" placement="top" variant="plain">
              <BoltIcon />
            </Tooltip>
          </Typography>
          <Typography fontWeight="lg">{character.secondaryStats?.men}</Typography>
        </div>
        <div>
          <Typography level="body-xs" fontWeight="lg">
            <Tooltip title="Charisme" placement="top" variant="plain">
              <SentimentSatisfiedAltIcon />
            </Tooltip>
          </Typography>
          <Typography fontWeight="lg">{character.secondaryStats?.cha}</Typography>
        </div>
      </Sheet>
    </Box>
  );
}