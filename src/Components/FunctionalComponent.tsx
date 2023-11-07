import React from 'react';
import "../App.css"
import {SendAndGetMessage} from "../Utils/InternetMessage"


interface Props {
    startUrl:string,
    startReceivedLine: string,
    startErrorMessage: string
}


export function FunctionalComponent(props: Props) {
    let [url, setUrl] = React.useState<string>(props.startUrl);
    let [receivedLine, setReceivedLine] = React.useState<string>(props.startReceivedLine);
    let [errorMessage, setErrorMessage] = React.useState<string>(props.startErrorMessage)

    async function SendGetMessageSetVariables() {
        const received = await SendAndGetMessage(url)
        setReceivedLine(received.answer)
        setErrorMessage(received.error) 
    }

    return <>
        <input className="RegularSize" defaultValue={url} onChange={(event) => setUrl(event.target.value)} />
        <button onClick={SendGetMessageSetVariables} className="RegularSize">Отправить</button>
        <div className="RegularSize">{receivedLine}</div>
        <p className="RegularSize" style={{color: 'red'}}>{errorMessage}</p>
    </>
}

