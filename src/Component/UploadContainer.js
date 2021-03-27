import React, { useRef }  from 'react'
const UploadContainer = ()=>{
    let uploadedFile;
    const baseUrl = "http://localhost:3000";
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
        xhr.upload.onprogress = function(event){
            let percent = Math.round((100*event.loaded) / event.total);
            console.log(percent);
        }

        xhr.upload.onerror = function(){
            console.log(`Error in upload:${xhr.status}` );
            e.target.files.value='';
        }

        xhr.onreadystatechange = function(){
            if(xhr.readyState === XMLHttpRequest.DONE){
                var response = JSON.parse(xhr.responseText);
                console.log(response);
                console.log("file uploded");
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
                    <input type="file" ref={hiddenInputFile} onChange={handleChange} id="fileInput"/>
                </div>
            </form>
        </div>
    )
}
export default UploadContainer;