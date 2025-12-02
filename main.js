// main.js - STYLE APP STORE

function renderAppList(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let html = '';
    appData.forEach((app, index) => {
        // Màu badge theo App Store (Xám nhạt)
        const badgeText = app.badge.replace('DUYỆT', '').replace('AUTO', '').trim();
        
        html += `
        <div class="relative flex items-center gap-4 p-4 hover:bg-gray-50 transition cursor-pointer group">
            <a href="${app.reviewLink}" class="absolute inset-0 z-10"></a>

            <span class="text-lg font-bold text-gray-400 w-4">${index + 1}</span>

            <div class="w-16 h-16 rounded-[14px] border border-gray-100 shadow-icon overflow-hidden bg-white flex-shrink-0">
                <img src="${app.logo}" alt="${app.name}" class="w-full h-full object-contain p-1">
            </div>

            <div class="flex-1 min-w-0">
                <h3 class="font-semibold text-gray-900 text-base truncate mb-0.5">${app.name}</h3>
                <p class="text-xs text-gray-500 truncate">${app.desc}</p>
                <div class="flex items-center gap-2 mt-1.5">
                    <span class="bg-gray-100 text-gray-500 text-[10px] font-bold px-2 py-0.5 rounded-md uppercase">
                        ${badgeText || 'HOT'}
                    </span>
                    <div class="flex text-[10px] text-gray-400">
                        <i class="fa-solid fa-star text-yellow-400"></i>
                        <span class="ml-1">4.9</span>
                    </div>
                </div>
            </div>

            <div class="flex flex-col items-center gap-1 z-20">
                <a href="${app.affLink}" target="_blank" rel="nofollow" class="bg-slate-100 hover:bg-slate-200 text-blue-600 font-bold text-xs px-5 py-1.5 rounded-full uppercase transition">
                    NHẬN
                </a>
                <span class="text-[9px] text-gray-400 font-medium">Trong ứng dụng</span>
            </div>
        </div>
        `;
    });
    container.innerHTML = html;
}

// Sidebar cho bài viết (Giữ nguyên hoặc update style tương tự)
function renderSidebar(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    // ... (Code cũ vẫn dùng tốt)
}
