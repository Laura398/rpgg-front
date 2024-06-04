import { Alert, AlertColor } from "@mui/material";
import "./AlertMessage.css";
import { OverridableStringUnion } from "@mui/types";
import { AlertPropsColorOverrides } from "@mui/joy";

export default function AlertMessage(props: {
  severity:
    | OverridableStringUnion<AlertColor, AlertPropsColorOverrides>
    | undefined;
  message: string;
  onClose: () => void;
}) {
  return (
    <Alert severity={props.severity} className="alert" onClose={props.onClose}>
      {props.message}
    </Alert>
  );
}
