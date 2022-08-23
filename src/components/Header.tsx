import React, { useState } from "react";
import { Link } from "react-router-dom";
import { isAuthenticated, signIn, signOut } from "../auth/authPopup";

import Button from "./Button";

export default function Header() {
  const [auth, setAuth] = useState(false);

  return (
    <header className="sticky top-0 z-10 bg-stone-700">
      <div className="mx-auto flex h-16 max-w-screen-2xl items-center gap-x-6 px-6 text-white">
        <Link to="/" className="mr-auto text-center text-2xl font-bold">
          Pizzeria Forte
        </Link>
        <div className="flex items-center gap-x-6">
          <Link className="underline-offset-4 hover:underline" to="/">
            Bestill
          </Link>
          <Link
            className="underline-offset-4 hover:underline"
            to="/mine-bestillinger"
          >
            Mine Bestillinger
          </Link>
          {isAuthenticated() ? (
            <Button
              variant="secondary"
              onClick={async () => {
                await signOut();
                setAuth(isAuthenticated());
              }}
            >
              Logg ut
            </Button>
          ) : (
            <Button
              variant="secondary"
              onClick={async () => {
                await signIn();
                setAuth(isAuthenticated());
              }}
            >
              Logg inn
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
