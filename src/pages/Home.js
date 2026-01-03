function Home({
  goToBody,
  goToDisorders,
  goToShortAnswers,
  goToQuiz
}) {
  return (
    <div className="home">
      <h1 className="home-title">EndoExplore</h1>

      <p className="home-subtitle">
        An interactive platform to learn the endocrine system,
        hormones, disorders, and psychological effects.
      </p>

      <button className="start-button" onClick={goToBody}>
        Explore Endocrine Glands
      </button>

      <button
        className="start-button"
        style={{ marginTop: "20px" }}
        onClick={goToDisorders}
      >
        Disorders
      </button>

      <button
        className="start-button"
        style={{ marginTop: "20px" }}
        onClick={goToShortAnswers}
      >
        Short Answer Q & A
      </button>

      <button
        className="start-button"
        style={{ marginTop: "20px" }}
        onClick={goToQuiz}
      >
        Take Quiz
      </button>
    </div>
  );
}

export default Home;
