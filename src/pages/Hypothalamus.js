import hypothalamusImg from "../assets/hypothalamus.png";

function Hypothalamus({ goBack }) {
  return (
    <div className="page">
      <h1>Hypothalamus</h1>

      <div className="image-card">
        <img src={hypothalamusImg} alt="Hypothalamus" width="200" />
      </div>

      <h3>Location</h3>
      <p>
        Located at the base of the brain, below the thalamus and above the
        pituitary gland.
      </p>

      <h3>Hormones Secreted</h3>
      <ul>
        <li>TRH</li>
        <li>CRH</li>
        <li>GnRH</li>
        <li>GHRH</li>
        <li>Somatostatin</li>
        <li>Dopamine</li>
      </ul>

      <h3>Functions</h3>
      <ul>
        <li>Connects nervous and endocrine systems</li>
        <li>Controls pituitary hormone release</li>
        <li>Regulates hunger, thirst, temperature, and emotions</li>
      </ul>

      <h3>Psychological Importance</h3>
      <p>
        Plays a major role in motivation, emotional behavior, stress response,
        and homeostasis.
      </p>

      <button onClick={goBack}>Back</button>
    </div>
  );
}

export default Hypothalamus;
