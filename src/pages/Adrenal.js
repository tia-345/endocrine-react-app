import adrenalImg from "../assets/adrenal.png";

function Adrenal({ goBack }) {
  return (
    <div className="page">
      <h1>Adrenal Glands</h1>

      <div className="image-card">
        <img src={adrenalImg} alt="Adrenal glands" width="200" />
      </div>

      <h3>Location</h3>
      <p>Located on top of each kidney.</p>

      <h3>Hormones Secreted</h3>
      <ul>
        <li>Adrenaline</li>
        <li>Noradrenaline</li>
        <li>Cortisol</li>
      </ul>

      <h3>Functions</h3>
      <ul>
        <li>Stress response</li>
        <li>Fight-or-flight reaction</li>
      </ul>

      <h3>Psychological Importance</h3>
      <p>
        Excess cortisol is linked to anxiety, depression, and chronic stress.
      </p>

      <button onClick={goBack}>Back</button>
    </div>
  );
}

export default Adrenal;
