import { useState } from "react";
import Home from "./pages/Home";
import Body from "./pages/Body";
import Pituitary from "./pages/Pituitary";
import Thyroid from "./pages/Thyroid";
import Parathyroid from "./pages/Parathyroid";
import Adrenal from "./pages/Adrenal";
import Pancreas from "./pages/Pancreas";
import Pineal from "./pages/Pineal";
import Gonads from "./pages/Gonads";
import "./App.css";
import Quiz from "./pages/Quiz";


function App() {
  const [page, setPage] = useState("home");
if (page === "home") {
  return (
    <Home
      goToBody={() => setPage("body")}
      goToQuiz={() => setPage("quiz")}
    />
  );
}

if (page === "body") {
  return <Body goToGland={setPage} goBack={() => setPage("home")} />;
}


  if (page === "pituitary") {
    return <Pituitary goBack={() => setPage("body")} />;
  }
  if (page === "thyroid") {
  return <Thyroid goBack={() => setPage("body")} />;
}

if (page === "parathyroid") {
  return <Parathyroid goBack={() => setPage("body")} />;
}
if (page === "adrenal") {
  return <Adrenal goBack={() => setPage("body")} />;
}
if (page === "pancreas") {
  return <Pancreas goBack={() => setPage("body")} />;
}
if (page === "pineal") {
  return <Pineal goBack={() => setPage("body")} />;
}
if (page === "gonads") {
  return <Gonads goBack={() => setPage("body")} />;
}
if (page === "quiz") {
  return <Quiz goBack={() => setPage("home")} />;
}

  return null;
}

export default App;
