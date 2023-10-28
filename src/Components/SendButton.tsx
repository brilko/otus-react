import { Component } from "react";   

interface Props {
    onCklick: ()=>void
}


export class SendButton extends Component<Props> {
    render(){
        return <>
            <button onClick={this.props.onCklick} className="RegularSize">Отправить</button>
        </>; 
    } 
}