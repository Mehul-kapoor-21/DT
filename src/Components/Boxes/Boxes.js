import React from "react";
import "./Boxes.css";
import image from "../../assets/image.png";
import v1 from "../../assets/Vector1.png";
import v2 from "../../assets/Vector2.png";
import v3 from "../../assets/Vector3.png";
import v4 from "../../assets/Vector4.png";
import i1 from "../../assets/Icon1.png";
import i2 from "../../assets/Icon2.png";
import i3 from "../../assets/Icon3.png";
const Boxes = () => {
  return (
    <div className="boxes">
      <div className="box">
        <div className="heading">
          <h5>Technical Project Management</h5>
          <div className="i-icon">
            <i>i</i>
          </div>
        </div>
        <div className="desc">
          <span>Description:</span> Story of Alignment Scope of Agility Specific
          Accountable Staggering Approach
        </div>
        <div className="content">
          <img src={image} alt="image"></img>
        </div>
      </div>

      <div className="box">
        <div className="heading">
          <h5>Threadbuild</h5>
          <div className="i-icon">
            <i>i</i>
          </div>
        </div>
        <div className="desc">
          <span>Description:</span> Watch the video and threadbuild, and jot out
          key threads while watching the video
        </div>
        <div className="content">
          <div className="thread">
            <i class="fa-solid fa-angle-up"></i>
            <h5>Thread A</h5>
          </div>

          <div className="sub-thred">
            <div className="sub-div">
              <div className="div1">
                <p>Sub thread 1</p>
              </div>

              <div className="div2">
                <textarea placeholder="Enter Text here"></textarea>
              </div>
            </div>
            <div className="sub-div">
              <div className="div1">
                <p>Sub Interpretation 1</p>
              </div>

              <div className="div2">
                <textarea placeholder="Enter Text here"></textarea>
              </div>
            </div>
          </div>

          <div className="drop-down">
            <img src={v1} alt="v1"></img>
            <img src={v2} alt="v2"></img>
            <img src={v3} alt="v3"></img>
            <img src={v4} alt="v4"></img>

            <select className="select-drop">
              <option value="volvo">Select Catog</option>
            </select>
            <select className="select-drop">
              <option value="volvo">Select Proces</option>
            </select>
          </div>

          <div className="button-div">
            <button>+ Sub-thread</button>
          </div>

          <div className="summary">
            <div className="summary-div1">
              <p>Summary for Thread A</p>
            </div>
            <div className="summary-div2">
              <textarea placeholder="Enter Text Here"></textarea>
            </div>
          </div>
        </div>
      </div>

      <div className="box">
        <div className="heading">
          <h5>Structure your Pointers</h5>
          <div className="i-icon">
            <i>i</i>
          </div>
        </div>
        <div className="desc">
          <span>Description :</span> Write a 300 - 400 word article from your
          thread . Publish your understanding and showcase your understanding to
          the entire world
        </div>
        <div className="content">
          <div className="title-form">
            <h3>Title</h3>
            <input type="text"></input>
          </div>

          <div className="content-form">
            <h3>Content</h3>
            <div className="content-form-tools">
              <div>
                <p>File</p>
                <p>Edit</p>
                <p>View</p>
                <p>Insert</p>
                <p>Format</p>
                <p>Tools</p>
                <p>Table</p>
                <p>Help</p>
              </div>

              <div>
                <img src={i1} alt="i1"></img>
                <img src={i2} alt="i2"></img>
                <img src={i3} alt="i3"></img>
                <input type="text" placeholder="Paragraph"></input>
                <i class="fa-solid fa-ellipsis"></i>
              </div>
            </div>
            <div className="content-form-area"></div>
          </div>
        </div>
      </div>

      <div className="box">
        <div className="heading">
          <h5>4SA Method</h5>
          <div className="i-icon">
            <i>i</i>
          </div>
        </div>
        <div className="desc">
          <span>Description :</span> To Explore more read more
        </div>
        <div className="content">
          <div className="intro">
            <i class="fa-solid fa-angle-up"></i>
            <p>Introduction</p>
          </div>
          <div className="seemore1">
            <p>The 4SA Method , How to bring a idea into progress ?</p>
            <p className="see">See More</p>
          </div>
          <div className="thread2">
            <i class="fa-solid fa-angle-up"></i>
            <p>Thread A</p>
          </div>
          <div className="seemore2">
            <p>
              How are you going to develop your stratergy ? Which method are you
              going to use to develop a stratergy ? What if the project is
              lengthy?
            </p>
            <p className="see">See More</p>
          </div>
          <div className="example">
            <h3>Example 1</h3>
          </div>
          <div className="para">
            <p>You have a concept , How will you put into progress?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Boxes;
