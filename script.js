
let hp = 10;
let turn = 0;
let logLines = [];
let lastCard = "";

const cardPool = [
  "🔥 ファイアボルト：敵に3ダメージ",
  "🗡 影斬り：2連続攻撃（2ダメージ×2）",
  "🛡 守護結界：次の攻撃を無効化",
  "💫 癒しの光：HPを3回復",
  "🐉 炎獣召喚：次ターンに5ダメージを与える",
  "🌀 魔力集中：次の魔法ダメージ＋2",
  "👿 小悪魔の呼び声：相手の防御を1ターン無効化"
];

const rules = [
  "攻撃は1ターンおきにしかできない",
  "回復は2回までしか使えない",
  "スキルカードを使うとMPを消費（MP上限あり）",
  "最後の3ターンは毎回ダメージ2倍",
  "AIのアドバイスを聞かずに行動できない",
  "使ったカードは再使用禁止（1回使い切り）"
];

const aiTypes = [
  "👓 慎重で論理的な軍師タイプ",
  "🔥 感情で動く突撃型バトルAI",
  "🤡 トリックスターAI（たまにウソをつく）",
  "💖 応援重視のほめAI",
  "🧙‍♂️ 中二病魔導士AI",
  "🌀 運命論者AI（全てを確率で判断）"
];

function changeHP(amount) {
  hp += amount;
  document.getElementById("hp").textContent = hp;
}

function drawCard() {
  turn++;
  const card = cardPool[Math.floor(Math.random() * cardPool.length)];
  lastCard = card;
  document.getElementById("cardText").textContent = card;
  const player = document.getElementById("playerName").value || "プレイヤー";
  const logLine = `🧭 ターン${turn} - ${player}が引いたカード: ${card}`;
  logLines.push(logLine);
  document.getElementById("log").textContent = logLines.join("\n");
}

function undoCard() {
  if (turn > 0 && logLines.length > 0) {
    turn--;
    logLines.pop();
    document.getElementById("log").textContent = logLines.join("\n");
    document.getElementById("cardText").textContent = "";
  }
}

function copyPrompt() {
  const card = lastCard;
  const prompt = `現在のHP：${hp}。引いたカード：「${card}」。どう行動すべきかアドバイスしてください。`;
  navigator.clipboard.writeText(prompt);
  alert("プロンプトをコピーしました！");
}

function copyLog() {
  navigator.clipboard.writeText(logLines.join("\n"));
  alert("ログをコピーしました！");
}

function rollRule() {
  const rule = rules[Math.floor(Math.random() * rules.length)];
  document.getElementById("ruleText").textContent = rule;
}

function copyRule() {
  const text = document.getElementById("ruleText").textContent;
  navigator.clipboard.writeText("ルール：" + text);
  alert("ルールをコピーしました！");
}

function rollAI() {
  const ai = aiTypes[Math.floor(Math.random() * aiTypes.length)];
  document.getElementById("aiText").textContent = ai;
}

function copyAI() {
  const text = document.getElementById("aiText").textContent;
  navigator.clipboard.writeText("あなたは次のような性格のAIです：" + text);
  alert("AI性格をコピーしました！");
}
