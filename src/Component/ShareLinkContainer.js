

const ShareLinkContainer =()=>{
    return (
        <div className="share__link__container">
            <p className="expire">Link expires in 24 hrs</p>
            <div className="input__container">
                <input type="text" id="fileURL" readonly/>
                <button id="copuURLBtn" alt="copy to clipboard">Copy</button>
            </div>
        </div>
    )
}

export default ShareLinkContainer;