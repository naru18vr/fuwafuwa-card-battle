
let hp = 10;
let turn = 0;
const cardPool = [
  "🔥 ファイアボルト：敵に3ダメージ",
  "🗡 影斬り：2連続攻撃（2ダメージ×2）",
  "🛡 守護結界：次の攻撃を無効化",
  "💫 癒しの光：HPを3回復",
  "🐉 炎獣召喚：次ターンに5ダメージを与える",
  "🌀 魔力集中：次の魔法ダメージ＋2",
  "👿 小悪魔の呼び声：相手の防御を1ターン無効化"
];

function changeHP(amount) {
  hp += amount;
  document.getElementById("hp").textContent = hp;
}

function drawCard() {
  turn += 1;
  const card = cardPool[Math.floor(Math.random() * cardPool.length)];
  document.getElementById("cardText").textContent = card;
  const player = document.getElementById("playerName").value || "プレイヤー";
  const logLine = `🧭 ターン${turn} - ${player}が引いたカード: ${card}`;
  document.getElementById("log").textContent += logLine + "\n";
}

function copyPrompt() {
  const card = document.getElementById("cardText").textContent;
  const prompt = `現在のHP：${hp}。引いたカード：「${card}」。どう行動すべきかアドバイスしてください。`;
  navigator.clipboard.writeText(prompt);
  alert("プロンプトをコピーしました！");
}

function copyLog() {
  const log = document.getElementById("log").textContent;
  navigator.clipboard.writeText(log);
  alert("ログをコピーしました！");
}
