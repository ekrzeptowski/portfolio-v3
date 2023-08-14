import { Trans, useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { config } from "@/config";
import i18next from "i18next";

function getHoursAtLocation(timezone: string) {
  return parseInt(
    new Date().toLocaleTimeString([], {
      timeZone: timezone,
      hour12: false,
      hour: "2-digit",
    }),
    10
  );
}

export function CurrentTime() {
  const { t } = useTranslation("translation");
  const [time, setTime] = useState(getCurrentTime());

  function getCurrentTime() {
    return new Date().toLocaleTimeString(i18next.language, {
      timeZone: config.timezone,
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  useEffect(() => {
    const interval = setInterval(() => setTime(getCurrentTime()), 1000 * 60);
    return () => clearInterval(interval);
  });

  return (
    <>
      <p>
        <Trans i18nKey="sections.contact.current_time">{{ time }}</Trans>
      </p>
      <p>{getHoursAtLocation(config.timezone) < 8 && t("sections.contact.im_asleep")}</p>
    </>
  );
}
