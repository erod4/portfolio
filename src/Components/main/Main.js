import Stars from "../Stars/Stars";
import Heading from "../header/Heading";
import Anchors from "./Anchors";
import TitleOne from "./TitleOne";
import TitleTwo from "./TitleTwo";
import "./Main.css";
const Main = () => {
  return (
    <main className="Main">
      <Stars />
      <Heading />
      <TitleOne text={"Enrique Rodriguez"} />
      <TitleTwo text={"Computer Engineering Student"} />
      <Anchors />
    </main>
  );
};

export default Main;
