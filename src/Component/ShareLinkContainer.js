import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../redux-store/mapStore'
const ShareLinkContainer = (props) => {
    const handleCopy = (e) => {
        let fileURL = document.querySelector("#fileURL");
        fileURL.select();
        document.execCommand("copy");
    }
    function doNothing(){
        
    }
    return (
        <div className="share__link__container">
            <p className="expire">Link expires in 24 hrs</p>
            <div className="input__container">
                <input type="text" id="fileURL" onChange={doNothing} value={props.url}/>
                <button id="copuURLBtn" alt="copy to clipboard" onClick={handleCopy}>Copy</button>
            </div>
        </div>
    )
}


export default connect(mapStateToProps, mapDispatchToProps)(ShareLinkContainer);