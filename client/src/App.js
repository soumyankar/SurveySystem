import { useState } from "react";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, route, Route } from "react-router-dom";
// Global components
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
// Scene components
import SurveyComponent from "./scenes/survey";
import FrontPageComponent from "./scenes/frontpage";
function App() {
  const [theme, colorMode] = useMode();

  const [isSidebar, setIsSidebar] = useState(false);
  // use line below to have the sidebar up
  // const [isSidebar, setIsSidebar] = useState(true);
  
  return (
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}> 
    <CssBaseline/>
    <div className="app">
    {/* <Sidebar isSidebar={isSidebar} /> */}
    <main className="content">
    <Topbar setIsSidebar={setIsSidebar} />
    <Routes>
    <Route path="/" element={<FrontPageComponent/>}/>
    <Route path="/survey" element={<SurveyComponent/>}/>
    </Routes>
    </main>
    </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
    );
  }
  
  export default App;
  