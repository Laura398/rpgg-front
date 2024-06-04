/* eslint-disable @typescript-eslint/no-explicit-any */
import { Sheet, Stack, Typography } from "@mui/joy";
import Selector from "../../../components/Selector";
import {
  LANGUAGES_LEVELS,
  LANGUAGES_TYPES,
} from "../../../types/Characters.constants";
import CloseIcon from "@mui/icons-material/Close";

export default function Language(props: {
  title: string;
  language: any;
  setLanguage: React.Dispatch<React.SetStateAction<any>>;
}) {
  const { title, language, setLanguage } = props;

  return (
    <Sheet
      variant="soft"
      sx={{ width: { sm: "100%", md: "45%" }, p: 2, borderRadius: "sm" }}
    >
      <Stack width="100%" flexDirection="row" justifyContent="space-between">
        <Typography
          level="h3"
          fontSize="xl2"
          fontWeight="xl"
          id="ios-example-demo"
          mb={1}
        >
          {title}
        </Typography>
        <CloseIcon onClick={() => setLanguage({})} />
      </Stack>
      <Stack spacing={2} alignItems="flex-start">
        {LANGUAGES_TYPES.map(
          (type: { name: string; value: string }, index: number) => {
            const changeLanguage = (e: React.ChangeEvent<any>) => {
              setLanguage({ ...language, [type.value]: e });
            };

            return (
              <Stack alignItems="flex-start" width="100%" key={index}>
                <Stack alignItems="flex-start" width="100%">
                  <Typography
                    fontSize="medium"
                    fontWeight="xl"
                    id="ios-example-demo"
                    mb={1}
                  >
                    {type.name}
                  </Typography>
                  <Selector
                    name={type.value}
                    title={type.name}
                    list={LANGUAGES_LEVELS as unknown as string[]}
                    value={language[type.value] || ""}
                    action={changeLanguage}
                  />
                </Stack>
              </Stack>
            );
          }
        )}
      </Stack>
    </Sheet>
  );
}
