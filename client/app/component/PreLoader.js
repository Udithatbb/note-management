"use client";

import { useEffect, useState } from "react";
import { PacmanLoader } from "react-spinners";
import "./preLoader.css";
import { preLoaderAnim } from "../animations";

const PreLoader = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      preLoaderAnim();
    }, 6000);
  }, []);

  return (
    <div className="preloader">
      <div className="loaderAmi">
        {loading ? (
          <PacmanLoader color={"#ffff"} loading={loading} size={50} />
        ) : (
          <div className="text-container">
            <span>Welcome</span>
            <span>To</span>
            <span>The</span>
            <span>BadByte...!</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default PreLoader;
