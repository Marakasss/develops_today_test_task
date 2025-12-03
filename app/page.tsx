import Input from "@/components/Input/Input";
import SidebarMenu from "@/components/SidebarMenu/SidebarMenu";
import Toast from "@/components/Toast/Toast";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Input clearable={true} className="border-4 border-amber-300 " />
      <Toast type="error" />
      <SidebarMenu isOpen={true}></SidebarMenu>
    </div>
  );
}
