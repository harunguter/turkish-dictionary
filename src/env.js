export default {
  appName: "Güncel Türkçe Sözlük",
  mainColor: "green",
  api: {
    baseUrl: "https://sozluk.gov.tr/",
    content: "icerik",
    search: word => "/gts?ara=" + word,
    write: word => "yazim?ara=" + word
  }
};