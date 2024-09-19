// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function Home({ username, isLoggedIn }) {
//   const [characters, setCharacters] = useState([]);
//   const [environments, setEnvironments] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   // Fetch characters and environments data when component mounts
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const characterResponse = await axios.get("/api/characters");
//         const environmentResponse = await axios.get("/api/environments");
//         setCharacters(characterResponse.data);
//         setEnvironments(environmentResponse.data);
//       } catch (err) {
//         setError("Failed to load data. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) {
//     return <p>Loading data...</p>;
//   }

//   if (error) {
//     return <p>{error}</p>;
//   }

//   return (
//     <>
//       <h4>{isLoggedIn ? `Welcome, ${username}` : "Welcome, visitor!"}</h4>
//       <p>
//         To your new favorite DM tool, QuestKeeper! QuestKeeper is here to help
//         you keep the campaign clean, fun, and easy for beginner DMs or
//         experienced DMs.
//       </p>

//       {/* Display Characters */}
//       <section>
//         <h3>Your Characters</h3>
//         {characters.length > 0 ? (
//           <ul>
//             {characters.map((character) => (
//               <li key={character.id}>
//                 <h4>{character.name}</h4>
//                 <p>HP: {character.hp}</p>
//                 <p>Mana: {character.mana}</p>
//                 <p>Gold: {character.gold}</p>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p>No characters created yet.</p>
//         )}
//       </section>

//       {/* Display Environments */}
//       <section>
//         <h3>Your Environments</h3>
//         {environments.length > 0 ? (
//           <ul>
//             {environments.map((environment) => (
//               <li key={environment.id}>
//                 <h4>{environment.name}</h4>
//                 <p>Description: {environment.description}</p>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p>No environments created yet.</p>
//         )}
//       </section>
//     </>
//   );
// }

// export default Home;
import { useEffect, useState } from "react";
//import { useQuery } from "@apollo/client";
//import { QUERY_HEROES, QUERY_ENVIRONMENTS } from "../utils/queries";
import axios from "axios";

const Home = ({ username, isLoggedIn }) => {
  const [characters, setCharacters] = useState([]);
  const [environments, setEnvironments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const charResponse = await axios.get("/api/characters");
        const envResponse = await axios.get("/api/environments");

        // Log the API response to check the structure
        console.log("Characters:", charResponse.data);
        console.log("Environments:", envResponse.data);

        // Ensure the response is an array, or set an empty array if it's not
        setCharacters(
          Array.isArray(charResponse.data) ? charResponse.data : []
        );
        setEnvironments(
          Array.isArray(envResponse.data) ? envResponse.data : []
        );
      } catch (err) {
        setError("Failed to load data. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading data...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <h4>Welcome, {isLoggedIn ? username : "visitor"}!</h4>
      <p>
        To your new favorite DM tool, QuestKeeper! QuestKeeper is here to help
        you keep the campaign clean, fun, and easy for beginner DMs or
        experienced DMs.
      </p>

      <section className="overview-section">
        <h2>Your Characters</h2>
        {characters.length === 0 ? (
          <p>No characters available</p>
        ) : (
          <div className="grid-container">
            {characters.map((character) => (
              <div key={character._id} className="card">
                <h3>{character.name}</h3>
                <p>Health: {character.health}</p>
                <p>Mana: {character.mana}</p>
                <p>Gold: {character.gold}</p>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="overview-section">
        <h2>Your Environments</h2>
        {environments.length === 0 ? (
          <p>No environments available</p>
        ) : (
          <div className="grid-container">
            {environments.map((environment) => (
              <div key={environment._id} className="card">
                <h3>{environment.name}</h3>
                <p>Type: {environment.type}</p>
                <p>Danger Level: {environment.dangerLevel}</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default Home;
