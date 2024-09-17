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

const preset = "variyabul";

const EnvironmentForm = () => {
  return (
    <div>
      <form>
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="env-name"
            placeholder="BresselSpruts"
            defaultValue={preset}
          ></input>
        </div>

        <div>
          <label>Terrain: </label>
          <input
            type="text"
            name="env-terrain"
            placeholder="Think MineCraft-flat"
            defaultValue={preset}
          ></input>
        </div>

        <div>
          <label>Weather: </label>
          <input
            type="text"
            name="env-weather"
            placeholder="Kinda rainy"
            defaultValue={preset}
          ></input>
        </div>

        <div>
          <label>Environment Factors: </label>
          <input
            type="text"
            name="env-factors"
            placeholder="You might slip"
            defaultValue={preset}
          ></input>
        </div>

        <div>
          <label>Town(s): </label>
          <input
            type="text"
            name="env-towns"
            placeholder="St. Felville"
            defaultValue={preset}
          ></input>
        </div>

        <div>
          <label>Quest(s): </label>
          <input
            type="text"
            name="env-quests"
            placeholder="Dig up dirt"
            defaultValue={preset}
          ></input>
        </div>

        <div>
          <label>NPC(s): </label>
          <input
            type="text"
            name="env-npcs"
            placeholder="Steve ehehehehe"
            defaultValue={preset}
          ></input>
        </div>

        <div>
          <label>Image: </label>
          <input
            type="image"
            name="env-image"
            placeholder="uhh uuuhhhhhh"
            defaultValue={preset}
          ></input>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EnvironmentForm;
