// 检查登录状态
function checkLogin() {
    if (!localStorage.getItem('isLoggedIn')) {
        window.location.href = 'login.html';
    }
}

// 页面加载时检查登录状态
document.addEventListener('DOMContentLoaded', checkLogin);

// 退出登录
document.getElementById('logoutBtn').addEventListener('click', function() {
    localStorage.removeItem('isLoggedIn');
    window.location.href = 'login.html';
});

// 搜索功能
document.getElementById('searchBtn').addEventListener('click', function() {
    const searchInput = document.getElementById('searchInput').value;
    const searchType = document.getElementById('searchType').value;
    const resultsContainer = document.getElementById('searchResults');
    const resultCount = document.getElementById('resultCount');
    
    // 清空现有结果
    resultsContainer.innerHTML = '';
    
    // 这里添加搜索逻辑
    // ... 搜索逻辑代码 ...
    
    // 更新结果计数
    resultCount.textContent = `找到 0 条结果`;
});

// 模态框功能
const modal = document.getElementById('detailModal');
const closeBtn = document.getElementsByClassName('close')[0];

closeBtn.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}