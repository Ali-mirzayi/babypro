import styles from './Navbar.module.css';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/router';
import SideNave from './SideNave';
import AdminSideNave from './AdminSideNave';
import Link from 'next/link';

export default function ButtonAppBar() {
    const [state, setState] = React.useState({right: false});
    const router = useRouter();

    return (
        <>
            <Box sx={{ width: "100vw" }}>
                <AppBar position="fixed">
                    <Toolbar>
                        <Link href="/login">              
                            <Button sx={{ fontSize: "20px",color:"white" }} color="inherit">Login</Button>
                        </Link>
                        <div style={{ display: "flex", alignItems: "center", marginLeft: "auto" }}>
                            <Typography variant="h6" component="div" sx={{ mr: 2 }}>
                                News
                            </Typography>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                                onClick={() => setState({right: true})}
                            >
                                <MenuIcon />
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
            </Box>
            {
               router.route==='/admindashboard' ? <AdminSideNave useState={[state, setState]} /> :  <SideNave useState={[state, setState]} />
            }
        </>
    );
}