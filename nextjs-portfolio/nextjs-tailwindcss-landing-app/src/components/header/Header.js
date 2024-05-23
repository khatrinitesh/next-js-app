import Link from "next/link";
import Image from "next/image";
import Logo from "../../assets/img/logo.svg";
import TopNavigation from "./TopNavigation";

const Header = () => {
  return (
    <>
    <header className="top-0 w-full  z-30 bg-white-500 transition-all  p-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-12 ">
          <Link href="/" className="w-[30px]">
            <Image src={Logo} width={120} />
          </Link>
          <TopNavigation/>
        </div>
      </div>
    </header>
    </>
  );
};

export default Header;
