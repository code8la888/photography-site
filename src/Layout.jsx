import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
export default function Layout() {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] font-roboto">
      <Header />
      <main className="mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
