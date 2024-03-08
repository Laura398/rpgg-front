import { Input, Option, Select, Sheet, Stack, Typography } from "@mui/joy";
import { Character } from "../../../types/Character.type";
import CloseIcon from '@mui/icons-material/Close';
import { ALL_SKILLS } from "../../../types/Characters.constants";

export default function TalentsSelection(props: { title: string, talent: Character['talent'] | Character['weakness'], setTalent: (talent: Character['talent'] | Character['weakness']) => void, bonus: string}) {
    const {title, talent, setTalent, bonus} = props;

    return (
        <Sheet variant="soft" sx={{ width: {sm: "100%", md: "45%"}, p: 2, borderRadius: 'sm' }}>
            <Stack spacing={2} alignItems="flex-start">
                <Stack width="100%" flexDirection="row" justifyContent="space-between">
                    <Typography fontSize="medium" fontWeight="xl" id="ios-example-demo" mb={1}>{title}</Typography>
                    <CloseIcon onClick={() => setTalent({name: '', skills: []})} />
                </Stack>
                <Input id="talent-name" name="talent-name" type="text" placeholder={title} sx={{width: "100%"}} value={talent?.name || ''} onChange={(e) => setTalent({...talent, name: e.target.value})} />
                <Typography fontSize="medium" fontWeight="xl" id="ios-example-demo" mb={1}>Compétences concernées</Typography>
                <Select
                    placeholder="Sélectionne une ou plusieurs compétences"
                    name="skills"
                    required
                    multiple
                    value={talent?.skills || []}
                    sx={{ width: "100%", whiteSpace: "normal !important"}}
                    onChange={(_event: any, value: string[]) => setTalent({...talent, skills: value})}
                >
                    {[...ALL_SKILLS].sort().map((skill) => <Option key={skill} value={skill}>{skill}</Option>)}
                </Select>
                <Typography fontSize="medium" fontWeight="l" id="ios-example-demo" mb={1}>Compétences sélectionnées :</Typography>
                <Typography fontSize="small" fontWeight="l" id="ios-example-demo" mb={1}>{talent?.skills?.join(', ')}</Typography>
                <Typography fontSize="medium" fontWeight="l" id="ios-example-demo" mb={1}>{bonus}</Typography>
            </Stack>
        </Sheet>
    );
}