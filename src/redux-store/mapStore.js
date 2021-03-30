
import { updatePercent, updateUrl, fileUploaded } from './store'



export const mapStateToProps = (state, ownPropw) => {
    return {
        percent: state.percent,
        url: state.url,
        fileUploaded: state.fileUploaded
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        updatePercent: percent => dispatch(updatePercent(percent)),
        updateUrl: url => dispatch(updateUrl(url)),
        fileUploaded: d => dispatch(fileUploaded(d))
    }
}


