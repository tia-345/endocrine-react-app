import pancreasImg from "../assets/pancreas.png";

function Pancreas({ goBack }) {
  return (
    <div className="page">
      <h1>Pancreas</h1>

      <div className="image-card">
        <img src={pancreasImg} alt="Pancreas" width="200" />
      </div>

      <h3>Location</h3>
      <p>Located behind the stomach.</p>

      <h3>Hormones Secreted</h3>
      <ul>
        <li>Insulin</li>
        <li>Glucagon</li>
      </ul>

      <h3>Functions</h3>
      <ul>
        <li>Regulates blood glucose levels</li>
        <li>Supplies energy to brain cells</li>
      </ul>

      <h3>Psychological Relevance</h3>
      <p>
        Low blood sugar can cause confusion, irritability, and poor concentration.
      </p>

      <button onClick={goBack}>Back</button>
    </div>
  );
}

export default Pancreas;
