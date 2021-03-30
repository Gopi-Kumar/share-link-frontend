import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../redux-store/mapStore'
// import { useRef } from 'react'
const ProgressContainer =(props)=>{
    // const bg_progress = useRef();
    // console.log(bg_progress.current) 
    return(
        <div className="progress__container">
            <div className="bg__progress"></div>
            <div className="inner__container">
                <div className="precent__container">
                    <span className="percentage" id="progressPercent">{props.percent}</span>
                </div>
            </div>
            <div className="progress__bar"></div>
        </div>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(ProgressContainer);