export default {
  appName: "Güncel Türkçe Sözlük",
  mainColor: "olive",
  turkishLetters: [ "ç", "ğ", "ı", "ö", "ş", "ü", "â", "î", "û" ],
  api: {
    baseUrl: "https://sozluk.gov.tr/",
    content: "icerik",
    search: word => "/gts?ara=" + word,
    write: word => "yazim?ara=" + word
  }
};