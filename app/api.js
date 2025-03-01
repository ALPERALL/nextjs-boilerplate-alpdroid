export async function sendMessage(message) {
  try {
    const response = await fetch("https://alperall-alpdroid.hf.space/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message })
    });

    const data = await response.json();
    return data.response; // API'den dönen cevabı al
  } catch (error) {
    console.error("API Hatası:", error);
    return "Bir hata oluştu. Lütfen tekrar deneyin.";
  }
}
