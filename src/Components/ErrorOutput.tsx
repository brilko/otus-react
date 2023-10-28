import "../App.css"

interface Props {
    errorMessage:string
}

export function ErrorOutput(props: Props) {
    return (
        <p className="RegularSize" style={{color: 'red'}}>{props.errorMessage}</p>
    );

}