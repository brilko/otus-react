import React from 'react';
import './App.css';
import {SendButton} from './Components/SendButton'
import {UrlInput} from './Components/UrlInput'
import axios from 'axios'
import {ErrorOutput} from "./Components/ErrorOutput"


export default function App() {

  let [url, setUrl] = React.useState<string>("https://catfact.ninja/fact");
  let [receivedLine, setReceivedLine] = React.useState<string>("Здесь будет полученное сообщение");
  let [errorMessage, setErrorMessage] = React.useState<string>("")

  function SendAndGetMessage(url: string)  {
    axios   
      .get(url)
      .then((resp) => {
        let ans: string = resp.data.fact;
        setReceivedLine(ans);
        setErrorMessage("");
      })
      .catch((reason) => {
        setReceivedLine("Адрес не сработал.");
        setErrorMessage(reason.message);
      });
  }

  return (
    <div className='App'>
      <UrlInput url = {url} setUrl={setUrl}/>
      <SendButton onCklick={() => SendAndGetMessage(url)}></SendButton>
      <div className="RegularSize">{receivedLine}</div>
      <ErrorOutput errorMessage = {errorMessage}/>
    </div>
  );
}