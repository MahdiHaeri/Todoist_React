import {Button, Card, Icon, Stack, Typography} from "@mui/material";
import {TodoBoardHeader} from "./component/TodoBoardHeader.jsx";
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import {TodoBoardAddButton} from "./component/TodoBoardAddButton.jsx";
import {TodoCard} from "./component/TodoCard.jsx";


export const TodoBoard = () => {
    return (
        <Stack width={260} padding={1} gap={1}>
            <TodoBoardHeader/>
            <Stack direction={"column"} width={'100%'} gap={1}>
                <TodoCard/>
                <TodoCard/>
                <TodoCard/>
                <TodoCard/>
                <TodoCard/>
            </Stack>
            <TodoBoardAddButton/>
        </Stack>
    )
}