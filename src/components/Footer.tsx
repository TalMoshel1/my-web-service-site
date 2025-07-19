import Link from "next/link";

export default function Footer() {
  return (
    <footer 
    // className="p-5 text-center border-t text-sm space-y-1 text-gray-500"
    >
      <div className="flex justify-center divide-x">
        <Link href="/privacy" >
          Privacy Policy
        </Link>
        <Link href="/about" >
          אודות
        </Link>
        <Link href="/gallery">
          גלריה
        </Link>
      </div>
      <div>
        &copy; {new Date().getFullYear()} My Awesome Blog. All rights reserved.
      </div>
    </footer>
  );
}
