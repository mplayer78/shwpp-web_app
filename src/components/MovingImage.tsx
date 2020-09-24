import React, { useState } from "react";

export default function MovingImage() {
  const [tiltPos, setTiltPos] = useState(3);
  return (
    <div className="imageContainer">
      <img src="./counting.jpg" alt="counting" />
    </div>
  );
}
