// Incomplete
// User creates the environment that the player with interact in/with (A simpler version of the Create.jsx?)
import { useQuery } from "@apollo/client";
import EnvironmentForm from "../components/EnvironmentForm";

const NewEnvironment = () => {
  return (
    <div>
      <div>
        <h2>New Environment</h2>
      </div>
      {/* One for creating an environment */}
      <EnvironmentForm />
      {/* One for editing an environment (i.e., the input areas are pre-filled) */}
      <EnvironmentForm />
    </div>
  );
};

export default NewEnvironment;
