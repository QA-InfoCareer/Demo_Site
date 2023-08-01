import React from "react";

//import MyWindowComponent from "./newwindow"; 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles.css"
import TextBox from "./Home"
import CheckBox from "./CheckBox"
import RadioButton from "./RadioButton"
import DataTable from "./DataTable"
import Buttons from "./Buttons"
import Sidebar from "./Sidebar"
import "bootstrap/dist/css/bootstrap.min.css"
import Links from "./Links"
import BrokenLinks from "./BrokenLinks"
import Upload from "./Upload"
import Dynamic from "./Dynamic"
import BW from "./browserwindows";
import Alert from "./alerts";
import Frames from "./frames";
import NestedFrames from "./nestedframes";
import Dialog from "./dialogs";
import StudentRegistrationForm from "./StudentForm"
//import Sidebar1 from './sidebar1';
import Sortable from './sortable';
import Selectable from './Selectable';
import Drag from './Dragabble';
import ResizableDraggable from './Resizable';
import Drop from './Droppable';
import MyAccordion from "./accordian";
import AutocompleteExample from "./autocomplete";
import DateTimePicker from "./datetimepicker";
import MySlider from "./slider";
import ProgressApp from "./progreesbar";
import Tabs1 from "./tabs";
import TooltipExample from "./tooltips";
import Selectmenu from "./selectmenu";
import Menus from "./menu";
import Addremoveelements from "./AddRemoveElements";
import Login from "./Login";
export default function Profile() {
  
  return (
   
   <Router>
    <div className="App">
    <div className="app">
          <aside className="siderbar">
            <Sidebar />
          </aside>
        </div>
        <div className="content">
          <Routes>
            <Route path="/" Component={TextBox} exact />
            <Route path="/checkBox" Component={CheckBox}/>
            <Route path="/radioButton" Component={RadioButton}/>
            <Route path="/webTables" Component={DataTable}/>
            <Route path="/buttons" Component={Buttons}/>
            <Route path="/links" Component={Links}/>
            <Route path="/brokenLinks" Component={BrokenLinks}/>
            <Route path="/upload" Component={Upload}/>
            <Route path="/dynamic" Component={Dynamic}/>
            <Route path="/studentform" Component={StudentRegistrationForm}/>
            <Route path="/browserwindows" Component={BW}/>
            <Route path="/alerts" Component={Alert}/>
            <Route path="/frames" Component={Frames}/>
            <Route path="/nestedframes" Component={NestedFrames}/>
            <Route path="/dialogs" Component={Dialog}/>
            <Route path="/Sortable" Component={Sortable} />
            <Route path="/Selectable" Component={Selectable} />
            <Route path="/Resizable" Component={ResizableDraggable} />
            <Route path="/Dragabble" Component={Drag} />
            <Route path="/accordion" Component={MyAccordion} />  
            <Route path="/autocomplete"   Component={AutocompleteExample}/>
            <Route path="/addorremoveelements" Component={Addremoveelements} />
            <Route path="/Droppable" Component={Drop} />
            <Route path="/datetimepicker"   Component={DateTimePicker}/>
            <Route path="/slider"   Component={MySlider}/>
            <Route path="/progressbar"   Component={ProgressApp}/>
            <Route path="/tabs" Component={Tabs1} />
            <Route path="/tooltips" Component={TooltipExample} />
            <Route path="/menu" Component={Menus} />
            <Route path="/selectmenu" Component={Selectmenu} />
            <Route path='/login' Component={Login} />
          </Routes>
        </div>
        
    </div>  
   </Router>
   
     
  )
}
