function renderHomeGrid(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let html = '';
    appData.forEach(app => {
        // Style badge nhẹ nhàng
        let badgeClass = "bg-slate-100 text-slate-600";
        if (app.badge.includes("0%")) badgeClass = "bg-green-50 text-green-700";
        if (app.badge.includes("DUYỆT")) badgeClass = "bg-blue-50 text-blue-700";

        html += `
        <div class="group bg-white rounded-xl border border-slate-200 p-6 transition-all duration-300 hover:shadow-hover hover:border-blue-200 relative flex flex-col h-full">
            <a href="${app.reviewLink}" class="absolute inset-0 z-10" title="Xem chi tiết"></a>

            <div class="flex justify-between items-start mb-6">
                <div class="w-14 h-14 rounded-lg border border-slate-100 p-1 bg-white flex items-center justify-center">
                    <img src="${app.logo}" alt="${app.name}" class="w-full h-full object-contain rounded">
                </div>
                <span class="${badgeClass} text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wide">
                    ${app.badge}
                </span>
            </div>

            <div class="flex-1">
                <h3 class="font-bold text-slate-900 text-lg mb-2 group-hover:text-blue-600 transition">${app.name}</h3>
                
                <div class="flex items-center gap-4 mb-4 text-sm border-t border-b border-slate-50 py-3">
                    <div class="pr-4 border-r border-slate-100">
                        <p class="text-[10px] text-slate-400 font-bold uppercase">Hạn mức</p>
                        <p class="font-bold text-slate-900">${app.limit}</p>
                    </div>
                    <div>
                        <p class="text-[10px] text-slate-400 font-bold uppercase">Lãi suất</p>
                        <p class="font-bold text-green-600">${app.rate}</p>
                    </div>
                </div>

                <p class="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-6">
                    ${app.desc}
                </p>
            </div>

            <a href="${app.affLink}" target="_blank" rel="nofollow" class="relative z-20 w-full block bg-primary hover:bg-accent text-white text-center font-bold py-3 rounded-lg transition-colors text-sm shadow-sm">
                Đăng Ký Hồ Sơ
            </a>
        </div>
        `;
    });
    container.innerHTML = html;
}

function renderSidebar(containerId) {
    // Giữ nguyên code cũ hoặc copy lại nếu cần
    const container = document.getElementById(containerId);
    if (!container) return;
    let html = '';
    const hotApps = appData.filter(app => app.isHot);
    hotApps.forEach(app => {
        html += `
        <div class="flex items-center gap-4 pb-4 border-b border-slate-50 last:border-0 last:pb-0">
            <div class="w-10 h-10 rounded-lg border border-slate-100 p-0.5 bg-white"><img src="${app.logo}" class="w-full h-full object-contain rounded"></div>
            <div class="flex-1 min-w-0"><h4 class="font-bold text-slate-900 text-xs truncate">${app.name}</h4><p class="text-[10px] text-slate-500">${app.limit}</p></div>
            <a href="${app.affLink}" target="_blank" rel="nofollow" class="text-blue-600 text-[10px] font-bold bg-blue-50 px-3 py-1.5 rounded hover:bg-blue-100 transition">Vay</a>
        </div>`;
    });
    container.innerHTML = html;
}
