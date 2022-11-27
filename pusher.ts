import Pusher from "pusher";
import ClientPusher from "pusher-js";

export const serverPusher = new Pusher({
    appId: process.env.PUSHER_APP_ID as string,
    key: process.env.PUSHER_KEY as string,
    secret: process.env.PUSHER_SECRET as string,
    cluster: "us2",
    useTLS: true,
})

export const clientPusher = new ClientPusher(
    process.env.PUSHER_ID as string, {
        cluster: 'us2',
        forceTLS: true,
      });
