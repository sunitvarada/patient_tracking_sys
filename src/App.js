import React from "react";
import './index.css';
import {Routes, Route, IndexRedirect} from 'react-router-dom'
// import {Layout} from "antd";
import Sider from "./components/Sider";
import Header from "./components/Header";
import AddPatient from './components/Patient/AddPatient';
import ViewPatient from './components/Patient/ViewPatient'
// import Footer from './components/Footer';
// import Content from "./components/Content";
import Dashboard from './Pages/Dashboard';
const App= ()=>{
    return(
        <div className="App">
            <aside id="sidenav"><Sider/></aside>
            <main>
                <Header/>
                <div id="main" className="content">
                    <Routes>
                        <Route  path="/dashboard" element={<Dashboard/>} />
                        <Route path="/addpatient" element={<AddPatient/>}/>
                        <Route path="/viewpatient" element={<ViewPatient/>}/>
                    </Routes>
                </div>
            </main>
        </div>
    )
}

export default App;