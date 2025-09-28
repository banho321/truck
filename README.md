# 🚛 Truck Sales Website

Website bán xe tải với giao diện hiện đại, được xây dựng bằng Astro và Tailwind CSS.

## ✨ Tính năng

- 🏠 **Trang chủ** - Hiển thị xe tải nổi bật
- 🚛 **Danh sách xe tải** - Lọc theo hãng và danh mục
- 📄 **Chi tiết xe tải** - Thông tin đầy đủ từng xe
- 📞 **Liên hệ** - Thông tin liên lạc
- ℹ️ **Giới thiệu** - Thông tin công ty

## 🛠️ Công nghệ sử dụng

- **Astro** - Static Site Generator
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **JSON** - Data source

## 📁 Cấu trúc project

```
src/
├── components/          # Components tái sử dụng
│   ├── FeaturedTrucks.astro
│   ├── Features.astro
│   ├── Footer.astro
│   ├── Header.astro
│   ├── Hero.astro
│   └── TruckCard.astro
├── data/
│   └── trucksData.ts    # Data management
├── layouts/
│   └── Layout.astro     # Layout chính
├── pages/              # Các trang
│   ├── about.astro
│   ├── contact.astro
│   ├── index.astro
│   └── trucks/
│       ├── [id].astro
│       └── index.astro
└── styles/
    ├── global.css
    └── responsive.css
```

## 🚀 Cài đặt và chạy

### 1. Cài đặt dependencies
```bash
npm install
```

### 2. Chạy development server
```bash
npm run dev
```

### 3. Build production
```bash
npm run build
```

### 4. Preview production build
```bash
npm run preview
```

## 📊 Quản lý dữ liệu

### Thêm xe tải mới

1. **Mở file `api-test.json`**
2. **Tìm phần `cars` array**
3. **Chọn danh mục phù hợp** (VD: "TẢI NHẸ MÁY XĂNG THACO TOWNER")
4. **Thêm xe mới vào `car` array:**

```json
{
  "id": 89,
  "name": "Towner 900A - Thùng Kín",
  "slug": "towner-900a-thung-kin",
  "brand": "THACO TRUCK",
  "vehicleType": "TOWNER TẢI",
  "filterCategory": "Tải nhẹ máy xăng",
  "basic_specification": [
    {
      "title": "Tải trọng",
      "value": "1.25 tấn"
    },
    {
      "title": "Thùng (DxRxC)",
      "value": "2200 x 1330 x 285 mm"
    }
  ],
  "image": "https://thacotai.vn/storage/hinh-anh-xe/towner/towner-900a-thung-kin-800x800.jpg",
  "weight": 1.25
}
```

5. **Cập nhật `carsCount`** của danh mục
6. **Lưu file và chạy `npm run build`**

### Cấu trúc dữ liệu

- **`brands`** - Danh sách hãng xe
- **`cars`** - Danh sách xe tải theo danh mục
- **`listCategories`** - Danh mục lọc
- **`load`** - Tải trọng
- **`price`** - Giá xe

## 🎨 Customization

### Thay đổi màu sắc
Chỉnh sửa file `tailwind.config.mjs`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#eff6ff',
        500: '#3b82f6',
        600: '#2563eb',
        700: '#1d4ed8',
      }
    }
  }
}
```

### Thêm component mới
1. Tạo file trong `src/components/`
2. Import và sử dụng trong các trang

## 📱 Responsive Design

Website được thiết kế responsive cho:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)

## 🔧 Scripts

- `npm run dev` - Chạy development server
- `npm run build` - Build production
- `npm run preview` - Preview production build

## 📄 License

MIT License - Xem file LICENSE để biết thêm chi tiết.

## 🤝 Contributing

1. Fork project
2. Tạo feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Tạo Pull Request

## 📞 Liên hệ

- **Website**: [TruckSales.com](http://localhost:4324)
- **Email**: info@trucksales.com
- **Phone**: 0936777735

---

Made with ❤️ by TruckSales Team
