import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AddSubscriber from "./AddSubscriber";
import ShowSubscriber from "./ShowSubscriber";

export default function Home() {
  const [subscribersList, setSubscribersList] = useState([
    { id: 1, name: "Harsh Shukla", phone: "8319610356" },
    { id: 2, name: "Harsh Shukla", phone: "8989890338" },
    { id: 3, name: "Harsh Shukla", phone: "8098666388" },
  ]);

  function handleDelete(id) {
    const filteredSubscribersList = subscribersList.filter(
      (contact) => contact.id !== id
    );
    return setSubscribersList(filteredSubscribersList);
  }

  function handleAdd(name, phone) {
    const newContactObj = {
      id: new Date(),
      name: name,
      phone: phone,
    };
    return setSubscribersList([...subscribersList, newContactObj]);
  }

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <ShowSubscriber
              subscribersList={subscribersList}
              handleDelete={handleDelete}
            />
          }
        />
        <Route path="/add" element={<AddSubscriber handleAdd={handleAdd} />} />
      </Routes>
    </>
  );
}
