import AppSideBar from "../AppSideBar";
import React, {useContext} from "react";
import AppSideBarEmployee from "../AppSideBarEmployee";
import '../../App'
import { AuthContext } from "../Auth";
function SwitchPage() {
    // const { currentUser } = useContext(AuthContext);
    // let side;
    // if (currentUser.email === 'admin@gmail.com') {
    //     side = <AppSideBar/>;
    // } else {
    //    side = <AppSideBarEmployee/>;
    // }
    return (
            <div className="qoo">
                {/* {side} */}
                <AppSideBar/>
            </div>
    );
}

export default SwitchPage;