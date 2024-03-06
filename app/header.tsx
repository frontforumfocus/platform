'use client';

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { ModeToggle } from "./mode-toggle";

export  function Header() {
    return (
        <div className="  border-b">
            <div className="h-16 container flex justify-between items-center">
            <div> frontfrumfocus </div>
            <div>Network </div>
             <div>Projects</div>
            <div>
                <SignedIn>
                    <UserButton />
                </SignedIn>
                <SignedOut>
                    <SignInButton />
                </SignedOut>
            <ModeToggle />
            </div>
    
        </div>
        </div>
    )
}

