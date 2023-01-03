import React from 'react'

const FileItem = ({ file, deleteFile }) => {
    return (
        <>
            {/* <li
                className="file-item"
                key={file.name}>
                <FontAwesomeIcon icon={faFileAlt} />
                <p>{file.name}</p>
                <div className="actions">
                    <div className="loading"></div>
                    {file.isUploading && 
                    <FontAwesomeIcon
                        icon={faSpinner} className="fa-spin"
                        onClick={() => deleteFile(file.name)} />
                    }
                    {!file.isUploading &&
                        <FontAwesomeIcon icon={faTrash}
                            onClick={() => deleteFile(file.name)} />
                    }
                </div>
            </li> */}
        </>
    )
}

export default FileItem
