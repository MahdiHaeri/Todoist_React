import {Stack, Typography} from "@mui/material";
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import {TodoBoard} from "../component/todoBoard/TodoBoard.jsx";

export const TodayView = () => {
    return (
        <Stack>
            <Stack direction={"column"} justifyContent={"center"} alignItems={"start"} gap={.5}>
                <Typography variant={"h5"} fontWeight={"bold"}>
                    Today
                </Typography>
                <Stack direction={"row"} justifyContent={"start"} alignItems={"center"} gap={.5}>
                    <CheckCircleOutlineRoundedIcon sx={{color: 'text.secondary', fontSize: 16}}/>
                    <Typography variant={"subtitle2"} sx={{color: 'text.secondary'}}>
                        3 tasks
                    </Typography>
                </Stack>
            </Stack>
            <Stack>
                <TodoBoard>

                </TodoBoard>
            </Stack>
        </Stack>
    )
}