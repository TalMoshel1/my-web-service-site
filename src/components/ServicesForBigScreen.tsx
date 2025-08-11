import Image from "next/image";
import Link from "next/link";

const ServicesForBigScreen = () => {
  const services = [{}];

  return (
    <>
    <li>

                 <a
                             href="/articles/ux-ui"
                    className="service-item"
                    style={{
                      position: "relative",
                      // height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      // minWidth: "0",
                      // overflow: "hidden",
                    }}
                  >
                    <span style={{ height: ''}}>
                        שיפור חווית משתמש
                    </span>
                    <Image
                      src={"/user.svg"}
                      alt={"user experience"}
                      width={100}
                      height={100}
                      color="black"
                      // style={{ maxWidth: "100%" }}
                      // fill
                    />
                  </a>
</li>
            
                  {/* </AnimatedOnScrollButNotOnLoad> */}
                  {/* <AnimatedOnScrollButNotOnLoad threshold={0.1}> */}
                  <li>
    <a
                                 href="/articles/landing-page"

                    style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      // overflow: "hidden",
                      minWidth: "0",
                    }}
                  >
                    <span>בניית עמודי נחיתה שמניעים לפעולה</span>
                    <Image
                      src={"/landing-page.svg"}
                      alt={"landing-page"}
                      width={100}
                      height={100}
                      color="black"
                      // style={{ maxWidth: "100%" }}
                      // fill
                    />
                  </a>
                  </li>
              
                  {/* </AnimatedOnScrollButNotOnLoad> */}

                  {/* <AnimatedOnScrollButNotOnLoad threshold={0.1}> */}
                  <li>
  <a
                               href="/articles/bugs"

                    className="service-item"
                    style={{
                      position: "relative",
                      // height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      minWidth: "0",
                      // overflow: "hidden",
                    }}
                  >
                    <span>תיקון באגים</span>
                    <Image
                      src={"/bug.svg"}
                      alt={"bugs"}
                      width={100}
                      height={100}
                      color="black"
                      // style={{ maxWidth: "100%" }}
                      // fill
                    />
                  </a>
                  </li>
                
                  {/* </AnimatedOnScrollButNotOnLoad> */}

                  {/* <AnimatedOnScrollButNotOnLoad threshold={0.1}> */}

                  <li>
     <a
                                  href="/articles/seo"

                    className="service-item"
                    style={{
                      position: "relative",
                      // height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      minWidth: "0",
                      // overflow: "hidden",
                    }}
                  >
                    <span>קידום אורגני</span>
                    <Image
                      src={"/seo.svg"}
                      alt={"seo"}
                      width={100}
                      height={100}
                      color="black"
                      // style={{ maxWidth: "100%" }}
                      // fill
                    />
                  </a>
                  </li>
             
                  {/* </AnimatedOnScrollButNotOnLoad> */}
                  {/* <AnimatedOnScrollButNotOnLoad threshold={0.1}> */}
                  <li>
                           <a
                                                        href="/articles/accessibility"

                    className="service-item"
                    style={{
                      position: "relative",
                      // height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      minWidth: "0",
                      // overflow: "hidden",
                    }}
                  >
                    <span>שיפור נגישות</span>
                    <Image
                      src={"/accessibility.svg"}
                      alt={"accessibility"}
                      width={100}
                      height={100}
                      color="black"
                      // style={{ maxWidth: "100%" }}
                      // fill
                    />
                  </a>
                  </li>
           
           </>
  );
};

export default ServicesForBigScreen;

//    <li
//             className="service-item"
//             style={{
//               position: "relative",
//               // height: "100%",
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               justifyContent: "center",
//               // minWidth: "0",
//               // overflow: "hidden",
//               border: '1px solid brown',
//             }}
//           >
//             <span style={{width: '100%', height: '100%', border: '1px solid red'}}>
//               <a href="/articles/ux-ui" style={{width: '100%', height: '100%'}}>שיפור חווית משתמש</a>
//             </span>
//             <Image
//               src={"/user.svg"}
//               alt={"user experience"}
//               width={100}
//               height={100}
//               color="black"
//               // style={{ maxWidth: "100%" }}
//               // fill
//             />
//           </li>
//           {/* </AnimatedOnScrollButNotOnLoad> */}
//           {/* <AnimatedOnScrollButNotOnLoad threshold={0.1}> */}
//           <li
//             style={{
//               position: "relative",
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               justifyContent: "center",
//               // overflow: "hidden",
//               minWidth: "0",
//             }}
//           >
//             <span>בניית עמודי נחיתה שמניעים לפעולה</span>
//             <Image
//               src={"/landing-page.svg"}
//               alt={"landing-page"}
//               width={100}
//               height={100}
//               color="black"
//               // style={{ maxWidth: "100%" }}
//               // fill
//             />
//           </li>
//           {/* </AnimatedOnScrollButNotOnLoad> */}

//           {/* <AnimatedOnScrollButNotOnLoad threshold={0.1}> */}
//           <li
//             className="service-item"
//             style={{
//               position: "relative",
//               // height: "100%",
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               justifyContent: "center",
//               minWidth: "0",
//               // overflow: "hidden",
//             }}
//           >
//             <span>תיקון באגים</span>
//             <Image
//               src={"/bug.svg"}
//               alt={"bugs"}
//               width={100}
//               height={100}
//               color="black"
//               // style={{ maxWidth: "100%" }}
//               // fill
//             />
//           </li>
//           {/* </AnimatedOnScrollButNotOnLoad> */}

//           {/* <AnimatedOnScrollButNotOnLoad threshold={0.1}> */}
//           <li
//             className="service-item"
//             style={{
//               position: "relative",
//               // height: "100%",
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               justifyContent: "center",
//               minWidth: "0",
//               // overflow: "hidden",
//             }}
//           >
//             <span>קידום אורגני</span>
//             <Image
//               src={"/seo.svg"}
//               alt={"seo"}
//               width={100}
//               height={100}
//               color="black"
//               // style={{ maxWidth: "100%" }}
//               // fill
//             />
//           </li>
//           {/* </AnimatedOnScrollButNotOnLoad> */}
//           {/* <AnimatedOnScrollButNotOnLoad threshold={0.1}> */}
//           <li
//             className="service-item"
//             style={{
//               position: "relative",
//               // height: "100%",
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               justifyContent: "center",
//               minWidth: "0",
//               // overflow: "hidden",
//             }}
//           >
//             <span>שיפור נגישות</span>
//             <Image
//               src={"/accessibility.svg"}
//               alt={"accessibility"}
//               width={100}
//               height={100}
//               color="black"
//               // style={{ maxWidth: "100%" }}
//               // fill
//             />
//           </li>
