import {Outlet, Link } from "react-router-dom"
import "./rootLayout.css"
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react"

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const RootLayout = () => {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
    <div className="rootLayout">
        <header>
            <Link to="/" className="logo">
                <img src="/logo3.png" alt="" />
                <span>Sachin</span>
            </Link>
            <div className="user">
            <SignedIn>
                <UserButton />
            </SignedIn>
            </div>
        </header>
        <main>
            <Outlet/>
        </main>
    </div>
    </ClerkProvider>
  );
};

export default RootLayout;
