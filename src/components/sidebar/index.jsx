import Logo from "../common/Logo";
import Menu from "./menu";

function Sidebar() {
  return (
    <aside className="w-[275px] h-screen ">
      <Logo />
      <Menu />
    </aside>
  );
}

export default Sidebar;
