import Input from "@/components/Input/Input";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Input clearable={true} className="border-4 border-amber-300 " />
    </div>
  );
}
