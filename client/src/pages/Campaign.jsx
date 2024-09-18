// // User chooses which campaign they wish to use (i.e., which save file)
// // First page the user encounters if they're logged in...?

// import React, { useState, useEffect } from "react";
// import { useHistory } from "react-router-dom";

// const Campaign = () => {
//   const [campaignData, setCampaignData] = useState(null);
//   const history = useHistory();

//   useEffect(() => {
//     const fetchCampaign = async () => {
//       const savedCampaign = await fetch("/api/getCampaign");
//       const result = await savedCampaign.json();

//       if (result.campaign) {
//         setCampaignData(result.campaign);
//         s;
//       } else {
//         history.push("/NewCampaign");
//       }
//     };

//     fetchCampaign();
//   }, [history]);

//   if (!campaignData) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="campaign-container">
//       <h1>Your Saved Campaign</h1>
//       <div className="campaign-card">
//         <h2>{campaignData.title}</h2>
//         <p>{campaignData.description}</p>
//         <button onClick={() => history.push(`/campaign/${campaignData.id}`)}>
//           Open Campaign
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Campaign;

// User chooses which campaign they wish to use (i.e., which save file)
// First page the user encounters if they're logged in...?

import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom"; // Replace useHistory with useNavigate

const Campaign = () => {
  const [campaignData, setCampaignData] = useState(null);
  const navigate = useNavigate(); // Replace useHistory with useNavigate

  useEffect(() => {
    const fetchCampaign = async () => {
      const savedCampaign = await fetch("/api/getCampaign");
      const result = await savedCampaign.json();

      if (result.campaign) {
        setCampaignData(result.campaign);
      } else {
        navigate("/NewCampaign"); // Replace history.push with navigate
      }
    };

    fetchCampaign();
  }, [navigate]); // Replace history with navigate in the dependency array

  if (!campaignData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="campaign-container">
      <h1>Your Saved Campaign</h1>
      <div className="campaign-card">
        <h2>{campaignData.title}</h2>
        <p>{campaignData.description}</p>
        <button onClick={() => navigate(`/campaign/${campaignData.id}`)}>
          Open Campaign
        </button>{" "}
        {/* Replace history.push with navigate */}
      </div>
    </div>
  );
};

export default Campaign;
