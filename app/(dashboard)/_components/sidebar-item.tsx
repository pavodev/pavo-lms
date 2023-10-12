"use client";

import { usePathname, useRouter } from "next/navigation";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
}

const SidebarItem = ({ icon: Icon, label, href }: SidebarItemProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const isActive =
    (pathname === "/" && href === "/") || // Route page
    pathname === href || // Other page
    pathname?.startsWith(`${href}/`); // Subroute of a route

  const onClick = () => {
    router.push(href);
  };

  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(
        "flex items-center gap-x-2 text-sm font-[500] pl-6 transition-all dark:hover:text-accent-foreground hover:bg-sky-200/20 dark:hover:bg-zinc-300/20",
        isActive &&
          "bg-sky-700/20 dark:bg-zinc-800/80 dark:text-sky-500 hover:bg-sky-700/40 dark:hover:bg-zinc-200/20 dark:hover:text-sky-500 border-r-4 border-sky-500"
      )}
    >
      <div className="flex items-center gap-x-2 py-4">
        <Icon size={22} className={cn("", isActive && "dark:text-sky-500")} />
        {label}
      </div>
    </button>
  );
};

export default SidebarItem;
