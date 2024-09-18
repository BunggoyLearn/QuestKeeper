// User chooses which campaign they wish to use (i.e., which save file)
// First page the user encounters if they're logged in...?

import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const Campaign = () => {
  const [campaignData, setCampaignData] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const fetchCampaign = async () => {
      const savedCampaign = await fetch("/api/getCampaign");
      const result = await savedCampaign.json();

      if (result.campaign) {
        setCampaignData(result.campaign);
      } else {
        history.push("/NewCampaign");
      }
    };

    fetchCampaign();
  }, [history]);

  if (!campaignData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="campaign-container">
      <h1>Your Saved Campaign</h1>
      <div className="campaign-card">
        <h2>{campaignData.title}</h2>
        <p>{campaignData.description}</p>
        <button onClick={() => history.push(`/campaign/${campaignData.id}`)}>
          Open Campaign
        </button>
      </div>
    </div>
  );
};

export default Campaign;
