import React from "react";
import { useNavigate } from "react-router-dom";

export const Features = () => {
  const navigate = useNavigate();
  const featuresData = [
    {
      icon: "fa fa-comments-o",
      title: "Fridge Vision",
      text: "Fridge Vision is a web application that allows users to take a picture of the inside of their fridge and receive a list of recipes that can be made with the ingredients they have.",
      onClick: () => navigate('/UploadForm.jsx')
    },
    {
      icon: "fa fa-bullhorn",
      title: "Lorem ipsum",
      text: "Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam."
    },
    {
      icon: "fa fa-group",
      title: "Lorem ipsum",
      text: "Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam."
    },
    {
      icon: "fa fa-magic",
      title: "Lorem ipsum",
      text: "Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam."
    }
  ];

  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Features</h2>
        </div>
        <div className="row">
          {featuresData.map((d, i) => (
            <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3" onClick={d.onClick}>
              {" "}
              <i className={d.icon}></i>
              <h3>{d.title}</h3>
              <p>{d.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;