import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-stone-700">
      <div className="mx-auto flex h-16 max-w-screen-2xl items-center gap-x-6 px-6 text-white">
        <h1 className="mr-auto text-center text-2xl font-bold">
          Pizzeria Forte
        </h1>
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
          {/*TODO: Auth */}
          <button className="flex-none rounded bg-stone-500 px-4 py-2 font-bold hover:bg-stone-400 active:bg-stone-600">
            Logg inn
          </button>
        </div>
      </div>
    </header>
  );
}
