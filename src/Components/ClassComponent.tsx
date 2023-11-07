import React from 'react';
import {Component} from 'react';
import "../App.css"
import {SendAndGetMessage} from "../Utils/InternetMessage"


interface Props {
    startUrl:string,
    startReceivedLine: string,
    startErrorMessage: string
}


export class ClassComponent extends Component<Props> {    
    state = {
        url: this.props.startUrl,
        errorMessage: this.props.startErrorMessage,
        receivedLine: this.props.startReceivedLine,
    };

    render(){
        const setUrl = (url: string) => this.setState({...this.state, url: url});    
        const setErrorMessageAndReceivedLine = (errorMessage: string, receivedLine: string) => 
            this.setState({...this.state, receivedLine: receivedLine, errorMessage: errorMessage});

        const SendGetMessageSetVariables = async function (url: string) {
            const received = await SendAndGetMessage(url);
            setErrorMessageAndReceivedLine(received.error, received.answer);
        }

        return <>
            <input className="RegularSize" defaultValue={this.state.url} onChange={(event) => setUrl(event.target.value)} />
            <button onClick={() => SendGetMessageSetVariables(this.state.url)} className="RegularSize">Отправить</button>
            <p className="RegularSize">{this.state.receivedLine}</p>
            <p className="RegularSize" style={{color: 'red'}}>{this.state.errorMessage}</p>
        </>
    }
}