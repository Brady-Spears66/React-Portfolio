// src/components/TechItem.tsx
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { BallCanvas } from "./canvas";
import { Technology } from "../types";

type Props = {
  technology: Technology;
};

const TechItem: React.FC<Props> = ({ technology }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Grid
      item
      xs={4}
      sm={4}
      md={3}
      lg={2}
      justifyContent="center"
      alignItems="center"
      sx={{
        position: "relative",
        textAlign: "center",
        height: "25vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-35 h-35">
        <BallCanvas icon={technology.icon} />
      </div>
      {isHovered && (
        <Typography
          variant="body1"
          sx={{
            mt: 1,
            opacity: 1,
            transition: "opacity 0.3s ease-in-out",
          }}
        >
          {technology.name}
        </Typography>
      )}
    </Grid>
  );
};

export default React.memo(TechItem);
