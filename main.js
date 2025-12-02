// main.js - XỬ LÝ GIAO DIỆN (Logic)

// 1. Render Danh Sách App Trang Chủ (Card VIP Style)
function renderHomeGrid(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let html = '';
    appData.forEach(app => {
        html += `
        <div class="group bg-white rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-100 transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full relative overflow-hidden">
            
            <a href="${app.reviewLink}" class="absolute inset-0 z-10" title="Xem chi tiết"></a>

            <div class="h-16 bg-gradient-to-r from-slate-50 to-white border-b border-slate-100 flex justify-between items-start p-4">
                <span class="${app.badgeColor} text-[10px] font-extrabold px-2.5 py-1 rounded-md shadow-sm uppercase tracking-wider z-20">
                    ${app.badge}
                </span>
                <div class="text-xs text-yellow-400 flex gap-0.5">
                    <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                </div>
            </div>

            <div class="px-5 -mt-8 relative z-0 mb-3">
                <div class="w-16 h-16 rounded-xl bg-white p-1 shadow-md border border-slate-50">
                    <img src="${app.logo}" alt="${app.name}" class="w-full h-full object-contain rounded-lg">
                </div>
            </div>

            <div class="px-5 pb-5 flex-1 flex flex-col">
                <h3 class="font-bold text-slate-900 text-lg mb-1 group-hover:text-blue-600 transition">${app.name}</h3>
                <p class="text-sm text-slate-500 mb-4 line-clamp-2 h-10 leading-snug">${app.desc}</p>
                
                <div class="grid grid-cols-2 gap-3 bg-slate-50 rounded-xl p-3 border border-slate-100 mb-5">
                    <div>
                        <p class="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Hạn mức</p>
                        <p class="text-sm font-black text-slate-800">${app.limit}</p>
                    </div>
                    <div class="text-right border-l border-slate-200 pl-3">
                        <p class="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Lãi suất</p>
                        <p class="text-sm font-black text-green-600">${app.rate}</p>
                    </div>
                </div>

                <a href="${app.affLink}" target="_blank" rel="nofollow" class="relative z-20 mt-auto w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3.5 rounded-xl text-center shadow-lg shadow-blue-200 transition-all active:scale-95 flex items-center justify-center gap-2 text-sm uppercase tracking-wide">
                    Đăng Ký Vay <i class="fa-solid fa-arrow-right"></i>
                </a>
                
                <div class="mt-3 text-center">
                    <span class="text-[10px] font-medium text-slate-400">
                        <i class="fa-regular fa-clock mr-1"></i> Giải ngân: 15 phút
                    </span>
                </div>
            </div>
        </div>
        `;
    });
    container.innerHTML = html;
}

// 2. Render Sidebar Bài Viết (App HOT)
function renderSidebar(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let html = '';
    const hotApps = appData.filter(app => app.isHot);

    hotApps.forEach(app => {
        html += `
        <div class="flex items-center gap-3 pb-3 border-b border-slate-50 last:border-0 last:pb-0 group">
            <div class="w-12 h-12 rounded-lg border border-slate-100 p-0.5 bg-white shadow-sm overflow-hidden">
                <img src="${app.logo}" class="w-full h-full object-contain rounded">
            </div>
            <div class="flex-1 min-w-0">
                <h4 class="font-bold text-slate-800 text-sm truncate group-hover:text-blue-600 transition">${app.name}</h4>
                <span class="text-[10px] ${app.badgeColor} px-1.5 py-0.5 rounded font-bold">${app.badge}</span>
            </div>
            <a href="${app.affLink}" target="_blank" rel="nofollow" class="bg-slate-900 text-white text-xs font-bold px-3 py-2 rounded-lg hover:bg-red-600 transition shadow-md">Vay</a>
        </div>
        `;
    });
    container.innerHTML = html;
}
