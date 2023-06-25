import React from 'react';
import { AppBar, Toolbar, Button, styled, useTheme, useMediaQuery, Box, IconButton, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Menu as MenuIcon } from '@mui/icons-material';

const StyledAppBar = styled(AppBar)`
  background: linear-gradient(to right, #000000, #0f0f0f);
  color: white;
`;

const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;

const LinkContainer = styled(Box)`
  display: flex;
  align-items: center;
`;

const LinkItem = styled(Link)`
  margin-left: 16px;
  text-decoration: none;
  color: white;
  font-weight: 600;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #ff6f00;
  }
`;

const Header = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <StyledAppBar>
      <StyledToolbar>
        {isSmallScreen ? (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              aria-controls="header-menu"
              aria-haspopup="true"
              onClick={handleMenuOpen}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="header-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem component={Link} to="/" onClick={handleMenuClose}>
                Home
              </MenuItem>
              <MenuItem component={Link} to="/about" onClick={handleMenuClose}>
                About
              </MenuItem>
              <MenuItem component={Link} to="/contact" onClick={handleMenuClose}>
                Contact
              </MenuItem>
            </Menu>
          </>
        ) : (
          <LinkContainer>
            <LinkItem to="/">HOME</LinkItem>
            <LinkItem to="/about">ABOUT</LinkItem>
            <LinkItem to="/contact">CONTACT</LinkItem>
          </LinkContainer>
        )}
        <Button variant="contained" color="secondary" onClick={handleLogout}>
          LOGOUT
        </Button>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Header;
