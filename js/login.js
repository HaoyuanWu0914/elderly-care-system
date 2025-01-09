document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    
    // 简单的登录验证
    if (username === 'admin' && password === '123456') {
        // 登录成功，存储登录状态
        localStorage.setItem('isLoggedIn', 'true');
        // 跳转到主页
        window.location.href = 'main.html';
    } else {
        alert('账号或密码错误！\n默认账号：admin\n默认密码：123456');
    }
});
