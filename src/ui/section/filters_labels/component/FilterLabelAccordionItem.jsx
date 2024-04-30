import {Divider, Icon, Stack, Typography} from "@mui/material";
import LocalOfferRoundedIcon from '@mui/icons-material/LocalOfferRounded';
export const FilterLabelAccordionItem = ({lable}) => {
    return (
        <Stack
            width={'100%'}
        >
            <Stack
                direction={"row"}
                justifyContent={"start"}
                alignItems={"center"}
            >
                <Icon
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: 32,
                        height: 32,
                        color: 'text.secondary',
                    }}
                >
                    <LocalOfferRoundedIcon fontSize={"small"}/>
                </Icon>
                <Typography
                    variant={"subtitle2"}
                >
                    {lable}
                </Typography>
            </Stack>
        </Stack>
    )
}