import { Box, IconButton } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useAppDispatch, useAppSelector } from "../state/Hooks";
import { setMode } from "../state/theme/ThemeSlice";

/**
 * A component that allows the user to toggle between light and dark mode
 */
export default function ThemeModeButton() {
  // @ts-ignore
  const mode = useAppSelector((state) => state.theme.mode);
  const dispatch = useAppDispatch();

  return (
    <Box sx={{ display: "flex", alignItems: "center", paddingRight: "4vw" }}>
      <IconButton
        onClick={() => dispatch(setMode(mode == "light" ? "dark" : "light"))}
      >
        {mode === "light" ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
    </Box>
  );
}
