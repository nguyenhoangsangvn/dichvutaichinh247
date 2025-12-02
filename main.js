// Render Trang Chủ
function renderHomeGrid(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    let html = '';
    appData.forEach(app => {
        html += `
        <div class="group bg-white rounded-2xl p-5 shadow-sm hover:shadow-lg border border-slate-100 transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full relative overflow-hidden">
            <a href="${app.reviewLink}" class="absolute inset-0 z-10" title="Xem chi tiết"></a>
            <div class="absolute top-4 right-4 ${app.badgeColor} text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider z-0">${app.badge}</div>
            <div class="flex items-center gap-4 mb-4 relative z-0">
                <div class="w-14 h-14 rounded-xl border border-slate-100 p-1 bg-white overflow-hidden shadow-sm"><img src="${app.logo}" class="w-full h-full object-contain rounded-lg"></div>
                <div class="flex-1 min-w-0 pr-6"><h3 class="font-bold text-slate-900 text-lg truncate">${app.name}</h3><div class="text-xs text-yellow-400">★★★★★</div></div>
            </div>
            <div class="grid grid-cols-2 gap-2 bg-slate-50 rounded-xl p-3 border border-slate-100 mb-5 relative z-0">
                <div class="text-center border-r border-slate-200"><p class="text-[10px] text-slate-400 font-bold uppercase">Hạn mức</p><p class="text-sm font-bold text-slate-900">${app.limit}</p></div>
                <div class="text-center"><p class="text-[10px] text-slate-400 font-bold uppercase">Lãi suất</p><p class="text-sm font-bold text-green-600">${app.rate}</p></div>
            </div>
            <a href="${app.affLink}" target="_blank" rel="nofollow" class="relative z-20 mt-auto w-full bg-slate-900 hover:bg-red-600 text-white font-bold py-3 rounded-xl text-center shadow-lg transition-colors flex items-center justify-center gap-2 text-sm uppercase">Đăng Ký Ngay</a>
        </div>`;
    });
    container.innerHTML = html;
}

// Render Sidebar
function renderSidebar(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    let html = '';
    const hotApps = appData.filter(app => app.isHot);
    hotApps.forEach(app => {
        html += `
        <div class="flex items-center gap-3 pb-3 border-b border-slate-50 last:border-0 last:pb-0">
            <img src="${app.logo}" class="w-12 h-12 rounded-lg border border-slate-100 object-contain bg-white">
            <div class="flex-1 min-w-0"><h4 class="font-bold text-slate-800 text-sm truncate">${app.name}</h4><span class="text-[10px] ${app.badgeColor} px-1.5 py-0.5 rounded font-bold">${app.badge}</span></div>
            <a href="${app.affLink}" target="_blank" rel="nofollow" class="bg-slate-900 text-white text-xs font-bold px-3 py-2 rounded-lg hover:bg-red-600 transition">Vay</a>
        </div>`;
    });
    container.innerHTML = html;
}
