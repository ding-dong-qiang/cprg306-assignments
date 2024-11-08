"use client";

import Link from "next/link";
// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";

export default function SignInPage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  async function handleSignIn() {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSignOut() {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main className="m-5">
      <header>
        <h1 className="text-3xl text-center">Firebase Auth</h1>
      </header>
      {user ? (
        <div>
          <p>
            Welcome {user.displayName},({user.email})!
          </p>
          <div>
            <img src={user.photoURL} className="w-10 h-10" />
          </div>
          <div>
            <Link href="/week-10/shopping-list">Shopping List</Link>
          </div>
          <button
            type="button"
            className="text-lg text-white bg-blue-600 rounded px-2 py-1 mt-4"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      ) : (
        <div>
          <button
            type="button"
            className="text-lg text-white bg-blue-600 rounded px-2 py-1 mt-4"
            onClick={handleSignIn}
          >
            Sign In
          </button>
        </div>
      )}
    </main>
  );
}

