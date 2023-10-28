import axios from 'axios'

export function SendAndGetMessage(url: string, setReceivedLine: (_: string)=>void)
{
    axios   
        .get(url)
        .then((resp) => {
            let ans: string = resp.data.fact;
            setReceivedLine(ans);
        })
        .catch(() => setReceivedLine("Адрес не сработал ("));
}

