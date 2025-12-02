// data.js - KHO DỮ LIỆU
const appData = [
    {
        id: "cayvang",
        name: "Cây Vàng",
        logo: "https://dichvutaichinh247.com/wp-content/uploads/2024/10/cay-vang-vn-768x768.png",
        desc: "Vay nhanh lãi 0% - Top 1 hiện nay",
        limit: "10 Triệu",
        rate: "0% / 7 ngày",
        // Link kiếm tiền (Affiliate) thay vào đây
        affLink: "https://dinos.scaletrk.com/click?a=2801&o=935",
        // Link bài viết review (Tên file HTML ông sẽ tạo ở bước 4)
        reviewLink: "review-cay-vang.html",
        badge: "DUYỆT 99%",
        badgeColor: "bg-green-100 text-green-700",
        isHot: true
    },
    {
        id: "jeff",
        name: "Jeff App",
        logo: "https://dichvutaichinh247.com/wp-content/uploads/2021/09/vay-tien-online-jeff-e1729183715589.png",
        desc: "Robot tìm khoản vay tự động",
        limit: "15 Triệu",
        rate: "Thấp nhất",
        affLink: "https://ladipage.dinos.click/click?a=2801&o=161",
        reviewLink: "#", // Sau này tạo file review-jeff.html thì sửa lại chỗ này
        badge: "AUTO DUYỆT",
        badgeColor: "bg-blue-100 text-blue-700",
        isHot: true
    },
    {
        id: "moneycat",
        name: "MoneyCat",
        logo: "https://dichvutaichinh247.com/wp-content/uploads/2022/08/moneycat-logo-667x400.jpeg",
        desc: "0% Lãi suất cho khách mới",
        limit: "5 Triệu",
        rate: "0% Lãi",
        affLink: "https://dinos.scaletrk.com/click?a=2801&o=762",
        reviewLink: "#",
        badge: "UY TÍN",
        badgeColor: "bg-purple-100 text-purple-700",
        isHot: false
    }

    {
        id: "tamo",
        name: "Tamo", // Tên App
        logo: "LINK_ANH_LOGO_TAMO", // Link ảnh logo
        desc: "Duyệt vay tự động 24/7",
        limit: "7 Triệu",
        rate: "0% 30 ngày",
        affLink: "LINK_AFFILIATE_TAMO_CUA_ONG", // Link kiếm tiền
        reviewLink: "review-tamo.html", // Tên file bài viết (sẽ tạo ở bước 2)
        badge: "MỚI",
        badgeColor: "bg-yellow-100 text-yellow-700",
        isHot: true // Để true thì nó sẽ hiện lên đầu Sidebar các bài viết khác
    }, 

    // Muốn thêm app thì copy nguyên cục {} dán xuống dưới này
];
