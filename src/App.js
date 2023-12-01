import { Box } from "@mui/material";
import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "page.main" }}>
      <Box sx={{ backgroundColor: "page.secondary" }}>
        <Header />
        <HeroSection />
      </Box>
    </div>
  );
}

export default App;
