import './App.css';
import Header from './Component/Header'
import ProgressContainer from './Component/ProgressContainer'
import ShareLinkContainer from './Component/ShareLinkContainer'
import UploadContainer from './Component/UploadContainer'
import {updatePercent, updateUrl, fileUploaded} from './redux-store/store'
import { connect } from 'react-redux'

function App(props) {
  let percent  = props.percent;
  if(percent > 0){
    if(percent === 100){
      percent = "File Uploaded"
      return (
        <div className="App">  
          <Header store={props}/>
          <UploadContainer/>
          <ProgressContainer percent = {percent}/>
          <ShareLinkContainer value={props.url}/>
        </div>
      )
    }
    percent  = `Uploading... ${props.percent}%`
    return (
      <div className="App">
        <Header/>
        <UploadContainer/>
        <ProgressContainer percent = {percent}/>
      </div>
    );
  }else{
    return (
      <div className="App">
        <Header/>
        <UploadContainer/>
      </div>
    )
  }
  
}

const mapStateToProps = (state, ownPropw)=>{
  return {
    percent : state.percent,
    url : state.url, 
    fileUploaded : state.fileUploaded
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updatePercent : percent => dispatch(updatePercent(percent)),
    updateUrl : url => dispatch(updateUrl(url)),
    fileUploaded : d => dispatch(fileUploaded(d))
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(App);
