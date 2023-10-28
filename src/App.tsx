import React from 'react';
import './App.css';
import {OutputField} from './Components/OutputField' 
import {SendButton} from './Components/SendButton'
import {UrlInput} from './Components/UrlInput'
import {SendAndGetMessage} from "./utils/InternetMessage"

function App() {

  let [url, setUrl] = React.useState<string>();
  let [receivedLine, setReceivedLine] = React.useState<string>();

  return (
    <div className='App'>
      <UrlInput url = {url || "https://catfact.ninja/fact"} setUrl={setUrl}/>
      <SendButton onCklick={() => SendAndGetMessage(url || "https://catfact.ninja/fact", setReceivedLine)}></SendButton>
      <OutputField receivedText={receivedLine || 'Текст будет выведен сюда'}></OutputField>
    </div>
  );
}

export default App;