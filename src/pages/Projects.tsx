import ReactPlayer from "react-player";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Stack,
} from "@mui/material";
import { projects } from "../constants";
import { Project } from "../types";
import { useTheme } from "@mui/material/styles";
import { useAppDispatch, useAppSelector } from "../state/Hooks";
import {
  setSelectedCategory,
  setOpenDialog,
  setSelectedProject,
} from "../state/theme/ProjectsSlice";

function Projects() {
  const theme = useTheme();
  const selectedCategory = useAppSelector(
    (state) => state.projects.selectedCategory
  );
  const openDialog = useAppSelector((state) => state.projects.openDialog);
  const selectedProject = useAppSelector(
    (state) => state.projects.selectedProject
  );
  const dispatch = useAppDispatch();

  const categories = ["All", "AI", "Mobile Apps", "Web Apps"];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const handleOpenDialog = (project: Project) => {
    dispatch(setSelectedProject(project));
    dispatch(setOpenDialog(true));
  };

  const handleCloseDialog = () => {
    dispatch(setOpenDialog(false));
    dispatch(setSelectedProject(null));
  };

  // Safe HTML rendering component
  // @ts-ignore
  const HTMLContent = ({ content }) => {
    return <span dangerouslySetInnerHTML={{ __html: content }} />;
  };

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      {/* Category Buttons */}
      <Stack
        direction={"row"}
        spacing={2}
        justifyContent={"center"}
        sx={{ borderBottom: 1, borderColor: "divider", pb: 5 }}
      >
        {categories.map((category) => (
          <Button
            key={category}
            onClick={() => dispatch(setSelectedCategory(category))}
            sx={{
              textTransform: "none",
              color:
                selectedCategory === category
                  ? theme.palette.secondary.main
                  : theme.palette.text.primary,
              borderRadius: 5,
              py: { xs: 1, sm: 2 },
              px: { xs: 2, sm: 4 },
              fontSize: { xs: "1rem", sm: "1.25rem" },
              fontWeight: selectedCategory === category ? 500 : 400,
              width: { xs: "100%", sm: "auto" },
              minWidth: { xs: "unset", sm: "200px" },
              maxWidth: { xs: "300px", sm: "unset" },
              "&:hover": {
                backgroundColor: theme.palette.action.hover,
              },
              "&:focus": {
                outline: "none",
              },
            }}
          >
            {category}
          </Button>
        ))}
      </Stack>

      {/* Projects Grid */}
      <Grid container spacing={4} justifyContent="center" sx={{ mt: 2 }}>
        {filteredProjects.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <Card
              sx={{
                maxWidth: 345,
                transition: "0.3s",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              {/* In the grid, always prefer image if available */}
              <CardMedia
                component="img"
                height="180"
                image={project.image || project.videoUrl}
                alt={project.title}
                onClick={() => handleOpenDialog(project)}
                sx={{ cursor: "pointer" }}
              />
              <CardContent>
                <Typography variant="h6">{project.title}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Project Details Dialog */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="sm"
        fullWidth
      >
        {selectedProject && (
          <>
            <DialogTitle>{selectedProject.title}</DialogTitle>
            <DialogContent>
              {/* In the dialog, prefer video if available */}
              {selectedProject.videoUrl ? (
                <ReactPlayer
                  url={selectedProject.videoUrl}
                  controls
                  width="100%"
                  style={{ marginBottom: 10 }}
                />
              ) : (
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  style={{ width: "100%", borderRadius: 8, marginBottom: 10 }}
                />
              )}
              {selectedProject.description
                .split("\n\n")
                .map((paragraph, index) => (
                  <Typography key={index} variant="body1" paragraph>
                    <HTMLContent content={paragraph} />
                  </Typography>
                ))}
            </DialogContent>
            <DialogActions>
              {/* Conditionally render link button if it exists */}
              {selectedProject.link && (
                <Button
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  color="primary"
                  sx={{
                    "&:hover": {
                      color: "rgb(25, 190, 207)",
                    },
                  }}
                >
                  View Project
                </Button>
              )}
              <Button
                onClick={handleCloseDialog}
                color="primary"
                sx={{
                  "&:hover": {
                    color: "rgb(25, 190, 207)",
                  },
                }}
              >
                Close
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </div>
  );
}

export default Projects;
