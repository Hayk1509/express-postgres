import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { CssBaseline } from "@mui/material";
import { Provider } from "react-redux";
import React from 'react'
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "../theme/index";
import routesConfig from "./routes";
import { store } from "../store/store";

const router = createBrowserRouter(routesConfig);

function App() {
  const theme = createTheme();
  return (
    <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
    </Provider>
  );
}

export default App;
