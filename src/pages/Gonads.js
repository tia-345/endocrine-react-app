import gonadsImg from "../assets/gonads.png";

function Gonads({ goBack }) {
  return (
    <div className="page">
      <h1>Gonads</h1>

      <div className="image-card">
        <img
          src={gonadsImg}
          alt="Male and Female Gonads"
          width="200"
        />
      </div>

      <h3>Overview</h3>
      <p>
        Gonads are reproductive endocrine glands responsible for the production
        of sex hormones and gametes. They play a major role in reproduction,
        physical development, and behavior.
      </p>

      {/* MALE GONADS */}
      <h2>Male Gonads (Testes)</h2>

      <h3>Location</h3>
      <p>Located in the scrotum.</p>

      <h3>Hormone Secreted</h3>
      <ul>
        <li>Testosterone</li>
      </ul>

      <h3>Functions</h3>
      <ul>
        <li>Sperm production</li>
        <li>Development of male secondary sexual characteristics</li>
        <li>Regulation of libido</li>
      </ul>

      <h3>Psychological Effects</h3>
      <p>
        Testosterone influences aggression, motivation, confidence,
        risk-taking behavior, and sexual drive.
      </p>

      {/* FEMALE GONADS */}
      <h2>Female Gonads (Ovaries)</h2>

      <h3>Location</h3>
      <p>Located in the pelvic cavity.</p>

      <h3>Hormones Secreted</h3>
      <ul>
        <li>Estrogen</li>
        <li>Progesterone</li>
      </ul>

      <h3>Functions</h3>
      <ul>
        <li>Regulation of menstrual cycle</li>
        <li>Development of female secondary sexual characteristics</li>
        <li>Preparation and maintenance of pregnancy</li>
      </ul>

      <h3>Psychological Effects</h3>
      <p>
        Estrogen and progesterone influence mood regulation, emotional
        sensitivity, stress response, and cognitive processing.
      </p>

      <h3>Clinical Notes</h3>
      <p>
        Hormonal imbalance in gonads can lead to mood swings, infertility,
        anxiety disorders, and conditions such as PCOS.
      </p>

      <button onClick={goBack}>Back</button>
    </div>
  );
}

export default Gonads;
