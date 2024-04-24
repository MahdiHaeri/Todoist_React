import navConfig from "../config-navigation.jsx";
import {Icon, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Typography} from "@mui/material";
import {useNavigate} from "react-router";

export const DrawerListItem = () => {
    const navigate = useNavigate()
    return (
        <List disablePadding>
            {navConfig.map((item) => (
                <ListItem key={item.title} disablePadding>
                    <ListItemButton sx={{borderRadius: 1, padding: 1}} onClick={() => {
                        navigate(item.path)
                    }}>
                        <Stack width={'100%'} direction={"row"} justifyContent={"start"} alignItems={"center"} gap={1}>
                            {item.icon}
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