import React from "react";
import emailjs from "@emailjs/browser";
import { Loader2, Mail } from "lucide-react";
import { Reveal } from "../components/Reveal.jsx";
import { SectionHeader } from "../components/SectionHeader.jsx";

const EMAILJS_SERVICE_ID = "service_qpdy26r";
const EMAILJS_TEMPLATE_ID = "template_vyrxljx";
const EMAILJS_PUBLIC_KEY = "tWuDov1oOAiDgyqsn";

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) errors.email = "Please enter your email.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = "Please enter a valid email.";
  if (!values.message.trim()) errors.message = "Please enter a message.";
  return errors;
}

function Field({ label, error, children }) {
  return (
    <div>
      <label className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 transition-colors">
        {label}
      </label>
      <div className="mt-2">{children}</div>
      {error ? <p className="mt-1 text-xs font-medium text-red-600 dark:text-red-400">{error}</p> : null}
    </div>
  );
}

export function Contact() {
  const [values, setValues] = React.useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = React.useState({});
  const [status, setStatus] = React.useState("idle");
  const [submitError, setSubmitError] = React.useState("");

  const disabled = status === "sending";

  async function onSubmit(e) {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setStatus("sending");
    setSubmitError("");

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        from_name: values.name.trim(),
        from_email: values.email.trim(),
        reply_to: values.email.trim(),
        message: values.message.trim(),
        to_name: "Mohammed Raza",
      }, EMAILJS_PUBLIC_KEY);

      setStatus("sent");
      setValues({ name: "", email: "", message: "" });
      window.setTimeout(() => setStatus("idle"), 2500);
    } catch {
      setStatus("idle");
      setSubmitError("Message failed to send. Please try again.");
    }
  }

  return (
    <section id="contact" className="container-max py-16 sm:py-20 transition-colors duration-300">
      <SectionHeader
        eyebrow="Contact"
        title="Let’s build something solid"
        description="Message me directly from this form. It is connected using EmailJS with validation and a loading state."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="glass h-full rounded-2xl p-6">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-blue-500/15 text-blue-600 dark:text-blue-300 ring-1 ring-blue-500/30 transition-colors">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Fast response</p>
                <p className="text-xs text-zinc-600 dark:text-zinc-400">Usually within 24 hours</p>
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-black/5 bg-black/5 dark:border-white/10 dark:bg-zinc-900/50 p-4 transition-colors">
              <p className="text-sm text-zinc-700 dark:text-zinc-300">Prefer a direct message?</p>
              <p className="mt-2 text-sm font-semibold text-blue-600 dark:text-blue-400">mrmraza.710@gmail.com</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <form onSubmit={onSubmit} className="glass rounded-2xl p-6">
            <div className="grid gap-4">
              <Field label="Name" error={errors.name}>
                <input
                  value={values.name}
                  onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
                  className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none focus:ring-2 focus:ring-blue-400 dark:border-white/10 dark:bg-zinc-900 dark:text-zinc-100"
                  placeholder="Your name"
                  disabled={disabled}
                />
              </Field>

              <Field label="Email" error={errors.email}>
                <input
                  value={values.email}
                  onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
                  className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none focus:ring-2 focus:ring-blue-400 dark:border-white/10 dark:bg-zinc-900 dark:text-zinc-100"
                  placeholder="you@example.com"
                  disabled={disabled}
                />
              </Field>

              <Field label="Message" error={errors.message}>
                <textarea
                  value={values.message}
                  onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
                  className="min-h-32 w-full resize-none rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none focus:ring-2 focus:ring-blue-400 dark:border-white/10 dark:bg-zinc-900 dark:text-zinc-100"
                  placeholder="Tell me what you’re building…"
                  disabled={disabled}
                />
              </Field>
            </div>

            {/* Bottom Section - Fixed for Mobile */}
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-zinc-600 dark:text-zinc-400">
                By sending, you agree to be contacted back.
              </p>

              <button
                type="submit"
                className="btn-primary w-full sm:w-auto px-8 py-3"
                disabled={disabled}
              >
                {status === "sending" ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : status === "sent" ? (
                  "Sent!"
                ) : (
                  "Send Message"
                )}
              </button>
            </div>

            {submitError && (
              <p className="mt-3 text-xs font-medium text-red-600 dark:text-red-400 text-center sm:text-left">
                {submitError}
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}