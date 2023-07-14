import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import {
  useState
} from "react";

function App() {
  const [list,setList] = useState([]);
  const [note,setNotes] = useState({title: "",content: ""});
  function change(event){
    const {name,value} = event.target;
    setNotes((prevValue)=>{
      if (name==="title"){
        return {
          title: value,
          content: prevValue.content
        }
      }
      else {
        return {
          title: prevValue.title,
          content: value
        }
      }
    })
  }
  function add(event){
    setList((prevValue)=>{
      return [...prevValue,note];
    });
    setNotes({title: "",content:""});
    event.preventDefault();
  }
  function deleteNote(id){
    setList((prevValue)=>{
      return prevValue.filter((note,i)=>{
        return i!==id;
      })
    })
  }
  return (
    <div>
      <Header />
      <CreateArea onchange={change} note={note} onadd={add}/>
      {list.map((item,index)=>{ return <Note key={index} id={index} notes={item} onclick={deleteNote}/>})}
      <Footer />
    </div>
  );
}
export default App;
