import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../redux-store/mapStore'
// import { useRef } from 'react'
const ProgressContainer =(props)=>{
    if(props.percent < 100){
        return(
            <div className="progress__container">
                <div className="bg__progress"></div>
                <div className="inner__container">
                    <div className="precent__container">
                        <span className="percentage" id="progressPercent">File Uploading... {props.percent}%</span>
                    </div>
                </div>
                <div className="progress__bar"></div>
            </div>
        )
    }else{
        return(
            <div className="progress__container">
                <div className="bg__progress"></div>
                <div className="inner__container">
                    <div className="precent__container">
                        <span className="percentage" id="progressPercent">File Uploaded</span>
                    </div>
                </div>
                <div className="progress__bar"></div>
            </div>
        )
    }
    
}
export default connect(mapStateToProps, mapDispatchToProps)(ProgressContainer);