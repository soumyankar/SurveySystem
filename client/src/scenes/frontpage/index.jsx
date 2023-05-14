import { Typography, Box, useTheme, Button } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const FrontPageComponent = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
    <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="NIAA" subtitle="Welcome to the Front Page!"/>
        <br/>
        <Button variant="contained" color="success" href="/survey">Link to Survey</Button>
        </Box>
    </Box>
    );
}; 

export default FrontPageComponent;