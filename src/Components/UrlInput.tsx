import "../App.css"

interface Props {
    url: string,
    setUrl: (newUrl:string) => void
}

export function UrlInput(props: Props){
    return(
        <>
            <input className="RegularSize" defaultValue={props.url} onChange={(event) => props.setUrl(event.target.value)} />
        </>
    );
}