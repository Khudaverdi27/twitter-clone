import { Link } from "react-router-dom";
import MustBeFollows from "./MustBeFollows";
import PremiumBox from "./PremiumBox";
import Search from "./Search";
import Trends from "./Trends";
import FooterRightbar from "./FooterRightbar";

function RightBar() {
  return (
    <aside className="w-[350px] mr-2.5">
      <Search />
      <PremiumBox />
      <Trends />
      <MustBeFollows />
      <FooterRightbar />
    </aside>
  );
}

export default RightBar;
