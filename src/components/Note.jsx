function Note(props){
    return <div className = "note">
        <h1>{props.notes.title}</h1>
        <p>{props.notes.content}</p>
        <button onClick={()=>{
          props.onclick(props.id);
        }}>DELETE</button>
    </div>
}
export default Note;
