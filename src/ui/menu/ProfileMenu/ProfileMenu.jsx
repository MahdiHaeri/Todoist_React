import {Button, Divider, Fade, Icon, List, ListItemButton, Menu, Stack, SvgIcon, Typography} from "@mui/material";
import profileMenuConfig from './config-profileMenu';
import {alpha} from "@mui/material/styles";

export const ProfileMenu = ({open, anchorEl, onClose}) => {
    return (
        <Menu
            open={open}
            anchorEl={anchorEl}
            onClose={onClose}
            anchorOrigin={
                {
                    vertical: 'bottom',
                    horizontal: 'left',
                }
            }

            transformOrigin={
                {
                    vertical: 'top',
                    horizontal: 'left',
                }
            }
            TransitionComponent={Fade}

            sx={{
                '& .MuiMenu-paper': {
                    borderRadius: 2.5,
                    boxShadow: 4,
                    border: 1,
                    borderColor: 'divider',
                },

                // remove padding
                '& .MuiList-root': {
                    padding: 0
                }
            }}
        >
            <Stack
                width={275}
                sx={{
                    backgroundColor: 'background.paper',
                }}
            >
                {profileMenuConfig.sections.map((section, sectionIndex) => (
                    <Stack
                        key={sectionIndex}
                    >
                        <Stack
                            padding={.5}
                        >
                            <List disablePadding sx={{padding: 0}}>
                                {section.items.map((item, itemIndex) => (
                                    <ListItemButton
                                        key={itemIndex}
                                        disableGutters
                                        sx={{
                                            borderRadius: 1.5,
                                            paddingX: 1,
                                            paddingY: .5,
                                        }}
                                    >
                                        <Stack
                                            width={'100%'}
                                            direction={"row"}
                                            justifyContent={"start"}
                                            alignItems={"center"}
                                            gap={1}
                                        >
                                            <Icon
                                                sx={{
                                                    color: item.iconColor || 'text.secondary',
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                }}
                                                fontSize={"small"}
                                            >
                                                {item.icon}
                                            </Icon>
                                            <Stack flex={1}>
                                                <Typography
                                                    variant={"subtitle2"}
                                                    fontWeight={item.titleFontWeight || 'normal'}
                                                >
                                                    {item.title}
                                                </Typography>
                                                {item.description && (
                                                    <Typography variant={"caption"} sx={{color: 'text.secondary'}}>
                                                        {item.description}
                                                    </Typography>
                                                )}
                                            </Stack>
                                            <Stack height={'100%'} justifyContent={"center"} alignItems={"center"}>
                                                <Typography variant={"caption"} sx={{color: 'text.secondary'}}>
                                                    {item.endAdornment}
                                                </Typography>
                                            </Stack>
                                        </Stack>
                                    </ListItemButton>
                                ))}
                            </List>
                        </Stack>
                        <Divider flexItem={true}/>
                    </Stack>
                ))}
                <Stack
                    padding={1}
                >
                    <Stack direction={"row"} justifyContent={"start"} alignItems={"center"}>
                        <Button
                            color={'inherit'}
                            sx={{
                                textTransform: 'none',
                            }}
                        >
                            <Typography variant={"caption"}>
                                v1.0.0
                            </Typography>
                        </Button>
                        <Button
                            color={'inherit'}
                            sx={{
                                textTransform: 'none',
                            }}
                        >
                            <Typography variant={"caption"}>
                                What's new
                            </Typography>
                        </Button>
                    </Stack>
                </Stack>
            </Stack>
        </Menu>
    )
}