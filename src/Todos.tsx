import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Todos = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(response => {
        setList(response.data);
      })
      .catch(error => {
        console.error("Error fetching todos:", error);
      });
  }, []);

  return (
    <div>
      <h1>Todo List</h1>
      {list.map((item: any) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Todos;
