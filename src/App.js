import { useState } from "react";
import Home from "./pages/Home";
import Body from "./pages/Body";
import Hypothalamus from "./pages/Hypothalamus";
import Pituitary from "./pages/Pituitary";
import Thyroid from "./pages/Thyroid";
import Parathyroid from "./pages/Parathyroid";
import Adrenal from "./pages/Adrenal";
import Pancreas from "./pages/Pancreas";
import Pineal from "./pages/Pineal";
import Thymus from "./pages/Thymus";
import Gonads from "./pages/Gonads";
import Quiz from "./pages/Quiz";
import EndocrineDisorders from "./pages/EndocrineDisorders";
import ShortAnswers from "./pages/ShortAnswers";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  if (page === "home") {
    return (
      <Home
        goToBody={() => setPage("body")}
        goToDisorders={() => setPage("disorders")}
        goToShortAnswers={() => setPage("short-answers")}
        goToQuiz={() => setPage("quiz")}
      />
    );
  }

  if (page === "body") {
    return <Body goToGland={setPage} goBack={() => setPage("home")} />;
  }

  if (page === "disorders") {
    return <EndocrineDisorders goBack={() => setPage("home")} />;
  }

  if (page === "short-answers") {
    return <ShortAnswers goBack={() => setPage("home")} />;
  }

  if (page === "hypothalamus") return <Hypothalamus goBack={() => setPage("body")} />;
  if (page === "pituitary") return <Pituitary goBack={() => setPage("body")} />;
  if (page === "pineal") return <Pineal goBack={() => setPage("body")} />;
  if (page === "thyroid") return <Thyroid goBack={() => setPage("body")} />;
  if (page === "parathyroid") return <Parathyroid goBack={() => setPage("body")} />;
  if (page === "thymus") return <Thymus goBack={() => setPage("body")} />;
  if (page === "adrenal") return <Adrenal goBack={() => setPage("body")} />;
  if (page === "pancreas") return <Pancreas goBack={() => setPage("body")} />;
  if (page === "gonads") return <Gonads goBack={() => setPage("body")} />;

  if (page === "quiz") {
    return <Quiz goBack={() => setPage("home")} />;
  }

  return null;
}

export default App;
