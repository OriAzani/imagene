import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  AppBar,
  Toolbar,
  InputBase,
  alpha,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";

const drawerWidth = 240;

const menuItems = [
  { text: "Properties", icon: <HomeIcon />, path: "/" },
  { text: "Addresses", icon: <LocationOnIcon />, path: "/addresses" },
];

function Layout({ children }) {
  const location = useLocation();

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          backgroundColor: "#132F4C",
          borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
        }}
      >
        <Toolbar>
          <Box
            sx={{
              position: "relative",
              borderRadius: 1,
              backgroundColor: (theme) =>
                alpha(theme.palette.common.white, 0.15),
              "&:hover": {
                backgroundColor: (theme) =>
                  alpha(theme.palette.common.white, 0.25),
              },
              width: "100%",
              maxWidth: 500,
            }}
          >
            <Box
              sx={{
                padding: "0 12px",
                height: "100%",
                position: "absolute",
                pointerEvents: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <SearchIcon />
            </Box>
            <InputBase
              placeholder="Search…"
              sx={{
                color: "inherit",
                width: "100%",
                "& .MuiInputBase-input": {
                  padding: "8px 8px 8px 40px",
                },
              }}
            />
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#132F4C",
            borderRight: "1px solid rgba(255, 255, 255, 0.12)",
          },
        }}
      >
        <Box sx={{ overflow: "auto", mt: 8 }}>
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton
                  component={Link}
                  to={item.path}
                  selected={location.pathname === item.path}
                  sx={{
                    "&.Mui-selected": {
                      backgroundColor: "#1E4976",
                      "&:hover": {
                        backgroundColor: "#1E4976",
                      },
                    },
                  }}
                >
                  <ListItemIcon sx={{ color: "white" }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 8, // Add top margin to account for the AppBar
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

export default Layout;
