import React, { useRef } from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../redux-store/mapStore'
const UploadContainer = (props) => {
    var uploadedFile,response;
    const baseUrl = "https://filesharing-api.herokuapp.com/";
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
        xhr.upload.onprogress = function (event) {
            let percent = Math.round((100 * event.loaded) / event.total);
            props.updatePercent(percent);
        }

        xhr.upload.onerror = function () {
            console.log(`Error in upload:${xhr.status}`);
            e.target.files.value = '';
        }

        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                response = (JSON.parse(xhr.responseText)).file.toString();
                console.log("file uploded");
            }
            if(response !== undefined){
                console.log(response)
                props.updateUrl(response);
                console.log(props)
            }
        }
        xhr.open("POST", uploadUrl);
        xhr.send(formData);
    }
    return (
        <div className="upload__container">
            <form action="">
                <div className="drop__zone ondrop">
                    <p>Drag and drop your file here</p>
                    or <span id="browseBtn" onClick={handleBrowse}>Browse</span>
                    <input type="file" ref={hiddenInputFile} onChange={handleChange} id="fileInput" />
                </div>
            </form>
        </div>
    )
}


export default connect(mapStateToProps, mapDispatchToProps)(UploadContainer);
