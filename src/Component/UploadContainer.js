import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../redux-store/mapStore'
const UploadContainer = (props) => {
    var uploadedFile;

    function handleUpload(uploadedFile){
        console.log(uploadedFile);
        var data = new FormData();
        data.append("myfile", uploadedFile);
         
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function() {
          if(this.readyState === 4) {
            let res = JSON.parse(this.responseText);
            props.updatePercentInStore(100);
            props.updateUrlInStore(res.file);
          }
        });

        xhr.open("POST", "https://filesharing-api.herokuapp.com/api/files");

        xhr.send(data);
    }

    const handleChange = (e) => {
        uploadedFile = e.target.files[0];
        handleUpload(uploadedFile);
    }

    let onDragOver = (event) => {
        // let event = e as Event;
        event.target.classList.add("ondrop");
        event.stopPropagation();
        event.preventDefault();
    }

    let onDragEnter = (event) => {
        event.stopPropagation();    
    }

    let  onFileDrop = (event) => {
        event.stopPropagation();
        event.preventDefault();
        let uploadedFile = event.dataTransfer.files[0];
        handleUpload(uploadedFile);
    }
    return (
        <div className="upload__container" 
            
        >
                <div className="drop__zone"
                    onDragEnter={onDragEnter}
                    onDragOver={onDragOver}
                    onDrop={onFileDrop}
                >
                    <p>Drag and drop your file here</p>
                    or 
                    <label htmlFor="fileInput" id="browseBtn">Browse</label>
                    <input type="file" onChange={handleChange} id="fileInput" />
                </div>
        </div>
    )
}


export default connect(mapStateToProps, mapDispatchToProps)(UploadContainer);
