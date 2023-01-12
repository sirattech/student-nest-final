import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from "./Component/SideBar/SideBar"
import Drop from './Component/drop/Drop';
import {BrowserRouter} from "react-router-dom"
import Table from './Component/Table/Table';
function App() {
  return (
    <div className="App ">
      <BrowserRouter>
      <Sidebar/>
      </BrowserRouter>
      {/* <Table/> */}
      {/* <Drop/> */}
         
    </div>
  );
}

export default App;
