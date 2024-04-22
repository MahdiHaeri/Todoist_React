import {Card, Checkbox, IconButton, Stack, Typography} from "@mui/material";
import {useState} from "react";
import RadioButtonUncheckedRoundedIcon from '@mui/icons-material/RadioButtonUncheckedRounded';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';

export const TodoCard = () => {
    const [checked, setChecked] = useState(false)

    return (
        <Card sx={{padding: 1}}>
            <Stack direction={"row"} gap={1}>
                <Checkbox
                    checked={checked}
                    onClick={() => setChecked(!checked)}
                    icon={<RadioButtonUncheckedRoundedIcon/>}
                    checkedIcon={<CheckCircleOutlineRoundedIcon/>}
                    size={'medium'}
                    sx={{
                        width: 32,
                        height: 32,
                    }}
                />
                <Stack flex={1}>
                    <Typography variant={"subtitle2"}>
                        Task title
                    </Typography>
                    <Typography variant={"caption"} sx={{color: 'text.secondary'}}>
                        Task description
                    </Typography>
                </Stack>
                <IconButton
                    sx={{
                        width: 32,
                        height: 32,
                        borderRadius: 2,
                        "& .MuiTouchRipple-root .MuiTouchRipple-child": {
                            borderRadius: 2
                        }
                    }}
                >
                    <MoreHorizRoundedIcon/>
                </IconButton>
            </Stack>
        </Card>
    )
}