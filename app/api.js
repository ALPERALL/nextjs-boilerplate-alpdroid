import { Client } from "@gradio/client";

const client = await Client.connect("https://alperall-alpdroid.hf.space");

export async function sendMessage(message) {
  try {
    const result = await client.predict("/chat", { message });
    console.log("API Yanıtı:", result.data); // Yanıtı konsola yazdır
    return result.data; // API'den dönen cevabı al
  } catch (error) {
    console.error("API Hatası:", error);
    return "Bir hata oluştu. Lütfen tekrar deneyin.";
  }
}
