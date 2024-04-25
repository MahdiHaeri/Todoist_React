import {Button, Chip, Divider, InputBase, Modal, Stack} from "@mui/material";
import InboxRoundedIcon from '@mui/icons-material/InboxRounded';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import EventNoteRoundedIcon from '@mui/icons-material/EventNoteRounded';
import EmojiFlagsRoundedIcon from '@mui/icons-material/EmojiFlagsRounded';
import AccessAlarmRoundedIcon from '@mui/icons-material/AccessAlarmRounded';

export const AddTaskModal = ({open, onToggleOpen}) => {
    return (
        <Modal
            open={open}
            onClose={onToggleOpen}
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
            disableAutoFocus={true}
        >
            <Stack
                width={550}
                justifyContent={"start"}
                alignItems={"center"}
                bgcolor={'background.default'}
                borderRadius={3}
                position={"absolute"}
                top={100}
                sx={{
                    border: '1px solid',
                    borderColor: 'background.paper',
                }}
            >
                <Stack
                    width={'100%'}
                    padding={2}
                    gap={1}
                >
                    <Stack
                        width={'100%'}
                        overflow={"auto"}
                        maxHeight={250}
                        sx={{
                            '&::-webkit-scrollbar': {
                                width: '.4em'
                            },
                            '&::-webkit-scrollbar-track': {},
                            '&::-webkit-scrollbar-thumb': {
                                backgroundColor: 'background.paper',
                                borderRadius: 4
                            }
                        }}
                    >
                        < InputBase
                            fullWidth
                            placeholder={"Title"}
                            sx={{
                                fontSize: 24,
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
                        <Chip icon={<EventNoteRoundedIcon color={'text.secondary'}/>} label={"Due date"} size={"small"}
                              variant={"outlined"} onClick={() => {
                        }} sx={{borderRadius: 1, color: 'text.secondary'}}/>
                        <Chip icon={<EmojiFlagsRoundedIcon color={'text.secondary'}/>} label={"Priority"} size={"small"}
                              variant={"outlined"} onClick={() => {
                        }} sx={{borderRadius: 1, color: 'text.secondary'}}/>
                        <Chip icon={<AccessAlarmRoundedIcon color={'text.secondary'}/>} label={"Reminders"}
                              size={"small"} variant={"outlined"} onClick={() => {
                        }} sx={{borderRadius: 1, color: 'text.secondary'}}/>
                    </Stack>
                </Stack>
                <Divider flexItem={true}/>
                <Stack
                    direction={"row"}
                    width={'100%'}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    padding={2}
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
                        s
                    >
                        Inbox
                    </Button>

                    <Stack direction={"row"} gap={1}>
                        <Button
                            variant={"contained"}
                            color={'inherit'}
                            sx={{'&.MuiButton-contained': {textTransform: 'none'}}}
                            size={"small"}
                        >
                            Cancel
                        </Button>
                        <Button
                            variant={"contained"}
                            color={'primary'}
                            sx={{'&.MuiButton-contained': {textTransform: 'none'}}}
                            size={"small"}
                        >
                            Add task
                        </Button>
                    </Stack>
                </Stack>
            </Stack>
        </Modal>
    )
}