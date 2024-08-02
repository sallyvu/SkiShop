import { useState } from "react";
import Header from "../components/Header";
import { Container, CssBaseline, Switch, createTheme } from "@mui/material";
import Catalog from "../components/Catalog";
import { ThemeProvider } from "@emotion/react";



function App() {
    const [darkMode, setDarkMode] = useState(false)
    const paletteTheme = darkMode ? 'dark' : 'light'
    const theme = createTheme({
        palette: {
            mode: paletteTheme,
            background: {
                default: darkMode ? '#121212' : '#eaeaea'}
        },
    });
    const handleThemeChange = () => setDarkMode(!darkMode)
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Header />
            <Switch checked={darkMode} onChange={handleThemeChange} />
            <Container>
                <Catalog/>
            </Container>
        </ThemeProvider>
  
  )
}

export default App
