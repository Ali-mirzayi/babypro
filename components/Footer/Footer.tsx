import styles from './Footer.module.css';
import Box from '@mui/material/Box';
function Footer() {
    return (<Box sx={{position:"absolute",bottom:-140,left:0,width:"100vw",height:"150px",backgroundColor:"yellow",display:"flex",alignItems:"center",justifyContent:"center"}}>
        admin 20022
    </Box>);
}

export default Footer;