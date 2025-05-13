import { Stack, useTheme, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { languages, librariesFrameworks, tools } from "../constants";
import { Category, Technology } from "../types";
import SwipeLeftIcon from "@mui/icons-material/SwipeLeft";
import { useAppDispatch, useAppSelector } from "../state/Hooks";
import { setSelectedCategory } from "../state/theme/SkillsSlice";
import TechItem from "../components/TechItem";

export function Skills() {
  const theme = useTheme();
  // const [selectedCategory, setSelectedCategory] = useState('languages');
  const selectedCategory: Category = useAppSelector(
    (state) => state.skills.selectedCategory
  );
  const dispatch = useAppDispatch();

  const categories = {
    languages: { title: "Languages", data: languages },
    frameworks: { title: "Libraries & Frameworks", data: librariesFrameworks },
    tools: { title: "Tools", data: tools },
  };

  const renderTechSection = (technologies: Technology[]) => (
    <>
      <Grid
        container
        spacing={6}
        justifyContent="center"
        sx={{ width: "100%", paddingBottom: 10 }}
      >
        {technologies.map((technology: Technology) => (
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
    <Stack
      direction={"column"}
      spacing={4}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ width: "100%", pt: 4 }}
    >
      <Stack
        direction={"row"}
        spacing={2}
        justifyContent={"center"}
        sx={{ borderBottom: 1, borderColor: "divider", pb: 5 }}
      >
        {Object.entries(categories).map(([key, { title }]) => (
          <Button
            key={key}
            onClick={() => dispatch(setSelectedCategory(key as Category))}
            sx={{
              textTransform: "none",
              color:
                selectedCategory === key
                  ? theme.palette.secondary.main
                  : theme.palette.text.primary,
              // borderBottom: selectedCategory === key ? 2 : 0,
              // borderColor: selectedCategory === key ? theme.palette.primary.main : 'transparent',
              borderRadius: 5,
              py: { xs: 1, sm: 2 }, // Reduced padding on mobile
              px: { xs: 2, sm: 4 }, // Reduced padding on mobile
              fontSize: { xs: "1rem", sm: "1.25rem" }, // Smaller font on mobile
              fontWeight: selectedCategory === key ? 500 : 400,
              width: { xs: "100%", sm: "auto" }, // Full width on mobile
              minWidth: { xs: "unset", sm: "200px" }, // Remove min-width on mobile
              maxWidth: { xs: "300px", sm: "unset" }, // Limit width on mobile
              "&:hover": {
                backgroundColor: theme.palette.action.hover,
              },
              "&:focus": {
                outline: "none",
              },
              "&:focus-visible": {
                outline: "none",
              },
            }}
          >
            {title}
          </Button>
        ))}
      </Stack>
      <Stack alignItems={"center"}>
        <SwipeLeftIcon sx={{ fontSize: "3rem" }} />
      </Stack>
      {renderTechSection(
        // @ts-ignore
        categories[selectedCategory].data
      )}
    </Stack>
  );
}
