import Autocomplete from '@mui/joy/Autocomplete';
import AutocompleteOption from '@mui/joy/AutocompleteOption';
import FormControl, { FormControlProps } from '@mui/joy/FormControl';

export default function Selector(props: {name: string, title: string, list: string[] | number[], value: string | number, action: any, startDecorator?: any, disabled: boolean} & FormControlProps) {
  const { sx } = props;
  return (
      <FormControl
      sx={[{ display: { sm: 'contents' }, pl: {xs: 0, sm: '20px'}, py: {xs: '5px'}, ml: 0, width:"100%" }, ...(Array.isArray(sx) ? sx : [sx])]}
    >
      <Autocomplete
        size="sm"
        sx={{ margin: 0, width: '100%'}}
        autoHighlight
        isOptionEqualToValue={(option, value) => option === value?.toString() || value?.toString() === props.value?.toString()}
        defaultValue={props.list[0]?.toString()}
        value={props.value?.toString()}
        disabled={props.disabled}
        onChange={(_event, newValue) => {
          props.action(newValue, props.name);
        }}
        options={props.list.map(item => item?.toString())}
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
        startDecorator={props.startDecorator}
      />
    </FormControl>
  );
}