import { services } from "../../data/skills";
import { SectionHeading } from "../common/SectionHeading";

export function ServicesSection() {
  return (
    <section className="border-y border-white/5 bg-white/[0.01] px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Services" title="What I Offer" align="center" className="mb-14" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className={`rounded-2xl border p-6 transition-transform hover:scale-[1.02] ${service.background}`}
            >
              <service.icon size={24} className={`mb-4 ${service.color}`} />
              <h3 className="mb-2 text-sm text-white">{service.title}</h3>
              <p className="text-sm leading-relaxed text-gray-500">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
