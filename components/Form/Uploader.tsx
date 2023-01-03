import { useState } from "react";
import FileUpload from './FileUpload/FileUpload';
import FileList from './FileList/FileList';

function Drag() {
    const [files, setFiles] = useState([{ name: "error.png" }]);

    const removeFile = (filename: any) => {
        setFiles(files.filter(file => file.name !== filename))
    }
    return (<>
        <div className="title">Upload file</div>
        <FileUpload files={files} setFiles={setFiles}
            removeFile={removeFile} />
        <FileList files={files} removeFile={removeFile} /></>);
}

export default Drag;