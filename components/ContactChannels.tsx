import { phoneDigits, siteConfig } from "@/lib/site";

export function ContactChannels({
  tone = "light",
}: {
  tone?: "light" | "dark";
}) {
  const phone = siteConfig.supportPhone;
  const whatsapp = siteConfig.supportWhatsApp;
  const email = siteConfig.leadEmail;
  const text = tone === "dark" ? "text-white/80" : "text-[var(--color-muted-foreground)]";
  const link =
    tone === "dark"
      ? "font-semibold text-white underline underline-offset-2"
      : "font-semibold text-[var(--color-accent)] underline underline-offset-2";

  return (
    <ul className={`space-y-2 text-sm ${text}`}>
      <li>
        Email:{" "}
        <a className={`${link} cursor-pointer`} href={`mailto:${email}`}>
          {email}
        </a>
      </li>
      <li>
        Phone:{" "}
        <a className={`${link} cursor-pointer`} href={`tel:+${phoneDigits(phone)}`}>
          {phone}
        </a>
      </li>
      <li>
        WhatsApp:{" "}
        <a
          className={`${link} cursor-pointer`}
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
