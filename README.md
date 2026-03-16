# apexpulsefxbo
diff --git a/README.md b/README.md
index d21eaa83a8a04024cc5f21e6d1e8cb5e2cba1624..bc625e212d10e415100c7df44641b50acb5e495b 100644
--- a/README.md
+++ b/README.md
@@ -1 +1,78 @@
-# apexpulsefxbot
\ No newline at end of file
+# ApexPulseFX Bot
+
+Telegram bot mini app that posts crypto prices (BTC, ETH, BNB, USDT) to a Telegram channel on a schedule.
+
+## Features
+
+- Sends crypto market updates using CoinGecko price API.
+- Posts to a Telegram channel using a bot token.
+- Includes an Express health endpoint (`/`) so hosting providers can keep it alive.
+- Auto-posts at startup and on a recurring interval.
+
+## Local setup
+
+1. Install dependencies:
+
+```bash
+npm install
+```
+
+2. Configure environment variables:
+
+```bash
+cp .env.example .env
+```
+
+Set:
+
+- `BOT_TOKEN` (required) – your Telegram bot token.
+- `CHANNEL` (optional, default `@ApexPulseFX`) – channel username or chat ID.
+- `POST_INTERVAL_MINUTES` (optional, default `60`).
+- `PORT` (optional, default `3000`).
+
+3. Run the bot:
+
+```bash
+npm start
+```
+
+## Deploy and host the mini app
+
+### Option A: Render (recommended)
+
+1. Push this repo to GitHub.
+2. In Render, create a **Web Service** from the repo.
+3. Use:
+   - **Build command:** `npm install`
+   - **Start command:** `npm start`
+4. Add environment variables in Render:
+   - `BOT_TOKEN`
+   - `CHANNEL`
+   - `POST_INTERVAL_MINUTES`
+5. Deploy.
+
+Render provides continuous hosting and hits the health server on `PORT`.
+
+### Option B: Railway
+
+1. Create a new Railway project from this repo.
+2. Set environment variables (`BOT_TOKEN`, `CHANNEL`, `POST_INTERVAL_MINUTES`).
+3. Deploy with default `npm start`.
+
+### Option C: Fly.io / VPS / Docker host
+
+Use `npm install && npm start` and expose port `3000` (or `$PORT`).
+
+## Notes
+
+- Ensure your bot is an admin in the target Telegram channel.
+- If using a private channel, use the numeric chat ID instead of `@channel` handle.
+- CoinGecko has API rate limits; avoid overly aggressive intervals.
+
+## Health check
+
+```bash
+curl http://localhost:3000/
+```
+
+Returns JSON service status.
