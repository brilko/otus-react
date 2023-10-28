import React from 'react';
import './App.css';
import {SendButton} from './Components/SendButton'
import {UrlInput} from './Components/UrlInput'
import {ErrorOutput} from "./Components/ErrorOutput"
import {SendAndGetMessage} from "./Utils/InternetMessage"


export default function App() {

  let [url, setUrl] = React.useState<string>("https://catfact.ninja/fact");
  let [receivedLine, setReceivedLine] = React.useState<string>("Здесь будет полученное сообщение");
  let [errorMessage, setErrorMessage] = React.useState<string>("")

  return (
    <div className='App'>
      <UrlInput url = {url} setUrl={setUrl}/>
      <SendButton onCklick={() => SendAndGetMessage(url, setReceivedLine, setErrorMessage)}></SendButton>
      <div className="RegularSize">{receivedLine}</div>
      <ErrorOutput errorMessage = {errorMessage}/>
    </div>
  );
}