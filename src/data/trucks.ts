// Truck data
export interface Truck {
  id: number;
  title: string;
  brand: string;
  model: string;
  year: number;
  mileage: number;
  fuel: string;
  transmission: string;
  engine: string;
  capacity: string;
  condition: 'new' | 'used';
  images: string[];
  description: string;
  features: string[];
  location: string;
  featured: boolean;
}

export const trucks: Truck[] = [
  {
    id: 1,
    title: "Hyundai HD370 2020",
    brand: "Hyundai",
    model: "HD370",
    year: 2020,
    mileage: 45000,
    fuel: "Diesel",
    transmission: "Số sàn",
    engine: "4.0L",
    capacity: "3.5 tấn",
    condition: "used",
    images: ["https://thacotai.vn/storage/hinh-anh-xe/thacotruck/tf420v-1/hinhdd-thaco-frontier-tf420-2s-1.png"],
    description: "Xe tải Hyundai HD370 2020, tình trạng tốt, đã qua kiểm tra kỹ lưỡng. Phù hợp cho vận chuyển hàng hóa trong thành phố.",
    features: ["Điều hòa", "Hệ thống phanh ABS", "Camera lùi", "Hệ thống định vị GPS"],
    location: "TP.HCM",
    featured: true
  },
  {
    id: 2,
    title: "Isuzu NPR 2019",
    brand: "Isuzu",
    model: "NPR",
    year: 2019,
    mileage: 52000,
    fuel: "Diesel",
    transmission: "Số sàn",
    engine: "3.0L",
    capacity: "3.0 tấn",
    condition: "used",
    images: ["/trucks/isuzu-npr-1.jpg", "/trucks/isuzu-npr-2.jpg"],
    description: "Xe tải Isuzu NPR 2019, động cơ bền bỉ, tiết kiệm nhiên liệu. Lý tưởng cho các doanh nghiệp vận tải.",
    features: ["Điều hòa", "Hệ thống phanh ABS", "Camera lùi"],
    location: "Hà Nội",
    featured: true
  },
  {
    id: 3,
    title: "Hino 300 2021",
    brand: "Hino",
    model: "300",
    year: 2021,
    mileage: 38000,
    fuel: "Diesel",
    transmission: "Số sàn",
    engine: "4.0L",
    capacity: "4.0 tấn",
    condition: "used",
    images: ["/trucks/hino-300-1.jpg", "/trucks/hino-300-2.jpg"],
    description: "Xe tải Hino 300 2021, công nghệ tiên tiến, độ bền cao. Phù hợp cho vận chuyển đường dài.",
    features: ["Điều hòa", "Hệ thống phanh ABS", "Camera lùi", "Hệ thống định vị GPS", "Cruise Control"],
    location: "Đà Nẵng",
    featured: true
  },
  {
    id: 4,
    title: "Mitsubishi Fuso 2018",
    brand: "Mitsubishi",
    model: "Fuso",
    year: 2018,
    mileage: 65000,
    fuel: "Diesel",
    transmission: "Số sàn",
    engine: "3.0L",
    capacity: "3.5 tấn",
    condition: "used",
    images: ["/trucks/mitsubishi-fuso-1.jpg", "/trucks/mitsubishi-fuso-2.jpg"],
    description: "Xe tải Mitsubishi Fuso 2018, giá cả hợp lý, phù hợp cho các doanh nghiệp nhỏ và vừa.",
    features: ["Điều hòa", "Hệ thống phanh ABS"],
    location: "Cần Thơ",
    featured: true
  },
  {
    id: 5,
    title: "Hyundai HD65 2022",
    brand: "Hyundai",
    model: "HD65",
    year: 2022,
    mileage: 15000,
    fuel: "Diesel",
    transmission: "Số sàn",
    engine: "2.5L",
    capacity: "2.5 tấn",
    condition: "used",
    images: ["/trucks/hyundai-hd65-1.jpg", "/trucks/hyundai-hd65-2.jpg"],
    description: "Xe tải Hyundai HD65 2022, mới, ít sử dụng. Phù hợp cho vận chuyển trong thành phố.",
    features: ["Điều hòa", "Hệ thống phanh ABS", "Camera lùi", "Hệ thống định vị GPS"],
    location: "TP.HCM",
    featured: false
  },
  {
    id: 6,
    title: "Isuzu NQR 2020",
    brand: "Isuzu",
    model: "NQR",
    year: 2020,
    mileage: 48000,
    fuel: "Diesel",
    transmission: "Số sàn",
    engine: "3.0L",
    capacity: "3.5 tấn",
    condition: "used",
    images: ["/trucks/isuzu-nqr-1.jpg", "/trucks/isuzu-nqr-2.jpg"],
    description: "Xe tải Isuzu NQR 2020, động cơ mạnh mẽ, tiết kiệm nhiên liệu. Lý tưởng cho vận chuyển hàng hóa.",
    features: ["Điều hòa", "Hệ thống phanh ABS", "Camera lùi"],
    location: "Hà Nội",
    featured: false
  }
];

export const brands = [...new Set(trucks.map(truck => truck.brand))];
export const years = [...new Set(trucks.map(truck => truck.year))].sort((a, b) => b - a);
export const conditions = [...new Set(trucks.map(truck => truck.condition))];
export const locations = [...new Set(trucks.map(truck => truck.location))];
