import { useTranslation } from "react-i18next";
import { FormEvent, useState } from "react";
import { BiPaperPlane } from "react-icons/bi/";

export function ContactForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const { t } = useTranslation("translation");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      email,
      message,
    };

    if (message.length > 2000) {
      setError(t("sections.contact.message_too_long", { messageLimit }));
      return;
    }

    const res = await fetch("/api/message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const resJson = await res.json();

    if (res.status === 200) {
      setSuccess(true);
      setError("");
      setEmail("");
      setMessage("");
      return;
    }

    setError(resJson.message);
  };

  const messageLimit = 2000;

  return (
    <>
      <form onSubmit={handleSubmit} className="w-full max-w-lg">
        <div className="mb-4">
          <div className="mb-2">
            <label htmlFor="email" className="text-sm font-bold uppercase text-gray-800">
              {t("sections.contact.email")}
            </label>
          </div>
          <input
            type="email"
            className="w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-800 shadow transition-shadow focus:outline-none focus:ring focus:ring-blue-500 focus:ring-offset-1"
            required
            id="email"
            aria-describedby="emailHelp"
            placeholder="user@example.com"
            value={email}
            onInput={(e) => setEmail((e.target as HTMLInputElement).value)}
          />
        </div>
        <div className="mb-4">
          <div className="mb-2">
            <label htmlFor="message" className="text-sm font-bold uppercase text-gray-800">
              {t("sections.contact.message")}
            </label>
          </div>
          <textarea
            className="w-full resize-none appearance-none rounded border px-3 py-2 leading-tight text-gray-800 shadow transition-shadow focus:outline-none focus:ring focus:ring-blue-500 focus:ring-offset-1"
            id="message"
            rows={8}
            value={message}
            required
            onInput={(e) => setMessage((e.target as HTMLTextAreaElement).value)}
          ></textarea>
        </div>
        <div className="mb-4 flex items-center justify-between">
          <div className={message.length > messageLimit ? "text-red-500" : ""}>
            {message.length} / {messageLimit}
          </div>
          {success && <div role="status">{t("sections.contact.message_sent")}</div>}
          {error && <div role="alert">{error}</div>}
          <button
            type="submit"
            className="flex items-center rounded bg-blue-500 px-3 py-2 text-white transition-shadow hover:ring"
          >
            <BiPaperPlane className="mr-1" />
            {t("sections.contact.send")}
          </button>
        </div>
      </form>
    </>
  );
}
