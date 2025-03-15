const Cheerio = require("cheerio");

function extractCookie(cookies, cookieName) {
  if (!cookies) return null;

  const cookieArray = cookies.split(/,\s?/);
  for (const cookie of cookieArray) {
    const [name, value] = cookie.split("=");
    if (name.trim() === cookieName) {
      return value.split(";")[0];
    }
  }

  return null;
}

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const response = await fetch("https://www.logammulia.com/id/sell/gold", {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, seperti Gecko) Chrome/110.0.0.0 Safari/537.36",
        Referer: "https://www.google.com/",
        "Accept-Language": "en-US,en;q=0.9",
        Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
      },
    });
    const html = await response.text();

    const cookies = response.headers.get("set-cookie");
    const xsrfToken = extractCookie(cookies, "XSRF-TOKEN");
    const logammuliaSession = extractCookie(cookies, "logammulia_session");

    if (!xsrfToken || !logammuliaSession) {
      throw new Error("Required cookies not found");
    }

    const $ = Cheerio.load(html);
    const scriptContent = $('meta[name="_token"]').attr("content");

    if (!scriptContent) {
      throw new Error("Script content not found");
    }

    const jsonUrl = `https://www.logammulia.com/data-base-price/gold/buy/?_token=${token}`;
    const jsonResponse = await fetch(jsonUrl, {
      headers: {
        Cookie: `XSRF-TOKEN=${xsrfToken}; logammulia_session=${logammuliaSession}`,
        "X-XSRF-TOKEN": xsrfToken,
      },
    });

    const goldData = await jsonResponse.json();
    res.status(200).json(goldData);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Error fetching gold data", error: error.message });
  }
}
