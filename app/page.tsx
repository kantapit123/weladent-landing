"use client";

import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import { i18n, Lang } from "@/lib/i18n";

export default function Home() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const langParam = searchParams.get("lang") as Lang | null;
  const lang: Lang = langParam === "en" ? "en" : "th";
  const t = i18n[lang];

  const switchLang = (newLang: Lang) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("lang", newLang);
    router.push(`?${params.toString()}`);
  };

  return (
    <main>
      <LanguageSwitcher currentLang={lang} onSwitch={switchLang} />
      <Hero t={t.hero} />
      <Intro t={t.intro} />
      <Services t={t.services} />
      <Dentists t={t.dentists} />
      <FAQs t={t.faq} />
      <FinalCTA t={t.finalCta} />
    </main>
  );
}

/* ---------------- LANGUAGE SWITCHER ---------------- */
function LanguageSwitcher({
  currentLang,
  onSwitch,
}: {
  currentLang: Lang;
  onSwitch: (lang: Lang) => void;
}) {
  return (
    <div className="fixed top-4 right-4 z-50 flex gap-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-1">
      <button
        onClick={() => onSwitch("th")}
        className={`px-4 py-2 rounded-md font-medium transition ${
          currentLang === "th"
            ? "bg-teal-600 text-white"
            : "text-slate-700 hover:bg-slate-100"
        }`}
      >
        ไทย
      </button>
      <button
        onClick={() => onSwitch("en")}
        className={`px-4 py-2 rounded-md font-medium transition ${
          currentLang === "en"
            ? "bg-teal-600 text-white"
            : "text-slate-700 hover:bg-slate-100"
        }`}
      >
        EN
      </button>
    </div>
  );
}

/* ---------------- HERO ---------------- */
function Hero({ t }: { t: any }) {
  return (
    <section className="relative h-[92vh] overflow-hidden">
      <Image
        src="/images/placeholder4.jpg"
        alt="Wela Dental Clinic"
        fill
        priority
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-44 text-white">
        <h1 className="text-5xl md:text-6xl font-semibold leading-tight tracking-tight">
          {t.title}
        </h1>

        <p className="mt-6 max-w-xl text-lg md:text-xl text-white/90 leading-relaxed">
          {t.desc}
        </p>

        <button className="mt-10 bg-teal-600 hover:bg-teal-700 transition px-8 py-4 rounded-xl font-medium">
          {t.cta}
        </button>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-3xl font-bold">{value}</p>
      <p className="text-sm opacity-90">{label}</p>
    </div>
  );
}

/* ---------------- INTRO ---------------- */

function Intro({ t }: { t: any }) {
  return (
    <section className="bg-teal-800 text-white py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">
        <IntroCard title={t.title1} desc={t.desc1} />
        <IntroCard title={t.title2} desc={t.desc2} />
        <IntroCard title={t.title3} desc={t.desc3} />
      </div>
    </section>
  );
}

function IntroCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-4 text-sm opacity-90">{desc}</p>
    </div>
  );
}

/* ---------------- SERVICES ---------------- */

function Services({ t }: { t: any }) {
  return (
    <section className="py-24 max-w-6xl mx-auto px-6 space-y-28">
      <h2 className="text-3xl md:text-4xl font-semibold text-center tracking-tight">
        {t.title}
      </h2>

      <ServiceItem title={t.wisdom} desc={t.wisdomDesc} link={t.wisdomLink} />
      <ServiceItem
        title={t.implant}
        desc={t.implantDesc}
        link={t.implantLink}
        reverse
      />
      <ServiceItem title={t.bone} desc={t.boneDesc} link={t.boneLink} />
      <ServiceItem
        title={t.cancer}
        desc={t.cancerDesc}
        link={t.cancerLink}
        reverse
      />
    </section>
  );
}

function ServiceItem({
  title,
  desc,
  link,
  reverse,
}: {
  title: string;
  desc: string;
  link: string;
  reverse?: boolean;
}) {
  return (
    <div
      className={`grid md:grid-cols-2 gap-16 items-center ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <div>
        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
          {title}
        </h3>

        <p className="mt-6 text-slate-600 dark:text-slate-300 leading-relaxed">
          {desc}
        </p>

        <a className="inline-block mt-6 text-teal-700 dark:text-teal-400 font-medium">
          {link}
        </a>
      </div>

      <div className="relative h-80 rounded-2xl overflow-hidden">
        <Image
          src="/images/placeholder3.jpg"
          alt={title}
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}

/* ---------------- DENTISTS ---------------- */

function Dentists({ t }: { t: any }) {
  return (
    <section className="bg-teal-800 py-24 text-white">
      <h2 className="text-3xl font-semibold text-center mb-12">{t.title}</h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 px-6">
        <DoctorCard name={t.name} specialty={t.specialty} />
        <DoctorCard name={t.name} specialty={t.specialty} />
        <DoctorCard name={t.name} specialty={t.specialty} />
        <DoctorCard name={t.name} specialty={t.specialty} />
      </div>
    </section>
  );
}

function DoctorCard({ name, specialty }: { name: string; specialty: string }) {
  return (
    <div className="bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
      <div className="relative h-60">
        <Image
          src="/images/doctor.jpg"
          alt="Doctor"
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6">
        <h4 className="font-semibold text-lg">{name}</h4>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          {specialty}
        </p>
      </div>
    </div>
  );
}

/* ---------------- TESTIMONIALS ---------------- */

function Testimonials() {
  return (
    <section className="py-24 max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-semibold text-center mb-12">
        Client Testimonials
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        <Testimonial />
        <Testimonial />
        <Testimonial />
      </div>
    </section>
  );
}

function Testimonial() {
  return (
    <div className="rounded-xl border p-6">
      <p className="text-slate-600 italic">
        “The dental team was professional, gentle, and very caring. Highly
        recommended!”
      </p>
      <p className="mt-4 font-semibold">— Patient Name</p>
    </div>
  );
}

/* ---------------- FAQ ---------------- */

function FAQs({ t }: { t: any }) {
  return (
    <section className="py-24 max-w-4xl mx-auto px-6">
      <h2 className="text-3xl font-semibold text-center mb-12">{t.title}</h2>

      <FaqItem question={t.q1} />
      <FaqItem question={t.q2} />
      <FaqItem question={t.q3} />
      <FaqItem question={t.q4} />
    </section>
  );
}

function FaqItem({ question }: { question: string }) {
  return (
    <div className="border-b py-4">
      <p className="font-medium">{question}</p>
    </div>
  );
}

/* ---------------- FINAL CTA ---------------- */

function FinalCTA({ t }: { t: any }) {
  return (
    <section className="bg-teal-800 py-24 text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
        <div>
          <h2 className="text-4xl font-bold leading-tight">{t.title}</h2>
          <button className="mt-6 bg-white text-teal-800 px-6 py-3 rounded-lg font-medium">
            {t.button}
          </button>
        </div>

        <div className="relative h-64 rounded-xl overflow-hidden">
          <Image
            src="/images/placeholder2.jpg"
            alt="Final CTA"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
