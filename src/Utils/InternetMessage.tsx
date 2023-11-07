import axios from 'axios'

export async function SendAndGetMessage(url: string) : Promise<{answer: string, error: string}>  {
  try {
    const axiousResult = await axios.get(url)
    const result = axiousResult.data.fact
    return {answer: result, error: ""}
  } catch (error: any) {
    return {answer: "Адрес не сработал.", error: error.message}
  }
}