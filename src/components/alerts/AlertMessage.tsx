import { Alert } from "@mui/material";
import './AlertMessage.css';

export default function AlertMessage(props: {severity: any, message: string, onClose: () => void}) {
    return (
        <Alert severity={props.severity} className='alert' onClose={props.onClose}>
            {props.message}
        </Alert>
    );
}