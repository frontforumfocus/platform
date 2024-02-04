import { SignInButton, SignOutButton, auth } from "@clerk/nextjs";
import Image from "next/image";


export default function Home() {

  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <SignInButton />
      <SignOutButton />
      
    </main>
  );
}
