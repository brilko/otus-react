interface Props {
    onCklick: ()=>void
}

export function SendButton(props: Props){
    return(
        <>
            <button onClick={props.onCklick} className="RegularSize">Отправить</button>
        </>
    );
}