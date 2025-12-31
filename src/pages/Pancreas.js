import pancreasImg from "../assets/pancreas.png";

function Pancreas({ goBack }) {
  return (
     <div className="page">
      <h1>Pancreas</h1>

    <img
  src={pancreasImg}
  alt="Pancreas"
  width="200"
/>

<p>
  The pancreas is both an endocrine and digestive gland that helps
  regulate blood sugar levels.
</p>
<h3>Hormones Secreted</h3>
<ul>
  <li>Insulin</li>
  <li>Glucagon</li>
</ul>

<h3>Functions</h3>
<p>
  Regulates blood glucose levels by releasing insulin and glucagon
  and supports digestion through enzyme secretion.
</p>
<h3>Location</h3>
<p>
  The pancreas is located in the upper abdomen,
  behind the stomach.
</p>
<h3>Additional Details</h3>
<p>
  It functions as both an endocrine gland and
  a digestive organ.
</p>


      <button onClick={goBack}>
        Back
      </button>
    </div>
  );
}

export default Pancreas;
