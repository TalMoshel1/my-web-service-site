import UxUiHeader from "@/components/headers/ux-ui";
import HeroImage from "@/components/HeroImage";
import { Metadata } from "next";
import { Varela_Round } from "next/font/google";
import Customer_ux from "../../assets/customer-ux.svg";
import Image from "next/image";
import "./page.css";
import Form from "@/components/Form";
import FormContainer from "@/components/FormContainer";
import AnimatedOnScrollButNotOnLoad from "@/components/AnimatedOnScrollButNotOnLoad";
import "../../components-css/AboutIndex.css";
import "./page.css";

export const metadata: Metadata = {
  title:
    "טל מושל - פיתוח עמודי נחיתה - פתרונות שיפור מהירות ותיקון באגים באתרי אינטרנט",
};

const varela = Varela_Round({
  subsets: ["hebrew"],
  weight: "400",
  display: "swap",
});

export default function Accessibility() {
  return (
    <>
      <UxUiHeader />

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
            // minHeight: "100svh",
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
                width: "100%",
                margin: "auto",
              }}
            >
              תיקון באגים
            </header>
            <AnimatedOnScrollButNotOnLoad threshold={0.1}>
<article
  className="article"
  style={{ width: "100vw", margin: "auto", display: "flex" }}
>
  <div>
    <p style={{ width: "100%" }}>
      נגישות בבניית אתרי אינטרנט היא לא רק דרישה חוקית במקרים מסוימים, אלא
      גם חלק בלתי נפרד מיצירת חווית גלישה שוויונית לכולם. אתר נגיש מאפשר
      לכל המשתמשים, כולל אנשים עם מוגבלויות, לקבל את המידע, השירותים
      והכלים באותה רמה של נוחות ויעילות. התאמת האתר לנגישות אינה פוגעת
      בעיצוב או בפונקציונליות, אלא להפך – היא משפרת את{" "}
      <a className="link-in-text" href="https://www.example.com/ux-improvement">
        חווית המשתמש
      </a>{" "}
      ומחזקת את המוניטין המקצועי של העסק.
    </p>
    <br />
    <p style={{ width: "100%" }}>
      <strong>הנה כמה עקרונות מנחים לבניית אתר נגיש:</strong>
    </p>
    <br />
    <ul className="landing-page-list" style={{ width: "100%" }}>
      <li>
        <strong>שימוש נכון בכותרות:</strong> מבנה היררכי ברור של תגיות H1-H6
        עוזר למשתמשים המשתמשים בקוראי מסך להבין את תוכן הדף. סדר הגיוני של
        הכותרות משפר את ההתמצאות ומשפיע גם על{" "}
        <a className="link-in-text" href="https://www.example.com/seo-guide">
          קידום אורגני
        </a>{" "}
        במנועי חיפוש.
      </li>
      <li>
        <strong>טקסט חלופי לתמונות:</strong> לכל תמונה יש לספק טקסט חלופי
        (alt) המתאר את התוכן או המטרה שלה. זה קריטי עבור משתמשים שלא
        יכולים לראות את התמונה ומשפר גם את הקידום האורגני.
      </li>
      <li>
        <strong>ניגודיות צבעים מספקת:</strong> הקפידו על שילובי צבעים עם
        ניגודיות גבוהה בין טקסט לרקע, כדי לוודא שכל המשתמשים, כולל אלה עם
        לקויות ראייה, יוכלו לקרוא בקלות.
      </li>
      <li>
        <strong>תפריטים וניווט נגישים:</strong> תפריטים ברורים שניתן לנווט
        בהם בעזרת מקלדת בלבד משפרים משמעותית את הנגישות. תכנון נכון של
        הניווט תורם גם ל{" "}
        <a className="link-in-text" href="https://www.example.com/landing-page">
          בניית עמודי נחיתה שמניעים לפעולה
        </a>
        .
      </li>
      <li>
        <strong>טפסים ידידותיים:</strong> הוספת תוויות (labels) שברורות
        לקוראי מסך, הצגת הודעות שגיאה ברורות, ויכולת למלא את הטפסים גם
        באמצעות מקלדת בלבד – כל אלה הופכים את הטפסים לנגישים יותר.
      </li>
      <li>
        <strong>בדיקות נגישות שוטפות:</strong> נגישות היא תהליך מתמשך, בדומה
        ל{" "}
        <a className="link-in-text" href="https://www.example.com/bug-fixing">
          תיקון באגים
        </a>
        . חשוב לבדוק את האתר בכל עדכון, לוודא שהתכנים והפיצ'רים החדשים לא
        פוגעים בנגישות, ולבצע{" "}
        <a className="link-in-text" href="https://www.example.com/accessibility-improvement">
          שיפור נגישות
        </a>{" "}
        מתמיד.
      </li>
    </ul>
    <br />
    <p>
      נגישות היא לא תוספת – היא חלק מהותי בבניית אתר איכותי. השקעה בה תוביל
      ליותר מבקרים מרוצים, חשיפה רחבה יותר, ושיפור מתמשך בביצועי האתר
      העסקי.
    </p>
  </div>
</article>

            </AnimatedOnScrollButNotOnLoad>
          </div>
        </div>
      </main>

      <FormContainer />
    </>
  );
}
