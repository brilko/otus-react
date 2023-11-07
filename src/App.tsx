import './App.css';
import {FunctionalComponent} from "./Components/FunctionalComponent"
import { ClassComponent } from './Components/ClassComponent';



export default function App() {
  const startUrl:string = "https://catfact.ninja/fact"
  const startReceivedLine: string = "Здесь будет полученное сообщение"
  const startErrorMessage: string = ""
  return (
  <div className='App'>
    <FunctionalComponent 
      startUrl={startUrl} 
      startReceivedLine={startReceivedLine} 
      startErrorMessage={startErrorMessage} />

     <ClassComponent
           startUrl={startUrl} 
           startReceivedLine={startReceivedLine} 
           startErrorMessage={startErrorMessage} /> 
  </div>
  );
}