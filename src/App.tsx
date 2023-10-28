import React from 'react';
import './App.css';
import {SendButton} from './Components/SendButton'
import {UrlInput} from './Components/UrlInput'
import axios from 'axios'
import {ErrorOutput} from "./Components/ErrorOutput"


export default function App() {

  let [url, setUrl] = React.useState<string>();
  let [receivedLine, setReceivedLine] = React.useState<string>();
  let [errorMessage, setErrorMessage] = React.useState<string>()

  const initialUrl = "https://catfact.ninja/fact"

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
      <UrlInput url = {url || initialUrl} setUrl={setUrl}/>
      <SendButton onCklick={() => SendAndGetMessage(url || initialUrl)}></SendButton>
      <div className="RegularSize">{receivedLine || "Здесь будет полученное сообщение"}</div>
      <ErrorOutput errorMessage = {errorMessage || ""}/>
    </div>
  );
}