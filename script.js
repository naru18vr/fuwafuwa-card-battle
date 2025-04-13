
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

let hp = 10;
let enemyHp = 10;
let log = [];
let hand = [];
let turn = 0;

const cardPool = [
  { name: "🔥 ファイアボルト", effect: "敵に3ダメージ" },
  { name: "🛡 守護結界", effect: "次の攻撃を無効化" },
  { name: "🐉 炎獣召喚", effect: "次ターンに5ダメージを与える" },
  { name: "💫 癒しの光", effect: "自分のHPを3回復" },
  { name: "🗡 影斬り", effect: "2連続攻撃（2×2）" },
  { name: "🌀 魔力集中", effect: "次の魔法ダメージ＋2" },
  { name: "👿 小悪魔の呼び声", effect: "相手の防御を1ターン無効化" }
];

function changeHP(amount) {
  hp += amount;
  document.getElementById("hp").textContent = hp;
}
function changeEnemyHP(amount) {
  enemyHp += amount;
  document.getElementById("enemyHp").textContent = enemyHp;
}

function drawCard() {
  const card = cardPool[Math.floor(Math.random() * cardPool.length)];
  hand.push(card);
  updateHand();
  log.push(`ターン${++turn}：カードを引いた → ${card.name}`);
  updateLog();
}

function updateHand() {
  const list = document.getElementById("hand");
  list.innerHTML = "";
  hand.forEach((card, i) => {
    const li = document.createElement("li");
    li.textContent = `${card.name}：${card.effect}`;
    const btn = document.createElement("button");
    btn.textContent = "❌使った";
    btn.onclick = () => useCard(i);
    li.appendChild(btn);
    list.appendChild(li);
  });
}

function useCard(index) {
  const used = hand.splice(index, 1)[0];
  log.push(`→ ${used.name} を使用した`);
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
function copyHand() {
  const handText = hand.map(c => `・${c.name}：${c.effect}`).join("\n");
  const text = `これが現在の私の手持ちカードです：\n${handText}`;
  navigator.clipboard.writeText(text);
  alert("手札をコピーしました！");
}
function copySituation() {
  const handText = hand.map(c => `・${c.name}：${c.effect}`).join("\n");
  const fullText = `📝 現在の状況\n\n・私のHP：${hp}\n・敵のHP：${enemyHp}\n\n・現在の手持ちカード（未使用）：\n${handText}\n\nこの状況において、どのカードを使うのが最も効果的かアドバイスをください。`;
  navigator.clipboard.writeText(fullText);
  alert("状況をコピーしました！");
}

// 初期手札
for (let i = 0; i < 5; i++) drawCard();

const aiTypes = [
  "👓 慎重で論理的な軍師タイプ",
  "🔥 感情で動く突撃型バトルAI",
  "🤡 トリックスターAI（たまにウソをつく）",
  "💖 応援重視のほめAI",
  "🧙‍♂️ 中二病魔導士AI",
  "🌀 運命論者AI（全てを確率で判断）"
];

function rollAI() {
  const ai = aiTypes[Math.floor(Math.random() * aiTypes.length)];
  document.getElementById("aiText").textContent = ai;
}

function copyAI() {
  const ai = document.getElementById("aiText").textContent;
  navigator.clipboard.writeText("あなたのAI性格：" + ai);
  alert("AI性格をコピーしました！");
}
