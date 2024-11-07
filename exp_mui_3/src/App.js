import React, { useState } from 'react';
import { Button, TextField, Card, CardContent, Typography, Dialog, DialogActions, DialogContent, DialogTitle, Box, AppBar, Toolbar, IconButton, Menu, MenuItem, Container, Grid } from '@mui/material';
import { Menu as MenuIcon, Save as SaveIcon, Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';

function App() {
  // State for dialog and menu
  const [openDialog, setOpenDialog] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);

  // Toggle Dialog
  const handleDialogOpen = () => setOpenDialog(true);
  const handleDialogClose = () => setOpenDialog(false);

  // Handle Menu
  const handleMenuClick = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        {/* AppBar */}
        <AppBar position="sticky">
          <Toolbar>
            <IconButton color="inherit" edge="start" onClick={handleMenuClick}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              MUI React App
            </Typography>
            <Button color="inherit" onClick={handleDialogOpen}>Open Dialog</Button>
          </Toolbar>
        </AppBar>
      </Box>

      {/* Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
        <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
      </Menu>

      {/* Main Content */}
      <Grid container spacing={2} mt={2}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                MUI Card
              </Typography>
              <Typography variant="body2" color="text.secondary">
                This is an example of a Material UI Card with some content.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            label="Enter Text"
            variant="outlined"
            fullWidth
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Button variant="contained" color="primary" startIcon={<SaveIcon />}>
            Save
          </Button>
          <Button variant="outlined" color="secondary" startIcon={<EditIcon />}>
            Edit
          </Button>
          <Button variant="contained" color="error" startIcon={<DeleteIcon />}>
            Delete
          </Button>
        </Grid>
      </Grid>

      {/* Dialog Component */}
      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>Dialog Example</DialogTitle>
        <DialogContent>
          <Typography variant="body1">This is a simple dialog example.</Typography>
          <TextField label="Name" fullWidth margin="normal" />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDialogClose} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default App;
