import AboutHeaderLayout from "@/components/AboutLayout";
import { Metadata } from "next";
import { Varela_Round } from "next/font/google";
import Image from "next/image";
import "./page.css";
import FormContainer from "@/components/FormContainer";
import AnimatedOnScrollButNotOnLoad from "@/components/AnimatedOnScrollButNotOnLoad";
import "./components-css/AboutIndex.css";
import AngleTopRightSvg from "@/components/AngleTopRightSvg";
import AngleBottomLeftSvg from "@/components/AngleBottomLeftSvg";
import HorizontalScroll from "@/components/HorizontalScroll";
import dynamic from "next/dynamic";

import Form from "@/components/Form";
export const metadata: Metadata = {
  title:
    "טל מושל - פיתוח עמודי נחיתה - פתרונות שיפור מהירות ותיקון באגים באתרי אינטרנט",
};

const varela = Varela_Round({
  subsets: ["hebrew"],
  weight: "400",
  display: "swap",
});

export default function AboutPage() {
  return (
    <>
      {/* <AboutHeaderLayout /> */}

      <main
        className={varela.className}
        style={{
          position: "relative",
          top: "0",
          // minHeight: "70svh",
          height: "fit-content",
          // overflow: 'hidden'
          paddingBottom: "0px !important",
        }}
      >
        <div
          className="about-background-container"
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            minHeight: "100%",
            height: "fit-content",
            paddingBottom: "0px !important",
          }}
        >
          <Image
            src={"/sofa-living-room-with-copy-space2.webp"}
            alt={"living room"}
            fill={true}
          />
        </div>

        <div
          style={{
            position: "relative",
            top: "0",
            backgroundColor: "rgba(255,255,255,0.8)",
            // width: "100%",
            // minHeight: "100svh",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: "0px !important",
          }}
        >
          <header
            style={{
              // padding: "2rem",
              fontSize: "1.5rem",
              backgroundColor: "transparent",
              textAlign: "center",
              marginTop: "2em",
              // marginRight: "5%",
            }}
          >
            מיקסום הפוטנציאל של האתר שלכם יכול להתבצע במגוון דרכים
          </header>
          <div
            className="services-container-wrapper"
            style={{
              // display: "flex",
              flexDirection: "column",
              position: "relative",
              width: "100%",
              right: "0",
              marginTop: "2em",
              marginBottom: "4em",
              marginInline: "0",
              gap: "1rem",
              height: "fit-content",
            }}
          >
            <AnimatedOnScrollButNotOnLoad>
              <HorizontalScroll />
            </AnimatedOnScrollButNotOnLoad>
          </div>
          <div
            style={{
              height: "fit-content",
              margin: "2em auto",
              width: "calc(90vw - 4rem)",
              // margin: "2rem auto",
              flexDirection: "column",
              gap: "1rem",
              // maxWidth: "90%",
              //           outline: '8px ridge rgba(0, 0, 0,0.2)',
              // borderRadius: '2rem', backgroundColor:'rgba(79, 159,7,0.3)'
            }}
            className="ul-for-pc-screen"
          >
            {/* <header
              style={{
                // padding: "2rem",
                fontSize: "1.5rem",
                backgroundColor: "transparent",
                textAlign: "center",
              }}
            >
              מיקסום הפוטנציאל של האתר שלכם יכול להתבצע במגוון דרכים
            </header> */}

            <AnimatedOnScrollButNotOnLoad threshold={0.1}>
              <div
                className="services-ul-container"
                style={{
                  position: "relative",
                  marginBlock: "0",
                  width: "fit-content",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  marginInline: "auto",
                }}
              >
                <ul
                  style={{
                    width: "fit-content",
                    height: "100%",
                    // margin: "2em auto",
                    gap: "1rem",
                    listStyleType: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "start",
                    flexWrap: "wrap",
                    // paddingTop: "4.5em",
                    // paddingBottom: "4.5em",
                  }}
                  className="services"
                >
                  {/* <AnimatedOnScrollButNotOnLoad threshold={0.1}> */}
                  <div
                    className="fake-border-horizontal"
                    style={{ top: "-1rem", right: "-1rem" }}
                  ></div>
                  <div
                    className="fake-border-vertical"
                    style={{ top: "-1rem", right: "-1rem" }}
                  ></div>

                  <li
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
                    <span style={{}}>
                      <a href="/articles/ux-ui">שיפור חווית משתמש</a>
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
                  </li>
                  {/* </AnimatedOnScrollButNotOnLoad> */}
                  {/* <AnimatedOnScrollButNotOnLoad threshold={0.1}> */}
                  <li
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
                  </li>
                  {/* </AnimatedOnScrollButNotOnLoad> */}

                  {/* <AnimatedOnScrollButNotOnLoad threshold={0.1}> */}
                  <li
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
                  </li>
                  {/* </AnimatedOnScrollButNotOnLoad> */}

                  {/* <AnimatedOnScrollButNotOnLoad threshold={0.1}> */}
                  <li
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
                  </li>
                  {/* </AnimatedOnScrollButNotOnLoad> */}
                  {/* <AnimatedOnScrollButNotOnLoad threshold={0.1}> */}
                  <li
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
                  </li>
                  <div
                    className="fake-border-horizontal"
                    style={{ bottom: "-1rem", left: "-1rem" }}
                  ></div>
                  <div
                    className="fake-border-vertical"
                    style={{ bottom: "-1rem", left: "-1rem" }}
                  ></div>
                  {/* </AnimatedOnScrollButNotOnLoad> */}
                </ul>
              </div>
            </AnimatedOnScrollButNotOnLoad>
          </div>
        </div>
      </main>

      <div
        style={{
          flexGrow: "1",
          position: "relative",
          bottom: "0",
          paddingBottom: "0px !important",
        }}
      >
        <FormContainer />
      </div>
    </>
  );
}
