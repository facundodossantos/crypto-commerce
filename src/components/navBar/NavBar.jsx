// Components
import Links from "./links/Links";
import CartWidget from "./CartWidget/CartWidget";
import Logo from "./Logo/Logo";
// Icons
import { BsMenuApp } from "react-icons/bs";

const NavBar = () => {
  return (
    <nav className="w-full bg-white shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Logo />
            <div className="md:hidden">
              <button className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border">
                <BsMenuApp className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <Links links={["Home", "Marketplace", "Trade", "NFT"]} />
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
