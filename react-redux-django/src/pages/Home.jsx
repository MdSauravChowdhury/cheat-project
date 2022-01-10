import React, { useState } from "react";
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from '@mui/icons-material/Dashboard';
import CategoryIcon from '@mui/icons-material/Category';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import { Switch, Route } from "react-router-dom";
import Items from './Items'
import AddItem from './AddItem';
import Toolbar from "@mui/material/Toolbar";
import TopRightMenu from "../components/header/TopRightMenu";

const drawerWidth = 240;

function Home(props) {


  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />

      <List>


      {["Dashboard"].map((text) => (
          <ListItem button key={text}>
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>

            {/* <ListItemText primary={text} onClick={ () => history.push('/')}/> */}
            <Link to="">{text}</Link>
            {/* <Link to="/"><ListItemText primary={text} /></Link> */}

          </ListItem>
        ))}
        
        {["Items"].map((text) => (
            <ListItem button key={text}>
              <ListItemIcon>
                  <CategoryIcon />
              </ListItemIcon>
  
              {/* <ListItemText primary={text} onClick={ () => history.push('/')}/> */}
              <Link to="/items">{text}</Link>
              {/* <Link to="/"><ListItemText primary={text} /></Link> */}
  
            </ListItem>
          ))}
          {["Add Items"].map((text) => (
              <ListItem button key={text}>
                <ListItemIcon>
                    <AddBusinessIcon />
                </ListItemIcon>
    
                {/* <ListItemText primary={text} onClick={ () => history.push('/')}/> */}
                <Link to="/add-item ">{text}</Link>
                {/* <Link to="/"><ListItemText primary={text} /></Link> */}
    
              </ListItem>
            ))}

        {/* {["Dashboard", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
                {text}
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))} */}


      </List>

      <Divider />

      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

        {/* Top Right Menu */}
        <TopRightMenu />

        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
      </Box>


      <Switch>
      
      {/* <Route exact path="/" component={HeaderComponent} /> */}
      <Route exact path="/" component={Home} />
      <Route path="/add-item" component={AddItem} />
      <Route path="/items" component={Items} />
      {/* <Route path="/edit/:id" component={EditUser} /> */}
    </Switch>
    </Box>
  );
}

Home.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Home;
