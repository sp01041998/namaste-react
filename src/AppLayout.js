import Header from "./header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
    return (
    <div className="appContainer">
      <Header/>
      <Outlet/>
    </div>
    );
};



export default AppLayout