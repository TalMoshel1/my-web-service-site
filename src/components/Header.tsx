// "use client";
// import logo from "../../public/TalPhoto.jpg"; /* this is should be 1200 px width and 630 px height */
// import Image from "next/image";
// import Link from "next/link";
// import { Inter } from "next/font/google";
// import ColorfulSvg from "./ColorfulSvg";
// import useScrollBeyond20svh from "@/hooks/useScrollBeyond20svh";
// import { useEffect } from "react";
// import HeroImage from "./HeroImage";

// const inter = Inter({ subsets: ["latin"] });

// export default function Header() {
//   const scrolledBeyond = useScrollBeyond20svh();

//   useEffect(() => {
//     console.log("Scrolled beyond 20svh:", scrolledBeyond);
//   }, [scrolledBeyond]);

//   return (
//     <div
//       className={`
//     ${inter.className}`}
//       style={{ position: "relative" }}
//     >
//       <HeroImage />
//       <p
//         className={`
//     ${inter.className}`}
//         style={{ position: "absolute", bottom: "5svh", right: "5svh" }}
//       >
//         האתר של טל מושל
//       </p>
//     </div>
//     //  <header style={{height:'fit-content', position:'sticky', top:0, backgroundColor:'white'}} className={inter.className}>
//     //   {/* <div style={{position:'relative'}}> */}
//     //   <ColorfulSvg/>
//     //   <h1 className='text-4xl font-bold' style={{position:'absolute', top: '50%', left: '50%', transform:'translate(-50%,-50%)'}}>כותרת!</h1>

//     //   {/* </div> */}

//     //   </header>
//   );
// }
