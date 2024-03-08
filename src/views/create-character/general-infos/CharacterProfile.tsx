import EditRoundedIcon from '@mui/icons-material/EditRounded';
import { AspectRatio, Avatar, IconButton, Input, Sheet, Stack, Typography } from "@mui/joy";

export default function CharacterProfile(props: {avatar: string, setOpen: React.Dispatch<React.SetStateAction<boolean>>, inputsList: any[]}) {
    const {avatar, setOpen} = props;

    return (
        <Sheet variant="soft" sx={{ width: {sm: "100%", md: "45%"}, p: 2, borderRadius: 'sm' }}>
            <Stack spacing={2} alignItems="flex-start">
                <AspectRatio
                    ratio="1"
                    maxHeight={200}
                    sx={{ width: 200, borderRadius: '100%', margin: 'auto', border: '2px solid white', alignSelf: 'center'}}
                >
                    <Avatar src={avatar} sx={{ '--Avatar-size': '200px' }} />
                </AspectRatio>
                <IconButton
                    aria-label="upload new picture"
                    size="sm"
                    variant="outlined"
                    color="neutral"
                    sx={{
                    bgcolor: 'background.body',
                    position: 'absolute',
                    zIndex: 2,
                    borderRadius: '50%',
                    left: '52%',
                    top: 175,
                    boxShadow: 'sm',
                    }}
                    onClick={() => setOpen(true)}
                >
                    <EditRoundedIcon />
                </IconButton>
                {props.inputsList.map((input: any) => {                    
                    return (
                        <Stack alignItems="flex-start" width="100%" key={input.name}>
                            <Typography fontSize="medium" fontWeight="xl" id="ios-example-demo" mb={1}>{input.placeholder}</Typography>
                            <Input
                                id={input.name}
                                name={input.name}
                                type={input.type}
                                placeholder={input.placeholder}
                                sx={{width: "100%"}}
                                value={input.value}
                                onChange={input.onChange}
                                startDecorator={input.startDecorator}
                            />
                        </Stack>
                    );
                })}
            </Stack>
        </Sheet>
    );
}