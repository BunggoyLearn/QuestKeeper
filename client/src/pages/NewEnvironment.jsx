import React from "react";
import EnvironmentForm from "../components/EnvironmentForm";

const NewEnvironment = () => {
  const newFile = true; // This should be determined based on your application logic

  return (
    <div className="new-environment-container">
      <h2>Environment(s)</h2>
      {newFile ? <EnvironmentForm /> : <EnvironmentForm previous={[]} />}
    </div>
  );
};

export default NewEnvironment;

// Incomplete
// User creates the environment that the player with interact in/with (A simpler version of the Create.jsx?)
// import { useQuery } from "@apollo/client";
// import EnvironmentForm from "../components/EnvironmentForm";

// const newFile = true; // = useQuery();

// const NewEnvironment = () => {
//   return (
//     <div>
//       <div>
//         <h2>Environment(s)</h2>
//       </div>
//       {newFile ? <EnvironmentForm /> : <EnvironmentForm previous={[]} />}
//     </div>
//   );
// };

// export default NewEnvironment;
