import {Button, Chip, Divider, Icon, IconButton, InputBase, Stack, Typography} from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import {useState} from "react";
import InboxRoundedIcon from '@mui/icons-material/InboxRounded';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import EventNoteRoundedIcon from '@mui/icons-material/EventNoteRounded';
import EmojiFlagsRoundedIcon from '@mui/icons-material/EmojiFlagsRounded';
import AccessAlarmRoundedIcon from '@mui/icons-material/AccessAlarmRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';

export const TodoBoardAddButton = () => {
    const [active, setActive] = useState(false);

    function toggleActive() {
        setActive(!active);
    }

    return active ? (
            <Stack
                width={'100%'}
                justifyContent={"start"}
                alignItems={"center"}
                bgcolor={'background.default'}
                borderRadius={2.5}
                sx={{
                    border: '1px solid',
                    borderColor: 'divider',
                }}
            >
                <Stack
                    width={'100%'}
                    padding={1}
                    gap={1}
                >
                    <Stack
                        width={'100%'}
                        overflow={"auto"}
                        maxHeight={250}
                    >
                        < InputBase
                            fullWidth
                            placeholder={"Task name"}
                            sx={{
                                fontSize: 14,
                                fontWeight: 'bold',
                            }}
                        />
                        <InputBase
                            fullWidth
                            placeholder={"Description"}
                            multiline={true}
                            sx={{
                                fontSize: 12,
                                fontWeight: 'normal',
                                color: 'text.secondary',
                                lineHeight: 2
                            }}
                        />
                    </Stack>
                    <Stack
                        width={'100%'}
                        direction={"row"}
                        justifyContent={"start"}
                        alignItems={"center"}
                        gap={1}
                    >
                        <IconButton
                            size={"small"}
                            disableTouchRipple
                            sx={{
                                border: 1,
                                borderColor: 'divider',
                                borderRadius: 1,
                                color: 'text.secondary'
                            }}
                        >
                            <EventNoteRoundedIcon fontSize={"small"}/>
                        </IconButton>
                        <IconButton
                            size={"small"}
                            disableTouchRipple
                            sx={{
                                border: 1,
                                borderColor: 'divider',
                                borderRadius: 1,
                                color: 'text.secondary'
                            }}
                        >
                            <EmojiFlagsRoundedIcon fontSize={"small"}/>
                        </IconButton>
                        <IconButton
                            size={"small"}
                            disableTouchRipple
                            sx={{
                                border: 1,
                                borderColor: 'divider',
                                borderRadius: 1,
                                color: 'text.secondary',
                                gap: .5,
                            }}
                        >
                            <AccessAlarmRoundedIcon fontSize={"small"}/>
                            <Chip
                                variant={"outlined"}
                                label={
                                <Typography variant={"caption"} fontSize={10} letterSpacing={1} fontWeight={"bold"}>
                                    UPGRADE
                                </Typography>
                                }
                                size={"small"}
                                color={"warning"}
                                sx={{
                                    borderRadius: 1,
                                    height: 20,
                                    color: 'warning.main',
                                }}
                            />
                        </IconButton>
                        <IconButton
                            size={"small"}
                            disableTouchRipple
                            sx={{
                                border: 1,
                                borderColor: 'divider',
                                borderRadius: 1,
                                color: 'text.secondary'
                            }}
                        >
                            <MoreHorizRoundedIcon fontSize={"small"}/>
                        </IconButton>
                    </Stack>
                </Stack>
                <Divider flexItem={true}/>
                <Stack
                    direction={"row"}
                    width={'100%'}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    padding={1}
                >
                    <Button
                        variant={"text"}
                        color={'inherit'}
                        sx={{
                            '&.MuiButton-text': {textTransform: 'none'},
                            color: 'text.secondary'
                        }}
                        startIcon={<InboxRoundedIcon/>}
                        endIcon={<ArrowDropDownRoundedIcon/>}
                        size={"small"}
                    >
                        Inbox
                    </Button>

                    <Stack direction={"row"} gap={1}>
                        <Button
                            size={"small"}
                            variant={"contained"}
                            color={'inherit'}
                            sx={{
                                width: 32,
                                height: 32,
                                minWidth: 0,
                                minHeight: 0,
                            }}
                            onClick={toggleActive}
                        >
                            <CloseRoundedIcon fontSize={"small"}/>
                        </Button>
                        <Button
                            size={"small"}
                            variant={"contained"}
                            color={'primary'}
                            sx={{
                                width: 32,
                                height: 32,
                                minWidth: 0,
                                minHeight: 0,
                            }}
                        >
                            <SendRoundedIcon fontSize={"small"}/>
                        </Button>
                    </Stack>
                </Stack>
            </Stack>
        ) :
        (
            <Button
                sx={{
                    display: 'flex',
                    justifyContent: 'start',
                    textTransform: 'none'
                }}
                onClick={toggleActive}
            >
                < Icon sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <AddRoundedIcon color={'primary'}/>
                </Icon>
                <Typography variant={"subtitle2"} sx={{color: 'text.secondary'}}>
                    Add task
                </Typography>
            </Button>
        )
}