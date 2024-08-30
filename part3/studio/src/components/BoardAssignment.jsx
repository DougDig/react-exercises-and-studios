import { useState } from 'react';

export default function BoardAssignment () {
   const boards = [{label: "Comfort", value: 3}, {label: "Emo", value: 4}, {label: "Western", value: 7}];
   const [boardName, setName] =  useState('no boards yet!');
   console.log(boardName)
   const Options = boards.map((boards, id) => {
     return (
         <option value={boards.value} key={id}>{boards.label}</option>
     )});
   const handleChange = (event) => setName(event.target.value)
   
   const potato = () => setName(event.target.value)
   const testChange = () => console.log(event.target.value)
   // ; return setName(event.target.value)

   const helloW = () => console.log('hello')

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
         <option>Choose a Board!</option>
         {Options}
      </select>
      <p>Saved to {boardName}!</p>
      </div>
   );
}

{/* <form >
   <label>
      <select>
         <option>

         </option>
      </select>
   </label>
</form> */}