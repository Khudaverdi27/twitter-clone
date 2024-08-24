import { Outlet } from "react-router";
import Sidebar from "../components/sidebar";
import RightBar from "../components/rightbar";

function MainLayout() {
  return (
    <div className="w-[1265px] mx-auto flex">
      <Sidebar />
      <main className="flex flex-1 gap-[30px]">
        <section className="flex-1  border-x border-[#2f3336] max-w-[600px] ">
          <Outlet />
        </section>
        <RightBar />
      </main>
    </div>
  );
}

export default MainLayout;
