import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Close';
import { Input, Sheet, Stack, Typography } from "@mui/joy";

export default function InventoryList (props: {inventory: string[], setInventory: any}) {
    const { inventory, setInventory } = props;

    const addObject = () => {
        console.log(inventory);
        
        const input = document.getElementById('item-name') as HTMLInputElement;        
        if (input.value && input.value !== '') {
            setInventory([...inventory, input.value]);
            input.value = '';
        }
    }

    const removeItem = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
        const item = e.currentTarget.parentElement?.firstChild?.textContent;        
        if (item) {
            setInventory(inventory.filter((i) => i !== item));
        }
    }

    return (
        <Sheet variant="soft" sx={{ width: "100%", p: 2, borderRadius: 'sm' }}>
            <Typography
                level="h3"
                fontSize="xl2"
                fontWeight="xl"
                id="ios-example-demo"
                mb={1}
            >
                Inventaire
            </Typography>
            <Stack spacing={2} alignItems="center">
                <Input id="item-name" name="name" type="text" placeholder="Nom de l'objet" sx={{width: "80%"}} onKeyUp={(e) => {if (e.key === "Enter") addObject()}}  endDecorator={<CheckCircleIcon onClick={addObject} />} />
                    <Stack width="90%" spacing={2} justifyContent="space-between" direction={{sm: "column", md: "row"}} flexWrap="wrap">
                    {inventory && inventory.map((item: string, index: number) => (
                        <Stack key={index} minWidth="40%" maxWidth="100%" spacing={2} justifyContent="space-between" direction="row">
                            <Typography level="body-sm" textAlign="left" sx={{
                                textOverflow: "initial",
                                whiteSpace: "wrap",
                                overflow: "auto",
                            }}>{item}</Typography>
                            <CloseIcon onClick={removeItem} />
                        </Stack>
                    ))}
                    </Stack>
            </Stack>
        </Sheet>
    );
}

function concat(inventory: string[], value: string) {
    throw new Error('Function not implemented.');
}
