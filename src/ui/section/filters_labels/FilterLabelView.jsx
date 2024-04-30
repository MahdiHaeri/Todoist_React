import {Stack, Typography} from "@mui/material";
import {FilterLabelAccordion} from "./component/FilterLabelAccordion.jsx";

export const FilterLabelView = () => {
    return (
        <Stack
            direction={"column"}
            width={'100%'}
            justifyContent={"center"}
            alignItems={"center"}
        >
            <Stack
                direction={"column"}
                width={'70%'}
                justifyContent={"start"}
                alignItems={"start"}
                gap={1}
            >
                <Typography variant={'h5'} fontWeight={'bold'}>
                    Filters & Labels
                </Typography>
                <FilterLabelAccordion title={"Filters"}/>
                <FilterLabelAccordion title={"Labels"}/>
            </Stack>
        </Stack>
    )
}