import {Card, CardActionArea, Checkbox, IconButton, Stack, Typography} from "@mui/material";
import {useState} from "react";
import RadioButtonUncheckedRoundedIcon from '@mui/icons-material/RadioButtonUncheckedRounded';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import {alpha} from "@mui/material/styles";
import {grey} from "@mui/material/colors";


export const TodoCard = ({priority}) => {
    const [checked, setChecked] = useState(false)
    const [hover, setHover] = useState(false)

    function handleHover() {
        setHover(true)
    }

    function handleHoverExit() {
        setHover(false)
    }

    return (
        <Card
            sx={{
                transition: '.3s all',
                border: 1,
                borderColor: 'divider',
                borderRadius: 2.5,
                '&:hover': {
                    borderColor: 'text.secondary',
                    cursor: 'pointer'
                },
                '&:active': {
                    // borderColor: 'grey.300',
                    backgroundColor: alpha(grey[300], 0.1),
                }
            }}
        >
            <Stack
                direction={"row"}
                gap={1}
                padding={1}
                onMouseEnter={handleHover}
                onMouseLeave={handleHoverExit}
            >
                <Checkbox
                    checked={checked}
                    onClick={() => setChecked(!checked)}
                    icon={<RadioButtonUncheckedRoundedIcon/>}
                    color={`${priority}Priority`}
                    checkedIcon={<CheckCircleOutlineRoundedIcon/>}
                    size={'medium'}
                    sx={{
                        width: 32,
                        height: 32,
                        '& .MuiSvgIcon-root': {
                            color: `${priority}Priority.main`
                        }
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
                        transition: '.3s all',
                        width: 32,
                        height: 32,
                        borderRadius: 2,
                        "& .MuiTouchRipple-root .MuiTouchRipple-child": {
                            borderRadius: 2
                        },
                        opacity: hover ? 1 : 0
                    }}
                >
                    <MoreHorizRoundedIcon/>
                </IconButton>
            </Stack>
        </Card>
    )
}