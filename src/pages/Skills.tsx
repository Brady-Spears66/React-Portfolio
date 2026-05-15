import {
  Stack,
  useTheme,
  Button,
  Pagination,
  ToggleButtonGroup,
  ToggleButton,
  Box,
  Typography,
  Divider,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { languages, librariesFrameworks, tools } from "../constants";
import { Category, Technology } from "../types";
import SwipeLeftIcon from "@mui/icons-material/SwipeLeft";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import ViewListIcon from "@mui/icons-material/ViewList";
import { useAppDispatch, useAppSelector } from "../state/Hooks";
import { setSelectedCategory } from "../state/theme/SkillsSlice";
import TechItem from "../components/TechItem";
import { useState, useEffect } from "react";

const ITEMS_PER_PAGE = 12;

type ViewMode = "animated" | "flat";

const allCategories = [
  { title: "Languages", data: languages },
  { title: "Libraries & Frameworks", data: librariesFrameworks },
  { title: "Tools", data: tools },
];

function FlatTechRow({ technology }: { technology: Technology }) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        px: 2,
        py: 1.25,
        borderRadius: 2,
        transition: "background 0.15s",
        "&:hover": {
          backgroundColor: theme.palette.action.hover,
        },
      }}
    >
      <Box
        component="img"
        src={technology.icon}
        alt={technology.name}
        sx={{
          width: 42,
          height: 42,
          objectFit: "contain",
          borderRadius: technology.hasRoundedCorners ? "8px" : 0,
          flexShrink: 0,
        }}
      />
      <Typography
        sx={{
          fontSize: "1.05rem",
          color: theme.palette.text.primary,
          fontWeight: 400,
          lineHeight: 1,
        }}
      >
        {technology.name}
      </Typography>
    </Box>
  );
}

function FlatView() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
        gap: { xs: 4, md: 6 },
        pb: 6,
        px: { xs: 2, md: 6 },
      }}
    >
      {allCategories.map(({ title, data }) => (
        <Box key={title}>
          <Box sx={{ mb: 2 }}>
            <Typography
              variant="overline"
              sx={{
                fontSize: "0.85rem",
                letterSpacing: "0.12em",
                color: theme.palette.secondary.main,
                fontWeight: 600,
              }}
            >
              {title}
            </Typography>
            <Divider sx={{ mt: 0.75, borderColor: theme.palette.divider }} />
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                md: "1fr",
                lg: "repeat(2, minmax(0, 1fr))",
              },
              gap: 1,
            }}
          >
            {data.map((tech) => (
              <FlatTechRow key={tech.name} technology={tech} />
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export function Skills() {
  const theme = useTheme();
  const selectedCategory: Category = useAppSelector(
    (state) => state.skills.selectedCategory
  );
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);
  const [viewMode, setViewMode] = useState<ViewMode>("animated");

  const categories = {
    languages: { title: "Languages", data: languages },
    frameworks: { title: "Libraries & Frameworks", data: librariesFrameworks },
    tools: { title: "Tools", data: tools },
  };

  useEffect(() => {
    setPage(1);
  }, [selectedCategory]);

  const renderTechSection = (technologies: Technology[]) => {
    const pageCount = Math.ceil(technologies.length / ITEMS_PER_PAGE);
    const paginatedItems = technologies.slice(
      (page - 1) * ITEMS_PER_PAGE,
      page * ITEMS_PER_PAGE
    );

    return (
      <>
        <Grid
          container
          spacing={6}
          justifyContent="center"
          sx={{ width: "100%", paddingBottom: 4 }}
        >
          {paginatedItems.map((technology: Technology) => (
            <TechItem
              key={technology.name}
              // @ts-ignore
              technology={technology}
            />
          ))}
        </Grid>

        {pageCount > 1 && (
          <Stack alignItems="center" sx={{ pb: 10 }}>
            <Pagination
              count={pageCount}
              page={page}
              onChange={(_, value) => setPage(value)}
              color="secondary"
              shape="rounded"
              size="large"
              sx={{
                "& .MuiPaginationItem-root": {
                  fontSize: "1rem",
                  color: theme.palette.text.primary,
                },
                "& .MuiPaginationItem-root.Mui-selected": {
                  backgroundColor: theme.palette.secondary.main,
                  color: theme.palette.secondary.contrastText,
                  "&:hover": {
                    backgroundColor: theme.palette.secondary.dark,
                  },
                },
              }}
            />
          </Stack>
        )}
      </>
    );
  };

  return (
    <Stack
      direction={"column"}
      spacing={4}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ width: "100%" }}
    >
      <ToggleButtonGroup
        value={viewMode}
        exclusive
        onChange={(_, newMode) => {
          if (newMode !== null) setViewMode(newMode);
        }}
        size="small"
        sx={{
          alignSelf: "flex-end",
          mr: { xs: 2, sm: 6 },
          "& .MuiToggleButton-root": {
            textTransform: "none",
            fontSize: "0.8rem",
            px: 2,
            py: 0.75,
            gap: 0.75,
            color: theme.palette.text.secondary,
            borderColor: theme.palette.divider,
            "&.Mui-selected": {
              color: theme.palette.secondary.main,
              backgroundColor: `${theme.palette.secondary.main}14`,
              borderColor: theme.palette.secondary.main,
              "&:hover": {
                backgroundColor: `${theme.palette.secondary.main}22`,
              },
            },
            "&:hover": {
              backgroundColor: theme.palette.action.hover,
            },
            "&:focus": { outline: "none" },
            "&:focus-visible": { outline: "none" },
          },
        }}
      >
        <ToggleButton value="animated">
          <AutoAwesomeIcon sx={{ fontSize: "0.95rem" }} />
          Animated
        </ToggleButton>
        <ToggleButton value="flat">
          <ViewListIcon sx={{ fontSize: "0.95rem" }} />
          Flat
        </ToggleButton>
      </ToggleButtonGroup>

      {viewMode === "flat" ? (
        <FlatView />
      ) : (
        <>
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
                  borderRadius: 5,
                  py: { xs: 1, sm: 2 },
                  px: { xs: 2, sm: 4 },
                  fontSize: { xs: "1rem", sm: "1.25rem" },
                  fontWeight: selectedCategory === key ? 500 : 400,
                  width: { xs: "100%", sm: "auto" },
                  minWidth: { xs: "unset", sm: "200px" },
                  maxWidth: { xs: "300px", sm: "unset" },
                  "&:hover": {
                    backgroundColor: theme.palette.action.hover,
                  },
                  "&:focus": { outline: "none" },
                  "&:focus-visible": { outline: "none" },
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
        </>
      )}
    </Stack>
  );
}
