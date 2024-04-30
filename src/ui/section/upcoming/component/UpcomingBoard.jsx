import {Stack, Typography} from "@mui/material";
import {TodoBoardAddButton} from "../../component/todoBoard/component/TodoBoardAddButton.jsx";
import {TodoCard} from "../../component/todoBoard/component/TodoCard.jsx";

export const UpcomingBoard = () => {
    return (
        <Stack
            width={300}
            height={'100%'}
            borderRadius={2.5}
            gap={2}
            padding={1}
        >
            <Stack
                width={'100%'}
                direction={"row"}
                justifyContent={"start"}
                alignItems={"center"}
                gap={1}
            >
                <Typography
                    variant={"subtitle2"}
                    fontWeight={"bold"}
                >
                    30 Apr.Today
                </Typography>
                <Typography
                    variant={"subtitle2"}
                    sx={{
                        color: 'text.secondary'
                    }}
                >
                    0
                </Typography>
            </Stack>
            <Stack
                width={'100%'}
                minHeight={30}
                gap={1}
            >
                <TodoCard priority={'high'}/>
                <TodoCard priority={'medium'}/>
                <TodoBoardAddButton/>
            </Stack>
        </Stack>
    )
}