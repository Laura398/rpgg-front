/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Typography, Slider } from "@mui/joy";
import { Stack } from "@mui/material";
import {
  MARKS,
  MINUS_MARKS,
  PHONE_MARKS,
  PHONE_MINUS_MARKS,
} from "../views/create-character/personality/constants";
import { useMemo, useState } from "react";

export default function SliderComponent(props: {
  personality: any;
  setPersonality?: any;
  field: string;
  marks: boolean;
  min: number;
  max: number;
  step: number;
  start?: string;
  end?: string;
}) {
  const {
    personality,
    setPersonality,
    field,
    marks,
    min,
    max,
    step,
    start,
    end,
  } = props;
  const [disabled, setDisabled] = useState(false);

  useMemo(() => {
    if (setPersonality) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [setPersonality]);

  const onChange = (_e: unknown, value: number | number[]) => {
    setPersonality({ ...personality, [field]: value });
  };

  return (
    <Box mt="40px">
      {start && end && (
        <Stack flexDirection="row" alignItems="space-between" width="100%">
          <Box width="50%" textAlign="left">
            <Typography
              fontSize="small"
              fontWeight="xl"
              id="ios-example-demo"
              mb={1}
            >
              {start}
            </Typography>
          </Box>
          <Box width="50%" textAlign="right">
            <Typography
              fontSize="small"
              fontWeight="xl"
              id="ios-example-demo"
              mb={1}
            >
              {end}
            </Typography>
          </Box>
        </Stack>
      )}
      <Slider
        aria-label="Small steps"
        value={Number(personality[field]) || 0}
        step={step}
        variant="soft"
        marks={
          marks
            ? window.innerWidth < 600
              ? PHONE_MINUS_MARKS
              : MINUS_MARKS
            : window.innerWidth < 600
            ? PHONE_MARKS
            : MARKS
        }
        min={min}
        max={max}
        valueLabelDisplay="auto"
        onChange={onChange}
        disabled={disabled}
      />
    </Box>
  );
}
