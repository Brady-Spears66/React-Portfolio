import { Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { technologies } from "../constants";
import { BallCanvas } from "../components/canvas";

export function Skills() {
    return (
        <div className='flex flex-row flex-wrap justify-center gap-10'>
          {technologies.map((technology) => (
            <div className='w-28 h-28' key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
          ))}
        </div>
      );
}