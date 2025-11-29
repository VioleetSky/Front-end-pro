import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux"; 
import { ThemeProvider, createTheme } from "@mui/material";
import AppRouter from "./router/AppRouter";
import { store } from "./app/store"; 

const theme = createTheme({
    palette: {
        primary: { main: "#3DC9A7", light: "#A8E8D6", dark: "#2E8B74", contrastText: "#FFFFFF" },
        background: { paper: "rgba(255, 255, 255, 0.25)", basket: "rgba(255, 255, 255)" },
        text: { primary: "#1d6343", secondary: "#5A6E68" },
    },
    shape: { borderRadius: 20 },
    typography: { fontFamily: '"Poppins", "Roboto", sans-serif', button: { textTransform: "none", fontWeight: 600 } },
});

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <AppRouter />
        </ThemeProvider>
    </Provider>
);



