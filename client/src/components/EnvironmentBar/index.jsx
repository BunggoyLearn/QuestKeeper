const EnvironmentBar = ({ environment, title  }) => {
    if (!environment.length) {
        return <h3>No Environment Yet</h3>;
    }

    return (
        <div>
            <h3 className="text-primary">{title}</h3>
            <div className="grid-container">
            {environment.map((environment) => (
                <div key={environment._id} className="card">
                    <h3>{environment.name}</h3>
                    <p>Type: {environment.terrain}</p>
                    <p>Weather: {environment.weather}</p>
                    <p>Environment Factor: {environment.environmentFactor}</p>
                </div>
            ))}
            </div>
        </div>
    );
};

export default EnvironmentBar;