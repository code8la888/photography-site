import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-sky-500 sm:px-4 sm:py-3">
      <div className="hidden items-center justify-between sm:flex">
        <h1 className="text-2xl font-bold tracking-widest hover:text-stone-300 hover:text-opacity-85">
          <Link to="/">Wishyougoodlight.com</Link>
        </h1>
        <nav>
          <ul className="text-lg hover:text-stone-300 hover:text-opacity-85">
            <li>
              <Link to="/about">About Wishyougoodlight</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex flex-col items-center text-center sm:hidden">
        <div className="flex w-full items-center justify-center border-b-2 border-stone-200 py-2">
          <h1 className="text-2xl font-bold tracking-widest hover:cursor-pointer hover:text-stone-300 hover:text-opacity-85">
            <Link to="/">Wishyougoodlight.com</Link>
          </h1>
        </div>

        <nav className="flex w-full items-center justify-center py-2 font-semibold">
          <ul className="text-lg hover:cursor-pointer hover:text-stone-300 hover:text-opacity-85">
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
