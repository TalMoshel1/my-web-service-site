import logo from "../../public/TalPhoto.jpg"; /* this is should be 1200 px width and 630 px height */
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="shadow p-3">
      <Link
        href="/"
        className="flex items-center gap-3 justify-center w-max m-auto"
      >
        <Image src={logo} alt="logo" width={60} height={60} />
        <span className="text-xl font-semibold">Tal Moshels Awesome Website</span>
      </Link>
    </div>
  );
}
