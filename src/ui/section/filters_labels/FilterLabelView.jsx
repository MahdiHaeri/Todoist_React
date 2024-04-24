import {Stack, Typography} from "@mui/material";
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import {TodoBoard} from "../component/todoBoard/TodoBoard.jsx";

export const FilterLabelView = () => {
    return (
        <Stack direction={"column"} width={'100%'} justifyContent={"center"} alignItems={"center"}>
            <Stack direction={"row"} width={'70%'} justifyContent={"start"} alignItems={"start"}>
                <Typography variant={'h5'} fontWeight={'bold'}>
                    Filters & Labels
                </Typography>
            </Stack>
        </Stack>
    )
}