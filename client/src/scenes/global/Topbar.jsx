import {Box, IconButton, useTheme} from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import { InputBase } from "@mui/material";
import LightModeOutlinedMode from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedMode from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedMode from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedMode from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedMode from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
// import AccessibleForwardOutlinedIcon from '@mui/icons-material/AccessibleForwardOutlined';
// so i google'd 'mui material icons' and found an icon and we can import it from there. this was pretty simple
// so i suppose what we've done above is import the lightmodeoutline icon from the material mmui

const Topbar = () => {
    const theme = useTheme(); // this grabs the theme provided from the material mmui.
    const colors = tokens(theme.palette.mode); // this is taking the tokens object from our theme.js file and placing it into the paletter of the mui theme
    const colorMode = useContext(ColorModeContext); // this is also being taken from thhe theme.js file 
    return (
        <Box display="flex" justifyContent="space-between" p={2}>
        {/* SEARCH BOX */}
        <Box 
        display="flex" 
        backgroundColor={colors.primary[400]} 
        borderRadius="3px"
        >
        <InputBase sx={{ml: 2, flex: 1}} placeholder="Search"></InputBase> 
        {/* InputBase is another readily available component from materialui that we can use as-is */}
        <IconButton type="button" sx={{p: 1}}>
        <SearchIcon/>
        </IconButton>
        </Box>
        {/* end of left side search box */}
        {/* Start of right side icons */}
        <Box display="flex">  
        <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === 'dark' ? (
                <DarkModeOutlinedMode/>
                ) : (
                <LightModeOutlinedMode/>
                )
            }
        </IconButton>
        <IconButton>
        <NotificationsOutlinedMode/>
        </IconButton>
        <IconButton>
        <SettingsOutlinedMode/>
        </IconButton>
        <IconButton>
        <PersonOutlinedMode/>
        </IconButton>
        </Box>
        {/* End of right side icons */}
        </Box>);
    }
    
export default Topbar;