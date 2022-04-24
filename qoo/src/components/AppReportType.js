import "./AppReportType.css";
import AppNavBar from "./AppNavBar";

function AppReportType(){
    const date = "DD/MM/YYYY"
    return(
        <div className="right-body">
            <AppNavBar/>
            <div className="header-box">
                <h3>รายงานประจำวันที่ {date}</h3>
            </div>
            <div className="box-of-report">
                <div className="report-type-select-box">
                    <div className="type-box">
                        <div className="report-header">
                            <h4 >รายงานคลังสินค้า</h4>
                        </div>
                        <div className="report-detail-box">
                            <p className="report-detail">- ชื่อสินค้า</p>
                            <p className="report-detail">- ประเภทสินค้า</p>
                            <p className="report-detail">- จำนวนคงเหลือในคลัง</p>
                            <p className="report-detail">- ล๊อตของสินค้า</p>
                            <p className="report-detail">- วันที่หมดอายุ</p>
                        </div>
                    </div>
                    <div className="type-box">
                        <div className="report-header">
                            <h4>รายงานการสั่งผลิตสินค้า</h4>
                        </div>
                        <div className="report-detail-box">
                            <p className="report-detail">- detail</p>
                            <p className="report-detail">- detail</p>
                            <p className="report-detail">- detail</p>
                            <p className="report-detail">- detail</p>
                        </div>
                    </div>
                    <div className="type-box">
                        <div className="report-header">
                            <h4>รายงานยอดขาย</h4>
                        </div >
                        <div className="report-detail-box">
                            <p>- detail</p>
                            <p>- detail</p>
                            <p>- detail</p>
                            <p>- detail</p>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
            
        </div >
    )
}
export default AppReportType;