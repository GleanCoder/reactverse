const content = [
  [
    "React is extremely popular",
    "It makes building complex, interactive UIs a breeze",
    "It's powerful & flexible",
    "It has a very active and versatile ecosystem",
  ],
  [
    "Components, JSX & Props",
    "State",
    "Hooks (e.g., useEffect())",
    "Dynamic rendering",
  ],
  [
    "Official web page (react.dev)",
    "Next.js (Fullstack framework)",
    "React Native (build native mobile apps with React)",
  ],
];

const btnWhyReact = document.getElementById("btn-why-react");
const btnCoreFeatures = document.getElementById("btn-core-features");
const btnResources = document.getElementById("btn-resources");
const tab = document.getElementById("tab-content");

function displayContent(items) {
  let contentList = "";
  for (const item of items) {
    contentList += `<li>${item}</li>`;
  }
  tab.innerHTML = "";
  const list = document.createElement("ul");
  list.innerHTML = contentList;
  tab.appendChild(list);
}

function activeBtn(btn) {
  // console.log(btn);
  btnWhyReact.className = "";
  btnCoreFeatures.className = "";
  btnResources.className = "";
  btn.className = "active";
}
function handleClick(event) {
  const btnId = event.target.id;
  activeBtn(event.target);
  // console.log(event.target);
  if (btnId === "btn-why-react") {
    displayContent(content[0]);
  } else if (btnId === "btn-core-features") {
    displayContent(content[1]);
  } else if (btnId === "btn-resources") {
    displayContent(content[2]);
  } else {
    alert("You clicked wrong button");
  }
}
displayContent(content[0]);
btnWhyReact.addEventListener("click", handleClick);
btnCoreFeatures.addEventListener("click", handleClick);
btnResources.addEventListener("click", handleClick);
