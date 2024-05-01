import {Divider, Icon, IconButton, Stack, Typography} from "@mui/material";

import LocalOfferRoundedIcon from '@mui/icons-material/LocalOfferRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import DriveFileRenameOutlineRoundedIcon from '@mui/icons-material/DriveFileRenameOutlineRounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import {useState} from "react";

export const FilterLabelAccordionItem = ({lable}) => {

    const [hover, setHover] = useState(false)

    function handleMouseEnter() {
        setHover(true)
    }

    function handleMouseLeave() {
        setHover(false)
    }

    return (
        <Stack
            width={'100%'}
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            sx={{
                transition: 'all 0.3s',
                cursor: 'pointer',
                '&:active': {
                    backgroundColor: 'background.paper',
                }
            }}
        >
            <Stack
                direction={"row"}
                justifyContent={"start"}
                alignItems={"center"}
            >
                <Icon
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: 32,
                        height: 32,
                        color: 'text.secondary',
                    }}
                >
                    <LocalOfferRoundedIcon fontSize={"small"}/>
                </Icon>
                <Typography
                    variant={"subtitle2"}
                >
                    {lable}
                </Typography>
            </Stack>
            <Stack
                direction={"row"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={1}
            >
                <IconButton
                    size={"small"}
                    sx={{
                        transition: 'opacity 0.3s',
                        opacity: hover ? 1 : 0,
                        width: 28,
                        height: 28,
                        borderRadius: 2,
                        color: 'text.secondary',
                        "& .MuiTouchRipple-root .MuiTouchRipple-child": {
                            borderRadius: 2
                        },
                    }}
                >
                    <FavoriteBorderRoundedIcon fontSize={"small"}/>
                </IconButton>
                <IconButton
                    size={"small"}
                    sx={{
                        transition: 'opacity 0.3s',
                        opacity: hover ? 1 : 0,
                        width: 28,
                        height: 28,
                        borderRadius: 2,
                        color: 'text.secondary',
                        "& .MuiTouchRipple-root .MuiTouchRipple-child": {
                            borderRadius: 2
                        },
                    }}
                >
                    <DriveFileRenameOutlineRoundedIcon fontSize={"small"}/>
                </IconButton>
                <IconButton
                    size={"small"}
                    sx={{
                        transition: 'opacity 0.3s',
                        opacity: hover ? 1 : 0,
                        width: 28,
                        height: 28,
                        borderRadius: 2,
                        color: 'text.secondary',
                        "& .MuiTouchRipple-root .MuiTouchRipple-child": {
                            borderRadius: 2
                        },
                    }}
                >
                    <MoreHorizRoundedIcon fontSize={"small"}/>
                </IconButton>
            </Stack>
        </Stack>
    )
}