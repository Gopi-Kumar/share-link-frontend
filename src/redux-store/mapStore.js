
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
        updatePercentInStore: percent => dispatch(updatePercent(percent)),
        updateUrlInStore: url => dispatch(updateUrl(url)),
        fileUploadedInStore: d => dispatch(fileUploaded(d))
    }
}


