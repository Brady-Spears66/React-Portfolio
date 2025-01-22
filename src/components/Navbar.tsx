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
import MenuItem from '@mui/material/MenuItem';
import { useLocation, useNavigate } from 'react-router-dom';
import ThemeModeButton from './ThemeModeButton';
import { Stack, useTheme } from '@mui/material';
import profilePic from '../images/headshot.jpeg'
import horizontalLogo from '../images/horizontal-logo.png'
import mobileLogo from '../images/mobile-logo.png'

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const backgroundColor = theme.palette.mode === 'dark'
        ? '#101010' : 'grey';

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

  const menuItemClicked = (item: navItem) => {
    navigate(item.path);
    handleCloseNavMenu();
  }

  return (
    <AppBar 
      position="static" 
      sx={{
        backgroundColor,
        width: "100vw", // Use viewport width
        overflow: "hidden",
        height: { lg: '120px' },
        left: 0,
        right: 0,
        maxWidth: '100%',
      }}
    >
      <Box // Replaced Container with Box
        sx={{
          width: '100%',
          height: '100%',
          margin: 0,
          padding: 0,
        }}
      >
        <Toolbar 
          disableGutters 
          sx={{ 
            px: { xs: 2, md: 4 }, // Padding only for content spacing
            display: 'flex',
            justifyContent: 'space-between',
            height: '100%',
            maxWidth: '100%',
            margin: 0,
          }}
        >
          {/* Desktop Logo */}
          <Box
            sx={{
              display: { xs: 'none', md: 'none', lg: 'flex' },
              height: '75%',
              width: 'auto',
              alignItems: 'center',
              mr: 4,
            }}
          >
            <Box
              component="img"
              src={horizontalLogo}
              alt="Logo"
              sx={{
                height: '90%',
                width: 'auto',
                cursor: 'pointer',
                objectFit: 'contain',
              }}
              onClick={() => navigate('/')}
            />
          </Box>

          {/* Mobile Layout - Three equal sections */}
          {/* Left Section - Menu Button */}
          <Box sx={{ 
            display: { xs: 'flex', md: 'flex', lg: 'none' },
            flex: '1 1 0',
            justifyContent: 'flex-start',
            alignItems: 'center',
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
              sx={{ display: { xs: 'block', lg: 'none' } }}
            >
              {navItems.map((item) => (
                <MenuItem key={item.label} onClick={() => menuItemClicked(item)}>
                  <Typography sx={{ textAlign: 'center' }}>{item.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Center Section - Mobile Logo */}
          <Box sx={{ 
            display: { xs: 'flex', md: 'flex', lg: 'none' },
            flex: '1 1 0',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Box
              component="img"
              src={mobileLogo}
              alt="Mobile Logo"
              sx={{
                height: '50px',
                width: 'auto',
                cursor: 'pointer',
              }}
              onClick={() => navigate('/')}
            />
          </Box>

          {/* Right Section - Theme Button and Avatar */}
          <Box sx={{ 
            display: { xs: 'flex', md: 'flex', lg: 'none' },
            flex: '1 1 0',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
            <Stack direction="row" spacing={1}>
              <ThemeModeButton/>
              <Avatar alt="Brady Spears" src={profilePic} />
            </Stack>
          </Box>

          {/* Desktop Navigation */}
          <Box sx={{ 
            display: { xs: 'none', md: 'none', lg: 'flex' },
            alignItems: 'center',
            flex: 1,
          }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                onClick={() => navigate(item.path)}
                sx={{ 
                  px: 2,
                  py: 1,
                  color: 'white',
                  fontSize: { md: '0.7rem', lg: '1.2rem' },
                  borderBottom: location.pathname === item.path ? '2px solid white' : '2px solid transparent',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderBottomColor: 'rgb(25, 190, 207)'
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Desktop User Menu */}
          <Stack 
            direction="row" 
            spacing={2}
            sx={{ 
              display: { xs: 'none', md: 'none', lg: 'flex' },
              alignItems: 'center',
            }}
          >
            <ThemeModeButton/>
            <Avatar 
              alt="Brady Spears" 
              src={profilePic} 
              sx={{ width: 40, height: 40 }}
            />
          </Stack>
        </Toolbar>
      </Box>
    </AppBar>
  );
}

export default ResponsiveAppBar;