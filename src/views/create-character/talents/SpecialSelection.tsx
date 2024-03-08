import { Input, Option, Select, Sheet, Stack, Typography } from "@mui/joy";
import { Character } from "../../../types/Character.type";
import { ALL_SKILLS, SECONDARY_STATS } from "../../../types/Characters.constants";
import CloseIcon from '@mui/icons-material/Close';

export default function SpecialSelection(props:
    {
        title: string,
        special: Character['special'],
        setSpecial: (special: Character['special']) => void,
        currentSpecial: {name?: string, draw?: string, stat?: string},
        setCurrentSpecial: any
    }) {
    const {title, currentSpecial, setCurrentSpecial} = props;

    return (
        <Sheet variant="soft" sx={{ width: {sm: "100%", md: "45%"}, p: 2, borderRadius: 'sm' }}>
            <Stack spacing={2} alignItems="flex-start">
                <Stack width="100%" flexDirection="row" justifyContent="space-between">
                    <Typography fontSize="medium" fontWeight="xl" id="ios-example-demo" mb={1}>{title}</Typography>
                    <CloseIcon onClick={() => setCurrentSpecial({})} />
                </Stack>
                <Input id="talent-name" name="name" type="text" placeholder={title} sx={{width: "100%"}} onChange={(e) => setCurrentSpecial({...currentSpecial, name: e.target.value})} />
                <Typography fontSize="medium" fontWeight="xl" id="ios-example-demo" mb={1}>Statistique concernées</Typography>
                <Select
                    placeholder="Sélectionne la statistique concernée"
                    name="draw"
                    required
                    value={currentSpecial.draw || ""}
                    sx={{ width: "100%", whiteSpace: "normal !important"}}
                    onChange={(_event, newValue) => {
                        setCurrentSpecial({...currentSpecial, draw: newValue});
                      }}
                    >
                    {Object.values(SECONDARY_STATS).map((spe, index) => <Option key={index} value={spe}>{spe}</Option>)}
                    </Select>
                    <Typography fontSize="medium" fontWeight="xl" id="ios-example-demo" mb={1}>Compétence concernée</Typography>
                    <Select
                    placeholder="Sélectionne la compétence concernée"
                    name="stat"
                    required
                    value={currentSpecial.stat || ""}
                    sx={{ width: "100%", whiteSpace: "normal !important"}}
                    onChange={(_event, newValue) => {
                        setCurrentSpecial({...currentSpecial, stat: newValue});
                      }}
                >
                    {[...ALL_SKILLS].sort().map((skill) => <Option key={skill} value={skill}>{skill}</Option>)}
                </Select>
                <Typography fontSize="medium" fontWeight="l" id="ios-example-demo" mb={1}>Bonus - 1D6</Typography>
            </Stack>
        </Sheet>
    );
}