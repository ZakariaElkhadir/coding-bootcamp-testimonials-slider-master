const container = document.getElementById("container");
const textSection = container.querySelector(".text-section");
const quote = container.querySelector(".quote");
const authorInfo = container.querySelector(".author-info");
const author = container.querySelector(".author");
const field = container.querySelector(".field");
const imageSection = container.querySelector(".image-section");
const personImg = container.querySelector(".person-img");
const controls = container.querySelector(".controls");
const prevBtn = container.querySelector("#prev");
const nextBtn = container.querySelector("#next");

let current = 0;

const quotes = [
  {
    id: 1,
    name: "Tanya Sinclair",
    field: "UX Engineer",
    quote:
      "I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future.",
    image: "./images/image-tanya.jpg",
  },
  {
    id: 2,
    name: "John Tarkpor",
    field: "Junior Front-end Developer",
    quote:
      "If you want to lay the best foundation possible I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.",
    image: "./images/image-john.jpg",
  },
];

function showQuote() {
  quote.textContent = `"${quotes[current].quote}"`;
  author.textContent = quotes[current].name;
  field.textContent = quotes[current].field;
  personImg.src = quotes[current].image;
  personImg.alt = quotes[current].name;
}
function nextQuote() {
  current++;
  if (current >= quotes.length) {
    current = 0;
  }
  showQuote();
}
function prevQuote() {
  current--;
  if (current < 0) {
    current = quotes.length - 1;
  }
  showQuote();
}
nextBtn.addEventListener("click", function () {
  nextQuote();
});
prevBtn.addEventListener("click", function () {
  prevQuote();
});
console.log("Displaying quote for:", quotes[current].name);
showQuote();
