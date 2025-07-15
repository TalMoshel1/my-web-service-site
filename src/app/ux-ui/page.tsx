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
import "../components-css/AboutIndex.css";

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
              maxWidth: "90%",
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
             חווית משתמש (UX): המפתח לבניית אתר מנצח וקידום אתרים (SEO) אפקטיבי

            </header>
            <AnimatedOnScrollButNotOnLoad threshold={0.1}>
            <article className="p-5">

            בעולם הדיגיטלי של ימינו, אתר אינטרנט הוא הרבה יותר מסתם כרטיס ביקור מקוון.<br/>הוא כלי עסקי עוצמתי שיכול להוביל להצלחה או לכישלון.<br/>כדי שאמרתכם ישיג את מטרותיו, בין אם מכירות, לידים או מתן מידע, עליו לא רק להיראות טוב, אלא גם לתפקד באופן אופטימלי.<br/>כאן נכנסת לתמונה **חווית משתמש (User Experience - UX)**, שהפכה לגורם קריטי לא רק בעיצוב אתרים, אלא גם בהשפעה ישירה על **קידום אתרים במנועי חיפוש (SEO)**.<br/><br/>**מהי חווית משתמש (UX) ולמה היא כל כך חשובה?**<br/><br/>חווית משתמש מתייחסת למכלול הרגשות, התחושות והתגובות של אדם בעת אינטראקציה עם מוצר, שירות או מערכת.<br/>בהקשר של אתרי אינטרנט, UX עוסק באופן שבו המשתמש מרגיש כשהוא גולש באתר שלכם.<br/>האם האתר קל לניווט? האם המידע ברור ונגיש? האם הוא מהיר ורספונסיבי? האם הוא מספק ערך?<br/><br/>אתר בעל חווית משתמש טובה הוא אתר שמעוצב מתוך מחשבה על הצרכים, הרצונות וההתנהגויות של המשתמש.<br/>הוא מוביל את הגולש בצורה חלקה ויעילה אל מטרתו, בין אם זו רכישת מוצר, מילוי טופס יצירת קשר או מציאת מידע ספציפי.<br/>חווית משתמש חיובית מובילה לשביעות רצון גבוהה יותר של הגולשים, מגבירה את המעורבות שלהם, ומעודדת אותם לבלות זמן רב יותר באתר ולחזור אליו בעתיד.<br/><br/>**הקשר בין חווית משתמש לבניית אתר**<br/><br/>בניית אתר מקצועי ויעיל חייבת להתחיל בתכנון חווית המשתמש.<br/>עוד לפני שמעצבים את הנראות החיצונית, יש להבין לעומק מי קהל היעד, מהם צרכיו ומהן מטרותיו בעת הגלישה באתר.<br/>תהליך זה כולל:<br/><br/>* **מחקר משתמשים:** איסוף נתונים על קהל היעד, העדפותיו, הרגלי הגלישה שלו והבעיות שהוא מנסה לפתור.<br/>* **אפיון ועיצוב ממשק (UI):** תכנון מבנה האתר, זרימת המידע, היררכיית התוכן והאלמנטים הוויזואליים באופן שישרת את המשתמשים בצורה הטובה ביותר.<br/>* **נגישות:** הבטחה שהאתר נגיש לכלל המשתמשים, כולל אנשים עם מוגבלויות, תוך עמידה בתקנים הנדרשים.<br/>* **רספונסיביות:** התאמת האתר באופן
            </article>

            </AnimatedOnScrollButNotOnLoad>
          </div>
        </div>
      </main>

      <FormContainer />
    </>
  );
}
