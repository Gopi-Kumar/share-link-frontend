import React, { useRef }  from 'react'
const UploadContainer = ()=>{
    let uploadedFile;
    const hiddenInputFile = useRef(null);
    const handleBrowse = () => {
        hiddenInputFile.current.click();
    }
    const handleChange = (e) => {
        uploadedFile = e.target.files;
        handleUpload(uploadedFile);
    }
    const handleDrop = (e) => {
        e.preventDefault();
        uploadedFile = e.target.files;
        handleUpload(uploadedFile);
    }

    const handleUpload = (file)=>{
        console.log(file.name)
    }
    return (
        <div className="upload__container">
            <form action="">
                <div className="drop__zone ondrop" onDragEnter={handleDrop}>
                    <p>Drag and drop your file here</p>
                    or <span id="browseBtn" onClick={handleBrowse}>Browse</span>
                    <input type="file" ref={hiddenInputFile} onChange={handleChange} id="fileInput"/>
                </div>
            </form>
        </div>
    )
}
export default UploadContainer;