import type { APIRoute } from "astro";
import { Telegraf } from "telegraf";
import { Ratelimit } from "@upstash/ratelimit";
import { createClient } from "@vercel/kv";

const kv = createClient({
  url: import.meta.env.KV_REST_API_URL ?? "",
  token: import.meta.env.KV_REST_API_TOKEN ?? "",
});

const ratelimit = new Ratelimit({
  redis: kv,
  limiter: Ratelimit.slidingWindow(1, "10s"),
});
export const prerender = false;

export const post: APIRoute = async ({ request }) => {
  const bot = new Telegraf(import.meta.env.TELEGRAM_BOT_TOKEN ?? "");
  // parse form data
  const body = await request.formData();
  const email = body.getAll("email")[0].toString();
  const message = body.getAll("message")[0].toString();

  // rate limit requests to 1 per 10 seconds
  // get ip from request headers
  const ip = request.headers.get("CF-Connecting-IP") ?? request.headers.get("x-real-ip") ?? "127.0.0.1";

  const { reset, success } = await ratelimit.limit(ip);

  // validate email and message
  if (!email || !message) {
    return {
      status: 400,
      body: JSON.stringify({
        message: "Email and message are required",
      }),
    };
  } else if (!email.includes("@")) {
    return {
      status: 400,
      body: JSON.stringify({
        message: "Invalid email",
      }),
    };
  } else if (message.length < 1 || message.length > 2000) {
    return {
      status: 400,
      body: JSON.stringify({
        message: "Message must be less than 2000 characters",
      }),
    };
  }

  // if rate limit is exceeded, return error
  if (!success) {
    return {
      status: 429,
      body: JSON.stringify({
        message: `Rate limit exceeded. Try again in ${Math.round((reset - Date.now()) / 1000)} seconds`,
      }),
    };
  }

  return bot.telegram
    .sendMessage(import.meta.env.TELEGRAM_CHAT_ID ?? "", `New message from ${email}:\n${message}`)
    .then(() => {
      return {
        body: JSON.stringify({
          message: "Message sent",
        }),
      };
    })
    .catch((error) => {
      return {
        status: 500,
        body: JSON.stringify({
          message: error.message,
        }),
      };
    });
};
