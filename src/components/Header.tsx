import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useAuthStore from '../store/Auth';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;

export default function Header(props: Props) {
  const { window } = props;
  const { user, logout } = useAuthStore();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const navItems = user ?
    [{
      name: 'Home',
      path: '/'
    },
    {
      name: 'Profile',
      path: '/profile'
    },
    {
      name: 'Logout',
      path: '/auth'
    }] : [{
      name: 'Home',
      path: '/'
    },
    {
      name: 'Login',
      path: '/auth'
    
    }]

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const action = () => {
    logout();
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        RPG-G
      </Typography>
      {user && <Typography>Bienvenue {user.username} !</Typography>}
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            {item.name === "Logout" ? 
              <ListItemButton href={item.path} onClick={action} sx={{ textAlign: 'center' }}>
                <ListItemText primary={item.name} />
              </ListItemButton> :
              <ListItemButton href={item.path} sx={{ textAlign: 'center' }}>
                <ListItemText primary={item.name} />
              </ListItemButton>
            }
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', zIndex: 10 }}>
      <CssBaseline />
      <AppBar component="nav" sx={{backgroundColor: "black", zIndex: 10}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            RPG-G
          </Typography>
          {user && <Typography sx={{marginRight: "20px"}}>Bienvenue {user.username} !</Typography>}
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item, index) => (
              item.name === "Logout" ? 
              <Button key={index} sx={{ color: '#fff' }} href={item.path} onClick={action}>
                {item.name}
              </Button> :
              <Button key={index} sx={{ color: '#fff' }} href={item.path}>
                {item.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}