import React, { useRef } from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../redux-store/mapStore'
const UploadContainer = (props) => {
    var uploadedFile,response;
    const baseUrl = "http://localhost:5000";
    const uploadUrl = `${baseUrl}/api/files/`;
    const hiddenInputFile = useRef(null);
    const handleBrowse = () => {
        hiddenInputFile.current.click();
    }
    const handleChange = (e) => {
        uploadedFile = e.target.files;
        console.log("uploading file")
        const formData = new FormData();
        formData.append("myfile", uploadedFile[0]);

        const xhr = new XMLHttpRequest();
        xhr.open("POST", uploadUrl);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
        // xhr.withCredentials = true;
        xhr.upload.onprogress = function (event) {
            let percent = Math.round((100 * event.loaded) / event.total);
            props.updatePercent(percent);
        }

        xhr.upload.onerror = function () {
            console.log(`Error in upload:${xhr.status}`);
            e.target.files.value = '';
        }
        
        xhr.upload.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                console.log(xhr.responseText);
                response = (JSON.parse(xhr.responseText)).file.toString();
                console.log("respone received");
            }
            if(xhr.readyState >= 400){
                console.log("Failed");
            }
            if(xhr.readyState < 400){
                console.log("yes");
            }
            if(response !== undefined){
                console.log(response)
                props.updateUrl(response);
                console.log(props)
            }
            console.log("file uploaded");
        }
        xhr.send(formData);
    }
    return (
        <div className="upload__container">
                <div className="drop__zone ondrop">
                    <p>Drag and drop your file here</p>
                    or <span id="browseBtn" onClick={handleBrowse}>Browse</span>
                    <input type="file" ref={hiddenInputFile} onChange={handleChange} id="fileInput" />
                </div>
        </div>
    )
}


export default connect(mapStateToProps, mapDispatchToProps)(UploadContainer);
