const UPDATE_PERCENT = "UPDATE_PERCENT"
const UPDATE_URL = "UPDATE_URL";
const FILE_UPLOADED = "FILE_UPLOADED"

export const reducer = (state = {}, action) => {
    switch(action.type){
        case FILE_UPLOADED:
            return {
                ...state, 
                fileUploadedStatus : action.fileUploadedStatus
            }
        case UPDATE_PERCENT:
            return {
                ...state,
                percent : action.percent
            }
        case UPDATE_URL:
            return {
                ...state, 
                url :action.url
            }
        default:
            return state;
    }
}

export const updatePercent = (percent)=>{
    return {
        type : UPDATE_PERCENT, 
        percent : percent
    }
}

export const updateUrl = (url)=>{
    return {
        type : UPDATE_URL, 
        url : url
    }
}

export const fileUploaded = (fileUploadedStatus)=>{
    return {
        type : FILE_UPLOADED,
        fileUploadedStatus : fileUploadedStatus
    }
}
