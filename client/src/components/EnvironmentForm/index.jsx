// Incomplete
// form for creating/editing an environment

//import { userReducer, useState } from "react";
//import { useMutation } from "@apollo/client";
//import reducer from "../utils/reducers";

// Example from CarComponent.jsx
// const initialState = useCar();
// const [state, dispatch] = useReducer(reducer, initialState);

// const [newCarMake, setNewCarMake] = useState("");
// const [newCarModel, setNewCarModel] = useState("");
// const [newCarYear, setNewCarYear] = useState("");
// e.g., Instead of {preset}, {newCarMake}

let preset = ["", "", "", "", "", "", "", ""];

const EnvironmentForm = ({ previous }) => {
  if (previous) {
    preset = previous;
  }

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   const response = await fetch("/api/createEnvironment", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ title, description }),
  //   });

  //   if (response.ok) {
  //     window.location.href = "/home";
  //   }
  // };

  return (
    <div>
      <form>
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="env-name"
            placeholder="What's it called?"
            defaultValue={preset[0]}
          ></input>
        </div>

        <div>
          <label>Terrain: </label>
          <input
            type="text"
            name="env-terrain"
            placeholder="Is is flat?"
            defaultValue={preset[1]}
          ></input>
        </div>

        <div>
          <label>Weather: </label>
          <input
            type="text"
            name="env-weather"
            placeholder="Is it rainy?"
            defaultValue={preset[2]}
          ></input>
        </div>

        <div>
          <label>Environment Factors: </label>
          <input
            type="text"
            name="env-factors"
            placeholder="Could you slip?"
            defaultValue={preset[3]}
          ></input>
        </div>

        <div>
          <label>Town(s): </label>
          <input
            type="text"
            name="env-towns"
            placeholder="Town name(s)?"
            defaultValue={preset[4]}
          ></input>
        </div>

        <div>
          <label>Quest(s): </label>
          <input
            type="text"
            name="env-quests"
            placeholder="Dig up dirt?"
            defaultValue={preset[5]}
          ></input>
        </div>

        <div>
          <label>NPC(s): </label>
          <input
            type="text"
            name="env-npcs"
            placeholder="Steve ehehehehe"
            defaultValue={preset[6]}
          ></input>
        </div>

        <div>
          <label>Image: </label>
          <input
            type="image"
            name="env-image"
            placeholder="uhh uuuhhhhhh"
            defaultValue={preset[7]}
          ></input>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EnvironmentForm;
