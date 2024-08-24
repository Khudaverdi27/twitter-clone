import Logo from "../common/Logo";
import Menu from "./menu";

function Sidebar() {
  return (
    <aside className="w-[275px] h-screen  px-2">
      <Logo />
      <Menu />
    </aside>
  );
}

export default Sidebar;
