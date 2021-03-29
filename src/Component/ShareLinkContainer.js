const ShareLinkContainer = (props) => {
    console.log(props.percent)
    const handleCopy = (e) => {
        let fileURL = document.querySelector("#fileURL");
        fileURL.select();
        document.execCommand("copy");
    }
    return (
        <div className="share__link__container">
            <p className="expire">Link expires in 24 hrs</p>
            <div className="input__container">
                <input type="text" id="fileURL" value={props.value} />
                <button id="copuURLBtn" alt="copy to clipboard" onClick={handleCopy}>Copy</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownPropw) => {
    return {
        percent: state.percent,
        url: state.url,
        fileUploaded: state.fileUploaded
    }
}

export default ShareLinkContainer;