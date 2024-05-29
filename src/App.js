import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './Pages/NavBar';
import HomePage from './Pages/HomePage';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/DisplayTasksPage" element={<HomePage />} />
          <Route path="/AddTaskPage" element={<HomePage />} />
        </Routes>
        </main>
      </BrowserRouter>
  
    </div>
  );
}

export default App;
