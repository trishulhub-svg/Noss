import { phoneDigits, siteConfig } from "@/lib/site";

export function ContactChannels({
  tone = "light",
}: {
  tone?: "light" | "dark";
}) {
  const phone = siteConfig.supportPhone;
  const whatsapp = siteConfig.supportWhatsApp;
  const email = siteConfig.leadEmail;
  const text = tone === "dark" ? "text-white/85" : "text-[var(--slate)]";
  const link =
    tone === "dark"
      ? "text-white underline"
      : "font-semibold text-[var(--action-blue)] underline";

  return (
    <ul className={`space-y-2 text-sm ${text}`}>
      <li>
        Email:{" "}
        <a className={link} href={`mailto:${email}`}>
          {email}
        </a>
      </li>
      <li>
        Phone:{" "}
        <a className={link} href={`tel:+${phoneDigits(phone)}`}>
          {phone}
        </a>
      </li>
      <li>
        WhatsApp:{" "}
        <a
          className={link}
          href={`https://wa.me/${phoneDigits(whatsapp)}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          {whatsapp}
        </a>
      </li>
    </ul>
  );
}
