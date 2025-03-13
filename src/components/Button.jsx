import React from "react";
import { Link } from "react-router-dom";

export default function Button({ children, onClick, disabled, to, type }) {
  const base =
    "rounded-full px-4 py-2 font-semibold uppercase tracking-wide text-stone-800 transition-all duration-300 focus:ring focus:ring-offset-2";
  const styles = {
    about:
      base +
      " bg-sky-400 hover:bg-sky-300 hover:ring-sky-500 focus:bg-sky-300 my-4 lg:mt-6 lg:px-6",
    search:
      base +
      " bg-blue-400 hover:bg-blue-300 hover:ring-blue-500 focus:bg-blue-300 disabled:cursor-not-allowed disabled:bg-blue-100",
    download:
      base +
      " ms-3 bg-sky-400 hover:bg-sky-300 hover:ring-sky-500 focus:bg-sky-300",
    page:
      base +
      " bg-cyan-400 hover:bg-cyan-300 hover:ring-cyan-500 focus:bg-cyan-300 disabled:cursor-not-allowed disabled:bg-cyan-100",
  };
  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );
  return (
    <button className={styles[type]} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
