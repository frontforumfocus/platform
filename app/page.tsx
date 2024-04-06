"use client";

import { handleUserAction } from "@/convex/message";
import { SignInButton, SignOutButton, useSession } from "@clerk/nextjs";
import Image from "next/image";
import { handleClientScriptLoad } from "next/script";
import { useState } from "react";
import { useAction, useQueries, useQuery } from "convex/react";
import { api } from "../convex/_generated/api"
import { motion } from 'framer-motion';
import dynamic from "next/dynamic";





export default function Home() {
  const handleUserAction = useAction(api.message.handleUserAction);
  const { isSignedIn } = useSession();
  const [message, setMessage] = useState("");
  const entries = useQuery(api.message.getAllEntries);
 

  return (
    <main className="flex min-h-screen flex-col  p-24">
         
  
   <div className="container flex flex-col items-center justify-center space-y-4 px-4 md:px-6 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                measure and amplify your impact on a greener world
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Align your efforts with the SDGs, ensuring that every action counts.
              </p>
            </div>
            </div>
                 <div className="video-container">
        <video className="video-player" controls>
          <source src="/cool.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      
         
    
        

        <form className="flex flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            handleUserAction({ message });
          }}>
          <input className="p-2 rounded-md w-full text-white"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button>Align my Focus</button>
        </form>
        
      
      
      
    
      

    </main>
  );
        
}

