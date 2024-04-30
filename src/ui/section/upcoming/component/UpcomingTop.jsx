import {Button, Divider, Stack, Typography} from "@mui/material";
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';


export const UpcomingTop = () => {
    return (
        <Stack
            width={'100%'}
            direction={"column"}
            gap={1}
            paddingX={4}
        >
            <Stack
                width={'100%'}
                justifyContent={"center"}
                alignItems={"start"}
            >
                <Typography variant={"h5"} fontWeight={"bold"}>
                    Upcoming
                </Typography>
            </Stack>
            <Stack
                width={'100%'}
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
            >
                <Button
                    variant={"text"}
                    sx={{
                        textTransform: 'none'
                    }}
                    color={'inherit'}
                >
                    <Typography variant={"subtitle2"}>
                        April 2024
                    </Typography>
                    <KeyboardArrowDownRoundedIcon/>
                </Button>

                <Stack
                    width={100}
                    display={"flex"}
                    direction={"row"}
                    border={1}
                    borderRadius={1}
                    sx={{
                        borderColor: 'divider'
                    }}
                    overflow={"hidden"}
                >
                    <Button
                        size={"small"}
                        color={'inherit'}
                        sx={{
                            borderRadius: 0,
                            minWidth: 0,
                            flex: 1
                        }}
                    >
                        <KeyboardArrowLeftRoundedIcon
                            fontSize={"small"}
                            sx={{color: 'text.secondary'}}
                        />
                    </Button>
                    <Divider
                        variant={"middle"}
                        flexItem
                        orientation={"vertical"}
                    />
                    <Button
                        size={"small"}
                        color={"inherit"}
                        sx={{
                            borderRadius: 0,
                            textTransform: 'none',
                            minWidth: 0,
                            flex: 2
                        }}
                    >
                        <Typography
                            variant={"caption"}
                            sx={{color: 'text.secondary'}}
                            fontWeight={'bold'}
                        >
                            Today
                        </Typography>
                    </Button>
                    <Divider
                        variant={"middle"}
                        flexItem
                        orientation={"vertical"}
                    />
                    <Button
                        size={"small"}
                        color={"inherit"}
                        sx={{
                            borderRadius: 0,
                            minWidth: 0,
                            flex: 1
                        }}
                    >
                        <KeyboardArrowRightRoundedIcon
                            fontSize={"small"}
                            sx={{color: 'text.secondary'}}
                        />
                    </Button>
                </Stack>
            </Stack>
        </Stack>
    )
}