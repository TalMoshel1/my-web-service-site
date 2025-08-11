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
// import "../../components-css/AboutIndex.css";

export const metadata: Metadata = {
  title:
    "טל מושל - פיתוח עמודי נחיתה - פתרונות שיפור מהירות ותיקון באגים באתרי אינטרנט",
};

const varela = Varela_Round({
  subsets: ["hebrew"],
  weight: "400",
  display: "swap",
});

export default function UxUiPage() {
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
              חווית משתמש (UX): המפתח לבניית אתר מנצח וקידום אתרים (SEO) אפקטיבי
            </header>
            <AnimatedOnScrollButNotOnLoad threshold={0.1}>
              <article
                className="article"
                style={{ width: "100vw", margin: "auto", display: "flex" }}
              >
                <div>

                  <p style={{textWrap:'wrap'}}>
                    
                  חווית משתמש (UX) היא המפתח להצלחה בעידן הדיגיטלי. היא מתייחסת
                  לכלל התחושות והרגשות של המשתמש בעת אינטראקציה עם המוצר או
                  השירות שלכם – החל מהרגע הראשון ועד לאחר השימוש. חווית משתמש
                  מצוינת פירושה אתר אינטואיטיבי, נעים לשימוש, מהיר ונגיש, כזה
                  שגורם למשתמש להרגיש שהוא מבין כיצד לנווט בו בקלות ולמצוא את
                  מבוקשו ללא תסכול. למה שיפור חווית משתמש קריטי לעסק שלכם? הגברת
                  מעורבות ושימור לקוחות: משתמשים שנהנים מהאינטראקציה עם האתר
                  שלכם יבלו בו יותר זמן, יחזרו אליו שוב ושוב, ויהיו נאמנים יותר
                  למותג. שיפור שיעורי המרה: כאשר האתר קל לשימוש ומספק חוויה
                  חיובית, המשתמשים נוטים יותר לבצע את הפעולות הרצויות, בין אם זה
                  רכישה, הרשמה או יצירת קשר, קרא עוד על <a className="articles-a" href="/call-to-action">
                    בניית עמודי נחיתה שמניעים לפעולה
                  </a>
                  . בידול מהמתחרים: בעולם רווי באתרי אינטרנט, חווית משתמש עדיפה
                  יכולה להוות יתרון תחרותי משמעותי שיבדיל אתכם מהשאר. השפעה
                  חיובית על קידום אורגני: גוגל ומנועי חיפוש אחרים מעדיפים אתרים
                  המספקים חווית משתמש טובה. זמן שהייה ארוך יותר באתר, שיעורי
                  נטישה נמוכים ואינטראקציות חיוביות אחרות הם סימנים ברורים
                   לאלגוריתמים של גוגל שהאתר שלכם רלוונטי ואיכותי, קרא עוד על <a className="link-in-text" href="/organic-seo"> 
                     קידום אורגני 
                  </a>
                   .
                
                
                  כיצד משפרים חווית משתמש? תהליך שיפור חווית המשתמש כולל מחקר
                  מעמיק, יצירת פרסונות משתמשים, בניית מסעות משתמש, עיצוב ממשק
                  (UI), בדיקות שימושיות וניתוח נתונים. חשוב לבחון היבטים כמו
                  מבנה האתר, ניווט קל, מהירות טעינה, עיצוב ויזואלי מושך, וכמובן
                  – לדאוג שהאתר יהיה חף מטעויות. (לינק פנימי אפשרי ל: תיקון
                  באגים – באגים פוגעים באופן ישיר בחווית המשתמש). בנוסף, יש
                  לוודא שהאתר נגיש לכלל האוכלוסייה. (לינק פנימי אפשרי ל: שיפור
                  נגישות – נגישות היא חלק בלתי נפרד מ-UX). השקעה ב-UX היא השקעה
                  לטווח ארוך המניבה פירות רבים ומשפיעה על שורת הרווח של העסק.
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
