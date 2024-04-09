import { Box, Divider } from "@mui/joy";
import ShowSpe from "./ShowSpe";
import ShowTalents from "./ShowTalents";

export default function ShowTalentsAndSpe(props: {character: any}) {
    return (
        <Box>
            <ShowTalents character={props.character} />
            <Divider />
            <ShowSpe character={props.character} />
        </Box>
    )
}