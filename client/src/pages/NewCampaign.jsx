import React, { useState } from "react";

const NewCampaign = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("/api/createCampaign", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description }),
    });

    if (response.ok) {
      window.location.href = "/campaign";
    }
  };

  return (
    <div className="new-campaign-container">
      <h1>Create a New Campaign</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Campaign Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Campaign Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit">Create Campaign</button>
      </form>
    </div>
  );
};

export default NewCampaign;
