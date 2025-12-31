function Home({ goToBody, goToQuiz }) {
  return (
    <div className="home">
      <h1 className="home-title">EndoExplore</h1>

      <button className="start-button" onClick={goToBody}>
        Endocrine Glands
      </button>
<button className="start-button" style={{ marginTop: "20px" }} onClick={goToQuiz}>
  Take Quiz
</button>

    </div>
  );
}

export default Home;
