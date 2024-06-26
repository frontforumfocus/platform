
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
import Link from "next/link"
import { Button } from "../components/ui/button"
import { CardTitle, CardHeader, CardContent, Card } from "../components/ui/card"





export default function Home() {
  const handleUserAction = useAction(api.message.handleUserAction);
  const { isSignedIn } = useSession();
  const [message, setMessage] = useState("");
  const entries = useQuery(api.message.getAllEntries);
 

  return (
    <main className="flex min-h-screen flex-col  p-24">
        

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
        
      
      
       <section>
          <h2 className="text-3xl font-semibold pb-4">Record daily impact</h2>
          <div className="flex space-x-2 pb-4">
            <Button variant="secondary">All</Button>
            <Button variant="secondary">Energy</Button>
            <Button variant="secondary">Transport</Button>
            <Button variant="secondary">Food</Button>
            <Button variant="secondary">Waste Management</Button>
            <Button variant="secondary">Community Engagement</Button>
            <Button variant="secondary">Advocacy</Button>
          </div>
        </section>
        <section>
          <h3 className="text-2xl font-semibold py-4">Alignments</h3>
          <div className="grid grid-cols-4 gap-4 pb-6">
            <Button className="px-6 py-3" variant="destructive">
              <SunsetIcon className="w-8 h-8" />
              <span>Sunset Views</span>
            </Button>
            <Button className="px-6 py-3" variant="destructive">
              <TreesIcon className="w-8 h-8" />
              <span>Green Spaces</span>
            </Button>
            <Button className="px-6 py-3" variant="destructive">
              <FuelIcon className="w-8 h-8" />
              <span>Renewable Energy</span>
            </Button>
            <Button className="px-6 py-3" variant="destructive">
              <ClockIcon className="w-8 h-8" />
              <span>Earth Hour</span>
            </Button>
            <Button className="px-6 py-3" variant="destructive">
              <RecycleIcon className="w-8 h-8" />
              <span>Zero Waste Lifestyle</span>
            </Button>
            <Button className="px-6 py-3" variant="destructive">
              <FlowerIcon className="w-8 h-8" />
              <span>Plant-based Diet</span>
            </Button>
            <Button className="px-6 py-3" variant="destructive">
              <FishIcon className="w-8 h-8" />
              <span>Clean Oceans</span>
            </Button>
            <Button className="px-6 py-3" variant="destructive">
              <HeartHandshakeIcon className="w-8 h-8" />
              <span>Eco-friendly Practices</span>
            </Button>
          </div>
        </section>
        <section>
          <h3 className="text-2xl font-semibold py-4">Progress Tracking</h3>
          <div className="grid grid-cols-3 gap-4 pb-6">
            <Card className="bg-red-500">
              <CardHeader>
                <CardTitle className="text-lg">Impact Analysis & Reporting</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center items-center">
                <img
                  alt="Impact Analysis"
                  height="100"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "100/100",
                    objectFit: "cover",
                  }}
                  width="100"
                />
              </CardContent>
            </Card>
            <Card className="bg-red-500">
              <CardHeader>
                <CardTitle className="text-lg">Eco-friendly Habits</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center items-center">
                <img
                  alt="Eco-friendly Habits"
                  height="100"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "100/100",
                    objectFit: "cover",
                  }}
                  width="100"
                />
              </CardContent>
            </Card>
            <Card className="bg-red-500">
              <CardHeader>
                <CardTitle className="text-lg">Sustainable Living</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center items-center">
                <img
                  alt="Sustainable Living"
                  height="100"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "100/100",
                    objectFit: "cover",
                  }}
                  width="100"
                />
              </CardContent>
            </Card>
            <Card className="bg-red-500">
              <CardHeader>
                <CardTitle className="text-lg">Community Impact</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center items-center">
                <img
                  alt="Community Impact"
                  height="100"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "100/100",
                    objectFit: "cover",
                  }}
                  width="100"
                />
              </CardContent>
            </Card>
            <Card className="bg-red-500">
              <CardHeader>
                <CardTitle className="text-lg">Global Impact</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center items-center">
                <img
                  alt="Global Impact"
                  height="100"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "100/100",
                    objectFit: "cover",
                  }}
                  width="100"
                />
              </CardContent>
            </Card>
          </div>
        </section>
        <section>
          <h3 className="text-2xl font-semibold py-4">Resources</h3>
          <div className="grid grid-cols-3 gap-4">
            <img
              alt="Resource 1"
              height="100"
              src="/placeholder.svg"
              style={{
                aspectRatio: "200/100",
                objectFit: "cover",
              }}
              width="200"
            />
            <img
              alt="Resource 2"
              height="100"
              src="/placeholder.svg"
              style={{
                aspectRatio: "200/100",
                objectFit: "cover",
              }}
              width="200"
            />
            <img
              alt="Resource 3"
              height="100"
              src="/placeholder.svg"
              style={{
                aspectRatio: "200/100",
                objectFit: "cover",
              }}
              width="200"
            />
          </div>
        </section>
    
      
    </main>
  );
    function ChevronDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}


function ClockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}


function FishIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z" />
      <path d="M18 12v.5" />
      <path d="M16 17.93a9.77 9.77 0 0 1 0-11.86" />
      <path d="M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33" />
      <path d="M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4" />
      <path d="m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98" />
    </svg>
  )
}


function FlowerIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 7.5a4.5 4.5 0 1 1 4.5 4.5M12 7.5A4.5 4.5 0 1 0 7.5 12M12 7.5V9m-4.5 3a4.5 4.5 0 1 0 4.5 4.5M7.5 12H9m7.5 0a4.5 4.5 0 1 1-4.5 4.5m4.5-4.5H15m-3 4.5V15" />
      <circle cx="12" cy="12" r="3" />
      <path d="m8 16 1.5-1.5" />
      <path d="M14.5 9.5 16 8" />
      <path d="m8 8 1.5 1.5" />
      <path d="M14.5 14.5 16 16" />
    </svg>
  )
}


function FuelIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="3" x2="15" y1="22" y2="22" />
      <line x1="4" x2="14" y1="9" y2="9" />
      <path d="M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18" />
      <path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5" />
    </svg>
  )
}


function HeartHandshakeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66" />
      <path d="m18 15-2-2" />
      <path d="m15 18-2-2" />
    </svg>
  )
}


function RecycleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5" />
      <path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12" />
      <path d="m14 16-3 3 3 3" />
      <path d="M8.293 13.596 7.196 9.5 3.1 10.598" />
      <path d="m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843" />
      <path d="m13.378 9.633 4.096 1.098 1.097-4.096" />
    </svg>
  )
}


function SunsetIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 10V2" />
      <path d="m4.93 10.93 1.41 1.41" />
      <path d="M2 18h2" />
      <path d="M20 18h2" />
      <path d="m19.07 10.93-1.41 1.41" />
      <path d="M22 22H2" />
      <path d="m16 6-4 4-4-4" />
      <path d="M16 18a4 4 0 0 0-8 0" />
    </svg>
  )
}


function TreesIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 10v.2A3 3 0 0 1 8.9 16v0H5v0h0a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z" />
      <path d="M7 16v6" />
      <path d="M13 19v3" />
      <path d="M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5" />
    </svg>
  )
}
    
}

