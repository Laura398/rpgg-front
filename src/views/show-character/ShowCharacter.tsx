/* eslint-disable @typescript-eslint/no-explicit-any */
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  AspectRatio,
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Sheet,
  Stack,
  Tab,
  TabList,
  Tabs,
  Typography,
} from "@mui/joy";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { getAvatar } from "../../helpers/get-avatar";
import useCharacterStore from "../../store/Character";
import ShowCharacterCard from "./general-infos/CharacterCard";
import ShowInventory from "./inventory/ShowInventory";
import ShowLanguages from "./languages/Languages";
import ShowPersonality from "./personality/ShowPersonality";
import ShowSkills from "./skills/ShowSkills";
import ShowTalentsAndSpe from "./statistiques/ShowTalentsAndSpe";
import useAuthStore from "../../store/Auth";
import { getCharacterById } from "../../api/Characters";
import { Character } from "../../types/Character.type";

export default function ShowCharacter() {
  const navigate = useNavigate();
  const [character, setCharacter] = React.useState<Character>(
    useCharacterStore().character
  );
  const [loading, setLoading] = React.useState(true);

  const hrefId = window.location.href.split("/").pop();

  React.useMemo(async () => {
    if (hrefId && hrefId !== character._id) {
      // navigate(`/character/${hrefId}`);
      const newCharacter = await getCharacterById(hrefId);
      setCharacter(newCharacter);
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [character._id, hrefId]);

  const { user } = useAuthStore();

  const [avatar, setAvatar] = React.useState<string>("/avatar.png");
  const [state, setState] = React.useState(false);
  const [selection, setSelection] = React.useState<{
    id?: number;
    label?: string;
    component?: any;
    step?: number;
  }>({});
  const [menu, setMenu] = React.useState<any>([]);

  React.useMemo(() => {
    const newMenu = [
      {
        id: 1,
        label: "Informations Générales",
        component: <ShowCharacterCard character={character} />,
        step: 0,
      },
      {
        id: 3,
        label: "Talents",
        component: <ShowTalentsAndSpe character={character} />,
        step: 2,
      },
      {
        id: 4,
        label: "Compétences",
        component: <ShowSkills character={character} />,
        step: 3,
      },
      {
        id: 5,
        label: "Langages",
        component: <ShowLanguages character={character} />,
        step: 4,
      },
      {
        id: 6,
        label: "Personalité",
        component: <ShowPersonality character={character} />,
        step: 5,
      },
      {
        id: 7,
        label: "Inventaire",
        component: <ShowInventory character={character} />,
        step: 6,
      },
      {
        id: 8,
        label: "Equipements",
        component: (
          <Box sx={{ position: "relative", marginTop: "20px" }}>
            <Sheet
              variant="soft"
              sx={{ width: "100%", p: 2, m: "10px", borderRadius: "sm" }}
            >
              <Typography
                level="h3"
                fontSize="xl2"
                fontWeight="xl"
                id="ios-example-demo"
                mb={1}
              >
                Equipements à venir
              </Typography>
            </Sheet>
          </Box>
        ),
        step: 7,
      },
    ];
    setMenu(newMenu);
  }, [character]);

  React.useMemo(async () => {
    if (character) {
      setAvatar(await getAvatar(character.avatar));
      setSelection(menu[0]);
      if (character.avatar) {
        const avatarUrl = await getAvatar(character.avatar);
        if (avatarUrl) setAvatar(avatarUrl);
      }
    }
  }, [character, menu]);

  const edit = () => {
    navigate(`/character/${character._id}/edit`);
  };

  // reload page
  //   window.location.reload();

  return (
    <main>
      {loading ? (
        <CircularProgress variant="soft" color="neutral" />
      ) : (
        <React.Fragment>
          <CssBaseline />
          <Paper
            variant="outlined"
            sx={{ p: { xs: 2, md: 3 }, m: { xs: 0, md: "0 40px" } }}
          >
            <Stack
              sx={{
                position: "fixed",
                left: 0,
                zIndex: 5,
                top: "9%",
                width: "100%",
                display: { xs: "none", md: "block" },
                borderTop: "5px solid black",
              }}
            >
              <Tabs aria-label="Flex auto tabs">
                <TabList tabFlex="auto">
                  {character &&
                    menu.map((item: any, index: number) => (
                      <Tab key={index}>
                        <Typography
                          key={index}
                          onClick={() => setSelection(item)}
                        >
                          {item.label}
                        </Typography>
                      </Tab>
                    ))}
                </TabList>
              </Tabs>
            </Stack>
            <IconButton
              variant="outlined"
              color="neutral"
              onClick={() => setState(true)}
              sx={{
                display: { xs: "block", md: "none" },
                bgcolor: "background.body",
                position: "absolute",
                zIndex: 100,
                boxShadow: "sm",
                top: "10px",
                right: "10px",
              }}
            >
              <AccountCircleIcon />
            </IconButton>
            <Drawer
              component="div"
              size="sm"
              open={state}
              onClose={() => setState(false)}
            >
              <Box
                component="div"
                role="presentation"
                onClick={() => setState(false)}
                onKeyDown={() => setState(false)}
              >
                <List>
                  <ListItem>
                    <Typography fontSize="1.5em">Menu du personnage</Typography>
                  </ListItem>
                  <Divider />
                  {menu.map((item: any, index: number) => (
                    <ListItem key={index} onClick={() => setSelection(item)}>
                      <ListItemButton>{item.label}</ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Drawer>
            <Box sx={{ flex: 1, width: "100%", overflow: "auto" }}>
              <Stack
                spacing={4}
                sx={{
                  display: "flex",
                  maxWidth: { xs: "100%", md: "80%" },
                  mx: "auto",
                  px: { xs: 0, md: 6 },
                  py: { xs: 0, md: 3 },
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    position: "relative",
                    // overflow: { xs: 'auto', sm: 'initial' },
                  }}
                >
                  <Card
                    orientation="horizontal"
                    sx={{
                      width: "100%",
                      flexWrap: "wrap",
                      [`& > *`]: {
                        "--stack-point": "500px",
                        minWidth:
                          "clamp(0px, (calc(var(--stack-point) - 2 * var(--Card-padding) - 2 * var(--variant-borderWidth, 0px)) + 1px - 100%) * 999, 100%)",
                      },
                      // make the card resizable for demo
                      overflow: "auto",
                      // resize: 'horizontal',
                    }}
                  >
                    <CardContent>
                      {user && (
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            gap: 1.5,
                            "& > button": { width: "200px" },
                          }}
                        >
                          <Stack>
                            <Button
                              variant="outlined"
                              color="neutral"
                              onClick={edit}
                            >
                              Modifier
                            </Button>
                          </Stack>
                          <Stack>
                            <Button variant="soft" color="neutral" disabled>
                              Monter de niveau - fonctionnalité à venir
                            </Button>
                            <Button
                              variant="soft"
                              color="neutral"
                              sx={{ marginTop: "20px" }}
                              disabled
                            >
                              Démarrer une partie - fonctionnalité à venir
                            </Button>
                          </Stack>
                        </Box>
                      )}
                      <AspectRatio
                        ratio="1"
                        maxHeight={150}
                        sx={{
                          width: 150,
                          borderRadius: "100%",
                          margin: "auto",
                          border: "2px solid white",
                          alignSelf: "center",
                        }}
                      >
                        <Avatar
                          src={avatar}
                          sx={{ "--Avatar-size": "200px" }}
                        />
                      </AspectRatio>
                      <Typography fontSize="xl" fontWeight="lg">
                        {character.firstname} {character.lastname}
                      </Typography>
                      <Typography
                        level="body-sm"
                        fontWeight="lg"
                        textColor="text.tertiary"
                      >
                        {character.nickname}
                      </Typography>
                      <Typography
                        level="body-sm"
                        fontWeight="lg"
                        textColor="text.tertiary"
                      >
                        {character.race}
                        {character.type && ` (${character.type})`} |{" "}
                        {character.class}
                      </Typography>
                      <Typography
                        level="body-sm"
                        fontWeight="lg"
                        textColor="text.tertiary"
                      >
                        Alignement : {character.alignment}
                      </Typography>
                      {selection && selection.component}
                    </CardContent>
                  </Card>
                </Box>
              </Stack>
            </Box>
          </Paper>
          {/* {showAlert && <AlertMessage severity={alertSeverity} message={alertMessage} onClose={closeAlert} />} */}
        </React.Fragment>
      )}
    </main>
  );
}
