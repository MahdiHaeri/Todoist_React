import {Stack} from "@mui/material";
import {UpcomingBoard} from "./UpcomingBoard.jsx";

export const UpcomingDown = () => {
    return (
        <Stack
            direction={"row"}
            width={'100%'}
            paddingX={4}
            gap={1}
        >
            <UpcomingBoard/>
            <UpcomingBoard/>
            <UpcomingBoard/>
            <UpcomingBoard/>
        </Stack>
    )
}