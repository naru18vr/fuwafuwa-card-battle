
const rules = [
  "回復系カードは1ターンおきにしか使用できない",
  "偶数ターンは左から、奇数ターンは右からカードを選ぶ",
  "AIの3枚から1枚は常に無視（実質2択）",
  "カード効果を−1して扱う（3ダメ→2）",
  "召喚系カードはゲーム中に2枚まで",
  "守り重視で行動するようAIに依頼されている",
  "奇数ターンでは手札の1枚が無効（使えない）",
  "AIの提示順を逆順に扱う（3→2→1）",
  "カードを使ってもログに記録しない",
  "1回だけ、3枚から選ぶふりをして好きなカードを使ってよい"
];

function rollRule() {
  const rule = rules[Math.floor(Math.random() * rules.length)];
  document.getElementById("ruleText").textContent = rule;
}
function copyRule() {
  const rule = document.getElementById("ruleText").textContent;
  navigator.clipboard.writeText("私の追加ルール：" + rule);
  alert("ルールをコピーしました！");
}
function copyBasePrompt() {
  const prompt = document.getElementById("basePrompt").value;
  navigator.clipboard.writeText(prompt);
  alert("プロンプトをコピーしました！");
}
