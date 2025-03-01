export async function sendMessage(message) {
  try {
    const response = await fetch("https://nextjs-boilerplate-alpdroid.vercel.app/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message })
    });

    if (!response.ok) {
      throw new Error(`HTTP Hatası! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Proxy API Yanıtı:", data);
    return data.response || "API'den yanıt alınamadı.";
  } catch (error) {
    console.error("Proxy API Hatası:", error);
    return `Hata: ${error.message}`;
  }
}
