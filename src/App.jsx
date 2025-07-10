import { useState } from 'react'
import './App.css'
import Sign_login from "./Components/Sign_login/Sign_login.jsx";
import Sign_login_top from "./Components/Sign_login_top/Sign_login_top.jsx";
import MobileVer from "./Components/Mobile_verification/Mobile_ver.jsx";
import Mobile_ver from "./Components/Mobile_verification/Mobile_ver.jsx";
import Personal_det from "./Components/Personal_details/Personal_det.jsx";
import Event_det from "./Components/Event_details/Event_det.jsx";
import BudgetBank from "./Components/Budget_bank/Budget_bank.jsx";
import Budget_bank from "./Components/Budget_bank/Budget_bank.jsx";
import Reg_com from "./Components/Registration_complete/Reg_com.jsx";
import Mvp_demo from "./Components/Mvp_demo/Mvp_demo.jsx";

function App() {

  return (
    <>

      <Sign_login_top/>
      <Sign_login />
      <Mobile_ver/>
        <Personal_det/>
        <Event_det/>
        <Budget_bank/>
        <Reg_com/>
        <Mvp_demo/>
    </>
  )
}

export default App
