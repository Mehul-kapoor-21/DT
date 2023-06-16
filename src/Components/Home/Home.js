import React from "react";
import "./Home.css";
import Boxes from "../Boxes/Boxes";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";

const Home = () => {
  return (
    <div className="container">
      <div className="title">
        <h2>Technical Project Management</h2>
        <button>Submit Task</button>
      </div>

      <div className="details">
        <h4>Explore the world of management</h4>
        <p>
          As a project manager, you play an important reole in leading a project
          through initiation, planning, execution, monitoring, controlling and
          completion. How? Do you want to manage each and every step of your
          life?
        </p>
      </div>
      
      <div className="box-container">
        <Boxes/>
      </div>
      
      <div className="circle-image">
        <div className="circle1">
          <img src={img1} alt="img1"></img>
        </div>
        <div className="circle1">
          <img src={img2} alt="img2"></img>
        </div>
        <div className="circle1">
          <img src={img3} alt="img3"></img>
        </div>
      </div>

    </div>
  );
};

export default Home;
