import { Stack, Typography, useTheme } from "@mui/material";
import Grid from '@mui/material/Grid2';
import { Helmet } from "react-helmet-async";
import { languages, librariesFrameworks, tools, databases, backend } from "../constants";
import { BallCanvas } from "../components/canvas";

export function Skills() {
    const theme = useTheme();

    return (
        <Stack direction={'column'} spacing={2} justifyContent={'center'} alignItems={'center'} sx={{width: '100%'}}>
            <Typography variant={'h3'} sx={{padding: 2}}>Languages</Typography>
            <Grid container spacing={2} justifyContent="center" sx={{width: '100%'}}>
                {languages.map((technology) => (
                    <Grid  size={{ lg: 2}} display="flex" justifyContent="center" alignItems="center" key={technology.name}>
                        <div className='w-28 h-28'>
                            <BallCanvas icon={technology.icon} />
                        </div>
                    </Grid>
                ))}
            </Grid>
        </Stack>
    );
}