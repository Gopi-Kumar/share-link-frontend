import './App.css';
import Header from './Component/Header'
import ProgressContainer from './Component/ProgressContainer'
import ShareLinkContainer from './Component/ShareLinkContainer'
import UploadContainer from './Component/UploadContainer'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './redux-store/mapStore'

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
        <UploadContainer hello={"gopp"}/>
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

export default connect(mapStateToProps,mapDispatchToProps)(App);

