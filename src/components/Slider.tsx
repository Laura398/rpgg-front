import { Box, Typography, Slider } from "@mui/joy";
import { Stack } from "@mui/material";
import { MARKS, MINUS_MARKS, PHONE_MARKS, PHONE_MINUS_MARKS } from "../views/create-character/personality/constants";

export default function SliderComponent (props: {personality: any, setPersonality: any, field: string, marks: boolean, min: number, max: number, step: number, start?: string, end?: string}) {
    const { personality, setPersonality, field, marks, min, max, step, start, end } = props;

    console.log(personality[field]);
    

    const onChange = (_e: any, value: number | number[]) => {
        setPersonality({...personality, [field]: value});
    }

    return (
        <Box mt="40px">
            {start && end &&
                <Stack flexDirection="row" alignItems="space-between" width="100%">
                    <Box width="50%" textAlign="left">
                    <Typography fontSize="small" fontWeight="xl" id="ios-example-demo" mb={1}>{start}</Typography>
                    </Box>
                    <Box width="50%" textAlign="right">
                    <Typography fontSize="small" fontWeight="xl" id="ios-example-demo" mb={1}>{end}</Typography>
                    </Box>
                </Stack>
            }
            <Slider
                aria-label="Small steps"
                value={Number(personality[field])}
                step={step}
                marks={marks ? (window.innerWidth < 600 ? PHONE_MINUS_MARKS : MINUS_MARKS) : (window.innerWidth < 600 ? PHONE_MARKS : MARKS)}
                min={min}
                max={max}
                valueLabelDisplay="auto"
                onChange={onChange}
            />
        </Box>
    )
}