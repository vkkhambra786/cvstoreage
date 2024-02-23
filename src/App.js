


// App.js
import React from 'react';
import { BrowserRouter as Router, Route,   Routes,Navigate ,Link} from 'react-router-dom';
import CV from './components/Cv';
import AdminTool from './components/Admintool';
import "./App.css"
 
const App = () => {
  return (
    <Router>
      <div>
        <nav className='navbar'>

        <ul className="navbar-list">
            {/* <li className="navbar-item">
              <Link to="/">Home</Link>
            </li> */}
            <li className="navbar-item">
              <Link to="/cv">Cv</Link>
            </li>
            <li className="navbar-item">
              <Link to="/admin">Admin</Link>
            </li>
            
            
          </ul>
        </nav>
      <Routes>
        <Route path="/cv" element={<CV />} />
        <Route path="/admin" element={<AdminTool />} />
        <Route path="/" element={<Navigate to="/cv" />} />
      </Routes>
      </div>
    </Router>
  );
};

export default App;


// App.js
// import React, { useState, useEffect } from 'react';
// import CV from './components/Cv';
// import AdminTool from './components/Admintool';

// const App = () => {
//   const [cvData, setCVData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     education: '',
//     experience: '',
//   });

//   useEffect(() => {
//     const storedCVData = JSON.parse(localStorage.getItem('cvData'));
//     if (storedCVData) {
//       setCVData(storedCVData);
//     }
//   }, []);

//   const updateCVData = (newData) => {
//     setCVData(newData);
//     localStorage.setItem('cvData', JSON.stringify(newData));
//   };

//   return (
//     <div>
//       <CV data={cvData} />
//       <AdminTool onUpdate={updateCVData} />
//     </div>
//   );
// };

// export default App;


// import logo from './logo.svg';
// import './App.css';
// import CVGenerator from './components/CvGenerator';
// function App() {
//   return (
//     <div className="App">
       
//       <CVGenerator />
//     </div>
//   );
// }

// export default App;
