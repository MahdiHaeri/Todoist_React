import navConfig from "../config-navigation.jsx";
import {List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {NavLink} from "react-router-dom";

export const DrawerListItem = () => {
    return (
        <List disablePadding>
            {navConfig.map((item) => (
                <ListItem key={item.title} disablePadding>
                    <ListItemButton sx={{borderRadius: 1}}>
                        <ListItemIcon>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.title}/>
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    )
}