import pinealImg from "../assets/pineal.png";

function Pineal({ goBack }) {
  return (
     <div className="page">
      <h1>Pineal Gland</h1>

    <img
  src={pinealImg}
  alt="Pineal gland"
  width="200"
/>

<p>
  The pineal gland is a small gland in the brain that regulates sleep
  and circadian rhythms.
</p>
<h3>Hormones Secreted</h3>
<ul>
  <li>Melatonin</li>
</ul>

<h3>Functions</h3>
<p>
  Controls sleep-wake cycles, regulates biological rhythms,
  and influences seasonal behaviors.
</p>

<h3>Location</h3>
<p>
  The pineal gland is found deep in the center of the brain,
  between the two hemispheres.
</p>
<h3>Additional Details</h3>
<p>
  It plays a key role in regulating sleep patterns
  and circadian rhythms.
</p>

      <button onClick={goBack}>
        Back
      </button>
    </div>
  );
}

export default Pineal;
