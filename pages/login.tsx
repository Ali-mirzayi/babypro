import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Cookies from "js-cookie";
import { useForm } from "react-hook-form";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CustomInput from '../src/Mui/TextField';
import styles from '../styles/Login/Login.module.css';
import axios from "axios";

type UserSubmitForm = {
    email: string;
    password: string;
};

function Login() {
    const [visible, setVisible] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const router = useRouter();

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .required('ایمیل الزامی است.')
            .email('ایمیل نامعتبر است.'),
        password: Yup.string()
            .required('رمز عبور الزامی است.')
            .matches(/^\d+$/, 'فقط عدد خواهشا')
            .min(8, 'پسورد کوتاه است حداقل 8 کاراکتر')
            .max(15, 'پسورد طولانی است حداکثر 20 کاراکتر'),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<UserSubmitForm>(
        {
            resolver: yupResolver(validationSchema),
        }
    );

    const onSubmit = async (data: UserSubmitForm) => {

        try {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_PORTOCOL}${process.env.NEXT_PUBLIC_SITENAME}/users`,JSON.stringify(data),{
                headers: { 'Content-Type': 'application/json' },
                params: {}
            });
        } catch (error: any) {
            if (error.response) {
                // Request made but the server responded with an error
                console.log(error.response.data);
                console.log(error.response.status);
            } else if (error.request) {
                // Request made but no response is received from the server.
                console.log(error.request);
            } else {
                // Error occurred while setting up the request
                console.log('Error', error.message);
            }
        }
    }


    // const onSubmit = async (data: UserSubmitForm) => {
    //     try {
    //         const response = await fetch('http://localhost:3000/api/upload', {
    //             method: 'post',
    //             body: JSON.stringify(data)
    //         })
    //             .then(res => res.json());
    //             console.log(data);
    //             console.log(response);
    //         if (response.accessToken) {
    //             Cookies.set("accessToken", response.accessToken);
    //             Cookies.set("expirationTime", response.expirationTime);
    //             router.push('/dashboard');
    //         } else {
    //             setOpen(true);
    //         }
    //     } catch {
    //         setOpen(true);
    //     }
    //     reset();
    // }

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    const handleClickShowPassword = () => { setVisible(!visible) };
    //customInput dosent assigned register
    const { ref: refemail, ...objemail } = register('email');
    const { ref: refpassword, ...objpassword } = register('password');

    const handleClose = () => {
        setOpen(false);
    };
    // console.log(errors);

    return (<>
        <Head>
            <title>Login</title>
        </Head>
        <Paper className={styles.container} sx={{ backgroundColor: "#B2FFD7", maxWidth: "400px", margin: "7rem auto", padding: "10px", direction: "rtl" }}>
            <h2 style={{ textAlign: "center" }}>صفحه ی ثبت نام</h2>
            <form onSubmit={handleSubmit(onSubmit)} dir="rtl" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <CustomInput
                    variant="outlined"
                    type="email"
                    placeholder="ایمیل خود را وارد کنید..."
                    label="ایمیل"
                    color="info"
                    {...objemail}
                    inputRef={refemail}
                    autoComplete="email"
                    error={!!errors.email}
                    helperText={errors.email ? errors.email.message : null}
                    className={styles.input}
                    sx={{ margin: "15px" }}
                />
                <div style={{ position: 'relative' }} className={styles.passInput}>
                    <CustomInput
                        variant="outlined"
                        type={visible ? 'text' : 'password'}
                        placeholder="رمز ورود وارد کنید..."
                        label="رمز ورود"
                        color="info"
                        {...objpassword}
                        inputRef={refpassword}
                        error={!!errors.password}
                        helperText={errors.password ? errors.password.message : null}
                        sx={{ margin: "15px" }}
                    />
                    <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        sx={{ color: 'black', position: 'absolute', left: '12px', top: '12px', margin: "10px" }}
                    >
                        {visible ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                </div>
                <Button type="submit" disabled={errors.email || errors.password ? true : false} className={styles.btn} sx={errors.email || errors.password ? { backgroundColor: "red" } : { backgroundColor: "blue" }}>ورود به حساب</Button>
                <Link href="/signup"><p className={styles.signup}>ثبت نام</p></Link>
            </form>
        </Paper>
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                dir="rtl"
            >
                <DialogTitle id="alert-dialog-title">
                    {"ایمیل یا رمز ورود اشتباه است."}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        درصورتی که ایمیل یا رمز ورود خود را فراموش کرده اید متاسفانه دوباره ثبت نام کنید.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <div style={{ margin: "auto" }}>
                        <Link href="/signup"><Button sx={{ backgroundColor: "grey.300", "&:hover": { backgroundColor: "grey.900" }, color: "info.main" }}><h4 style={{ margin: 0 }}>ثبت نام</h4></Button></Link>
                        <Button onClick={handleClose} autoFocus sx={{ backgroundColor: "grey.300", "&:hover": { backgroundColor: "grey.900" }, margin: "10px" }}><h4 style={{ margin: 0 }}>بازگشت</h4></Button>
                    </div>
                </DialogActions>
            </Dialog>
        </div>
    </>);
}

export default Login;