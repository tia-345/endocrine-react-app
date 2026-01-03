import body from "../assets/body.png";

function Body({ goToGland, goBack }) {
  return (
    <div className="body-page">
      <h1>Explore the Endocrine System</h1>

      <button onClick={goBack}>Back</button>

      <img
        src={body}
        alt="Human body showing endocrine glands"
        className="body-image"
      />

      <div className="gland-buttons">
        <button onClick={() => goToGland("hypothalamus")}>Hypothalamus</button>
        <button onClick={() => goToGland("pituitary")}>Pituitary</button>
        <button onClick={() => goToGland("pineal")}>Pineal</button>
        <button onClick={() => goToGland("thyroid")}>Thyroid</button>
        <button onClick={() => goToGland("parathyroid")}>Parathyroid</button>
        <button onClick={() => goToGland("thymus")}>Thymus</button>
        <button onClick={() => goToGland("adrenal")}>Adrenal</button>
        <button onClick={() => goToGland("pancreas")}>Pancreas</button>
        <button onClick={() => goToGland("gonads")}>Gonads</button>
        <button onClick={() => goToGland("disorders")}>
          Endocrine Disorders
        </button>
      </div>
    </div>
  );
}

export default Body;
