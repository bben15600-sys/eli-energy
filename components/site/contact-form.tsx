"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { site } from "@/components/site/site-config";

function Field({
  label,
  htmlFor,
  hint,
  error,
  children,
  className = "",
}: {
  label: string;
  htmlFor: string;
  hint?: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`space-y-1.5 ${className}`}>
      <label
        htmlFor={htmlFor}
        className="block text-sm font-medium text-foreground"
      >
        {label}
      </label>
      {children}
      {error ? (
        <p className="text-xs text-destructive">{error}</p>
      ) : hint ? (
        <p className="text-xs text-muted-foreground">{hint}</p>
      ) : null}
    </div>
  );
}

const PHONE_RE = /^[0-9+()\-\s]{7,}$/;

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{
    name?: string;
    phone?: string;
    message?: string;
  }>({});

  function validate() {
    const next: typeof errors = {};
    if (name.trim().length < 2) next.name = "נא להזין שם מלא";
    if (!PHONE_RE.test(phone.trim())) next.phone = "מספר טלפון לא תקין";
    if (message.trim().length < 5) next.message = "נא לפרט יותר על הפנייה";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validate()) return;

    const lines = [
      `שלום ${site.brand}, פנייה חדשה מהאתר:`,
      `שם: ${name}`,
      `טלפון: ${phone}`,
      email.trim() ? `אימייל: ${email}` : "",
      "",
      "פרטי הפנייה:",
      message,
    ].filter(Boolean);

    const text = encodeURIComponent(lines.join("\n"));
    const url = `https://wa.me/${site.whatsapp}?text=${text}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <Field label="שם מלא" htmlFor="name" error={errors.name}>
        <Input
          id="name"
          name="name"
          placeholder="ישראל ישראלי"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="h-11"
        />
      </Field>
      <Field label="טלפון" htmlFor="phone" error={errors.phone}>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="050-0000000"
          inputMode="tel"
          autoComplete="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className="h-11"
        />
      </Field>
      <Field
        label="אימייל (לא חובה)"
        htmlFor="email"
        className="sm:col-span-2"
      >
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="name@example.com"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-11"
        />
      </Field>
      <Field
        label="פרטי הפנייה"
        htmlFor="message"
        hint="נשלח ישירות בוואטסאפ — תוכלו לערוך לפני שליחה"
        error={errors.message}
        className="sm:col-span-2"
      >
        <Textarea
          id="message"
          name="message"
          placeholder="תארו בקצרה את העבודה / התקלה"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </Field>
      <div className="sm:col-span-2">
        <Button type="submit" className="h-12 w-full gap-2 rounded-xl text-base">
          <MessageCircle /> שליחה בוואטסאפ
        </Button>
      </div>
    </form>
  );
}
