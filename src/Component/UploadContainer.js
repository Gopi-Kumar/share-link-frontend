const UploadContainer = ()=>{
    return (
        <div className="upload__container">
            <form action="">
                <div className="drop__zone">
                    <p>Drag and drop your file here</p>
                    or <span id="browseBtn">Browse</span>
                    <input type="file" id="fileInput"/>
                </div>
            </form>
        </div>
    )
}
export default UploadContainer;