import {Divider, Fade, IconButton, Stack, Typography} from "@mui/material";
import {useState} from "react";
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import {FilterLabelAccordionItem} from "./FilterLabelAccordionItem.jsx";

export const FilterLabelAccordion = ({title}) => {
    const [open, setOpen] = useState(false)

    function handleClick() {
        setOpen(!open)
    }

    return (
        <Stack
            width={'100%'}
            direction={"row"}
            display={"flex"}
            justifyContent={"start"}
            alignItems={"start"}
            gap={1}
        >
            <Stack>
                <IconButton
                    size={"small"}
                    sx={{
                        width: 28,
                        height: 28,
                        borderRadius: 2,
                        color: 'text.secondary',
                        "& .MuiTouchRipple-root .MuiTouchRipple-child": {
                            borderRadius: 2
                        }
                    }}
                    onClick={handleClick}
                >
                    <KeyboardArrowDownRoundedIcon fontSize={"small"}/>
                </IconButton>
            </Stack>

            <Stack
                flex={1}
                direction={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={.5}
            >
                <Stack
                    width={'100%'}
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                >
                    <Stack
                        direction={"row"}
                        justifyContent={"start"}
                        alignItems={"center"}
                        gap={1}
                    >
                        <Typography
                            variant={"subtitle2"}
                            fontWeight={"bold"}
                        >
                            {title}
                        </Typography>
                    </Stack>
                    <Stack>
                        <IconButton
                            size={"small"}
                            sx={{
                                width: 28,
                                height: 28,
                                borderRadius: 2,
                                color: 'text.secondary',
                                "& .MuiTouchRipple-root .MuiTouchRipple-child": {
                                    borderRadius: 2
                                }
                            }}
                        >
                            <AddRoundedIcon/>
                        </IconButton>
                    </Stack>
                </Stack>
                <Divider flexItem/>
                {open &&
                    <Stack
                        width={'100%'}
                        gap={.5}
                    >
                        <FilterLabelAccordionItem lable={'Priority 1'}/>
                        <Divider flexItem/>
                        <FilterLabelAccordionItem lable={'Priority 2'}/>
                        <Divider flexItem/>
                    </Stack>
                }
            </Stack>
        </Stack>
    )
}