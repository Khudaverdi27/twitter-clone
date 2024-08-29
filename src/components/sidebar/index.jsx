import Profile from "../../pages/profile";
import Logo from "../common/Logo";
import Menu from "./menu";

function Sidebar() {
  return (
    <aside className="w-[275px] h-screen overflow-auto flex flex-col sticky top-0 left-0 ">
      <Logo />
      <Menu />
      <div className="mt-auto">
        <Profile />
      </div>
    </aside>
  );
}

export default Sidebar;
