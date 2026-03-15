// Making tabs function

function switchTab(e, id) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    e.currentTarget.classList.add('active');
    document.getElementById('tab-' + id).classList.add('active');
}

function toggleCard(id) {
    document.getElementById(id).classList.toggle('open');
}