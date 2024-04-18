import navConfig from "../config-navigation.jsx";
import {List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack} from "@mui/material";
import {NavLink} from "react-router-dom";

export const DrawerListItem = () => {
    return (
        <List disablePadding>
            {navConfig.map((item) => (
                <ListItem key={item.title} dense disablePadding >
                    <ListItemButton sx={{borderRadius: 1}}>
                        <Stack width={'100%'} direction={"row"} justifyContent={"center"} alignItems={"center"} gap={1}>
                            {item.icon}
                            <ListItemText primary={item.title}/>
                        </Stack>
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    )
}