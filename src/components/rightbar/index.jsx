import PremiumBox from "./PremiumBox";
import Search from "./Search";
import Trends from "./Trends";

function RightBar() {
  return (
    <aside className="w-[350px] mr-2.5">
      <Search />
      <PremiumBox />
      <Trends />
    </aside>
  );
}

export default RightBar;
