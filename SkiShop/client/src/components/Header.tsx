import { AppBar, Badge, Box, IconButton, List, ListItem, Switch, Toolbar, Typography } from "@mui/material"; 
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink } from "react-router-dom";
interface Props {
    darkMode: boolean;
    handleThemeChange: () => void;
}
const midleLinks = [
    { title: 'catalog', path: "/catalog" },
    { title: 'about', path: "/about" },
    { title: 'contact', path: "/contact" }
]
const rightLinks = [
    { title: 'login', path: "/login" },
    { title: 'register', path: "/register" },
]
export default function Header({ darkMode, handleThemeChange }: Props) {
    return(
    <>
            <AppBar position="static">
                <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Box sx={{display:"flex", alignItems:"center"} }>
                        <Typography variant="h6"
                            component={NavLink}
                            to="/"
                            sx={{ color: "inherit", textDecoration: "none" }}
                        >SkiShop</Typography>
                        <Switch checked={darkMode} onChange={handleThemeChange} />
                    </Box>

                    <List sx={{ display: "flex" }}>
                        {midleLinks.map(({title, path}) =>
                            <ListItem
                                component={NavLink}
                                to={path}
                                key={path}
                                sx={{ color: "inherit", typography:"h6" }}
                            >
                                {title.toUpperCase()}
                            </ListItem>)}
                    </List>

                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <IconButton color="inherit">
                            <Badge badgeContent="3" color="secondary">
                                <ShoppingCartIcon />
                            </Badge>
                        </IconButton>
                        <List sx={{ display: "flex" }}>
                            {rightLinks.map(({ title, path }) =>
                                <ListItem
                                    component={NavLink}
                                    to={path}
                                    key={path}
                                    sx={{ color: "inherit", typography: "h6" }}
                                >
                                    {title.toUpperCase()}
                                </ListItem>)}
                        </List>
                    </Box>
                </Toolbar>  
            </AppBar>
        </>
    )
}