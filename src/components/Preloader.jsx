import React, { useEffect, useState } from "react";
import "../App.css"; 

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 400); 

    
    return () => clearTimeout(timer);
  }, []);

  return (
    isVisible && (
      <div id="preloader" className="preloader">
        
      </div>
    )
  );
};

export default Preloader;
