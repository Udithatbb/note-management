"use client";

import { useState } from "react";

function Home() {
  const [note, setNote] = useState("");
  const [notesArray, setNotesArray] = useState([]);

  //event handler to update the note state variable
  const handleChange = (event) => {
    setNote(event.target.value);
  };

  // Event handler to log the note to the console and another new div
  function addNewNote() {
    setNotesArray([...notesArray, note]);
    console.log(note);
    setNote("");//Clear the input after adding note

  }

  return (
    <div>
      <h1 className="font-sans font-semibold  text-[50px] border-solid border-4 rounded-lg  border-black bg-yellow-500 text-center mx-40 mt-20 ">
        Add Your Note in this context . . !
      </h1>

      <div className="mt-10 flex justify-center ">
        <textarea
          className="bg-gray-300 "
          placeholder="Add your note here..."
          name="note"
          cols="100"
          rows="15"
          value={note}
          onChange={handleChange}
        />
      </div>

      <div className="mt-10 flex ">
        <div className="shadow-md bg-[#6e42c3] ml-[280px] ">
          <button type="button" className=" p-4" onClick={addNewNote}>
            Add New
          </button>
        </div>
        <div className="shadow-md  bg-[#f8e0a0] ml-[150px]">
          <button type="button" className=" p-4">
            Update
          </button>
        </div>
        <div className=" shadow-md bg-[#796699] ml-[150px]">
          <button type="button" className=" p-4">
            Delete
          </button>
        </div>
      </div>

      <div>
        {notesArray.map((note, index)=>(
          <div key={index}>{note}</div>
        ))}
      </div>
    </div>
  );
}

export default Home;
