import "./Log.css"

const Log = ({ logEntries }) => {
  console.log(logEntries);
  return (
    <div className="log-container">
      <h3>Gemaakte suggesties</h3>
      {logEntries.map((suggestion, index) => (
        <div className="suggestion">
          <span>Suggestie {index + 1}</span>
          <ul>
            <li>Room: {suggestion.roomName}</li>
            <li>Weapon: {suggestion.weaponName}</li>
            <li>Suspect: {suggestion.suspectName}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Log;
