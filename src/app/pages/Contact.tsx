import { ContactForm } from "../../components/sections/ContactForm";
import { ContactInfoPanel } from "../../components/sections/ContactInfoPanel";
import { SectionHeading } from "../../components/common/SectionHeading";

export function Contact() {
  return (
    <div className="min-h-screen px-6 pb-24 pt-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's Work Together"
          description="Have a project in mind or want to discuss opportunities? I'd love to hear from you. Drop me a message."
          align="center"
          className="mb-16"
        />

        <div className="grid gap-10 lg:grid-cols-5">
          <ContactInfoPanel />
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
