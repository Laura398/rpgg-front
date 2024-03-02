import Autocomplete from '@mui/joy/Autocomplete';
import AutocompleteOption from '@mui/joy/AutocompleteOption';
import FormControl, { FormControlProps } from '@mui/joy/FormControl';

export default function Selector(props: {title: string, list: string[] | number[], value: string | number, action: any} & FormControlProps) {
  const { sx } = props;
  return (
      <FormControl
      sx={[{ display: { sm: 'contents' }, paddingLeft: '20px' }, ...(Array.isArray(sx) ? sx : [sx])]}
    >
      <Autocomplete
        size="sm"
        sx={{ margin: '0 1vw' }}
        autoHighlight
        isOptionEqualToValue={(option, value) => option === value.toString() || value.toString() === props.value.toString()}
        defaultValue={props.list[0].toString()}
        value={props.value.toString()}
        onChange={(_event, newValue) => {
          props.action(newValue);
        }}
        options={props.list.map(item => item.toString())}
        renderOption={(optionProps, option) => (
          <AutocompleteOption {...optionProps}>
            {option}
          </AutocompleteOption>
        )}
        slotProps={{
          input: {
            autoComplete: 'new-password', // disable autocomplete and autofill
          },
        }}
      />
    </FormControl>
  );
}