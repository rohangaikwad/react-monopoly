import React from "react";

const Board = () => {
  let cardData = [
    { type: "go", label: "Collect R200 As You Pass Go", value: 200 },
    { type: "place", price: 60, label: "Guwahati", group_id: "brown" },
    { type: "community_chest", label: "Community Chest" },
    { type: "place", price: 60, label: "Nashik", group_id: "brown" },
    { type: "tax", label: "Income Tax", value: 200 },
    { type: "railway", label: "Chennai Central Railway Station", price: 200 },
    { type: "place", price: 100, label: "Panaji (Goa)", group_id: "lightblue" },
    { type: "chance", label: "Chance" },
    { type: "place", price: 100, label: "Agra", group_id: "lightblue" },
    { type: "place", price: 120, label: "Vadodara", group_id: "lightblue" },
    { type: "jail", label: "Jail", value: 50 },
    { type: "place", price: 140, label: "Ludhiana", group_id: "pink" },
    { type: "utility", price: 150, label: "Electric Company" },
    { type: "place", price: 140, label: "Patna", group_id: "pink" },
    { type: "place", price: 160, label: "Bhopal", group_id: "pink" },
    { type: "railway", label: "Howrah Railway Station", price: 200 },
    { type: "place", price: 180, label: "Indore", group_id: "orange" },
    { type: "community_chest", label: "Community Chest" },
    { type: "place", price: 180, label: "Nagpur", group_id: "orange" },
    { type: "place", price: 200, label: "Kochi", group_id: "orange" },
    { type: "parking", label: "Free Parking" },
    { type: "place", price: 220, label: "Lucknow", group_id: "red" },
    { type: "chance", label: "Chance" },
    { type: "place", price: 220, label: "Chandigarh", group_id: "red" },
    { type: "place", price: 240, label: "Jaipur", group_id: "red" },
    { type: "railway", label: "New Delhi Railway Station", price: 200 },
    { type: "place", price: 260, label: "Pune", group_id: "yellow" },
    { type: "place", price: 260, label: "Hyderabad", group_id: "yellow" },
    { type: "utility", price: 150, label: "Water Works" },
    { type: "place", price: 280, label: "Ahmedabad", group_id: "yellow" },
    { type: "go_jail", label: "Go To Jail" },
    { type: "place", price: 300, label: "Kolkata", group_id: "green" },
    { type: "place", price: 300, label: "Chennai", group_id: "green" },
    { type: "community_chest", label: "Community Chest" },
    { type: "place", price: 320, label: "Bengaluru", group_id: "green" },
    { type: "railway", label: "Chatrapati Shivaji Terminus", price: 200 },
    { type: "chance", label: "Chance" },
    { type: "place", price: 350, label: "Delhi", group_id: "blue" },
    { type: "tax", label: "Super Tax", value: 100 },
    { type: "place", price: 400, label: "Mumbai", group_id: "blue" }
  ];

  const colRow = (index) => {
    if (index <= 11) {
      return { gridRow: 11, gridColumn: 12 - index };
    } else if (index >= 12 && index <= 21) {
      return { gridRow: 22 - index, gridColumn: 1 }; //, writingMode: "vertical-rl" };
    } else if (index >= 22 && index < 32) {
      return { gridRow: 1, gridColumn: index - 20 };
    } else {
      return { gridRow: index - 30, gridColumn: 11 }; //, writingMode: "vertical-rl" };
    }
  };

  return (
    <div id="board-container">
      <div id="board">
        {cardData.map((c, i) => (
          <div key={i} className={`card-holder`} style={colRow(i + 1)}>
            <div className={`card ${c?.type}`}>
              {c.type === "place" && (
                <div className="place-bg" style={{ backgroundColor: c.group_id }}></div>
              )}
              <label>{c.label}</label>
            </div>
          </div>
        ))}

        <div id="center"></div>

        {/* <div className="row top">
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
      </div>

      <div className="row middle">
        <div className="col left">
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
        </div>

        <div className="col right">
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card">10</div>
        </div>
      </div>

      <div className="row bottom">
        <div className="card">9</div>
        <div className="card">8</div>
        <div className="card">7</div>
        <div className="card">6</div>
        <div className="card">5</div>
        <div className="card">4</div>
        <div className="card">3</div>
        <div className="card">2</div>
        <div className="card">1</div>
        <div className="card">0</div>
      </div> */}
      </div>
    </div>
  );
};

export default Board;
