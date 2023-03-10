import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Checkboxs from "../components/Form/Checkbox";
// import Drag from "../components/Form/Uploader";
import CustomInput from "../src/Mui/TextField";
import styles from "../styles/Form/form.module.css";
import axios from "axios";
import { useState } from 'react';

const baseURL = "http://localhost:3000/api/upload";
const initData = {
name1:'',
name2:'',
name3:'',
name4:'',
name5:'',
name6:'',
name7:'',
name8:'',
name9:'',
name10:'',
name11:'',
name12:'',
name13:'',
name14:'',
name15:'',
name16:'',
name17:'',
name18:'',
}

function Form() {
    const [inputs, setInputs] = useState(initData);
    const [checked, setChecked] = React.useState([false, false, false, false, false]);

    const handleChange = (e: any) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs((values): any => ({...values, [name]: value}))
    }

    const handleSubmit  = async (e: any) => {
        e.preventDefault();
        try {
            const res = await axios.post(baseURL, {
                headers: {},
                params: {},
                body: JSON.stringify([checked,inputs])
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

    return (
        <Box component="form" onSubmit={(e) => handleSubmit(e)} sx={{ direction: "rtl", margin: "100px auto", width: "fit-content", backgroundColor: "#fcfcfc", padding: "20px", borderRadius: "5px"}}>
            <h2>?????? ????????????</h2>
            <Checkboxs useCheck={[checked, setChecked]} />
            <div style={{ margin: "20px 20px 20px auto", width: "fit-content" }}>
                <CustomInput name="name18" value={inputs.name18 || ""} onChange={handleChange} placeholder="???????? ??????????" sx={{ width: "320px"}} />
            </div>
            <Divider sx={{ margin: "30px", borderColor: "white" }} />
            <div className={styles.div} style={{ display: "flex", alignItems: "flex-end" }}>
                <div className={styles.inputdiv}><p style={{ margin: "12px", textAlign: "center", fontWeight: "bold" }}>?????? ???????? ?? ?????????? ??????????</p><CustomInput name="name1" value={inputs.name1 || ""} onChange={handleChange} sx={{ width: "220px" }} /></div>
                <div className={styles.inputdiv}><p style={{ margin: "12px", textAlign: "center", fontWeight: "bold" }}>?????????? ?????? ??????????</p><CustomInput name="name2" value={inputs.name2 || ""} onChange={handleChange} sx={{ width: "220px" }} /></div>
            </div>
            <Divider sx={{ margin: "10px 30px 30px", borderColor: "#c1c1c1" }} />
            <div>
                <h2 style={{ margin: "20px" }}>???????????? ??????????:</h2>
                <div className={styles.grid} style={{ display: "grid", justifyItems: "flex-end" }}>
                    <div className={styles.inputdiv}><p style={{ margin: "12px", textAlign: "center", fontWeight: "bold" }}>?????? ????????</p><CustomInput name="name3" value={inputs.name3 || ""} onChange={handleChange} sx={{ width: "220px" }} /></div>
                    <div className={styles.inputdiv}><p style={{ margin: "12px", textAlign: "center", fontWeight: "bold" }}>????????</p><CustomInput name="name4" value={inputs.name4 || ""} onChange={handleChange} sx={{ width: "220px" }} /></div>
                    <div className={styles.inputdiv}><p style={{ margin: "12px", textAlign: "center", fontWeight: "bold" }}>??????</p><CustomInput name="name5" value={inputs.name5 || ""} onChange={handleChange} sx={{ width: "220px" }} /></div>
                    <div className={styles.inputdiv}><p style={{ margin: "12px", textAlign: "center", fontWeight: "bold" }}>???? ??????????????</p><CustomInput name="name6" value={inputs.name6 || ""} onChange={handleChange} sx={{ width: "220px" }} /></div>
                    <div className={styles.inputdiv}><p style={{ margin: "12px", textAlign: "center", fontWeight: "bold" }}>????????</p><CustomInput name="name7" value={inputs.name7 || ""} onChange={handleChange} sx={{ width: "220px" }} /></div>
                    <div className={styles.inputdiv}><p style={{ margin: "12px", textAlign: "center", fontWeight: "bold" }}>????????</p><CustomInput name="name8" value={inputs.name8 || ""} onChange={handleChange} sx={{ width: "220px" }} /></div>
                    <div className={styles.inputdiv}><p style={{ margin: "12px", textAlign: "center", fontWeight: "bold" }}>????????????</p><CustomInput name="name9" value={inputs.name9 || ""} onChange={handleChange} sx={{ width: "220px" }} /></div>
                    <div className={styles.inputdiv}><p style={{ margin: "12px", textAlign: "center", fontWeight: "bold" }}>??????????</p><CustomInput name="name10" value={inputs.name10 || ""} onChange={handleChange} sx={{ width: "220px" }} /></div>
                    <div className={styles.inputdiv}><p style={{ margin: "12px", textAlign: "center", fontWeight: "bold" }}>?????????? ?????? </p><CustomInput name="name11" value={inputs.name11 || ""} onChange={handleChange} sx={{ width: "220px" }} /></div>
                    <div className={styles.inputdiv}><p style={{ margin: "12px", textAlign: "center", fontWeight: "bold" }}>???????? ????????</p><CustomInput name="name12" value={inputs.name12 || ""} onChange={handleChange} sx={{ width: "220px" }} /></div>
                </div>
            </div>
            <Divider sx={{ margin: "10px 30px 30px", borderColor: "#c1c1c1" }} />
            <h2 style={{ margin: "20px" }}>???????????? ????????</h2>
            <div className={styles.grid} style={{ display: "grid", justifyItems: "flex-end" }}>
                <div className={styles.inputdiv}><p style={{ margin: "7px", textAlign: "center", fontWeight: "bold" }}>?????????? ??????????</p><CustomInput name="name13" value={inputs.name13 || ""} onChange={handleChange} sx={{ width: "220px" }} /></div>
                <div className={styles.inputdiv}><p style={{ margin: "7px", textAlign: "center", fontWeight: "bold" }}>?????????? ?????? ??????????</p><CustomInput name="name14" value={inputs.name14 || ""} onChange={handleChange} sx={{ width: "220px" }} /></div>
                <div className={styles.inputdiv}><p style={{ margin: "7px", textAlign: "center", fontWeight: "bold" }}>?????????? ??????????????</p><CustomInput name="name15" value={inputs.name15 || ""} onChange={handleChange} sx={{ width: "220px" }} /></div>
                <div className={styles.inputdiv}><p style={{ margin: "7px", textAlign: "center", fontWeight: "bold" }}>?????????? ??????????????</p><CustomInput name="name16" value={inputs.name16 || ""} onChange={handleChange} sx={{ width: "220px" }} /></div>
                <div className={styles.inputdiv}><p style={{ margin: "7px", textAlign: "center", fontWeight: "bold" }}>?????????? ?????????????? </p><CustomInput name="name17" value={inputs.name17 || ""} onChange={handleChange} sx={{ width: "220px" }} /></div>
            </div>
            <div style={{display:'flex',justifyContent:"center"}}>
            <div style={{maxWidth:"800px"}}>
               <Button type="submit" sx={{width:"100%",color:"white",backgroundColor:"#007e73","&:hover":{backgroundColor:"#00534c"},fontSize:"18px",margin:"20px"}} >???????? ???? ????????</Button>
            </div>
            </div>
        </Box>);
}

export default Form;