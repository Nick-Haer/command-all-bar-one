import {Box, Typography} from '@mui/material'
import { useTheme } from '@mui/material';
import background from "../images/cocktail.jpeg";


function Landing() {
    const theme = useTheme();

    return (
            <Box sx={{width: '100vw', height: '100vh', backgroundImage: `url(${background})`, backgroundSize:'100% 100%' }}>
                <Typography align="center" sx={{color: 'text.light'}}>Bean Lord</Typography>
            </Box>
    )
};

export default Landing;