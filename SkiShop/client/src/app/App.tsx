import { Container, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function App() {
    const [darkMode, setDarkMode] = useState(false);
    const theme = createTheme({
        palette: {
            mode: darkMode? 'dark' : 'light',
            background: {
                default: darkMode? '#121212' : '#eaeaea'
            }
    }
});
    const handleThemeChange = () => {
        setDarkMode(!darkMode)
    }
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Header darkMode={darkMode} handleThemeChange={handleThemeChange}/>
            <Container>
                <Outlet/>
            </Container>
        </ThemeProvider>
  
  )
}

export default App
