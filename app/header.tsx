'use client';

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { ModeToggle } from "./mode-toggle";
import { FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'; 

export function Header() {
    return (
        <div className="border-b">
            <div className="h-16 container mx-auto flex justify-between items-center">
                {/* Navigation Links on the Left */}
                <div className="flex items-center gap-4">
                    <div>frontforumfocus</div>
                    <div>Network</div>
                    <div>Projects</div>
                </div>

                {/* Social Media Links & Authentication on the Right */}
                <div className="flex items-center gap-4">
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>

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
    );
}