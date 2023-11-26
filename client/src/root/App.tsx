import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "../theme/index";
import routesConfig from "./routes";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../store/store";

const router = createBrowserRouter(routesConfig);

function App() {
  const theme = createTheme();
  // useEffect(() => {
  //   AxiosInstance.get('/users/Hayk1509').then(console.log)
  // }, []);
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
