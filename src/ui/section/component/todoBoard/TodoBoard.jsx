import {Stack, Typography} from "@mui/material";
import {TodoBoardHeader} from "./component/TodoBoardHeader.jsx";


export const TodoBoard = () => {
    return (
        <Stack width={260} padding={1}>
            <TodoBoardHeader/>
            <Stack>
                <Stack direction={"row"} justifyContent={"start"} alignItems={"center"} gap={1}>
                    <Typography variant={"subtitle2"} fontWeight={"bold"}>
                        Add task
                    </Typography>
                </Stack>
            </Stack>
        </Stack>
    )
}