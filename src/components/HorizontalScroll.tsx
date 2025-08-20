import React from "react";
import Image from "next/image";
import "../app/components-css/HorizontalScroll.css";

const items = [
  { text: "שיפור חווית משתמש", img: "/user.svg", alt: "user expereience", page: '/articles/ux-ui' },
  {
    text: "בניית עמודי נחיתה שמניעים לפעולה",
    img: "/landing-page.svg",
    alt: "landing-page",
    page: '/articles/landing-page'
  },
  { text: "תיקון באגים", img: "/bug.svg", alt: "bugs", page: '/articles/bugs' },
  { text: "בוט עסקי", img: "/seo.svg", alt: "bot", page:'/articles/bot' },
  { text: "שיפור נגישות", img: "/accessibility.svg", alt: "accessibility", page: '/articles/accessibility'},
];

const HorizontalScroll: React.FC = () => (
  <div
    style={{
      overflowX: "auto",
      width: "100%",
      whiteSpace: "normal", // <-- critical: allows wrapping
      boxSizing: "border-box",
   
      // border: '1px solid green'
      // margin: '1em 0'
    }}
    className='display-none'
  >
  <ul
      className="scrollingList"
      style={{
        display: "flex",
        // width: `${items.length * 50}%`, 
        gap: "5vw",
        // marginRight: "0.875em",
        marginBottom: "1em",
        boxSizing: "border-box",
        justifyContent: 'start'
      }}
    >
      {items.map((item, i) => (
        // <li
        //   key={i}
        //   style={{
        //     width: "50vw",
        //     // overflow: 'hidden',
        //     flexShrink: 0,
        //     display: "flex",
        //     flexDirection: "column",
        //     alignItems: "center",
        //     justifyContent: "center",
        //     // border: "10px solid green",
        //     flexGrow: "1",
        //     height: "fit-content",
        //     boxSizing: "border-box",
        //     wordWrap: "break-word", // <-- makes long words wrap
        //   }}
        // >
        //   {item.text}
        //   <Image src={item.img} alt={"customer-ux"} width={100} height={100} />
        // </li>
        <li
          key={i}
          className='scrollisgListItem'
          style={{
            // width: "55vw",
            // flexShrink: 0,
            // display: "flex",
            // flexDirection: "column",
            // alignItems: "center",
            // justifyContent: "center",
            // boxSizing: "border-box",
            // padding: "1em",
            // height: "auto",
            // textAlign: "center", // optional, good for RTL
            // border: "1px solid rgba(77, 125, 238, 0.5)",
          }}
        >
          <a href={item.page} style={{     
            // width: "55vw",
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            boxSizing: "border-box",
            padding: "1em",
            // height: "auto",
            textAlign: "center", // optional, good for RTL
            border: "1px solid rgba(0, 0, 0, 0.5)",}}>
     <div
            style={{
              width: "100%",
              whiteSpace: "normal",
              wordBreak: "break-word",
              fontSize: "1rem",
              lineHeight: "1.4em",
              marginBottom: "0.5em",
            }}
          >
            {item.text}
          </div>
          <Image
            src={item.img}
            alt={item.alt || "image"}
            width={100}
            height={100}
          />

          </a>
     
        </li>
      ))}
    </ul>

  
  </div>
);

export default HorizontalScroll;
