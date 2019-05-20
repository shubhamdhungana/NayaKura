const quotes = [
  {
    name: "Albert Einstein",
    quote:
      "Imagination is powerful than knowlede and that changed my whole life!"
  },

  {
    name: "Steve Jobs",
    quote:
      "Live Free. (Two Words but billions of motivation and message. Think About it)"
  },

  {
    name: "Leo Tolstoy",
    quote: "If you want to be happy, be"
  },

  {
    name: "Steve Jobs",
    quote: "Either you need to do what you love or you have to love what you do"
  },

  {
    name: "Nikola Tesla",
    quote: "Of all things, I love books!"
  },

  {
    name: "Anonymous",
    quote: "Push yourself, because no one else is going to do it for you."
  },

  {
    name: "Anonymous",
    quote:
      "I haven't seen such a wonderful person like you. So don't tease yourself by compairing with others."
  },

  {
    name: "Anonymous",
    quote: "You are the amazing gift that this universe has ever gotten."
  },

  {
    name: "Anonymous",
    quote:
      "Just do one thing for yourself.Continuously Imagine what you wish to happen and enjoy you imagination. After that, Your life will never be the same again"
  },

  {
    name: "Anonymous",
    quote:
      "Your success is inversely proportional to hearing the phrase'LIKE, SHARE AND SUBSCRIBE OUR YOUTUBE CHANNEL GUYS, AUR GHANTA DABAANA MAT BHULIYE' "
  }
];

const quoteBtn = document.querySelector("#quoteBtn");
const quote = document.querySelector("#quote");
const quoter = document.querySelector("#quoter");

quoteBtn.addEventListener("click", change());

function change() {
  let number = Math.floor(Math.random() * quotes.length);

  quoter.innerHTML = quotes[number].name;
  quote.innerHTML = quotes[number].quote;
}
