import adrenalImg from "../assets/adrenal.png";

function Adrenal({ goBack }) {
  return (
    <div className="page">
      <h1>Adrenal Glands</h1>

      <div className="image-card">
        <img
          src={adrenalImg}
          alt="Adrenal glands"
          width="200"
        />
      </div>

      <p>
        The adrenal glands help the body respond to stress and regulate
        metabolism, blood pressure, and immune response.
      </p>

      <h3>Hormones Secreted</h3>
      <ul>
        <li>Adrenaline (Epinephrine)</li>
        <li>Noradrenaline (Norepinephrine)</li>
        <li>Cortisol</li>
        <li>Aldosterone</li>
      </ul>

      <h3>Functions</h3>
      <p>
        Controls the fight-or-flight response, regulates blood pressure,
        balances salt and water levels, and helps manage stress.
      </p>
<h3>Location</h3>
<p>
  The adrenal glands are located on top of each kidney.
</p>
<h3>Additional Details</h3>
<p>
  These glands help the body respond to stress
  and regulate blood pressure.
</p>

      <button onClick={goBack}>
        Back
      </button>
    </div>
  );
}

export default Adrenal;
