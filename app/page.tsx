import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <p className="text-3xl font-medium text-sky-700">Hello World</p>
      <ModeToggle></ModeToggle>
    </div>
  );
}
