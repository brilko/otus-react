interface Props {
    receivedText: string
}

export function OutputField(props: Props){
    return(
        <>
            <div className="RegularSize">{props.receivedText}</div>
        </>
    );
}