import React from 'react'
import { useNavigate } from 'react-router-dom';

const SwitchPage = ({page1, page2}) => {
    const navigate = useNavigate();

    const handleHomeButton = () => {
        page1 === "homePage" ? navigate("/") : navigate(`/${page1}`);
    };

    const handleDatabutton = () => {
        navigate(`/${page2}`);
    };

  return (
      <div className="flex justify-between">
          <button
              onClick={handleHomeButton}
              className="m-5 bg-teal-600 rounded-lg cursor-pointer  text-xl font-semibold p-2"
          >
              {page1}
          </button>
          <button
              onClick={handleDatabutton}
              className="m-5 bg-teal-600 rounded-lg cursor-pointer  text-xl font-semibold p-2"
          >
              {page2}
          </button>
      </div>
  );
}

export default SwitchPage
