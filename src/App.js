import logo from './logo.svg';
import './App.css';
import DragnDrop from './Components/DragnDrop';
import { useState } from 'react';
import TextArea from './Components/TextArea';
import DownloadButton from './Components/DownloadButton';

function App() {
  const [text,setText] = useState('');
  return (<>
    <DragnDrop setText={setText}/>
    <h1>Srt Version:</h1>
    <TextArea text={text}/>
    <DownloadButton/>
  </>
  );
}

export default App;
