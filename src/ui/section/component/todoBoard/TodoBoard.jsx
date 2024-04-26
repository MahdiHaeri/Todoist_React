import {Button, Card, Icon, Stack, Typography} from "@mui/material";
import {TodoBoardHeader} from "./component/TodoBoardHeader.jsx";
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import {TodoBoardAddButton} from "./component/TodoBoardAddButton.jsx";
import {TodoCard} from "./component/TodoCard.jsx";
import {useState} from "react";


export const TodoBoard = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(true);
    };

    const handleHoverExit = () => {
        setIsHovered(false);
    };

    return (
        <Stack
            width={260}
            minWidth={260}
            borderRadius={1}
            border={1}
            borderColor={'transparent'}
            draggable={true}
            sx={{
                transition: '.3s all',
                ...(isHovered &&
                    {
                        borderColor: 'action.hover',
                        cursor: 'grab',
                    }
                )
            }}
        >
            <TodoBoardHeader handleHover={handleHover} handleHoverExit={handleHoverExit}/>
            <Stack direction={"column"} width={'100%'} gap={1} padding={1}>
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