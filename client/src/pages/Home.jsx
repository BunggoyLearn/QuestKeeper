function Home({ username, isLoggedIn }) {
  return (
    <>
      {isLoggedIn ? <h4>Welcome, {username}</h4> : <h4>Welcome, visitor!</h4>}
      <p>
        To your new favorite DM tool, QuestKeeper! QuestKeeper is here to help
        you keep the campaign clean, fun, and easy for beginner DMs or
        experinced DMs.
      </p>
    </>
  );
}

export default Home;

// The page in which the user will (mainly) be in to have access to all the characters and environments that were created (i.e., the main (overview) page)
