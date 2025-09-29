let questions = [];
let currentIndex = 0;
let score = 0;

const quiz = [
  
	{
			q: "太陽系で一番大きな惑星は何？",
			choices: ["地球", "火星", "木星", "金星"],
			correctIndex: 2
		},
		{
			q: "地球の衛星の名前は？",
			choices: ["月", "太陽", "火星", "土星"],
			correctIndex: 0
		},
		{
			q: "最も明るく見える恒星の名前は？",
			choices: ["ベガ", "シリウス", "アルタイル", "ポルックス"],
			correctIndex: 1
		},
		{
			q: "太陽の中心核で起こる主な反応は？",
			choices: ["核分裂", "核融合", "電気分解", "燃焼"],
			correctIndex: 1
		},
		{
			q: "衛星の数が1番多い惑星は？",
			choices: ["土星", "火星", "金星", "木星"],
			correctIndex: 0
		},
		{
			q: "オーロラができるために必要不可欠な天体は？",
			choices: ["地球", "火星", "太陽", "木星"],
			correctIndex: 2
		},
		{
			q: "現在の宇宙の年齢はおよそ何年？",
			choices: ["約46億年", "約98億年", "約138億年", "約20億年"],
			correctIndex: 2
		},
		{
			q: "リング(輪)をもつことで有名な惑星は？",
			choices: ["土星", "木星", "金星", "火星"],
			correctIndex: 0
		},
		{
			q: "「光年」とは何を表す単位？",
			choices: ["光の速さの単位(速度)", "光が1年間に進む距離", "光が1秒間に進む距離", "時間の単位"],
			correctIndex: 1
		},
		{
			q: "地球から最も近い恒星はどれ？",
			choices: ["シリウス", "プロキシマケンタウリ", "アルデバラン", "レグルス"],
			correctIndex: 1
		},
		{
			q: "光の速さはいくつですか？",
			choices: ["300,000km/s", "300km/s", "3,000km/s", "30,000,000km/s"],
			correctIndex: 0
		},
		{
			q: "土星のリングの主成分は？",
			choices: ["氷と岩", "ガス", "塵", "マグマ"],
			correctIndex: 0
		},
		{
			q: "次の惑星の内、ガス惑星は？",
			choices: ["火星", "地球", "金星", "土星"],
			correctIndex: 3
		},
		{
			q: "太陽の表面温度は約何度？",
			choices: ["約2000度", "約6000度", "約8000度", "約4000度"],
			correctIndex: 1
		},
		{
			q: "地球と太陽の距離は？",
			choices: ["約1億5000万km", "約5000万km", "約2000万km", "約2億km"],
			correctIndex: 0
		},
		{
			q: "火星の大気の主成分は？",
			choices: ["窒素", "酸素", "二酸化炭素", "メタン"],
			correctIndex: 2
		},
		{
			q: "ガリレオ衛星ではないのはどれ？",
			choices: ["イオ", "ガニメデ", "カリスト", "フォボス"],
			correctIndex: 3
		},
		{
			q: "地球から月までの距離は約何キロ？",
			choices: ["約28万km", "約10万km", "約54万km", "約38万km"],
			correctIndex: 3
		},
		{
			q: "光の速度で地球から太陽までかかる時間は？",
			choices: ["約45分", "約32分", "約8分", "約15分"],
			correctIndex: 2
		},
		{
			q: "人類が初めて月に降り立ったのはいつ？",
			choices: ["1960年", "1972年", "1969年", "1965年"],
			correctIndex: 2
		},
		{
			q: "地球と自転の向きが逆なのはどれ？",
			choices: ["木星", "金星", "土星", "海王星"],
			correctIndex: 1
		},
		{
			q: "太陽はどんな天体に分類される？",
			choices: ["衛星", "恒星", "惑星", "小惑星"],
			correctIndex: 1
		},
		{
			q: "国際宇宙ステーション(ISS)が地球を1周するのにかかる時間は？",
			choices: ["約30分", "約45分", "約90分", "約120分"],
			correctIndex: 2
		},
		{
			q: "太陽系の惑星の数は全部で何個？",
			choices: ["6個", "7個", "8個", "9個"],
			correctIndex: 2
		},
		{
			q: "宇宙が膨張していることを最初に発見した人物は？",
			choices: ["ハッブル", "ガリレオ", "コペルニクス", "エッジワース"],
			correctIndex: 0
		},
		{
			q: "夏の大三角に含まれる星は？",
			choices: ["ベテルギウス", "プロキオン", "デネブ", "リゲル"],
			correctIndex: 2
		},
		{
			q: "冬の大三角はベテルギウス、シリウス、あと1個は？",
			choices: ["リゲル", "アルデバラン", "プロキオン", "ポルックス"],
			correctIndex: 2
		},
		{
			q: "しし座にある1等星は？",
			choices: ["アンタレス", "フォーマルハウト", "レグルス", "ベラトリクス"],
			correctIndex: 2
		},
		{
			q: "冥王星はどんな天体に分類される？？",
			choices: ["衛星", "恒星", "惑星", "準惑星"],
			correctIndex: 3
		},
		{
			q: "太陽系で1番高い山がある惑星は？",
			choices: ["火星", "木星", "金星", "水星"],
			correctIndex: 0
		},
		{
			q: "火星にあるオリンポス山の高さは富士山の約何倍？",
			choices: ["約7.2倍", "約5.5倍", "約3.2倍", "約2倍"],
			correctIndex: 1
		},
		{
			q: "宇宙服1着の値段は約いくら？",
			choices: ["約1億円", "約3億円", "約5億円", "約10億円"],
			correctIndex: 3
		},
		{
			q: "火星の夕焼けの色は何色？",
			choices: ["青色", "赤色", "オレンジ色", "緑色"],
			correctIndex: 0
		},
		{
			q: "太陽系の中で、1番密度が高い惑星は？",
			choices: ["地球", "火星", "水星", "木星"],
			correctIndex: 0
		},
		{
			q: "木星にある大赤斑とは何のこと？",
			choices: ["巨大な山", "巨大な火口", "巨大な台風", "巨大な湖"],
			correctIndex: 2
		},
		{
			q: "地球の自転軸の傾きはおよそ何度？",
			choices: ["0度", "15.2度", "23.4度", "45度"],
			correctIndex: 2
		},
		{
			q: "小惑星イトカワからサンプルを持ち帰った探査機の名前は？",
			choices: ["はやぶさ", "はやぶさ2", "あかつき", "かぐや"],
			correctIndex: 0
		},
		{
			q: "地球の大気の主成分は？",
			choices: ["酸素", "二酸化炭素", "窒素", "水蒸気"],
			correctIndex: 2
		},
		{
			q: "太陽系で最も高温な惑星は？",
			choices: ["水星", "金星", "火星", "木星"],
			correctIndex: 1
		},
		{
			q: "太陽系で最も大きな衛星は？",
			choices: ["ガニメデ", "タイタン", "月", "イオ"],
			correctIndex: 0
		},
		{
			q: "北斗七星は何座の一部？",
			choices: ["カシオペヤ座", "おおぐま座", "こぐま座", "りゅう座"],
			correctIndex: 1
		},
		{
			q: "国際天文学連合(IAU)が定めた星座の数はいくつ？",
			choices: ["48", "72", "88", "102"],
			correctIndex: 2
		},
		{
			q: "次のうち存在しない星座は？",
			choices: ["ろ座", "や座", "け座", "ほ座"],
			correctIndex: 2
		},
		{
			q: "日本では古来から「すばる」と呼ばれてきた星の集まりは？",
			choices: ["アンドロメダ銀河", "プレアデス星団", "北斗七星", "天の川"],
			correctIndex: 1
		},
		{
			q: "12星座の始まり「おひつじ座」の季節は？",
			choices: ["春分のころ", "夏至のころ", "秋分のころ", "冬至のころ"],
			correctIndex: 0
		},
		{
			q: "夏の星座として有名な「さそり座」の一等星は？",
			choices: ["ベガ", "アンタレス", "アルタイル", "デネブ"],
			correctIndex: 1
		},
		{
			q: "星座の「カシオペヤ座」はどんな形に見える？",
			choices: ["正三角形", "M字またはW字", "四角形", "十字型"],
			correctIndex: 1
		},
		{
			q: "北極星の別名は？",
			choices: ["ポラリス", "ベテルギウス", "スピカ", "カストル"],
			correctIndex: 0
		},
		{
			q: "ブラックホールに吸い込まれたらどうなる？",
			choices: ["瞬時に消える", "スパゲッティのように伸びる", "ワープしてほかの銀河に行ける", "何も起こらない"],
			correctIndex: 1
		},
		{
			q: "地球の表面の約何%が海？",
			choices: ["30%", "50%", "71%", "90%"],
			correctIndex: 2
		},
		{
			q: "地球の中心にあるのは何？",
			choices: ["空洞", "マントル", "核(コア)", "水"],
			correctIndex: 2
		},
		{
			q: "地球の海水が青く見えるのはなぜ？",
			choices: ["空の青さを映している", "水が青色に光る", "太陽光の中で青い光が散乱しやすい", "魚の反射"],
			correctIndex: 2
		},
		{
			q: "月の重力は地球の何分の一？",
			choices: ["約2分の1", "約4分の1", "約6分の1", "約8分の1"],
			correctIndex: 2
		},
		{
			q: "月の裏側を最初に撮影した国は？",
			choices: ["アメリカ", "ソ連", "日本", "中国"],
			correctIndex: 1
		},
		{
			q: "国際宇宙ステーション(ISS)は、地球のどれくらい上空にある？",
			choices: ["約200km", "約400km", "約800km", "約1500km"],
			correctIndex: 1
		},
		{
			q: "「これは小さな一歩だが、人類にとっては大きな飛躍だ」この言葉を残した人物は？",
			choices: ["ニール・アームストロング", "バズ・オルドリン", "ガガーリン", "ジョン・F・ケネディ"],
			correctIndex: 0
		},
		{
			q: "「地球は青かった」この言葉を残した宇宙飛行士は？",
			choices: ["毛利衛", "向井千秋", "ガガーリン", "テレシコワ"],
			correctIndex: 2
		},
		{
			q: "「宇宙には始まりがある。そしておそらく終わりもある」この言葉を残した科学者は？",
			choices: ["スティーブン・ホーキング", "アインシュタイン", "カール・セガール", "エドウィンハッブル"],
			correctIndex: 0
		},
];

const startScreen = document.getElementById("start-screen");
const quizContainer = document.getElementById("quiz-container");
const endScreen = document.getElementById("end-screen");
const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");

function startQuiz() {
  startScreen.classList.add("hidden");
  endScreen.classList.add("hidden");
  quizContainer.classList.remove("hidden");

  currentIndex = 0;
  score = 0;

  // クイズ配列をシャッフルして最初の10問を選ぶ
  questions = [...quiz]
    .sort(() => Math.random() - 0.5)
    .slice(0, 10);

  loadQuestion();
}

function loadQuestion() {
  resultEl.textContent = "";
  choicesEl.innerHTML = "";

  if (currentIndex < questions.length) {
    const currentQ = questions[currentIndex];
    questionEl.textContent = `【問題${currentIndex + 1}】 ${currentQ.q}`;
    scoreEl.textContent = `問題 ${currentIndex + 1} / ${questions.length} - 得点: ${score}`;

    currentQ.choices.forEach((choice, index) => {
      const btn = document.createElement("button");
      btn.textContent = choice;
      btn.classList.add("choice-btn");
      btn.onclick = () => checkAnswer(index);
      choicesEl.appendChild(btn);
    });
  } else {
    showEndScreen();
  }
}

function checkAnswer(selectedIndex) {
  const correctIndex = questions[currentIndex].correctIndex;
  const correctChoice = questions[currentIndex].choices[correctIndex];

  if (selectedIndex === correctIndex) {
    resultEl.textContent = "正解！🎉";
    resultEl.style.color = "#00ff00";
    score++;
  } else {
    resultEl.textContent = `不正解…正解は「${correctChoice}」です。`;
    resultEl.style.color = "#ff4444";
  }

  currentIndex++;
  setTimeout(loadQuestion, 1000);
}

function showEndScreen() {
  quizContainer.classList.add("hidden");
  endScreen.classList.remove("hidden");

  // 画面をクリア
  endScreen.innerHTML = "";

  // スコア表示
  const scoreElement = document.createElement("div");
  scoreElement.textContent = `最終得点: ${score} / ${questions.length}`;
  endScreen.appendChild(scoreElement);

  // 称号
  let rankMessage = "";
  if (score >= 9) {
    rankMessage = "🌟 授けられる称号：宇宙博士";
  } else if (score >= 7) {
    rankMessage = "🚀 授けられる称号：宇宙探検家";
  } else if (score >= 4) {
    rankMessage = "🛰 授けられる称号：宇宙初心者";
  } else {
    rankMessage = "💤 授けられる称号：これから頑張ろう";
  }

  const rankElement = document.createElement("div");
  rankElement.textContent = rankMessage;
  rankElement.classList.add("rank-message");
  endScreen.appendChild(rankElement);

  // ランキング表示エリア
  const rankingDiv = document.createElement("div");
  rankingDiv.id = "ranking";
  endScreen.appendChild(rankingDiv);
  showRanking(); // ←ここで呼ぶ

  // スコア保存ボタン
  const saveButton = document.createElement("button");
  saveButton.textContent = "スコアを保存する";
  saveButton.classList.add("blue-btn");
  saveButton.onclick = saveScore;
  endScreen.appendChild(saveButton);

  // もう一度プレイボタン
  const retryButton = document.createElement("button");
  retryButton.textContent = "もう一度プレイ";
  retryButton.classList.add("blue-btn");
  retryButton.onclick = startQuiz;
  endScreen.appendChild(retryButton);

  // JAXA公式リンク
  const linkButton = document.createElement("a");
  linkButton.textContent = "🚀 宇宙についてもっと知る（JAXA公式サイトへ）";
  linkButton.href = "https://www.jaxa.jp/";
  linkButton.target = "_blank";
  linkButton.classList.add("blue-btn", "jaxa-btn");
  endScreen.appendChild(linkButton);
}

function saveScore() {
  const playerName = prompt("名前を入力してください:");
  if (playerName) {
    const savedScores = JSON.parse(localStorage.getItem("scores")) || [];
    savedScores.push({ name: playerName, score: score, date: new Date().toLocaleString() });
    localStorage.setItem("scores", JSON.stringify(savedScores));
    alert("スコアが保存されました！");
    showRanking(); // 保存後も再読み込み
  }
}

function showRanking() {
  fetch("ranking")
    .then(response => response.json())
    .then(data => {
      const rankingDiv = document.getElementById("ranking");
      if (!rankingDiv) return; // 安全チェック
      rankingDiv.innerHTML = "<h3>ランキング</h3><ol>" + data.map(item =>
        `<li>${item.username} - ${item.score}点 (${item.played_at})</li>`
      ).join("") + "</ol>";
    })
    .catch(err => {
      console.error("ランキング取得失敗:", err);
    });
}
  


  
  

