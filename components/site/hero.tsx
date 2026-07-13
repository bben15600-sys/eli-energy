import { Phone, MessageCircle, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/components/site/site-config";

export function Hero() {
  return (
    <section id="top" className="bg-background">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
          {/* Left Block - Main Content */}
          <div className="lg:col-span-2 border-b border-r-0 lg:border-r border-border p-12 md:p-16">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-foreground mb-8">
                חשמל
                <br />
                לבית ולעסק
              </h1>

              <div className="h-1 w-20 bg-primary mb-8"></div>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12 font-medium">
                חשמלאי מוסמך עם 20 שנות ניסיון. עבודה מהירה, מקצועית ואמינה.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  render={<a href={`tel:${site.phone}`} />}
                  className="h-14 px-8 text-base font-bold bg-primary text-primary-foreground hover:bg-primary/90 flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  התקשרו
                </Button>
                <Button
                  variant="outline"
                  render={
                    <a
                      href={`https://wa.me/${site.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  }
                  className="h-14 px-8 text-base font-bold border-2 border-primary text-primary hover:bg-primary/5 flex items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  וואטסאפ
                </Button>
              </div>
            </div>
          </div>

          {/* Right Blocks - Stats */}
          <div className="border-b border-border p-12 md:p-16 flex flex-col justify-center">
            <div className="flex items-start gap-4">
              <Zap className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <div className="text-5xl font-bold text-primary mb-2">
                  {site.yearsExperience}
                </div>
                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                  שנות
                  <br />
                  ניסיון
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
