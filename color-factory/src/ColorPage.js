import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ColorPage.css"; // Import CSS file for styling

function ColorPage({ colors }) {
  const { color } = useParams();
  const [currentColor, setCurrentColor] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the color from the URL exists in the list of colors
    if (colors.includes(color)) {
      setCurrentColor(color);
    } else {
      // If the color is not found, navigate back to the previous page
      navigate(-1);
    }
  }, [color, colors, navigate]);

  return (
    <>
      <div className={`color-page ${currentColor.toLowerCase()}-background`}>
        <p>
            <div className="color-page-txt">This is {currentColor}.</div>
           <div className="color-page-txt">Isn't it beautiful?</div>
          <button onClick={() => navigate(-1)}>Go back</button>
        </p>
      </div>
    </>
  );
}

export default ColorPage;