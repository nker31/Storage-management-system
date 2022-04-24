import "./AppReportMenu.css";
import AppNavBar from "./AppNavBar";

function AppReportMenu(){
    return(
        <div className="right-body">
            <AppNavBar/>
            <h1 className="stock-area-header">Report</h1>
            <div className="box-of-box">
                <div className="report-two-box">
                    <h3>รายงานประจำวัน</h3>
                    <div className="calendar-area">
                        <h3><u> place calendar here</u></h3>
                    </div>
                    <button className="search-button" type="">search</button>
                </div>
                <div className="report-two-box">
                    <h3>รายงานประจำเดือน</h3>
                    <div className="calendar-area">
                        <h3><u> place calendar here</u></h3>
                    </div>
                    <button className="search-button" type="">search</button>
                </div>
            </div>
        </div>   
    )
}
export default AppReportMenu;