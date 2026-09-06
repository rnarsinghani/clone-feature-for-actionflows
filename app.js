const guides = {
  relationship: {
    kicker: "Prepared example: relationship conflict",
    title: "Begin with steadiness, then speak with care.",
    paragraphs: [
      "When a relationship feels charged, the first task may not be to solve the whole story. It can be to return to the part that is yours: your intention, your words, and the boundary you can hold with dignity.",
      "This example uses a Gita-inspired lens on speech: what is true here, what needs protecting, and what can be said without trying to control the other person's response?"
    ],
    verse: "A Gita-inspired reading of BG 17.15 centers speech that is truthful, non-agitating, and beneficial.",
    citation: "Bhagavad Gita 17.15 · compare translations ↗",
    sourceUrl: "https://www.gitasupersite.iitk.ac.in/srimad?field_chapter_value=17&field_nsutra_value=15&language=dv",
    practiceTitle: "Make space before the sentence",
    practice: "In a hypothetical difficult conversation, pause before replying. Name one feeling and one need beneath the reaction, then consider wording that avoids accusation.",
    time: "2 minutes"
  },
  wellbeing: {
    kicker: "Prepared example: everyday balance",
    title: "Balance is a practice, not a reward you have to earn.",
    paragraphs: [
      "The Gita does not ask us to force ourselves into constant intensity. It points toward a life with proportion — in effort and ease, waking and rest, food and activity. That is a useful lens when everything feels urgent.",
      "A reflective question for this example: what rhythm could support steadiness tomorrow, rather than turning rest into another test of willpower?"
    ],
    verse: "BG 6.16–17 is often read as an invitation to proportion in food, activity, rest, and wakefulness — never as a treatment plan.",
    citation: "Bhagavad Gita 6.16–17 · compare translations ↗",
    sourceUrl: "https://www.gitasupersite.iitk.ac.in/srimad?field_chapter_value=6&field_nsutra_value=17&language=dv",
    practiceTitle: "Choose one restoring rhythm",
    practice: "For this example, imagine setting a gentle boundary around one daily transition: a screen-free meal, a ten-minute walk, or a consistent wind-down time.",
    time: "10 minutes"
  },
  health: {
    kicker: "Prepared example: care alongside health concerns",
    title: "Let care be practical, and let your mind have a place to rest.",
    paragraphs: [
      "Worry about health can make the mind race ahead into frightening possibilities. This example points to the next responsible action: notice what is happening, seek qualified care, and accept support from people who can walk beside you.",
      "The Gita's invitation to balance can be a reflective companion, but it cannot tell anyone what a symptom means. Spiritual reflection must never replace medical advice, diagnosis, or treatment."
    ],
    verse: "BG 2.48 can be a lens for steadiness while you take responsible, practical action.",
    citation: "Bhagavad Gita 2.48 · compare translations ↗",
    sourceUrl: "https://www.gitasupersite.iitk.ac.in/srimad?field_chapter_value=2&field_nsutra_value=48&language=dv",
    practiceTitle: "Return to the next helpful action",
    practice: "In this prepared scenario, write down questions to ask a qualified clinician. For severe, sudden, or urgent symptoms, seek emergency help rather than waiting.",
    time: "5 minutes"
  },
  purpose: {
    kicker: "Prepared example: an uncertain work decision",
    title: "Bring your attention back to the action that is yours to take.",
    paragraphs: [
      "When a decision carries real weight, it is natural to want certainty before moving. This example uses the Gita as an anchor: meet responsibility with care while loosening the demand to control every outcome.",
      "That does not mean accepting what is harmful or staying still. It means looking at values, commitments, and the next action that can be taken with integrity — then learning from what follows."
    ],
    verse: "BG 2.47–48 can be read as a call to conscientious action while accepting that outcomes cannot be fully controlled.",
    citation: "Bhagavad Gita 2.47–48 · compare translations ↗",
    sourceUrl: "https://www.gitasupersite.iitk.ac.in/srimad?field_chapter_value=2&field_nsutra_value=47&language=dv",
    practiceTitle: "Name the action within reach",
    practice: "For this example, draw two columns: what is influenceable and what is not. Choose one small, values-aligned action from the first column.",
    time: "7 minutes"
  }
};

const form = document.querySelector("#reflection-form");
const answer = document.querySelector("#answer");
const radios = [...document.querySelectorAll('input[name="lens"]')];
const lensOptions = [...document.querySelectorAll(".lens-option")];
const promptChips = [...document.querySelectorAll(".prompt-chip")];
const reset = document.querySelector("#reset-reflection");

function activeLens() {
  return radios.find((radio) => radio.checked)?.value || "relationship";
}

function activateLens(lens) {
  radios.forEach((radio) => {
    radio.checked = radio.value === lens;
  });
  lensOptions.forEach((option) => {
    option.classList.toggle("active", option.querySelector("input").value === lens);
  });
}

function writeGuide(lens) {
  const guide = guides[lens];
  const answerBody = document.querySelector("#answer-body");
  answerBody.replaceChildren(
    ...guide.paragraphs.map((paragraph) => {
      const element = document.createElement("p");
      element.textContent = paragraph;
      return element;
    })
  );
  document.querySelector("#answer-kicker").textContent = guide.kicker;
  document.querySelector("#answer-title").textContent = guide.title;
  document.querySelector("#source-verse").textContent = guide.verse;
  document.querySelector("#source-citation").textContent = guide.citation;
  document.querySelector("#source-citation").href = guide.sourceUrl;
  document.querySelector("#practice-title").textContent = guide.practiceTitle;
  document.querySelector("#practice-body").textContent = guide.practice;
  document.querySelector("#practice-time").textContent = guide.time;
  document.querySelector("#answer-boundary").textContent = "This is prepared illustrative content. It is not generated from, or tailored to, personal information. Interpretations of the Bhagavad Gita differ.";
}

function showExample(lens) {
  writeGuide(lens);
  answer.hidden = false;
  answer.scrollIntoView({ behavior: "smooth", block: "start" });
}

lensOptions.forEach((option) => {
  option.addEventListener("click", () => activateLens(option.querySelector("input").value));
});

promptChips.forEach((chip) => {
  chip.addEventListener("click", () => {
    activateLens(chip.dataset.lens);
    showExample(chip.dataset.lens);
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  showExample(activeLens());
});

reset.addEventListener("click", () => {
  answer.hidden = true;
  document.querySelector("#ask").scrollIntoView({ behavior: "smooth", block: "start" });
});

document.querySelector("#year").textContent = new Date().getFullYear();
