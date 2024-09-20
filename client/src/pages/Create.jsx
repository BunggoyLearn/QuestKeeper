// // Incomplete

// // User creates a character (e.g., player, enemy, NPC)

// // Import the `useQuery()` hook from Apollo Client
// // import { useQuery } from "@apollo/client";

import { useState } from "react";

const Create = ({ previous = [] }) => {
  const [name, setName] = useState(previous[0] || "");
  const [health, setHealth] = useState(previous[1] || "");
  const [mana, setMana] = useState(previous[2] || "");
  const [gold, setGold] = useState(previous[3] || "");
  const [image, setImage] = useState(previous[4] ? [previous[4]] : [""]);
  const [holdings, setHolding] = useState(previous[5] ? [previous[5]] : [""]);
  const [quirks, setQuirks] = useState(previous[6] ? [previous[6]] : [""]);
  const [isPlayer, setIsPlayer] = useState(previous[7] || false);

  // Holding input
  const handleHoldingChange = (index, value) => {
    const updatedHolding = [...holdings];
    updatedHolding[index] = value;
    setHolding(updatedHolding);
  };

  const handleAddHolding = () => {
    setHolding([...holdings, ""]);
  };

  // Quirk input
  const handleQuirkChange = (index, value) => {
    const updatedQuirks = [...quirks];
    updatedQuirks[index] = value;
    setQuirks(updatedQuirks);
  };

  const handleAddQuirk = () => {
    setQuirks([...quirks, ""]);
  };

  // isPlayer switch
  const toggleSwitch = () => {
    setIsPlayer(!isPlayer);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      name,
      health,
      mana,
      gold,
      image,
      holdings,
      quirks,
      isPlayer,
    };

    // Replace the URL with your API endpoint
    const response = await fetch("/api/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      window.location.href = "/home";
    }
  };

  return (
    <div>
      <div>
        <h2>New Character:</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter character name"
          ></input>
        </div>

        <div>
          <label>Health:</label>
          <input
            type="number"
            value={health}
            onChange={(e) => setHealth(e.target.value)}
            placeholder="Enter current HP"
          ></input>
        </div>

        <div>
          <label>Mana:</label>
          <input
            type="number"
            value={mana}
            onChange={(e) => setMana(e.target.value)}
            placeholder="Enter current MP"
          ></input>
        </div>

        <div>
          <label>Gold:</label>
          <input
            type="number"
            value={gold}
            onChange={(e) => setGold(e.target.value)}
            placeholder="Enter current gold"
          ></input>
        </div>

        <div>
          <label>Image: </label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            accept="Image URL"
          ></input>
        </div>

        <div>
          <label>Holding(s): </label>
          {holdings.map((holding, index) => (
            <div key={index}>
              <input
                type="text"
                value={holding}
                onChange={(e) => handleHoldingChange(index, e.target.value)}
                placeholder="What do they have/know?"
              ></input>
            </div>
          ))}
          <button type="button" onClick={handleAddHolding}>
            Add another item
          </button>
        </div>

        <div>
          <label>Quirk(s): </label>
          {quirks.map((quirk, index) => (
            <div key={index}>
              <input
                type="text"
                value={quirk}
                onChange={(e) => handleQuirkChange(index, e.target.value)}
                placeholder="What are their quirks?"
              ></input>
            </div>
          ))}
          <button type="button" onClick={handleAddQuirk}>
            Add another quirk
          </button>
        </div>

        <div className="switch-container">
          <label className="switch">
            <input type="checkbox" checked={isPlayer} onChange={toggleSwitch} />
            <span className="slider"></span>
            <br></br>
            <br></br>
            <p>{isPlayer ? "Player" : "NPC"}</p>
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Create;

// Originally from inside Create
// useEffect(() => {
//   // Add event listeners after the component is rendered
//   const incrementElements = document.querySelectorAll(".increment");
//   incrementElements.forEach((element) => {
//     element.onclick = moreOrLess;
//   });

//   return () => {
//     // Clean up event listeners when the component unmounts
//     incrementElements.forEach((element) => {
//       element.onclick = null;
//     });
//   };
// }, []);

// function moreOrLess(event) {
//   const clicked = event.target;
//   const num = clicked.closest(".form-group").querySelector("input");

//   if (clicked.matches(".more")) {
//     num.stepUp(1);
//   }

//   if (clicked.matches(".less")) {
//     num.stepDown(1);
//   }
// }
