import pinealImg from "../assets/pineal.png";

function Pineal({ goBack }) {
  return (
    <div className="page">
      <h1>Pineal Gland</h1>

      <div className="image-card">
        <img src={pinealImg} alt="Pineal gland" width="200" />
      </div>

      <h3>Location</h3>
      <p>Located deep in the center of the brain between the two hemispheres.</p>

      <h3>Hormone Secreted</h3>
      <ul>
        <li>Melatonin</li>
      </ul>

      <h3>Functions</h3>
      <ul>
        <li>Regulates sleep–wake cycle</li>
        <li>Controls circadian rhythm</li>
        <li>Influences mood and alertness</li>
      </ul>

      <h3>Psychological Importance</h3>
      <p>
        Melatonin levels affect sleep quality. Disturbance can lead to insomnia,
        depression, and attention problems.
      </p>

      <button onClick={goBack}>Back</button>
    </div>
  );
}

export default Pineal;
