const HeroBar = ({ heroes, title }) => {
  if (!heroes.length) {
    return <h3>No Heroes Yet</h3>;
  }

  return (
    <div>
        <h3 className="text-primary">{title}</h3>
        <div className="grid-container">
            {heroes.map((heroes) => (
              <div key={heroes._id} className="card">
                <h3>{heroes.name}</h3>
                <p>Health: {heroes.healthPoints}/{heroes.maxHealthPoints}</p>
                <p>Mana: {heroes.manaPoints}/{heroes.maxManaPoints}</p>
                <p>Gold: {heroes.goldPieces}</p>
              </div>
            ))}
        </div>
    </div>
  );
};

export default HeroBar;