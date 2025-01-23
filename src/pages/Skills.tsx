import { Stack, Typography, useTheme } from "@mui/material";
import Grid from '@mui/material/Grid2';
import React, { useState } from 'react';
import { languages, librariesFrameworks, tools} from "../constants";
import { BallCanvas } from "../components/canvas";

// @ts-ignore
const TechItem = React.memo(({ technology }) => {
   const [isHovered, setIsHovered] = useState(false);

   return (
       <Grid 
           size={{ lg: 2}} 
           justifyContent="center" 
           alignItems="center" 
           sx={{ 
               position: 'relative', 
               textAlign: 'center', 
               height: '25vh',  // Provide fixed height to accommodate BallCanvas and Typography
               display: 'flex', 
               flexDirection: 'column', 
               alignItems: 'center' 
           }}
           onMouseEnter={() => setIsHovered(true)}
           onMouseLeave={() => setIsHovered(false)}
       >
           <div className='w-35 h-35'>
               <BallCanvas icon={technology.icon} />
           </div>
           {isHovered && (
               <Typography 
                   variant="body1" 
                   sx={{
                       mt: 1,
                       opacity: isHovered ? 1 : 0,
                       transition: 'opacity 0.3s ease-in-out',
                   }}
               >
                   {technology.name}
               </Typography>
           )}
       </Grid>
   );
});

export function Skills() {
   const theme = useTheme();

   // @ts-ignore
   const renderTechSection = (title, technologies) => (
       <>
           <Typography variant={'h3'} sx={{padding: 2}}>{title}</Typography>
           <Grid container spacing={6} justifyContent="center" sx={{width: '100%'}}>
               {technologies.map((
                // @ts-ignore
                technology
                ) => (
                   <TechItem 
                       key={technology.name} 
                       // @ts-ignore
                       technology={technology} 
                   />
               ))}
           </Grid>
       </>
   );

   return (
       <Stack direction={'column'} spacing={2} justifyContent={'center'} alignItems={'center'} sx={{width: '100%'}}>
           {renderTechSection('Languages', languages)}
           {renderTechSection('Libraries / Frameworks', librariesFrameworks)}
           {renderTechSection('Tools', tools)}
       </Stack>
   );
}