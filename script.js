
let hp = 10;
let log = [];
let hand = [];
let turn = 0;

const cardPool = [
  "🔥 ファイアボルト", "🛡 守護結界", "🐉 炎獣召喚", "💫 癒しの光", "🗡 影斬り",
  "🌀 魔力集中", "👿 小悪魔の呼び声", "🌩 稲妻突き", "🧊 氷精の囁き",
  "🌿 いやしの果実", "🔥 魔導爆発", "🪄 カウンター結界", "🌫 沈黙の霧"
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
  const card = cardPool[Math.floor(Math.random() * cardPool.length)];
  hand.push(card);
  updateHand();
  const msg = `ターン${++turn}：カードを引いた → ${card}`;
  log.push(msg);
  updateLog();
}

function updateHand() {
  const handList = document.getElementById("hand");
  handList.innerHTML = "";
  hand.forEach((card, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${card} <button onclick="useCard(${index})">❌使った</button>`;
    handList.appendChild(li);
  });
}

function useCard(index) {
  const used = hand.splice(index, 1)[0];
  log.push(`→ ${used} を使用した`);
  updateHand();
  updateLog();
}

function updateLog() {
  document.getElementById("log").textContent = log.join("\n");
}

function copyLog() {
  navigator.clipboard.writeText(log.join("\n"));
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

function copyBasePrompt() {
  const prompt = document.getElementById("basePrompt").value;
  navigator.clipboard.writeText(prompt);
  alert("基本ルールをコピーしました！");
}

// 初期手札配布
for (let i = 0; i < 5; i++) drawCard();
