
import './App.css';

import Mapping from './soloProject/Mapping';




export default  function App() {
  return (
    <div >
       <nav className="flex items-center justify-center bg-red-500 text-white p-4 m-4 rounded-lg">
            <h1 className="text-2xl font-bold">My travel journal</h1>
        </nav>
    <Mapping/>
    </div>
  );
}

