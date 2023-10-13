import Logo from "./logo";
import LogoDark from "./logo-dark";
import SidebarRoutes from "./sidebar-routes";

const Sidebar = () => {
  return (
    <div className="h-full border-r flex flex-col overflow-y-auto bg-white dark:bg-background shadow-sm">
      <div className="flex dark:hidden p-6 items-center justify-center">
        <Logo />
      </div>
      <div className="hidden dark:flex p-6 items-center justify-center">
        <LogoDark />
      </div>
      <div className="flex flex-col w-full">
        <SidebarRoutes />
      </div>
    </div>
  );
};

export default Sidebar;
