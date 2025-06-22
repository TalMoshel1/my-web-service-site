// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "טל מושל - פיתוח עמודי נחיתה - פתרונות שיפור מהירות ותיקון באגים באתרי אינטרנט", /* =this will replace the %s in the metadata in the layout.tsx under the app/ */
// };

// export default function AboutPage() {
//   return (
//     <div className="max-w-prose m-auto space-y-3">
//       <h1 className="text-3xl text-center font-bold">About</h1>
//       <p>
//         אני טל מושל, מוזיקאי, אמן, יוצר תוכן ומפתח אתרים. אני מתמחה בפיתוח עמודי נחיתה, שיפור מהירויות אתרים וקידום אתרים במנועי חיפוש.
//       </p>
//     </div>
//   );
// }

import AboutHeaderLayout from "@/components/AboutLayout";
import HeroImage from "@/components/HeroImage";
import { Metadata } from "next";
import { Varela_Round } from "next/font/google";
import Customer_ux from "../../assets/customer-ux.svg";
import Image from "next/image";
import "./page.css";
import Form from "@/components/Form";
import FormContainer from "@/components/FormContainer";

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
      {/* <Form /> */}

      {/* <article className="max-w-prose m-auto space-y-6 p-4 overflow-x-hidden" style={{overflowX: 'hidden'}}>
      <h1 className="text-4xl font-bold text-center">
        בניית עמודי נחיתה, שיפור מהירות האתר, קידום אורגני ותיקון באגים
      </h1>

      <section>
        <p>
          לא תמיד רואים את זה, אבל כל אתר – כל עמוד נחיתה, כל כפתור, כל קובץ CSS קטן – יש לו תפקיד. ויש לו השפעה.
        </p>
        <p>
          אני לא מדבר עכשיו על האלגוריתם של גוגל. ולא על הביצועים. אני מדבר על מישהו שגולש באתר שלך מהטלפון בין פגישות, ומחליט תוך שניות אם אתה נראה לו רציני.
        </p>
        <p className="overflow-x-hidden">
          עמוד נחיתה טוב, בנוי נכון, יכול להפוך ביקור מקרי להתחלה של מערכת יחסים. עסקית. אנושית. וזה מה שאני עושה.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mt-6">בניית עמודי נחיתה שמניעים לפעולה</h2>
        <p>
          עמוד נחיתה זה לא רק עיצוב יפה. זה להבין מי הגולש, מה הוא מחפש, ואיך עוזרים לו להבין שהוא במקום הנכון – תוך שניות. אני בונה עמודים שחושבים כמו בני אדם, לא רק כמו מתכנתים.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mt-6">שיפור מהירות אתר = שיפור חוויית משתמש</h2>
        <p>
          לא משנה כמה השקעת בעיצוב – אם האתר נטען לאט, הוא פשוט לא שווה. אני מנקה, ממזער, דוחס, ומייעל כדי שתרגיש קלילות, זרימה וכבוד לזמן של המשתמש.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mt-6">קידום אורגני בגוגל שמתחיל מקוד טוב</h2>
        <p>
          קידום אורגני מתחיל מאתר שבנוי נכון – היררכיה תקינה, כותרות ברורות, תגיות alt לתמונות, וזמני טעינה מהירים. אני בונה תשתית נכונה לקידום, עם דגש על חוויית משתמש ודיוק טכני.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mt-6">תיקון באגים – בשקט, בדייקנות</h2>
        <p>
          כל באג הוא רמז. אני מטפל בבאגים כמו ששען מטפל במנגנון – ברגישות, בשקט, ובלי דרמה מיותרת. לוקח אחריות, מאבחן, מתקן.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mt-6">השירותים שאני מציע</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>בניית עמודי נחיתה שמניעים לפעולה</li>
          <li>שיפור ביצועים ומהירות טעינה</li>
          <li>SEO טכני עם חשיבה על המשתמש</li>
          <li>תיקון באגים – מהתנהגות לא צפויה ועד לתקלות רספונסיביות</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mt-6">אבל יותר מהשירותים – אני מציע גישה</h2>
        <p>
          גישה שמכבדת את הגולש. שמכבדת את הלקוח. ושמכבדת את הזמן, את הפשטות, ואת התוצאה. כי מאחורי כל אתר – יש בן אדם. ואני, בכל שורת קוד, זוכר את זה.
        </p>
      </section>

      <section className="text-center mt-8">
        <p className="font-semibold">אם אתם מחפשים מישהו שיקשיב, יבין, ויבנה את מה שצריך –</p>
        <p className="text-lg font-bold">אני כאן.</p>
      </section>
    </article> */}
      <main
        className={varela.className}
        style={{
          position: "relative",
          top: "0",
          minHeight: "100svh",
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
          <div style={{ height: "fit-content" }}>
            <header
              style={{
                padding: "2rem",
                fontSize: "1.5rem",
                backgroundColor: "transparent",
              }}
            >
              מיקסום הפוטנציאל של האתר שלכם יכול להתבצע במגוון דרכים
            </header>
            <ul
              style={{
                width: "80%",
                margin: "0 auto",
                gap: "1rem",
                listStyleType: "none",
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}
              className="services"
            >
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
                <span>שיפור חווית משתמש</span>
                {/* <Customer_ux /> */}
                <Image
                  src={"/customer-ux.svg"}
                  alt={"customer-ux"}
                  width={100}
                  height={100}
                />
              </li>
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
                <span>תיקון באגים</span>
                {/* <Customer_ux /> */}
                <Image
                  src={"/customer-ux.svg"}
                  alt={"customer-ux"}
                  width={100}
                  height={100}
                />
              </li>
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
                <span>קידום אורגני</span>
                <Image
                  src={"/customer-ux.svg"}
                  alt={"customer-ux"}
                  width={100}
                  height={100}
                />
              </li>
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
                <span>שיפור נגישות</span>
                {/* <Customer_ux /> */}
                <Image
                  src={"/customer-ux.svg"}
                  alt={"customer-ux"}
                  width={100}
                  height={100}
                />
              </li>
            </ul>
          </div>
        </div>
        


      </main>

      <FormContainer />
      {/* <Form /> */}

    </>
  );
}
