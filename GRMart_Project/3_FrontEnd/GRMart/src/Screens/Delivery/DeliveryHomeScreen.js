import React from "react";
import { useSelector } from "react-redux";
import Header from "../../Components/Header";


const DeliveryHomeScreen = (props) => {
  const userSignIn = useSelector((store) => store.userSignIn);
  return (
    <div className="Screen">
      {!userSignIn.response && <Header title="You are not logged in" />}
      {userSignIn.response && (
        <Header title={"Welcome " + userSignIn.response.data.firstName} />
      )}
      <img
       src={`Img` + `/Delivery.jpg`}
       height="500px"
       width="1080px"
       />
    </div>
  );
};

export default DeliveryHomeScreen;
