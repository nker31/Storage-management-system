import "./AppReportMenu.css";
import AppNavBar from "./AppNavBar";
import Calendar from 'react-calendar'
import { useState } from "react";

function AppReportMenu(){    

    const [date_day, setDate] = useState([
        new Date()
    ]);
    const [date_month, setDateMonth] = useState([
        new Date()
    ]);

    return(

        <div className="right-body">
            <AppNavBar/>
            <h1 className="stock-area-header">Report</h1>
            <div className="box-of-box">
                <div className="report-two-box">
                    <h3>รายงานประจำวัน</h3>
                    <div className="react-calendar">
                        <Calendar onChange={setDate}
                        value={date_day}
                        maxDate={new Date()} minDate={new Date(2021,1,1)}
                        minDetail='year'/>
                    </div>
                    <a href="/reporttype">
                        <button className="search-button">search</button>
                    </a>

                </div>
                <div className="report-two-box">
                    <h3>รายงานประจำเดือน</h3>
                    <div className="react-calendar">
                        <Calendar onChange={setDateMonth} 
                        value={date_month}
                        maxDate={new Date()} minDate={new Date(2021,1,1)} 
                        maxDetail='year'/>
                    </div>
                    <a href="/reporttype">
                        <button className="search-button">search</button>
                    </a>
                </div>
            </div>
        </div>   
    )
}

export default AppReportMenu;