// パスワードチェック
function checkPassword() {
  const password = document.getElementById('password').value;

  // ✅ 正しいパスワード（リヴァーフィールドの聖域パス）
  const correctPassword = "sanctum";

  if (password === correctPassword) {
    // パスワードが正しい → 聖域へ入場
    document.getElementById('loginContainer').style.display = 'none';
    document.getElementById('mainContent').style.display = 'block';
    document.body.style.background = '#f9f9f9'; // ログイン後の背景色
  } else {
    alert('The seal rejects you. Try again.'); // 世界観を壊さないエラーメッセージ
  }
}

// エンターキーでサブミット（パスワード入力後にエンターでチェック）
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("password").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      checkPassword(); // エンターキーでチェック
    }
  });

  // ロゴアニメーション終了後、ログインフォームを表示
  setTimeout(function () {
    document.querySelector('.logo-container').style.display = 'none'; // ロゴを非表示
    document.getElementById('loginContainer').style.display = 'block'; // ログインフォーム表示
  }, 3000); // 3秒後に切り替え
});
