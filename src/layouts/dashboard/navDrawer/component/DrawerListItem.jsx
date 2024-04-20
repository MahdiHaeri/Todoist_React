import navConfig from "../config-navigation.jsx";
import {Icon, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Typography} from "@mui/material";

export const DrawerListItem = () => {
    return (
        <List disablePadding>
            {navConfig.map((item) => (
                <ListItem key={item.title} disablePadding>
                    <ListItemButton sx={{borderRadius: 1, padding: 1}}>
                        <Stack width={'100%'} direction={"row"} justifyContent={"start"} alignItems={"center"} gap={1}>
                            <Icon>
                                {item.icon}
                            </Icon>
                            <Typography variant={"subtitle2"}>
                                {item.title}
                            </Typography>
                        </Stack>
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    )
}