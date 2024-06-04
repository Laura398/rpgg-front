/* eslint-disable @typescript-eslint/no-explicit-any */
import CasinoIcon from "@mui/icons-material/Casino";
import PaidIcon from "@mui/icons-material/Paid";
import { Input } from "@mui/joy";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemContent from "@mui/joy/ListItemContent";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import { Box } from "@mui/material";
import { amber, grey, red } from "@mui/material/colors";

export default function Money(props: {
  title: string;
  statsList: { name: string; field: string; description?: string }[];
  stats: any;
  setStats: any;
  noRandom?: boolean;
}) {
  const { title, statsList, noRandom } = props;

  return (
    <Sheet
      variant="soft"
      sx={{ width: "100%", p: 2, m: "10px", borderRadius: "sm" }}
    >
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
        sx={{
          width: "100%",
          margin: "auto",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          flexWrap: "wrap",
          "--ListItemDecorator-size": "56px",
        }}
      >
        {statsList.map((stat, index) => {
          let color;
          if (stat.name === "Or") {
            color = amber[300];
          } else if (stat.name === "Argent") {
            color = grey[400];
          } else {
            color = red[900];
          }
          return (
            <ListItem key={index}>
              <ListItemContent
                sx={{
                  display: "flex",
                  flexDirection: { sm: "column", md: "row" },
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                <Box sx={{ margin: "10px 20px 0 0" }}>
                  <Typography level="title-sm" textAlign="left">
                    <PaidIcon sx={{ color: color }} />
                  </Typography>
                  {stat.description && (
                    <Typography level="body-sm" textAlign="left">
                      {stat.description}
                    </Typography>
                  )}
                </Box>
                <Input
                  id={stat.name}
                  name={stat.field}
                  startDecorator={
                    !noRandom && (
                      <CasinoIcon
                        className={stat.field}
                        onClick={() =>
                          props.setStats({
                            ...props.stats,
                            [stat.field]: Math.floor(Math.random() * 20),
                          })
                        }
                      />
                    )
                  }
                  type="number"
                  placeholder="0"
                  sx={{
                    maxWidth: { sm: "50%", md: "50%" },
                    height: "40px",
                    borderRadius: "sm",
                    border: "1px solid #E0E0E0",
                    padding: "0 10px",
                  }}
                  value={props.stats[stat.field] || 0}
                  onChange={(e) =>
                    props.setStats({
                      ...props.stats,
                      [stat.field]: e.target.value,
                    })
                  }
                />
              </ListItemContent>
            </ListItem>
          );
        })}
      </List>
    </Sheet>
  );
}
