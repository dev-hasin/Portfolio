import { ContactForm } from "../../components/sections/ContactForm";
import { ContactInfoPanel } from "../../components/sections/ContactInfoPanel";
import { SectionHeading } from "../../components/common/SectionHeading";

export function Contact() {
  return (
    <div className="min-h-screen px-4 pb-16 pt-24 sm:px-6 sm:pb-24 sm:pt-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's Work Together"
          description="Have a project in mind or want to discuss opportunities? I'd love to hear from you. Drop me a message."
          align="center"
          className="mb-10 sm:mb-16"
        />

        <div className="grid min-w-0 gap-8 lg:grid-cols-5 lg:gap-10">
          <ContactInfoPanel />
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
