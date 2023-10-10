import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <p>This is a protected page</p>
      <ModeToggle></ModeToggle>
    </div>
  );
}
