import React, {useContext, useEffect, useState} from "react";
import "./AppDashboard.css";
import {Redirect} from "react-router-dom";
import { AuthContext } from "./Auth";
import firebaseConfig from "../config";
import AppNavBar from "./body/AppNavBar";

function AppDashboard(){
  const { currentUser } = useContext(AuthContext);
  const [data, setData] = useState();
  const [data1, setData1] = useState();
  const [data2, setData2] = useState();
  const [data3, setData3] = useState();

  //daily
  const getData = async () => {
    try {
      const res = await fetch(
        "https://sheet.best/api/sheets/72bdcffc-3da3-4905-b35f-6aaa8d783189/tabs/test2"
      );
      const data = await res.json();
      setData(Object.keys(data).map((key) => data[key]));
      } catch (error) {
      console.log(error);
      }
  };
  //out of stock
  const getData1 = async () => {
    try {
      const res = await fetch(
        "https://sheet.best/api/sheets/670762db-3d19-4d72-8348-85b19e894d9a/tabs/test2"
      );
      const data1 = await res.json();
      setData1(Object.keys(data1).map((key) => data1[key]));
      } catch (error) {
      console.log(error);
      }
  };
  //lastest
  const getData2 = async () => {
    try {
      const res = await fetch(
        "https://sheet.best/api/sheets/72bdcffc-3da3-4905-b35f-6aaa8d783189/tabs/history"
      );
      const data2 = await res.json();
      setData2(Object.keys(data2).map((key) => data2[key]));
      } catch (error) {
      console.log(error);
      }
  };
  //delivery
  const getData3 = async () => {
    try {
      const res = await fetch(
        "https://sheet.best/api/sheets/5a12a409-bc6a-44f9-8b1e-85949f930aec/tabs/delivery"
      );
      const data3 = await res.json();
      setData3(Object.keys(data3).map((key) => data3[key]));
      } catch (error) {
      console.log(error);
      }
  };

  useEffect(() => {
    getData();
    getData1();
    getData2();
    getData3();
  }, []);

  if (!currentUser) {
      return <Redirect to="/login"/>;
  }



  return(
      <div className="right-body">
      <AppNavBar/>
      <h1 className="db-area-header">Dashboard</h1>
      <div className="db-area">
        <div className="left-part">
          <div className="two-in-one">
            <div className="left-box">
              <div className="topic-box">
                <img className="hot-sale" src="./images/hot-sale.png" />
                <h5 className="topic-text">สินค้าขายดีประจำวัน</h5>
              </div>
              <div className="detail-box">
              <table class= 'table'>
                    <thead className="thread">
                      <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Quantity</th>
                      </tr>
                    </thead>
                        {data?.map((item, i) => (
                            <tbody key={i}>
                              {i < 3 &&
                              <tr className="data-in-box">
                                <td >{item.namesort}</td>
                                <td >{item.quantitysort}</td>
                              </tr>}
                            </tbody>
                        ))}
                </table>
              </div>
            </div>
            <div className="right-box">
              <div className="topic-box">
                <img className="alert-box" src="./images/alert.png" />
                <h5 className="topic-text">สินค้าใกล้หมดในสต็อก</h5>
              </div>
              <div className="detail-box">
              <table class= 'table'>
                  <thead>
                      <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Product lot</th>
                      </tr>
                    </thead>
                        {data1?.map((item1, x) => (
                            <tbody key={x}>
                              {x < 3 &&
                              <tr>
                                <td>{item1.Product}</td>
                                <td>{item1.Lot}</td>
                              </tr>}
                            </tbody>
                        ))}
                </table>
              </div>
            </div>
          </div>
          <div className="under-part">
            <div className="long-box">
              <div className="topic-box">
                
                <img className="shipping" src="./images/shipping.png" />
                <h5 className="topic-text">สินค้าที่ถูกจัดส่งล่าสุด</h5>
                
              </div>
              <div className="detail-box">
              <table class= 'table'>
                  <thead>
                      <tr>
                        <th scope="col">Tracking</th>
                        <th scope="col">Customer</th>
                        <th scope="col">Date</th>
                      </tr>
                    </thead>
                        {data3?.map((item3, z) => (
                            <tbody key={z}>
                              {z < 5 &&
                              <tr>
                                <td>{item3.Track}</td>
                                <td>{item3.Name}</td>
                                <td>{item3.Date}</td>
                              </tr>}
                            </tbody>
                        ))}
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="right-part">
          <div className="tall-box">
            <div className="topic-box">
              <img className="cart" src="./images/cart.png" />
              <h5 className="topic-text">รายการสินค้าที่ขายล่าสุด</h5>
              
            </div>
            <div className="detail-box">              
            <table class= 'table'>
                  <thead>
                      <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Quantity</th>
                      </tr>
                    </thead>
                        {data2?.map((item2, y) => (
                            <tbody key={y}>
                              {y < 8 &&
                              <tr>
                                <td>{item2.Prod}</td>
                                <td>{item2.Quan}</td>
                              </tr>}
                            </tbody>
                        ))}
                </table>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AppDashboard;