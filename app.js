const guides = {
  relationship: [
    {
      match: /\b(boundar|respect|trust|lie|cheat|honest|space|distance)\b/,
      kicker: "One Gita-informed lens on relationship boundaries",
      title: "Let dignity guide the boundary you choose.",
      paragraphs: [
        "When trust or respect feels uncertain, it can help to return to what is within your care: your intention, your words, and the limits that protect dignity.",
        "A compassionate reading of the Gita does not ask you to ignore harm or make your needs smaller. It can invite discernment about what access feels safe and respectful."
      ],
      verse: "BG 6.32 is often read as an invitation to recognize another person's joy and pain as akin to one's own.",
      citation: "Bhagavad Gita 6.32 · compare translations ↗",
      sourceUrl: "https://www.gitasupersite.iitk.ac.in/srimad?field_chapter_value=6&field_nsutra_value=32&language=dv",
      practiceTitle: "Name the dignity at stake",
      practice: "Privately write one sentence that names what you need to protect, without deciding what another person must do.",
      time: "3 minutes"
    },
    {
      match: /.*/,
      kicker: "One Gita-informed lens on difficult conversations",
      title: "Begin with steadiness, then speak with care.",
      paragraphs: [
        "A difficult conversation does not always need an immediate solution. One Gita-informed lens is to begin with the intention behind your next sentence: can it be true, useful, and as non-agitating as possible?",
        "That is not a request to minimize hurt or accept harmful behavior. It is an invitation to choose words you can stand behind, while allowing the other person freedom to respond."
      ],
      verse: "BG 17.15 is often read as an invitation to speech that is truthful, non-agitating, and beneficial.",
      citation: "Bhagavad Gita 17.15 · compare translations ↗",
      sourceUrl: "https://www.gitasupersite.iitk.ac.in/srimad?field_chapter_value=17&field_nsutra_value=15&language=dv",
      practiceTitle: "Make space before the sentence",
      practice: "Before replying, take three slow breaths. Name one feeling and one need beneath the reaction, then choose wording that avoids accusation.",
      time: "2 minutes"
    }
  ],
  wellbeing: [
    {
      match: /\b(balance|routine|rest|sleep|habit|overwhelm|busy|rhythm)\b/,
      kicker: "One Gita-informed lens on daily balance",
      title: "Balance is a practice, not a reward you have to earn.",
      paragraphs: [
        "The Gita does not ask us to force ourselves into constant intensity. It points toward proportion—in effort and ease, activity and rest.",
        "Rather than treating wellbeing as another test of willpower, consider what small rhythm could make tomorrow a little steadier."
      ],
      verse: "BG 6.16–17 is often read as an invitation to proportion in food, activity, rest, and wakefulness—not as a treatment plan.",
      citation: "Bhagavad Gita 6.16–17 · compare translations ↗",
      sourceUrl: "https://www.gitasupersite.iitk.ac.in/srimad?field_chapter_value=6&field_nsutra_value=17&language=dv",
      practiceTitle: "Choose one restoring rhythm",
      practice: "Choose one gentle boundary around a daily transition: a screen-free meal, a brief walk, or a consistent wind-down time.",
      time: "10 minutes"
    },
    {
      match: /.*/,
      kicker: "One Gita-informed lens for everyday steadiness",
      title: "Return to the next action that is within reach.",
      paragraphs: [
        "When the mind reaches for certainty, a Gita-informed reflection can bring attention back to the next responsible action rather than every possible outcome.",
        "This is not a demand to suppress emotion. It is a reminder that steadiness can coexist with uncertainty, and that small, caring actions still matter."
      ],
      verse: "BG 2.47–48 is often read as a call to conscientious action while accepting that outcomes cannot be fully controlled.",
      citation: "Bhagavad Gita 2.47–48 · compare translations ↗",
      sourceUrl: "https://www.gitasupersite.iitk.ac.in/srimad?field_chapter_value=2&field_nsutra_value=47&language=dv",
      practiceTitle: "Separate action from outcome",
      practice: "Make two short lists: what you can influence today, and what you cannot. Choose one caring action from the first list.",
      time: "5 minutes"
    }
  ],
  purpose: [
    {
      match: /.*/,
      kicker: "One Gita-informed lens for purpose and work",
      title: "Bring your attention back to the action that is yours to take.",
      paragraphs: [
        "When a decision carries real weight, it is natural to want certainty before moving. A Gita-informed lens is to meet responsibility with care while loosening the demand to control every outcome.",
        "That can mean looking at your values, commitments, and the next action you can take with integrity—then learning from what follows."
      ],
      verse: "BG 2.47–48 is often read as a call to conscientious action while accepting that outcomes cannot be fully controlled.",
      citation: "Bhagavad Gita 2.47–48 · compare translations ↗",
      sourceUrl: "https://www.gitasupersite.iitk.ac.in/srimad?field_chapter_value=2&field_nsutra_value=47&language=dv",
      practiceTitle: "Name the action within reach",
      practice: "Draw two columns: what is influenceable and what is not. Choose one small, values-aligned action from the first column.",
      time: "7 minutes"
    }
  ]
};

const supportCards = {
  urgent: {
    label: "Immediate support",
    kicker: "Safety comes first",
    title: "Your safety comes first.",
    paragraphs: [
      "You may have described an immediate risk of harm. This local beta cannot safely offer a spiritual reflection in that situation.",
      "If you might harm yourself or someone else, or someone may harm you, call 112 in India now or go to the nearest emergency department. If it is safe to do so, contact someone you trust and ask them to stay with you."
    ],
    resources: [["Call emergency support: 112", "tel:112"], ["Tele-MANAS mental-health support: 14416", "tel:14416"]],
    boundary: "No Bhagavad Gita reflection is shown while urgent support may be needed."
  },
  urgentHealth: {
    label: "Urgent health support",
    kicker: "Medical care before reflection",
    title: "This could need urgent medical care.",
    paragraphs: [
      "The symptoms described could need urgent attention. This beta cannot assess or diagnose them.",
      "Call 112 in India or go to the nearest emergency department now, especially for chest pain, trouble breathing, stroke-like symptoms, unconsciousness, severe bleeding, seizure, overdose, poisoning, or a severe allergic reaction. Do not wait for a Gita-based response."
    ],
    resources: [["Call emergency support: 112", "tel:112"]],
    boundary: "No Bhagavad Gita reflection is shown for a possible medical emergency."
  },
  abuse: {
    label: "Safety support",
    kicker: "You deserve safety and support",
    title: "Being hurt, threatened, controlled, or forced is not your fault.",
    paragraphs: [
      "No spiritual teaching requires you to endure harm. This beta cannot advise you to confront anyone, disclose, stay, or leave in a situation that could become more dangerous.",
      "If you are in immediate danger, call 112. If it is safe to do so, contact a trusted person using a device and time that feel safe. This page cannot erase browser history."
    ],
    resources: [["Call emergency support: 112", "tel:112"], ["Tele-MANAS mental-health support: 14416", "tel:14416"]],
    boundary: "No spiritual response is shown for possible abuse or coercive control."
  },
  minor: {
    label: "Child-safety support",
    kicker: "This space is for adults only",
    title: "A young person deserves direct human support.",
    paragraphs: [
      "This personal-reflection beta is for adults and cannot safely provide individualized guidance to anyone under 18.",
      "If a child or young person may be unsafe in India, call Child Helpline 1098. For an immediate emergency, call 112. A trusted adult, teacher, clinician, or child-protection service can help."
    ],
    resources: [["Child Helpline: 1098", "tel:1098"], ["Call emergency support: 112", "tel:112"]],
    boundary: "No personal spiritual reflection is shown for a child-safety situation."
  },
  health: {
    label: "Health-support boundary",
    kicker: "Qualified care before spiritual guidance",
    title: "A qualified clinician is the right next source of care.",
    paragraphs: [
      "This beta cannot assess symptoms, make a diagnosis, recommend treatment, or advise changes to medication, diet, fasting, or care plans.",
      "Please speak with a qualified clinician about health, pregnancy, eating, medication, or worsening mental-health concerns. If there is immediate danger, call 112. Personal steadiness can be a companion to care, never a substitute for it."
    ],
    resources: [["Call emergency support: 112", "tel:112"]],
    boundary: "No personalized Bhagavad Gita guidance is shown for health or clinical questions."
  },
  support: {
    label: "High-stakes support",
    kicker: "A careful boundary",
    title: "This question needs context that a reflection beta cannot hold.",
    paragraphs: [
      "This beta cannot make a legal decision, decide what another person's identity means, or declare a single righteous answer for a complex situation.",
      "Consider discussing the situation with a qualified professional or trusted support person who can understand the full context. Everyone deserves dignity and safety."
    ],
    resources: [["Call emergency support if there is immediate danger: 112", "tel:112"]],
    boundary: "No spiritual ruling is shown for a high-stakes legal or dignity-related question."
  },
  privacy: {
    label: "Privacy check",
    kicker: "Please remove identifying details",
    title: "Try again with a general description.",
    paragraphs: [
      "This page did not send your text to a server, but it appears to include a contact detail, identifier, address, password, or one-time code.",
      "Clear the field and rephrase without names, phone numbers, email addresses, IDs, passwords, or location details. You can still ask a general question."
    ],
    resources: [],
    boundary: "No reflection is shown until identifying details are removed."
  }
};

const form = document.querySelector("#reflection-form");
const answer = document.querySelector("#answer");
const question = document.querySelector("#question");
const questionCount = document.querySelector("#question-count");
const formStatus = document.querySelector("#form-status");
const radios = [...document.querySelectorAll('input[name="lens"]')];
const lensOptions = [...document.querySelectorAll(".lens-option")];
const promptChips = [...document.querySelectorAll(".prompt-chip")];
const reset = document.querySelector("#reset-reflection");
const sourceCard = document.querySelector("#source-card");
const practiceCard = document.querySelector("#practice-card");
const resourceList = document.querySelector("#resource-list");

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

function setStatus(message, state = "neutral") {
  formStatus.hidden = !message;
  formStatus.textContent = message;
  formStatus.dataset.state = state;
}

function updateQuestionCount() {
  questionCount.textContent = question.value.length + " / 800";
}

function setBody(paragraphs) {
  const answerBody = document.querySelector("#answer-body");
  answerBody.replaceChildren(...paragraphs.map((paragraph) => {
    const element = document.createElement("p");
    element.textContent = paragraph;
    return element;
  }));
}

function setResources(resources) {
  resourceList.replaceChildren(...resources.map(([label, href]) => {
    const link = document.createElement("a");
    link.className = "resource-link";
    link.href = href;
    link.textContent = label;
    return link;
  }));
  resourceList.hidden = resources.length === 0;
}

function writeGuidance(guide) {
  answer.classList.remove("safety-answer");
  document.querySelector("#answer-label").textContent = "Gita-informed local reflection";
  document.querySelector("#answer-kicker").textContent = guide.kicker;
  document.querySelector("#answer-title").textContent = guide.title;
  setBody(guide.paragraphs);
  document.querySelector("#source-verse").textContent = guide.verse;
  document.querySelector("#source-citation").textContent = guide.citation;
  document.querySelector("#source-citation").href = guide.sourceUrl;
  document.querySelector("#practice-title").textContent = guide.practiceTitle;
  document.querySelector("#practice-body").textContent = guide.practice;
  document.querySelector("#practice-time").textContent = guide.time;
  document.querySelector("#answer-boundary").textContent = "This is one Gita-informed interpretation from a local, rules-based beta. It is not a religious ruling or a substitute for qualified support.";
  sourceCard.hidden = false;
  practiceCard.hidden = false;
  setResources([]);
}

function writeSupport(card) {
  answer.classList.add("safety-answer");
  document.querySelector("#answer-label").textContent = card.label;
  document.querySelector("#answer-kicker").textContent = card.kicker;
  document.querySelector("#answer-title").textContent = card.title;
  document.querySelector("#answer-boundary").textContent = card.boundary;
  setBody(card.paragraphs);
  sourceCard.hidden = true;
  practiceCard.hidden = true;
  setResources(card.resources);
}

function normalize(value) {
  return value.toLowerCase().replace(/\s+/g, " ").trim();
}

function matchAny(text, patterns) {
  return patterns.some((pattern) => pattern.test(text));
}

function hasIdentifier(rawText) {
  return [
    /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i,
    /\b(?:\+?91[-\s]?)?[6-9]\d{9}\b/,
    /\b\d{4}[-\s]?\d{4}[-\s]?\d{4}\b/,
    /\b(password|passcode|one[-\s]?time code|otp|aadhaar|pan number)\b/i,
    /\b(?:flat|apartment|house)\s*(?:no\.?|number)?\s*\d+\b/i
  ].some((pattern) => pattern.test(rawText));
}

function classifyQuestion(rawText, lens) {
  const text = normalize(rawText);
  const urgent = [
    /\b(kill|hurt|harm|end|take)\s+(myself|my life)\b/,
    /\b(suicid(?:e|al)|self[-\s]?harm|want to die|do not want to (?:be|live|be here)|don't want to (?:be|live|be here)|no reason to live|want to disappear|end it all|cannot go on|can't go on)\b/,
    /\b(khudkushi|atmahatya|apni jaan|jaan (?:len[ai]|lena)|marna (?:chahta|chahti)|jeena nahi)\b/,
    /\b(?:i have|i've got|i got|have)\s+(?:pills|tablets).{0,60}\b(?:plan|planning|tonight|take them|take all)\b/,
    /\b(?:plan(?:ning)? to|going to)\s+(?:take|swallow).{0,40}\b(?:pills|tablets|medication)\b/,
    /\b(i(?:'m| am)? going to|i want to|i will|planning to)\s+(kill|hurt|harm|attack|stab|shoot)\s+(?:my |the |a |an |him|her|them|someone|people|person)/,
    /\b(kill|hurt|harm|attack|stab|shoot)\s+(?:my (?:partner|wife|husband|child|boss)|him|her|them|someone)\b/
  ];
  const urgentHealth = [
    /\b(chest pain|can't breathe|cannot breathe|trouble breathing|difficulty breathing|shortness of breath|stroke|face (?:is )?droop(?:ing)?|slurred speech|unconscious|passed out|severe bleeding|seizure|overdose|poison(?:ed|ing)?|anaphylax|throat.*swelling|pregnan(?:t|cy).*bleed|bleed.*pregnan|postpartum.*bleed)\b/
  ];
  const childSafety = [
    /\b(i(?:'m| am)?|im)\s*(?:[0-9]|1[0-7])\b/,
    /\bunder\s*(?:18|eighteen)\b/,
    /\b(?:my child|a child|kid|minor).{0,50}\b(?:touch|hit|hurt|abuse|unsafe|afraid|violence)\b/
  ];
  const abuse = [
    /\b(domestic violence|sexual assault|rape|traffick|coerc|stalk(?:ed|ing)?|forced me|force me|hits? me|beat(?:s|ing)? me|threaten(?:s|ed)? me|controls? (?:my|our) money|tracks? my (?:phone|location)|won't let me leave|i (?:feel|am) unsafe|not safe at home|afraid of (?:my|the) (?:partner|husband|wife|parent))\b/
  ];
  const health = [
    /\b(symptom|diagnos|medicat|medicine|meds|insulin|pregnan|postpartum|fast(?:ing)?|diet|eating disorder|anorex|bulimi|treatment|doctor|therapist|mental health|panic attack|depress(?:ion|ed)|anxiet|addiction|withdrawal|illness|disease|infection|diabet|cancer|heart condition|pain|fever|rash|blood pressure|sugar level)\b/
  ];
  const highStakes = [
    /\b(divorc|custody|court|lawyer|legal|criminal|police case|visa|immigration|restraining order)\b/,
    /\b(dalit|caste|brahmin|gay|lesbian|trans|lgbt|sexuality|muslim|christian|hindu|religion|disabled|disability|autism)\b.*\b(right|righteous|sin|wrong|inferior|superior|karma|deserve)\b/
  ];

  if (matchAny(text, urgent)) return "urgent";
  if (matchAny(text, urgentHealth)) return "urgentHealth";
  if (matchAny(text, childSafety)) return "minor";
  if (matchAny(text, abuse)) return "abuse";
  if (hasIdentifier(rawText)) return "privacy";
  if (lens === "health" || matchAny(text, health)) return "health";
  if (matchAny(text, highStakes)) return "support";
  return "guidance";
}

function selectGuide(lens, rawText) {
  const cards = guides[lens] || guides.relationship;
  const text = normalize(rawText);
  return cards.find((card) => card.match.test(text)) || cards[0];
}

function revealAnswer() {
  answer.hidden = false;
  answer.scrollIntoView({ behavior: "smooth", block: "start" });
}

lensOptions.forEach((option) => {
  option.addEventListener("click", () => activateLens(option.querySelector("input").value));
});
radios.forEach((radio) => radio.addEventListener("change", () => activateLens(radio.value)));
question.addEventListener("input", updateQuestionCount);

promptChips.forEach((chip) => {
  chip.addEventListener("click", () => {
    activateLens(chip.dataset.lens);
    question.value = chip.dataset.prompt || "";
    updateQuestionCount();
    question.focus();
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  let rawText = question.value.trim();
  const lens = activeLens();
  setStatus("Checking local safety before offering a reflection…");
  question.value = "";
  updateQuestionCount();

  window.requestAnimationFrame(() => {
    const disposition = classifyQuestion(rawText, lens);
    if (disposition === "guidance") {
      writeGuidance(selectGuide(lens, rawText));
      setStatus("Your local reflection is ready.");
    } else {
      writeSupport(supportCards[disposition]);
      setStatus("Support information is ready.", "support");
    }
    rawText = "";
    revealAnswer();
  });
});

reset.addEventListener("click", () => {
  answer.hidden = true;
  answer.classList.remove("safety-answer");
  resourceList.replaceChildren();
  resourceList.hidden = true;
  form.reset();
  activateLens("relationship");
  setStatus("");
  updateQuestionCount();
  document.querySelector("#ask").scrollIntoView({ behavior: "smooth", block: "start" });
  window.setTimeout(() => question.focus(), 250);
});

updateQuestionCount();
document.querySelector("#year").textContent = new Date().getFullYear();
