import { useState } from "react";

const EnvironmentForm = ({ previous = [] }) => {
  const [name, setName] = useState(previous[0] || "");
  const [terrain, setTerrain] = useState(previous[1] || "");
  const [weather, setWeather] = useState(previous[2] || "");
  const [factors, setFactors] = useState(previous[3] || "");
  const [towns, setTowns] = useState(previous[4] ? [previous[4]] : [""]);
  const [quests, setQuests] = useState(previous[5] ? [previous[5]] : [""]);
  const [npcs, setNpcs] = useState(previous[6] ? [previous[6]] : [""]);
  const [image, setImage] = useState(previous[7] || "");

  // Town inputs
  const handleTownChange = (index, value) => {
    const updatedTowns = [...towns];
    updatedTowns[index] = value;
    setTowns(updatedTowns);
  };

  const handleAddTown = () => {
    setTowns([...towns, ""]);
  };

  // Quest inputs
  const handleQuestChange = (index, value) => {
    const updatedQuests = [...quests];
    updatedQuests[index] = value;
    setQuests(updatedQuests);
  };

  const handleAddQuest = () => {
    setQuests([...quests, ""]);
  };

  // Npc inputs
  const handleNpcChange = (index, value) => {
    const updatedNpcs = [...npcs];
    updatedNpcs[index] = value;
    setNpcs(updatedNpcs);
  };

  const handleAddNpc = () => {
    setNpcs([...npcs, ""]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      name,
      terrain,
      weather,
      factors,
      towns,
      quests,
      npcs,
      image,
    };

    // Replace the URL with your API endpoint
    const response = await fetch("/api/createEnvironment", {
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
      <h2>Environment Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="What's it called?"
          />
        </div>

        <div>
          <label>Terrain: </label>
          <input
            type="text"
            value={terrain}
            onChange={(e) => setTerrain(e.target.value)}
            placeholder="Is it flat?"
          />
        </div>

        <div>
          <label>Weather: </label>
          <input
            type="text"
            value={weather}
            onChange={(e) => setWeather(e.target.value)}
            placeholder="Is it rainy?"
          />
        </div>

        <div>
          <label>Environment Factors: </label>
          <input
            type="text"
            value={factors}
            onChange={(e) => setFactors(e.target.value)}
            placeholder="Are there any specific factors?"
          />
        </div>

        <div>
          <label>Town(s): </label>
          {towns.map((town, index) => (
            <div key={index}>
              <input
                type="text"
                value={town}
                onChange={(e) => handleTownChange(index, e.target.value)}
                placeholder="Town name"
              />
            </div>
          ))}
          <button type="button" onClick={handleAddTown}>
            Add another town
          </button>
        </div>

        <div>
          <label>Quest(s): </label>
          {quests.map((quest, index) => (
            <div key={index}>
              <input
                type="text"
                value={quest}
                onChange={(e) => handleQuestChange(index, e.target.value)}
                placeholder="Any quests?"
              />
            </div>
          ))}
          <button type="button" onClick={handleAddQuest}>
            Add another quest
          </button>
        </div>

        <div>
          <label>NPC(s): </label>
          {npcs.map((npc, index) => (
            <div key={index}>
              <input
                type="text"
                value={npc}
                onChange={(e) => handleNpcChange(index, e.target.value)}
                placeholder="Any NPCs?"
              />
            </div>
          ))}
          <button type="button" onClick={handleAddNpc}>
            Add another quest
          </button>
        </div>

        <div>
          <label>Image: </label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="Image URL"
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EnvironmentForm;

// // this is not apart of the code
// // Incomplete
// // form for creating/editing an environment

// //import { userReducer, useState } from "react";
// //import { useMutation } from "@apollo/client";
// //import reducer from "../utils/reducers";

// // Example from CarComponent.jsx
// // const initialState = useCar();
// // const [state, dispatch] = useReducer(reducer, initialState);

// // const [newCarMake, setNewCarMake] = useState("");
// // const [newCarModel, setNewCarModel] = useState("");
// // const [newCarYear, setNewCarYear] = useState("");
// // e.g., Instead of {preset}, {newCarMake}
// // this is not apart of the code
// let preset = ["", "", "", "", "", "", "", ""];

// const EnvironmentForm = ({ previous }) => {
//   if (previous) {
//     preset = previous;
//   }
//   // this is not apart of the code
//   // const handleSubmit = async (event) => {
//   //   event.preventDefault();

//   //   const response = await fetch("/api/createEnvironment", {
//   //     method: "POST",
//   //     headers: {
//   //       "Content-Type": "application/json",
//   //     },
//   //     body: JSON.stringify({ title, description }),
//   //   });

//   //   if (response.ok) {
//   //     window.location.href = "/home";
//   //   }
//   // };
//   // this is not apart of the code
//   function addInput() {
//     const div = document.getElementById("more-names");
//     const input = document.createElement("input");
//     input.type = "text";
//     input.name = "env-towns";
//     div.appendChild(input);
//   }

//   const form = document.querySelector("form");
//   form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const townNames = Array.from(
//       document.querySelectorAll('input[name="env-towns"]')
//     ).map((input) => input.value);

//     console.log(townNames);
//   });

//   return (
//     <div>
//       <form>
//         <div>
//           <label>Name: </label>
//           <input
//             type="text"
//             name="env-name"
//             placeholder="What's it called?"
//             defaultValue={preset[0]}
//           ></input>
//         </div>

//         <div>
//           <label>Terrain: </label>
//           <input
//             type="text"
//             name="env-terrain"
//             placeholder="Is is MC-flat?"
//             defaultValue={preset[1]}
//           ></input>
//         </div>

//         <div>
//           <label>Weather: </label>
//           <input
//             type="text"
//             name="env-weather"
//             placeholder="Is it rainy?"
//             defaultValue={preset[2]}
//           ></input>
//         </div>

//         <div>
//           <label>Environment Factors: </label>
//           <input
//             type="text"
//             name="env-factors"
//             placeholder="Could you slip?"
//             defaultValue={preset[3]}
//           ></input>
//         </div>

//         <div>
//           <label>Town(s): </label>
//           <input
//             type="text"
//             name="env-towns"
//             placeholder="Town name(s)?"
//             defaultValue={preset[4]}
//           ></input>
//           <button type="button" onClick={addInput()}>
//             Add another town
//           </button>
//           <div id="more-names"></div>
//         </div>

//         <div>
//           <label>Quest(s): </label>
//           <input
//             type="text"
//             name="env-quests"
//             placeholder="Dig up dirt?"
//             defaultValue={preset[5]}
//           ></input>
//         </div>

//         <div>
//           <label>NPC(s): </label>
//           <input
//             type="text"
//             name="env-npcs"
//             placeholder="Steve ehehehehe"
//             defaultValue={preset[6]}
//           ></input>
//         </div>

//         <div>
//           <label>Image: </label>
//           <input
//             type="image"
//             name="env-image"
//             placeholder="uhh uuuhhhhhh"
//             defaultValue={preset[7]}
//           ></input>
//         </div>

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default EnvironmentForm;
