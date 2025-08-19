import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

function Logo() {
 
  return (
    <Link href="/" className="z-10 flex items-center gap-4 mt-3">
      {/* <Image src="/logo.png" height="70" width="70" alt="The Wild Oasis logo" /> */}
      <Image src={logo} height="70" width="70" quality={100} alt="The Wild Oasis logo" />
      <span className="text-xl font-semibold text-primary-200">
        The Wild Oasis
      </span>
    </Link>
  );
}

export default Logo;
