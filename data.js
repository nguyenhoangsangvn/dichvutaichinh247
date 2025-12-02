const appData = [
    {
        id: "cayvang", // ⚠️ ID này là chìa khóa, không được trùng, viết liền không dấu
        name: "Cây Vàng",
        logo: "https://dichvutaichinh247.com/wp-content/uploads/2024/10/cay-vang-vn-768x768.png",
        desc: "Vay nhanh lãi 0% - Top 1 hiện nay",
        limit: "10 Triệu",
        rate: "0% / 7 ngày",
        affLink: "https://dinos.scaletrk.com/click?a=2801&o=935", // Link kiếm tiền
        reviewLink: "review.html?id=cayvang", // ⚠️ Cấu trúc bắt buộc: review.html?id=MÃ_ID
        badge: "DUYỆT 99%",
        badgeColor: "bg-green-100 text-green-700",
        isHot: true,
        // 👇 VIẾT BÀI REVIEW Ở ĐÂY (Trong dấu huyền ` `)
        content: `
            <p class="mb-4"><strong>Cây Vàng</strong> là app vay tiền nhanh nhất 2025. Duyệt tự động 100%.</p>
            <h3 class="text-xl font-bold mb-2">Ưu điểm:</h3>
            <ul class="list-disc pl-5 mb-4">
                <li>Không thẩm định người thân.</li>
                <li>Nhận tiền sau 15 phút.</li>
            </ul>
            <p>Nếu bạn cần gấp 1-10 triệu, đây là lựa chọn số 1.</p>
        `
    },
    {
        id: "jeff",
        name: "Jeff App",
        logo: "https://dichvutaichinh247.com/wp-content/uploads/2021/09/vay-tien-online-jeff-e1729183715589.png",
        desc: "Robot tìm khoản vay tự động",
        limit: "15 Triệu",
        rate: "Thấp nhất",
        affLink: "https://ladipage.dinos.click/click?a=2801&o=161",
        reviewLink: "review.html?id=jeff", // ⚠️ ID phải khớp với id: "jeff" ở trên
        badge: "AUTO DUYỆT",
        badgeColor: "bg-blue-100 text-blue-700",
        isHot: true,
        content: `
            <p class="mb-4">Jeff App không phải là người cho vay, mà là <strong>sàn kết nối tài chính</strong>.</p>
            <p>Hệ thống sẽ tự tìm các đơn vị chấp nhận hồ sơ của bạn.</p>
        `
    }

    {
        id: "tamo", // ID mới
        name: "Tamo",
        logo: "LINK_LOGO",
        desc: "Mô tả ngắn...",
        limit: "7 Triệu",
        rate: "0%",
        affLink: "LINK_KIEM_TIEN",
        reviewLink: "review.html?id=tamo", // ⚠️ Quan trọng: id phải khớp với id ở trên
        badge: "MỚI",
        badgeColor: "bg-yellow-100 text-yellow-700",
        isHot: true,
        content: `
            <p>Viết bài review về Tamo ở đây...</p>
            <p>Tamo vay dễ lắm...</p>
        `
    },
];
