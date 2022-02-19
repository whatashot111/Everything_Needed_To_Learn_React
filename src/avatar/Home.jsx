import Avatar from "./Avatar";
import "../index.css";
import { useState } from "react";
import { Button } from "@mui/material";

export default function Home(props) {
  const [names, setNames] = useState([
    { id: 1, name: "Harsh Shukla", age: 27, isMarried: false },
    { id: 2, name: "Sankalp Shukla", age: 32, isMarried: true },
    { id: 3, name: "Abhijeet Dubey", age: 26, isMarried: false },
    { id: 4, name: "Nikhil Raj Singh", age: 28, isMarried: false },
  ]);

  function handleAdd() {
    const newNames = [
      ...names,
      { id: names.length + 1, name: "Harsh Shukla", age: 27, isMarried: false },
    ];
    setNames(newNames);
  }

  return (
    <>
      <div>
        {names.map((person) => (
          <div key={person.id}>
            {
              <Avatar
                id={person.id}
                name={person.name}
                age={person.age}
                isMarried={person.isMarried}
              />
            }
          </div>
        ))}
        <Button onClick={handleAdd} color="secondary" variant="contained">
          Add Student
        </Button>
      </div>
    </>
  );
}
