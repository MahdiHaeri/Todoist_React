import {Divider, Stack} from "@mui/material";
import {UpcomingTop} from "./component/UpcomingTop.jsx";
import {UpcomingDown} from "./component/UpcomingDown.jsx";

export const UpcomingView = () => {
    return (
        <Stack
            width={'100%'}
            height={'100%'}
            gap={1}
        >
            <UpcomingTop/>
            <Divider flexItem={true}/>
            <UpcomingDown/>
        </Stack>
    )
}