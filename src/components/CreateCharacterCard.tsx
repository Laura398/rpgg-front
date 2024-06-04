import {
  Box,
  Button,
  Card,
  CardActions,
  CardOverflow,
  Divider,
  Stack,
  Typography,
} from "@mui/joy";

export default function CreateCharacterCard(props: {
  save: () => Promise<void>;
  title: string;
  buttonText: string;
  content: string | JSX.Element | JSX.Element[];
  randomAll?: () => void;
}) {
  return (
    <Box sx={{ flex: 1, width: "100%", overflow: "auto" }}>
      <Stack
        spacing={4}
        sx={{
          display: "flex",
          maxWidth: { xs: "100vw", md: "80vw" },
          mx: "auto",
          px: { xs: 2, md: 6 },
          py: { xs: 2, md: 3 },
        }}
      >
        <Card>
          <Box sx={{ mb: 1 }}>
            <Typography level="title-md">{props.title}</Typography>
          </Box>
          <Divider />
          {props.content}
          <CardOverflow sx={{ borderTop: "1px solid", borderColor: "divider" }}>
            <CardActions sx={{ alignSelf: "flex-end", pt: 2 }}>
              <Button
                type="button"
                size="sm"
                variant="solid"
                color="neutral"
                onClick={(event) => {
                  event.preventDefault();
                  props.save();
                }}
              >
                {props.buttonText}
              </Button>
              {props.randomAll && (
                <Button
                  type="button"
                  size="sm"
                  variant="solid"
                  color="neutral"
                  onClick={(event) => {
                    event.preventDefault();
                    props.randomAll && props.randomAll();
                  }}
                >
                  Tout randomiser
                </Button>
              )}
            </CardActions>
          </CardOverflow>
        </Card>
      </Stack>
    </Box>
  );
}
