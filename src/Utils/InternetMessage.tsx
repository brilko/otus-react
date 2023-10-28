import axios from 'axios'


export function SendAndGetMessage(url: string, setReceivedLine: (_:string) => void, setErrorMessage: (_:string) => void)  {
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