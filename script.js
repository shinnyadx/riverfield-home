// パスワードチェック
function checkPassword() {
  const password = document.getElementById('password').value;
  const correctPassword = "password123"; // 実際にはより安全な方法を推奨
  
  if (password === correctPassword) {
    document.getElementById('loginContainer').style.display = 'none';
    document.getElementById('mainContent').style.display = 'block';
    document.body.style.background = '#f9f9f9';
  } else {
    alert('パスワードが間違っています');
  }
}

// エンターキーで送信
document.getElementById("password").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    checkPassword();
  }
});

// 3秒後にログイン画面表示
window.onload = function() {
  setTimeout(function() {
    document.querySelector('.logo-container').style.display = 'none';
    document.getElementById('loginContainer').style.display = 'block';
  }, 3000);
};