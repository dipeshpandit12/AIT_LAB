import Homepage from "./Components/Pages/Homepage";
import Publication from "./Components/Pages/Publication";
import Teams from "./Components/Pages/Teams";
import RootLayout from './Layout/RootLayout';
import { Routes, Route} from 'react-router-dom';

function App() {
  return (
    <RootLayout>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/publication" element={<Publication />}/>
        <Route path="/teams" element={< Teams />}/>
      </Routes>
    </RootLayout>
  );
}

export default App;