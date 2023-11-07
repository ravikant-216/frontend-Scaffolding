import React from "react";
import "./App.css";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import CapitalizationPage from "./pages/CapitalizationPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StackHoldersPage from "./pages/StackHoldersPage";

const routes = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "",
        element: <StackHoldersPage />,
      },
      {
        path: "capitalization",
        element: <CapitalizationPage />,
      },
    ],
  },
]);

const App = (): React.ReactNode => {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={routes} />
    </ThemeProvider>
  );
};

export default App;
