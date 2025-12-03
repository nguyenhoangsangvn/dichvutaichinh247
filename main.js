// 1. RENDER GRID (Card Style Neo-Fintech)
function renderHomeGrid(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let html = '';
    appData.forEach(app => {
        html += `
        <div class="group relative bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 overflow-hidden">
            <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

            <a href="${app.reviewLink}" class="absolute inset-0 z-10" title="Xem chi tiết"></a>

            <div class="flex justify-between items-start mb-6">
                <div class="w-16 h-16 rounded-2xl border border-slate-50 p-2 bg-white shadow-sm flex items-center justify-center">
                    <img src="${app.logo}" alt="${app.name}" class="w-full h-full object-contain rounded-lg">
                </div>
                <span class="${app.color} text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wide border border-current/10">
                    ${app.badge}
                </span>
            </div>

            <div class="mb-6">
                <h3 class="font-bold text-slate-900 text-xl mb-1">${app.name}</h3>
                <div class="flex items-center gap-2 mb-4">
                    <div class="flex text-yellow-400 text-xs"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
                    <span class="text-xs text-slate-400 font-medium">5.0</span>
                </div>
                
                <div class="bg-slate-50 rounded-xl p-4 flex justify-between items-center border border-slate-100">
                    <div>
                        <p class="text-[10px] text-slate-400 uppercase font-bold">Hạn mức</p>
                        <p class="text-sm font-black text-slate-900">${app.limit}</p>
                    </div>
                    <div class="w-px h-8 bg-slate-200"></div>
                    <div class="text-right">
                        <p class="text-[10px] text-slate-400 uppercase font-bold">Lãi suất</p>
                        <p class="text-sm font-black text-green-600">${app.rate}</p>
                    </div>
                </div>
            </div>

            <a href="${app.affLink}" target="_blank" rel="nofollow" class="relative z-20 flex items-center justify-center w-full bg-slate-900 hover:bg-blue-600 text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-slate-200 group-hover:shadow-blue-200">
                Đăng Ký Ngay <i class="fa-solid fa-arrow-right ml-2"></i>
            </a>
        </div>
        `;
    });
    container.innerHTML = html;
}

// 2. MÁY TÍNH KHOẢN VAY
function calculateLoan() {
    const amount = document.getElementById('amount-range').value;
    const months = document.getElementById('month-range').value;
    
    document.getElementById('amount-display').innerText = amount + '.000.000 đ';
    document.getElementById('month-display').innerText = months + ' Tháng';

    const totalAmount = parseInt(amount) * 1000000;
    const payment = Math.round(totalAmount / months);
    
    const formatMoney = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    
    document.getElementById('monthly-payment').innerText = formatMoney(payment) + ' đ';
    // Giả lập lãi suất gốc cao hơn
    const fakeOriginal = Math.round(payment * 1.18); 
    document.getElementById('total-original').innerText = formatMoney(fakeOriginal) + ' đ';
}

// KHỞI CHẠY
window.onload = function() {
    if(typeof calculateLoan === 'function') calculateLoan();
    if(typeof renderHomeGrid === 'function') renderHomeGrid('app-grid');
};
