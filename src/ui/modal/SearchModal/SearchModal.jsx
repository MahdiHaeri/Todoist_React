import {
    Divider,
    Fade,
    InputAdornment,
    InputBase,
    List,
    ListItem,
    ListItemButton,
    Modal,
    Stack,
    Typography
} from "@mui/material";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import SearchModalConfig from "./config-search.jsx";

export const SearchModal = ({open, onToggleOpen}) => {
    return (
        <Modal
            open={open}
            onClose={onToggleOpen}
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
            BackdropProps={{
                style: {
                    opacity: 0
                }
            }}
        >
            <Fade in={open}>
                <Stack
                    width={650}
                    maxHeight={450}
                    justifyContent={"start"}
                    alignItems={"center"}
                    bgcolor={'background.default'}
                    borderRadius={2.5}
                    boxShadow={24}
                    position={"absolute"}
                    top={180}
                    sx={{
                        border: '1px solid',
                        borderColor: 'background.paper',
                    }}
                    overflow={"hidden"}
                >
                    <Stack
                        width={'100%'}
                        padding={1}
                    >
                        <InputBase
                            fullWidth
                            placeholder={"Search or type a command..."}
                            startAdornment={
                                <InputAdornment position="start">
                                    <SearchRoundedIcon/>
                                </InputAdornment>
                            }
                            sx={{
                                fontSize: 16,
                                lineHeight: 2
                            }}
                        />
                    </Stack>
                    <Stack
                        width={'100%'}
                        overflow={"auto"}
                    >
                        {SearchModalConfig.sections.map((item, index) => (
                            <Stack width={'100%'} key={index}>
                                <Divider flexItem={true}/>
                                <Stack width={'100%'} paddingY={.1} paddingX={1.5}>
                                    <Typography variant={"caption"} sx={{color: 'text.secondary'}}>
                                        {item.title}
                                    </Typography>
                                </Stack>
                                <List disablePadding >
                                    {item.items.map((subItem, subIndex) => (
                                        <ListItem key={subIndex} disablePadding sx={{'&:hover': {borderLeft: 2, borderColor: 'primary.main'}}}>
                                            <ListItemButton sx={{paddingX: 2}}>
                                                <Stack
                                                    width={'100%'}
                                                    direction={"row"}
                                                    justifyContent={"start"}
                                                    alignItems={"center"}
                                                    gap={1}
                                                >
                                                    {subItem.icon}
                                                    <Typography variant={"subtitle2"}>
                                                        {subItem.title}
                                                    </Typography>
                                                </Stack>
                                            </ListItemButton>
                                        </ListItem>
                                    ))}
                                </List>
                            </Stack>
                        ))}
                    </Stack>
                </Stack>
            </Fade>
        </Modal>
    )
}