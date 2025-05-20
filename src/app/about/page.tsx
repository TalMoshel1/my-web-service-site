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

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "טל מושל - פיתוח עמודי נחיתה - פתרונות שיפור מהירות ותיקון באגים באתרי אינטרנט",
};

export default function AboutPage() {
  return (
    <article className="max-w-prose m-auto space-y-6 p-4">
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
        <p>
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
    </article>
  );
}
