import gonadsImg from "../assets/gonads.png";

function Gonads({ goBack }) {
  return (
     <div className="page">
      <h1>Gonads</h1>
<img
  src={gonadsImg}
  alt="Gonads"
  width="200"
/>

<p>
  Gonads include the testes in males and ovaries in females.
  They produce reproductive cells and sex hormones.
</p>
<h3>Hormones Secreted</h3>
<ul>
  <li>Testosterone</li>
  <li>Estrogen</li>
  <li>Progesterone</li>
</ul>

<h3>Functions</h3>
<p>
  Regulate sexual development, control reproductive functions,
  and influence secondary sexual characteristics.
</p>
<h3>Location</h3>
<p>
  The testes are located in the scrotum in males,
  and the ovaries are located in the pelvic cavity in females.
</p>
<h3>Additional Details</h3>
<p>
  Gonads are responsible for puberty, fertility,
  and reproductive health.
</p>


      <button onClick={goBack}>
        Back
      </button>
    </div>
  );
}

export default Gonads;
