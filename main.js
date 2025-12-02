function renderHomeGrid(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let html = '';
    appData.forEach(app => {
        let badgeClass = "bg-slate-100 text-slate-600";
        if (app.badge.includes("0%")) badgeClass = "bg-green-100 text-green-700";
        if (app.badge.includes("DUYỆT")) badgeClass = "bg-blue-100 text-blue-700";

        html += `
        <div class="group bg-white rounded-xl shadow-card hover:shadow-hover border border-slate-200 transition-all duration-300 relative flex flex-col h-full overflow-hidden">
            <a href="${app.reviewLink}" class="absolute inset-0 z-10" title="Xem chi tiết"></a>

            <div class="p-6 pb-4">
                <div class="flex justify-between items-start mb-4">
                    <div class="w-14 h-14 rounded-lg border border-slate-100 p-1 bg-white flex items-center justify-center">
                        <img src="${app.logo}" alt="${app.name}" class="w-full h-full object-contain rounded">
                    </div>
                    <span class="${badgeClass} text-[10px] font-bold px-2.5 py-1 rounded uppercase tracking-wide">
                        ${app.badge}
                    </span>
                </div>

                <h3 class="font-bold text-slate-900 text-lg mb-1 group-hover:text-blue-600 transition">${app.name}</h3>
                <p class="text-xs text-slate-500 line-clamp-2 h-8 mb-4">${app.desc}</p>
                
                <div class="grid grid-cols-2 gap-4 border-t border-slate-100 pt-4">
                    <div>
                        <p class="text-[10px] text-slate-400 font-bold uppercase">Hạn mức</p>
                        <p class="text-sm font-bold text-slate-900">${app.limit}</p>
                    </div>
                    <div>
                        <p class="text-[10px] text-slate-400 font-bold uppercase">Lãi suất</p>
                        <p class="text-sm font-bold text-green-600">${app.rate}</p>
                    </div>
                </div>
            </div>

            <div class="p-4 pt-0 mt-auto relative z-20">
                <a href="${app.affLink}" target="_blank" rel="nofollow" class="block w-full bg-primary hover:bg-accent text-white text-center font-bold py-3 rounded-lg transition-colors text-sm shadow-sm">
                    Đăng Ký Ngay
                </a>
            </div>
        </div>
        `;
    });
    container.innerHTML = html;
}
// ... (Phần renderSidebar giữ nguyên)
