import {IconButton, Stack, Typography} from "@mui/material";
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';


export const TodoBoardHeader = () => {
    return (
        <Stack direction={"row"} width={'100%'} justifyContent={"space-between"} alignItems={"center"}>
            <Stack direction={"row"} alignItems={"center"} justifyContent={"center"} gap={1}>
                <Typography variant={"subtitle1"} fontWeight={"bold"}>
                    React
                </Typography>
                <Typography variant={"subtitle2"} sx={{color: 'text.secondary'}}>
                    3
                </Typography>
            </Stack>
            <IconButton
                size={"small"}
                sx={{
                    borderRadius: 2,
                    "& .MuiTouchRipple-root .MuiTouchRipple-child": {
                        borderRadius: 2
                    }
                }}
            >
                <MoreHorizRoundedIcon/>
            </IconButton>
        </Stack>
    )
}