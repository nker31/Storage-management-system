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
                            <p className="report-detail">- ชื่อรายการสั่งผลิดสินค้า</p>
                            <p className="report-detail">- ประเภทสินค้า</p>
                            <p className="report-detail">- ราคา</p>
                            <p className="report-detail">- จำนวนรายการ</p>
                            <p className="report-detail">- วันที่สั่งสินค้า</p>
                            <p className="report-detail">- ชื่อผู้รับสินค้า</p>
                            <p className="report-detail">- หมายเหตุ</p>
                        </div>
                    </div>
                    <div className="type-box">
                        <div className="report-header">
                            <h4>รายงานยอดขาย</h4>
                        </div >
                        <div className="report-detail-box">
                            <p>- ชื่อรายการสินค้า</p>
                            <p>- ชื่อลูกค้าที่สั่งซื้อ</p>
                            <p>- ประเภทสินค้า</p>
                            <p>- ราคา</p>
                            <p>- จำนวนที่สั่งซื้อ</p>
                            <p>- Tracking number</p>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
            
        </div >
    )
}
export default AppReportType;