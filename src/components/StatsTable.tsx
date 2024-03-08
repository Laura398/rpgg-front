import { Input } from '@mui/joy';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemContent from '@mui/joy/ListItemContent';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import { Box } from '@mui/material';
import CasinoIcon from '@mui/icons-material/Casino';

export default function StatsTable(props: {title: string, statsList: {name: string, field: string, description?: string}[], stats: any, setStats: any}) {
    const { title, statsList } = props;

    return (
        <Sheet variant="soft" sx={{ width: {sm: "100%", md: "45%"}, p: 2, m: "10px", borderRadius: 'sm' }}>
            <Typography
                level="h3"
                fontSize="xl2"
                fontWeight="xl"
                id="ios-example-demo"
                mb={1}
            >
                {title}
            </Typography>
            <List
                aria-labelledby="ellipsis-list-demo"
                sx={{ '--ListItemDecorator-size': '56px' }}
            >
                {
                    statsList.map((stat, index) => (
                        <ListItem key={index}>
                            <ListItemContent sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap" }}>
                                <Box width={{sm: "100%", md: "70%"}}>
                                    <Typography level="title-sm" textAlign="left">{stat.name}</Typography>
                                    {stat.description && <Typography level="body-sm" textAlign="left">{stat.description}</Typography>}
                                </Box>
                                <Input
                                    id={stat.name}
                                    name={stat.field}
                                    startDecorator={<CasinoIcon className={stat.field} onClick={() => props.setStats({...props.stats, [stat.field]: Math.floor(Math.random() * 20)})} />}
                                    type="number"
                                    placeholder="0"
                                    sx={{ width: {sm: "100%", md: "30%"}, height: "40px", borderRadius: "sm", border: "1px solid #E0E0E0", padding: "0 10px"}}
                                    value={props.stats[stat.field] || 0}
                                    onChange={(e) => props.setStats({...props.stats, [stat.field]: e.target.value})}
                                />
                            </ListItemContent>
                        </ListItem>
                    ))
                }
            </List>
        </Sheet>
    );
}