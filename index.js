const titles = [
  "Ērenpress ir velosipēdu ražotājs",
  "Egles zarā sēž kaķis"
];

console.log(titles.sort((a, b) => {
  return a.localeCompare(b, "lv-LV", {
    caseFirst: false,
    sensitivity: "variant",
    ignorePunctuation: true,
    usage: "sort"
  });
}).join("\n"));

/*
Egles zarā sēž kaķis
Ērenpress ir velosipēdu ražotājs
*/
