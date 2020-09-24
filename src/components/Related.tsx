import React, { useEffect, useState } from "react";

export default function Related() {
  const initState: string[] = [];
  const [related, setRelated] = useState(initState);
  useEffect(() => {
    setRelated([
      "https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
      "https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
      "https://images.unsplash.com/photo-1489533119213-66a5cd877091?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
      "https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60",
    ]);
  }, []);
  return (
    <div className="relatedImgContainer">
      {related.map((val, ind) => {
        return (
          <div className="relatedImg">
            <img src={val} alt={val} />
          </div>
        );
      })}
    </div>
  );
}
