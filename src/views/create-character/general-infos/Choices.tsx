/* eslint-disable @typescript-eslint/no-explicit-any */
import { Sheet, Stack, Typography } from "@mui/joy";
import Selector from "../../../components/Selector";

export default function Choices(props: { selectsList: any[] }) {
  return (
    <Sheet
      variant="soft"
      sx={{ width: { sm: "100%", md: "45%" }, p: 2, borderRadius: "sm" }}
    >
      <Stack spacing={2} alignItems="flex-start">
        {props.selectsList.map((select: any) => {
          return (
            <Stack alignItems="flex-start" width="100%" key={select.name}>
              <Stack alignItems="flex-start" width="100%" key={select.name}>
                <Typography
                  fontSize="medium"
                  fontWeight="xl"
                  id="ios-example-demo"
                  mb={1}
                >
                  {select.placeholder}
                </Typography>
                <Selector
                  name={select.name}
                  title={select.placeholder}
                  list={select.options}
                  value={select.value}
                  action={select.onChange}
                  startDecorator={select.startDecorator}
                  disabled={select.disabled}
                />
              </Stack>
            </Stack>
          );
        })}
      </Stack>
    </Sheet>
  );
}
