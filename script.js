// パスワードチェック
function checkPassword() {
  const password = document.getElementById('password').value;
  
  // 正しいパスワードを指定（ここでは"password123"）
  const correctPassword = "password123";
  
  if (password === correctPassword) {
    // パスワードが正しい場合、メインページを表示
    document.getElementById('loginContainer').style.display = 'none';
    document.getElementById('mainContent').style.display = 'block';
    document.body.style.background = '#f9f9f9'; // 背景色を変更
  } else {
    alert('パスワードが間違っています。もう一度入力してください。');
  }
}

// エンターキーでサブミット（パスワード入力後にエンターでチェック）
document.getElementById("password").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    checkPassword(); // エンターキーが押されたらパスワードチェックを実行
  }
});

// ロゴアニメーション後にログインフォームを表示
window.onload = function() {
  setTimeout(function() {
    document.querySelector('.logo-container').style.display = 'none'; // ロゴ非表示
    document.getElementById('loginContainer').style.display = 'block'; // ログインフォーム表示
  }, 3000);  // ロゴが浮かび上がるアニメーション後に表示
};
