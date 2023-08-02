import type { APIRoute } from 'astro';
import { Telegraf } from 'telegraf';

export const post: APIRoute = async ({ request }) => {
  const bot = new Telegraf(import.meta.env.TELEGRAM_BOT_TOKEN ?? '');
  // parse form data
  const body = await request.formData();
  const email = body.getAll('email')[0].toString();
  const message = body.getAll('message')[0].toString();

  console.log('email', email);
  console.log('message', message);

  // validate email and message
  if (!email || !message) {
    return {
      status: 400,
      body: JSON.stringify({
        message: 'Email and message are required',
      }),
    };
  } else if (!email.includes('@')) {
    return {
      status: 400,
      body: JSON.stringify({
        message: 'Invalid email',
      }),
    };
  } else if (message.length < 1 || message.length > 2000) {
    return {
      status: 400,
      body: JSON.stringify({
        message: 'Message must be less than 2000 characters',
      }),
    };
  }

  return bot.telegram
    .sendMessage(import.meta.env.TELEGRAM_CHAT_ID ?? '', `New message from ${email}:\n${message}`)
    .then(() => {
      return {
        body: JSON.stringify({
          message: 'Message sent',
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
