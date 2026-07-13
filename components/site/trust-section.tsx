import { ShieldCheck, Award, CheckCircle, Zap } from "lucide-react";

export function TrustSection() {
  return (
    <section className="border-b border-border bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-12 gap-16">
          {/* Headline */}
          <div className="col-span-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              בעל סמכות מוכחת
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              שנים של ניסיון, עמידה בתקנים בינלאומיים, והשלמה של מאות פרוייקטים במפעלים וחדרים נקיים.
            </p>
          </div>

          {/* Trust indicators grid */}
          <div className="col-span-12 grid md:grid-cols-2 gap-8">
            {/* Certification */}
            <div className="border border-border rounded-lg p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    רישיון משרד התשתיות
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    מוסמך להתקנה ותחזוקה של מערכות חשמל בתעשייה בתאום מלא עם דרישות הרגולציה.
                  </p>
                </div>
              </div>
            </div>

            {/* Compliance */}
            <div className="border border-border rounded-lg p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    תאימות GMP ו-ISO 14644
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    בנייה וביצוע מערכות חשמל בחדרים נקיים בהתאם לסטנדרטים בינלאומיים גבוהים ביותר.
                  </p>
                </div>
              </div>
            </div>

            {/* Track record */}
            <div className="border border-border rounded-lg p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    250+ פרוייקטים
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    מפעלי פארמה, חברות ביוטכנולוגיה, ומתקני ייצור בכל הארץ בהוצאה לפועל מושלמת.
                  </p>
                </div>
              </div>
            </div>

            {/* Response */}
            <div className="border border-border rounded-lg p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    זמינות מידית
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    שירות חירום 24/7 ומענה למתקנים ביולי ותקלות תוך זמן קצר ביותר.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
