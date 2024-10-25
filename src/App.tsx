// import  { useEffect, useState } from 'react';
// // import logo from './logo.svg';
// import './App.css';
// import axios from 'axios'

// function App() {
//   const [list, setList] = useState([]);

//   useEffect(() => {
//     axios.get('https://jsonplaceholder.typicode.com/todos')
//       .then(response => {
//         // Update the list with the response data
//         setList(response.data);
//       })
//       .catch(error => {
//         console.error("Error fetching data:", error);
//       });
//   }, []); // Empty dependency array to run the effect only once on component mount

//   return (
//     <>
    

//   <div className="App">
//     <div>
//       <p>skjshskjhsksfffjl</p>
//       {list.map((item: any) => (
//         <div key={item.id}>
//           <h3>{item.title}</h3>
//           <p>{item.body}</p>
//         </div>
//       ))}
//     </div>
//   </div>
//   </>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Todos from './Todos';
import Images from './Images';
import './App.css';
import exampleImage from './assets/images/example.svg';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/todos">Todos</Link></li>
          <li><Link to="/images">Images</Link></li>
        </ul>
      </nav>

      <div>
        <h1>Welcome to My App</h1>
        <img src={exampleImage} alt="example" />
      </div>

      <Routes>
        <Route path="/todos" element={<Todos />} />
        <Route path="/images" element={<Images />} />
      </Routes>
    </Router>
  );
}

export default App;
