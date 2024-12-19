import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Layout from "./components/Layout";
import Properties from "./components/Properties";
import AddProperty from "./components/AddProperty";
import Addresses from "./components/Addresses";
import AddAddress from "./components/AddAddress";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#0A1929",
      paper: "#0A1929",
    },
    primary: {
      main: "#3399FF",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Properties />} />
            <Route path="/add-property" element={<AddProperty />} />
            <Route path="/addresses" element={<Addresses />} />
            <Route path="/add-address" element={<AddAddress />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
