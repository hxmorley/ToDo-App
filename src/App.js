import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './Pages/NavBar';
import HomePage from './Pages/HomePage';
import ThemedComponent from './Components/ThemedComponent';
import { ThemeProvider } from './Context/ThemeContext';




function App() {
  return (
      {/* <BrowserRouter>
        <NavBar />
        <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/DisplayTasksPage" element={<HomePage />} />
          <Route path="/AddTaskPage" element={<HomePage />} />
        </Routes>
        </main>
      </BrowserRouter> */}
      
      <ThemeProvider>
      <div>
        <h1>Themed App</h1>
        {/*The component is rendered, showcasing the result of components with access to the context*/}
        <ThemedComponent />
      </div>
    </ThemeProvider>
    
  );
}

export default App;
