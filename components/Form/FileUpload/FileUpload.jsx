import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import axios from "axios";
import Button from "@mui/material/Button";
import styles from "./FileUpload.module.css";
import { style } from "@mui/system";

const FileUpload = ({ files, setFiles, removeFile }) => {
  const uploadHandler = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    file.isUploading = true;
    setFiles([...files, file]);

    // upload file
    const formData = new FormData();
    formData.append("newFile", file, file.name);
    axios
      .post("http://localhost:3000/api/upload", formData)
      .then((res) => {
        file.isUploading = false;
        setFiles([...files, file]);
      })
      .catch((err) => {
        // inform the user
        console.error(err);
        removeFile(file.name);
      });
  };

  return (
    <>
      <div className={styles.fileCard}>
        <div className={styles.fileInput}>
          <input type="file" name="uploadfile" id="img" onChange={uploadHandler} style={{display:"none"}} />
          <label for="img">Click me to upload image</label>
          <Button
            variant="contained"
            endIcon={
              <AddCircleIcon color="success" sx={{ marginRight: "15px" }} />
            }
            className={styles.btn}
          >
            Upload
          </Button>
        </div>

        <p className="main">Supported files</p>
        <p className="info">PDF, JPG, PNG</p>
      </div>
    </>
  );
};

export default FileUpload;
