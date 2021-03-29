const ProgressContainer =(props)=>{
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
export default ProgressContainer;