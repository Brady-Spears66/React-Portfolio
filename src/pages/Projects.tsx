import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Button, Dialog, DialogTitle, DialogContent, DialogActions, Stack } from '@mui/material';
import { projects } from '../constants';
import { Project } from '../types';
import { useTheme } from '@mui/material/styles';

function Projects() {
    const theme = useTheme();
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const categories = ['All', 'Web Apps', 'AI', "Mobile Apps"];

    const filteredProjects = selectedCategory === 'All' 
        ? projects 
        : projects.filter(project => project.category === selectedCategory);

    const handleOpenDialog = (project: Project) => {
        setSelectedProject(project);
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
        setSelectedProject(null);
    };

    return (
        <div style={{ padding: '2rem', textAlign: 'center' }}>
            {/* Category Buttons (Styled like Skills Component) */}
            <Stack 
                direction={'row'} 
                spacing={2} 
                justifyContent={'center'}
                sx={{ borderBottom: 1, borderColor: 'divider' , pb: 5 }}
            >
                {categories.map((category) => (
                    <Button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        sx={{
                            textTransform: 'none',
                            color: selectedCategory === category ? theme.palette.secondary.main : theme.palette.text.primary,
                            borderRadius: 5,
                            py: {xs: 1, sm: 2},
                            px: {xs: 2, sm: 4},
                            fontSize: {xs: '1rem', sm: '1.25rem'},
                            fontWeight: selectedCategory === category ? 500 : 400,
                            width: {xs: '100%', sm: 'auto'},
                            minWidth: {xs: 'unset', sm: '200px'},
                            maxWidth: {xs: '300px', sm: 'unset'},
                            '&:hover': {
                                backgroundColor: theme.palette.action.hover,
                            },
                            '&:focus': {
                                outline: 'none',
                            },
                            '&:focus-visible': {
                                outline: 'none',
                            }
                        }}
                    >
                        {category}
                    </Button>
                ))}
            </Stack>

            {/* Projects Grid */}
            <Grid container spacing={4} justifyContent="center">
                {filteredProjects.map((project) => (
                    <Grid item xs={12} sm={6} md={4} key={project.id}>
                        <Card 
                            sx={{ 
                                maxWidth: 345, 
                                transition: '0.3s', 
                                '&:hover': { transform: 'scale(1.05)' } 
                            }}
                            onClick={() => handleOpenDialog(project)}
                        >
                            <CardMedia 
                                component="img"
                                height="180"
                                image={project.image}
                                alt={project.title}
                            />
                            <CardContent>
                                <Typography variant="h6">{project.title}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* Project Details Dialog */}
            <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
                {selectedProject && (
                    <>
                        <DialogTitle>{selectedProject.title}</DialogTitle>
                        <DialogContent>
                            <img src={selectedProject.image} alt={selectedProject.title} style={{ width: '100%', borderRadius: 8, marginBottom: 10 }} />
                            <Typography variant="body1">{selectedProject.description}</Typography>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleCloseDialog} color="primary">Close</Button>
                        </DialogActions>
                    </>
                )}
            </Dialog>
        </div>
    );
}

export default Projects;
