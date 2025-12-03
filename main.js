aa// main.js - BẢN CHUẨN
function renderHomeGrid(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let html = '';
    appData.forEach(app => {
        // Xử lý màu badge
        let badgeClass = "bg-slate-100 text-slate-600";
        if (app.badge.includes("0%")) badgeClass = "bg-green-100 text-green-700";
        if (app.badge.includes("DUYỆT")) badgeClass = "bg-blue-100 text-blue-700";
        if (app.badge.includes("AUTO")) badgeClass = "bg-indigo-100 text-indigo-700";

        html += `
        <div class="group bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition-all duration-300 relative flex flex-col h-full">
            <a href="${app.reviewLink}" class="absolute inset-0 z-10" title="Xem chi tiết"></a>

            <div class="flex justify-between items-start mb-4">
                <div class="w-14 h-14 rounded-lg border border-slate-100 p-1 bg-white flex items-center justify-center shadow-sm">
                    <img src="${app.logo}" alt="${app.name}" class="w-full h-full object-contain rounded">
                </div>
                <span class="${badgeClass} text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wide z-20">
                    ${app.badge}
                </span>
            </div>

            <div class="flex-1">
                <h3 class="font-bold text-slate-900 text-lg mb-1 group-hover:text-blue-700 transition">${app.name}</h3>
                
                <div class="flex items-center gap-1 text-xs text-yellow-500 mb-4">
                    <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                    <span class="text-slate-400 ml-1 font-medium">(4.9)</span>
                </div>

                <div class="space-y-2 mb-6 border-t border-dashed border-slate-100 pt-3">
                    <div class="flex justify-between text-sm">
                        <span class="text-slate-500 text-xs">Hạn mức</span>
                        <span class="font-bold text-slate-900">${app.limit}</span>
                    </div>
                    <div class="flex justify-between text-sm">
                        <span class="text-slate-500 text-xs">Lãi suất</span>
                        <span class="font-bold text-green-600">${app.rate}</span>
                    </div>
                </div>
            </div>

            <a href="${app.affLink}" target="_blank" rel="nofollow" class="relative z-20 w-full block bg-slate-900 hover:bg-blue-700 text-white text-center font-bold py-3 rounded-lg transition-colors text-sm shadow-sm">
                Đăng Ký Ngay
            </a>
        </div>
        `;
    });
    container.innerHTML = html;
}

// Render Sidebar (giữ nguyên)
function renderSidebar(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    let html = '';
    const hotApps = appData.filter(app => app.isHot);
    hotApps.forEach(app => {
        html += `
        <div class="flex items-center gap-4 pb-4 border-b border-slate-50 last:border-0 last:pb-0 group relative">
            <a href="${app.reviewLink}" class="absolute inset-0 z-10"></a>
            <div class="w-12 h-12 rounded-lg border border-slate-100 p-1 bg-white shadow-sm flex items-center justify-center">
                <img src="${app.logo}" class="w-full h-full object-contain rounded">
            </div>
            <div class="flex-1 min-w-0">
                <h4 class="font-bold text-slate-900 text-sm truncate group-hover:text-blue-700 transition">${app.name}</h4>
                <p class="text-[10px] text-slate-500 font-medium">${app.limit}</p>
            </div>
            <a href="${app.affLink}" target="_blank" rel="nofollow" class="relative z-20 bg-slate-900 text-white text-[10px] font-bold px-3 py-2 rounded hover:bg-blue-800 transition">Vay</a>
        </div>`;
    });
    container.innerHTML = html;
}
