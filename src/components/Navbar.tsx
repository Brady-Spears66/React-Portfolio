import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useLocation, useNavigate } from 'react-router-dom';
import ThemeModeButton from './ThemeModeButton';
import { Stack } from '@mui/material';
import profilePic from '../images/headshot.jpeg'

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const navigate = useNavigate();
  const location = useLocation();

  type navItem = {
    label: string;
    path: string;
  }

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Experience', path: '/experience' },
    { label: 'Skills', path: '/skills'},
    { label: 'Projects', path: '/projects' },
    { label: 'Education', path: '/education' },
    { label: 'Contact', path: '/contact' },
  ];

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // @ts-expec-error: no explicit typing
  const menuItemClicked = (item: navItem) => {
    navigate(item.path);
    handleCloseNavMenu();
    console.log("menu item clicked")
  }

  return (
    <AppBar position="static" sx={{width: "100%", overflow: "hidden", px: 2}}>
      <Container
        sx={{
          
          width: '100%', // Ensure it doesn't exceed the viewport width
          maxWidth: '100%', // Prevent overflow
          margin: '0 auto', // Center the container
        }}
        disableGutters
      >
        <Toolbar 
          disableGutters 
          sx={{ 
            marginRight: "0px", 
            marginLeft: "0px",
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          {/* Desktop Logo */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Brady Spears
          </Typography>

          {/* Mobile Layout - Three equal sections */}
          {/* Left Section - Menu Button */}
          <Box sx={{ 
            display: { xs: 'flex', md: 'none' },
            flex: '1 1 0',
            justifyContent: 'flex-start'
          }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {navItems.map((item) => (
                <MenuItem key={item.label} onClick={() => menuItemClicked(item)}>
                  <Typography sx={{ textAlign: 'center' }}>{item.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Center Section - Typography */}
          <Box sx={{ 
            display: { xs: 'flex', md: 'none' },
            flex: '1 1 0',
            justifyContent: 'center'
          }}>
            <Typography
              variant="h5"
              noWrap
              component="a"
              sx={{
                fontFamily: 'monospace',
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Brady Spears
            </Typography>
          </Box>

          {/* Right Section - Theme Button and Avatar */}
          <Box sx={{ 
            display: { xs: 'flex', md: 'none' },
            flex: '1 1 0',
            justifyContent: 'flex-end'
          }}>
            <Stack direction="row" spacing={1}>
              <ThemeModeButton/>
              <Avatar alt="Brady Spears" src={profilePic} />
            </Stack>
          </Box>

          {/* Desktop Navigation */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', lg: 'flex' } }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                onClick={() => navigate(item.path)}
                sx={{ 
                  my: 2, 
                  color: 'white', 
                  display: 'block', 
                  borderBottom: location.pathname === item.path ? '2px solid white' : 'none',
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Desktop User Menu */}
          <Stack 
            direction="row" 
            sx={{ 
              flexGrow: 0,
              display: { xs: 'none', md: 'flex' }
            }}
          >
            <ThemeModeButton/>
            <Avatar alt="Brady Spears" src={profilePic} />
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;