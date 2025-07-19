import AboutHeaderLayout from "@/components/AboutLayout";
import { Metadata } from "next";
import { Varela_Round } from "next/font/google";
import Image from "next/image";
import "./page.css";
import Form from "@/components/Form";
import FormContainer from "@/components/FormContainer";
import AnimatedOnScrollButNotOnLoad from "@/components/AnimatedOnScrollButNotOnLoad";
import "./components-css/AboutIndex.css";

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
      <AboutHeaderLayout />

      <main
  className={varela.className}
  style={{
    position: "relative",
    top: "0",
    minHeight: "70svh",
    height: "fit-content",
    width: "100vw",
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
      width: "100%",
      minHeight: "100svh",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <div
      style={{
        height: "fit-content",
        margin: "5.5em auto",
        width: "auto",
        // maxWidth: "90%",
        //           outline: '8px ridge rgba(0, 0, 0,0.2)',
        // borderRadius: '2rem', backgroundColor:'rgba(79, 159,7,0.3)'
      }}
    >
      <header
        style={{
          padding: "2rem",
          fontSize: "1.5rem",
          backgroundColor: "transparent",
          textAlign: "center",
        }}
      >
        מיקסום הפוטנציאל של האתר שלכם יכול להתבצע במגוון דרכים
      </header>
      <AnimatedOnScrollButNotOnLoad threshold={0.1}>
        <ul
          style={{
            width: "80%",
            margin: "0 auto",
            gap: "1rem",
            listStyleType: "none",
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            paddingTop: "4.5em",
            paddingBottom: "4.5em",
          }}
          className="services"
        >
          <AnimatedOnScrollButNotOnLoad threshold={0.1}>
            <li
              className="service-item"
              style={{
                position: "relative",
                height: "fit-content",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{}}><a href='/articles/ux-ui'>שיפור חווית משתמש</a></span>
              {/* <Customer_ux /> */}
              <Image
                src={"/customer-ux.svg"}
                alt={"customer-ux"}
                width={100}
                height={100}
                color="black"
              />
            </li>
          </AnimatedOnScrollButNotOnLoad>
          <AnimatedOnScrollButNotOnLoad threshold={0.1}>
            <li

            style={{
              position: "relative",
              height: "fit-content",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
            >
              <span>בניית עמודי נחיתה שמניעים לפעולה</span>
              <Image
                src={"/customer-ux.svg"}
                alt={"customer-ux"}
                width={100}
                height={100}
              />
            </li>
          </AnimatedOnScrollButNotOnLoad>

          <AnimatedOnScrollButNotOnLoad threshold={0.1}>
            <li
              className="service-item"
              style={{
                position: "relative",
                height: "fit-content",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span>תיקון באגים</span>
              {/* <Customer_ux /> */}
              <Image
                src={"/customer-ux.svg"}
                alt={"customer-ux"}
                width={100}
                height={100}
              />
            </li>
          </AnimatedOnScrollButNotOnLoad>

          <AnimatedOnScrollButNotOnLoad threshold={0.1}>
            <li
              className="service-item"
              style={{
                position: "relative",
                height: "fit-content",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span>קידום אורגני</span>
              <Image
                src={"/customer-ux.svg"}
                alt={"customer-ux"}
                width={100}
                height={100}
              />
            </li>
          </AnimatedOnScrollButNotOnLoad>
          <AnimatedOnScrollButNotOnLoad threshold={0.1}>
            <li
              className="service-item"
              style={{
                position: "relative",
                height: "fit-content",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span>שיפור נגישות</span>
              {/* <Customer_ux /> */}
              <Image
                src={"/customer-ux.svg"}
                alt={"customer-ux"}
                width={100}
                height={100}
              />
            </li>
          </AnimatedOnScrollButNotOnLoad>
        </ul>
      </AnimatedOnScrollButNotOnLoad>
    </div>
  </div>
</main>

<FormContainer />
    </>
  );
}
