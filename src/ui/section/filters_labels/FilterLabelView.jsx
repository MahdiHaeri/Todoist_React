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
                <Stack
                    width={'100%'}
                    paddingX={4.5}
                >
                    <Typography variant={'h5'} fontWeight={'bold'}>
                        Filters & Labels
                    </Typography>
                </Stack>
                <Stack
                    width={'100%'}
                    gap={4}
                >
                    <FilterLabelAccordion title={"Filters"}/>
                    <FilterLabelAccordion title={"Labels"}/>
                </Stack>
            </Stack>
        </Stack>
    )
}