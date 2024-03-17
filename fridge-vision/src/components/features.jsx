import React from "react";
import { useNavigate } from "react-router-dom";

export const Features = () => {
  const navigate = useNavigate();
  const featuresData = [
    {
      icon: "fa fa-comments-o",
      title: "Real-Time Inventory Tracking",
      text: "Stay updated on your food supplies with live monitoring, ensuring you never run out of essentials.",
      onClick: () => navigate('/UploadForm')
    },
    {
      icon: "fa fa-bullhorn",
      title: "Personalized Recipe Recommendations",
      text: "Receive tailored recipe suggestions based on your preferences and available ingredients, simplifying meal planning."
    },
    {
      icon: "fa fa-group",
      title: "Expiration Date Alerts",
      text: " Get timely notifications when your items are nearing expiry, reducing food waste and optimizing freshness."
    },
    {
      icon: "fa fa-magic",
      title: "Nutritional Information Access",
      text: "Access detailed nutritional data for stored items, empowering healthier food choices and informed meal preparation."
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