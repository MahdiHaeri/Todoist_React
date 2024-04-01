import navConfig from "../config-navigation.jsx";
import {List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {NavLink} from "react-router-dom";

export const DrawerListItem = () => {
    return (
        <List>
            {navConfig.map((item) => (
                <ListItem key={item.title}>
                    <ListItemButton>
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