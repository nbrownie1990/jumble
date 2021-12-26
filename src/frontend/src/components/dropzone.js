import React from 'react';
import {useDropzone} from 'react-dropzone';

export default function Dropzone(props) {
    const {getRootProps, getInputProps, open, acceptedFiles} = useDropzone({
        // Disable click and keydown behavior
        noClick: true,
        noKeyboard: true
    });

    const files = acceptedFiles.map(file => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));

    return (
        <div className="container">
            <div {...getRootProps({className: 'dropzone'})}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop the image here</p>
                <button className="btn edit-btn"
                        type="button"
                        data-toggle="tooltip"
                        title="Edit"
                        onClick={open}>
                    <i className="fas fa-pen ps-2 pb-1"></i>
                </button>
            </div>
            <aside>
                <ul>{files}</ul>
            </aside>
        </div>
    );
}