import { useEffect, useState } from "react";

export default function FetchPractice() {
  const [apiData, setApiData] = useState([]);

  useEffect(async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    setApiData(data);
  });

  return (
    <>
      {apiData.map((post) => (
        <div
          key={post.id}
          style={{
            border: "1px solid black",
            margin: "16px",
            padding: "16px",
            backgroundColor: "#2d2d2d",
            color: "white",
            fontWeight: "bold",
          }}
        >
          {JSON.stringify(post)}
        </div>
      ))}
    </>
  );
}
