import './App.css';
import Header from './Component/Header'
import ProgressContainer from './Component/ProgressContainer'
import ShareLinkContainer from './Component/ShareLinkContainer'
import UploadContainer from './Component/UploadContainer'
function App() {
  return (
    <div className="App">
      <Header/>
      <UploadContainer/>
      <ProgressContainer/>
      <ShareLinkContainer/>
    </div>
  );
}

export default App;
