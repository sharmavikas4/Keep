import React from "react";

function CreateArea(props) {
  return (
    <div>
      <form>
        <input onChange={props.onchange} name="title" placeholder="Title" value={props.note.title}/>
        <textarea onChange={props.onchange} name="content" placeholder="Take a note..." rows="3" value={props.note.content}/>
        <button onClick={props.onadd}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
