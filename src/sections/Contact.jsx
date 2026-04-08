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
      <label className="text-sm font-semibold text-zinc-200">{label}</label>
      <div className="mt-2">{children}</div>
      {error ? <p className="mt-1 text-xs font-medium text-red-300">{error}</p> : null}
    </div>
  );
}

export function Contact() {
  const [values, setValues] = React.useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = React.useState({});
  const [status, setStatus] = React.useState("idle"); // idle | sending | sent
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
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: values.name.trim(),
          from_email: values.email.trim(),
          reply_to: values.email.trim(),
          message: values.message.trim(),
          to_name: "Mohammed Raza",
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus("sent");
      setValues({ name: "", email: "", message: "" });
      window.setTimeout(() => setStatus("idle"), 2500);
    } catch {
      setStatus("idle");
      setSubmitError("Message failed to send. Please try again.");
    }
  }

  return (
    <section id="contact" className="container-max py-16 sm:py-20">
      <SectionHeader
        eyebrow="Contact"
        title="Let’s build something solid"
        description="Message me directly from this form. It is connected using EmailJS with validation and a loading state."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-blue-500/15 text-blue-200 ring-1 ring-blue-500/30">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-zinc-100">Fast response</p>
                <p className="text-xs text-zinc-400">Usually within 24 hours</p>
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-white/10 bg-zinc-950/40 p-4">
              <p className="text-sm text-zinc-200">
                Prefer a direct message? .
              </p>
              <p className="mt-2 text-sm font-semibold text-blue-300">mrmraza.710@gmail.com</p>
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
                  className="w-full rounded-xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm text-zinc-100 outline-none ring-blue-400/50 placeholder:text-zinc-500 focus:ring-2"
                  placeholder="Your name"
                  disabled={disabled}
                />
              </Field>

              <Field label="Email" error={errors.email}>
                <input
                  value={values.email}
                  onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
                  className="w-full rounded-xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm text-zinc-100 outline-none ring-blue-400/50 placeholder:text-zinc-500 focus:ring-2"
                  placeholder="you@example.com"
                  disabled={disabled}
                />
              </Field>

              <Field label="Message" error={errors.message}>
                <textarea
                  value={values.message}
                  onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
                  className="min-h-30 w-full resize-none rounded-xl border border-white/10 bg-zinc-950/40 px-4 py-3 text-sm text-zinc-100 outline-none ring-blue-400/50 placeholder:text-zinc-500 focus:ring-2"
                  placeholder="Tell me what you’re building…"
                  disabled={disabled}
                />
              </Field>
            </div>

            <div className="mt-5 flex items-center justify-between gap-4">
              <p className="text-xs text-zinc-400">
                By sending, you agree to be contacted back.
              </p>
              <button type="submit" className="btn-primary" disabled={disabled}>
                {status === "sending" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending…
                  </>
                ) : status === "sent" ? (
                  "Sent!"
                ) : (
                  "Send Message"
                )}
              </button>
            </div>
            {submitError ? <p className="mt-3 text-xs font-medium text-red-300">{submitError}</p> : null}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

