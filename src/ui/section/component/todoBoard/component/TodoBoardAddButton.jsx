import {Button, Icon, Typography} from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

export const TodoBoardAddButton = () => {
    return (
        <Button sx={{display: 'flex', justifyContent: 'start', textTransform: 'none'}}>
            < Icon sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <AddRoundedIcon color={'primary'}/>
            </Icon>
            <Typography variant={"subtitle2"} sx={{color: 'text.secondary'}}>
                Add task
            </Typography>
        </Button>
    )
}