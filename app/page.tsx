"use client";

import { handleUserAction } from "@/convex/message";
import { SignInButton, SignOutButton, useSession } from "@clerk/nextjs";
import Image from "next/image";
import { handleClientScriptLoad } from "next/script";
import { useState } from "react";
import { useAction } from "convex/react";
import { api } from "../convex/_generated/api"

export default function Home() {
  const handleUserAction = useAction(api.message.handleUserAction);
  const { isSignedIn } = useSession();
  const [message, setMessage] = useState("");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {isSignedIn ? <SignOutButton /> : <SignInButton />}
      <div className="flex justify-center items-center w-full h-screen font-chakra flex-col gap-8">
        <h1 className="text-4xl text-white">
          Welcome frontforumfocus the platform for the SDGs
        </h1>
        <div className="bg-white rounded-xl w-full h-full flex flex-col justify-center items-center gap-8"></div>

        <form className="flex flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            handleUserAction({ message });
          }}>
          <input className="p-2 rounded-md w-full text-black"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button>submit</button>
        </form>
      </div>
    </main>
  );
}

