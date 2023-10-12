"use-client";

import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from "./ui/mode-toggle";

export const NavbarRoutes = () => {
  return (
    <div className="flex gap-x-2 ml-auto">
      <UserButton
        appearance={{
          elements: {
            rootBox: "flex",
            userButtonTrigger: "focus:shadow-none",
          },
        }}
      />
      <ModeToggle />
    </div>
  );
};
