"use client"
import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import { MobileIcon } from "@radix-ui/react-icons";
import Image from "next/image";




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = {fiirstName: 'Ritik', lastName: "Yadav"}
  return (
    <main className="flex h-screen w-full font-inter">
       <Sidebar user={loggedIn} />
       <div className="flex size-full flex-col ">
          <div className="root-layout ">
              <Image src="/icons/logo.svg" width={30} height={30} alt="Menu" />
              <div>
                 <MobileNav user={loggedIn} />
              </div>
          </div>
          {children}
       </div>
    </main>
  );
}
