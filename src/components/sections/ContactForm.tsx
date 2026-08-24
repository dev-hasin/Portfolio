import { useState } from "react";
import { AlertCircle, CheckCircle, Send } from "lucide-react";
import { useSiteContent } from "../../context/ContentContext";
import { cn } from "../../utils/classes";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialForm: FormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const subjectOptions = [
  { value: "freelance", label: "Freelance Project" },
  { value: "fulltime", label: "Full-Time Opportunity" },
  { value: "collaboration", label: "Collaboration" },
  { value: "other", label: "Other" },
];

export function ContactForm() {
  const { profile } = useSiteContent();
  const contactEndpoint =
    import.meta.env.VITE_CONTACT_ENDPOINT?.trim() ||
    `https://formsubmit.co/ajax/${profile.email}`;
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitError, setSubmitError] = useState("");
  const [website, setWebsite] = useState("");

  const validate = () => {
    const nextErrors: Partial<FormData> = {};

    if (!form.name.trim()) nextErrors.name = "Name is required";
    if (!form.email.trim()) {
      nextErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Please enter a valid email";
    }
    if (!form.subject.trim()) nextErrors.subject = "Subject is required";
    if (!form.message.trim()) nextErrors.message = "Message is required";

    return nextErrors;
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((current) => ({ ...current, [name]: undefined }));
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setSubmitError("");
    setLoading(true);

    try {
      // This honeypot field is hidden from people but commonly filled by bots.
      if (website) {
        setSubmitted(true);
        return;
      }

      const selectedSubject =
        subjectOptions.find((option) => option.value === form.subject)?.label ?? form.subject;
      const response = await fetch(contactEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          subject: selectedSubject,
          message: form.message.trim(),
          _subject: `Portfolio inquiry: ${selectedSubject}`,
          _template: "table",
          _captcha: "false",
          _honey: website,
        }),
      });

      if (!response.ok) {
        throw new Error("The contact service rejected the request.");
      }

      setSubmitted(true);
      setForm(initialForm);
    } catch {
      setSubmitError(
        `Your message could not be sent. Please try again or email me directly at ${profile.email}.`,
      );
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setForm(initialForm);
    setErrors({});
    setSubmitError("");
    setWebsite("");
  };

  return (
    <div className="min-w-0 lg:col-span-3">
      <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5 sm:rounded-3xl sm:p-8">
        {submitted ? (
          <div className="flex flex-col items-center justify-center py-10 text-center sm:py-16">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-emerald-500/20 bg-emerald-500/10">
              <CheckCircle size={30} className="text-emerald-300" />
            </div>
            <h2 className="mb-3 text-xl text-white">Message Sent!</h2>
            <p className="mb-6 max-w-xs leading-relaxed text-gray-400">
              Thank you for reaching out. I'll get back to you as soon as possible.
            </p>
            <button
              type="button"
              onClick={resetForm}
              className="rounded-xl bg-teal-600 px-6 py-2.5 text-sm text-white transition-colors hover:bg-teal-500"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            <div className="absolute -left-[10000px]" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input
                id="website"
                name="website"
                type="text"
                value={website}
                onChange={(event) => setWebsite(event.target.value)}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>
            <div className="grid min-w-0 gap-5 sm:grid-cols-2">
              <FieldErrorInput
                label="Full Name"
                name="name"
                value={form.name}
                placeholder="Hasin Falak Kiyani"
                error={errors.name}
                onChange={handleChange}
              />
              <FieldErrorInput
                label="Email Address"
                name="email"
                type="email"
                value={form.email}
                placeholder="hasinkiyani1@gmail.com"
                error={errors.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <FormLabel htmlFor="subject">Subject</FormLabel>
              <select
                id="subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className={cn(
                  "w-full min-w-0 appearance-none rounded-xl border bg-white/5 px-3 py-3 text-sm transition-colors focus:border-teal-500/50 focus:outline-none sm:px-4",
                  errors.subject ? "border-red-500/50" : "border-white/10",
                  form.subject ? "text-white" : "text-gray-600",
                )}
                aria-invalid={Boolean(errors.subject)}
                aria-describedby={errors.subject ? "subject-error" : undefined}
              >
                <option value="" className="bg-[#121c2e]">Select a subject...</option>
                {subjectOptions.map((option) => (
                  <option key={option.value} value={option.value} className="bg-[#121c2e]">
                    {option.label}
                  </option>
                ))}
              </select>
              <FieldError id="subject-error" message={errors.subject} />
            </div>

            <div>
              <FormLabel htmlFor="message">Message</FormLabel>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={6}
                maxLength={2000}
                placeholder="Tell me about your project or idea..."
                className={cn(
                  "w-full min-w-0 resize-y rounded-xl border bg-white/5 px-3 py-3 text-sm text-white placeholder-gray-600 transition-colors focus:border-teal-500/50 focus:outline-none sm:px-4",
                  errors.message ? "border-red-500/50" : "border-white/10",
                )}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              <div className="mt-1 flex items-center justify-between gap-4">
                <FieldError id="message-error" message={errors.message} />
                <p className="ml-auto text-xs text-gray-600">{form.message.length} characters</p>
              </div>
            </div>

            {submitError && (
              <div
                role="alert"
                className="flex items-start gap-2 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm leading-relaxed text-red-300"
              >
                <AlertCircle size={17} className="mt-0.5 shrink-0" aria-hidden="true" />
                <span>{submitError}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-teal-600 to-sky-500 px-4 py-3.5 text-sm text-white shadow-lg shadow-teal-500/20 transition-all hover:-translate-y-0.5 hover:from-teal-500 hover:to-sky-500 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
            >
              {loading ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={15} />
                  Send Message
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

type FieldErrorInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
  name: keyof FormData;
};

function FieldErrorInput({ label, error, name, ...props }: FieldErrorInputProps) {
  return (
    <div>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <input
        id={name}
        name={name}
        className={cn(
          "w-full min-w-0 rounded-xl border bg-white/5 px-3 py-3 text-sm text-white placeholder-gray-600 transition-colors focus:border-teal-500/50 focus:outline-none sm:px-4",
          error ? "border-red-500/50" : "border-white/10",
        )}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        {...props}
      />
      <FieldError id={`${name}-error`} message={error} />
    </div>
  );
}

function FormLabel({ children, htmlFor }: { children: React.ReactNode; htmlFor: string }) {
  return (
    <label htmlFor={htmlFor} className="mb-2 block text-xs text-gray-400">
      {children} <span className="text-teal-300">*</span>
    </label>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-1 text-xs text-red-400">
      {message}
    </p>
  );
}
