import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  Phone, 
  Mail, 
  MapPin, 
  Star, 
  Award, 
  Gift,
  Shield,
  Waves,
  Building2,
  CheckCircle,
  ArrowRight,
  Play,
  X,
  Home,
  Car,
  Coffee,
  Dumbbell,
  ShoppingBag,
  TreePine,
  Sparkles,
  Heart,
  Target,
  TrendingUp
} from 'lucide-react';
import logoImage from './assets/icons/logo.jpg';
import iconImage from './assets/icons/iconPage-removebg-preview.png';

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  agreeToTerms: boolean;
}

interface Offer {
  icon: React.ReactNode;
  title: string;
  description: string;
  value: string;
  highlight?: boolean;
}



function App() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phone: '',
    email: '',
    agreeToTerms: false
  });
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  const offers: Offer[] = [
    {
      icon: <Gift className="w-6 h-6" />,
      title: "VVIP Site Tour",
      description: "Kỳ nghỉ 5 sao, du thuyền vịnh Ngọc, show Rối Mơ",
      value: "99 triệu",
      highlight: true
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Booking sớm",
      description: "Ưu đãi đặc biệt cho khách hàng tiên phong",
      value: "0,5% - 2%"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Cooling Back",
      description: "Rút tiền đặt cọc trong thời gian ngắn",
      value: "24 giờ"
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Quà tặng nội thất",
      description: "Dành cho 100 khách hàng đầu tiên",
      value: "200 triệu"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Chiết khấu trung bình",
      description: "Bàn giao thô, thanh toán linh hoạt",
      value: "1,6 tỷ/căn",
      highlight: true
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Ký HĐMB",
      description: "Cho 100 giao dịch đầu tiên",
      value: "Chỉ 5%"
    }
  ];

  // Hero background images từ pageMain folder
  const heroBackgrounds = [
    {
      src: "./src/assets/pictures/pageMain/output-1586.jpg",
      title: "Tổng quan La Tiên Villa",
      subtitle: "Vẻ đẹp toàn cảnh dự án"
    },
    {
      src: "./src/assets/pictures/pageMain/output-1585.jpg", 
      title: "Thiên đường nghỉ dưỡng",
      subtitle: "Không gian xanh mát bên biển"
    },
    {
      src: "./src/assets/pictures/pageMain/output-1584.jpg",
      title: "Villa cao cấp",
      subtitle: "Thiết kế hiện đại, sang trọng"
    },
    {
      src: "./src/assets/pictures/pageMain/output-1583.jpg",
      title: "Tiện ích đẳng cấp",
      subtitle: "Hệ sinh thái resort 5 sao"
    },
    {
      src: "./src/assets/pictures/pageMain/output-1582.jpg",
      title: "Vị trí kim cương",
      subtitle: "Mặt tiền biển Nha Trang"
    }
  ];

  // Auto change background every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % heroBackgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroBackgrounds.length]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.fullName && formData.phone && formData.email && formData.agreeToTerms) {
      alert('Cảm ơn bạn đã đăng ký! Chúng tôi sẽ liên hệ trong vòng 24h.');
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        agreeToTerms: false
      });
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Premium Header */}
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500">
        <div className="bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-2xl">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Premium Logo */}
              <div className="flex items-center space-x-3 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
                  <img src={iconImage} alt="La Tiên Villa Icon" className="relative w-10 h-10 object-contain" />
                </div>
                <div>
                  <span className="text-xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                    La Tiên Villa
                  </span>
                  <div className="text-xs text-white/70 font-medium">Biểu tượng nghỉ dưỡng</div>
                </div>
              </div>

              {/* Premium Navigation */}
              <nav className="hidden lg:flex items-center space-x-8">
                {[
                  { label: 'Giới thiệu', section: 'about' },
                  { label: 'Vị trí', section: 'location' },
                  { label: 'Tiện ích', section: 'features' },
                  { label: 'Mặt bằng', section: 'masterplan' },
                  { label: 'Ưu đãi', section: 'offers' }
                ].map((item, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(item.section)}
                    className="relative text-white/90 hover:text-white font-medium transition-all duration-300 group"
                  >
                    <span className="relative z-10">{item.label}</span>
                    <div className="absolute inset-0 bg-white/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></div>
                  </button>
                ))}
                
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="relative px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold rounded-full overflow-hidden group hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 flex items-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>0896.68.66.68</span>
                  </span>
                  <div className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </button>
              </nav>

              {/* Mobile Menu Button */}
              <button className="lg:hidden text-white p-2">
                <div className="space-y-1">
                  <div className="w-6 h-0.5 bg-white"></div>
                  <div className="w-6 h-0.5 bg-white"></div>
                  <div className="w-6 h-0.5 bg-white"></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Slideshow */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Slideshow */}
        {heroBackgrounds.map((bg, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center hero-bg-slide ken-burns ${
              index === currentBgIndex ? 'active opacity-100' : 'inactive opacity-0'
            }`}
            style={{
              backgroundImage: `url("${bg.src}")`
            }}
          ></div>
        ))}
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/90 via-indigo-800/80 to-blue-900/90 z-10"></div>
        
        <div className="relative z-20 text-center text-white max-w-5xl mx-auto px-6">
          {/* Premium Typography */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-6 leading-tight tracking-wide">
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                La Tiên Villa
              </span>
            </h1>
            <div className="relative">
              <p className="text-xl md:text-2xl lg:text-3xl mb-4 font-light tracking-wide opacity-95">
                Biểu tượng nghỉ dưỡng mới tại Nha Trang
              </p>
              <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-6"></div>
            </div>
            <p className="text-lg md:text-xl lg:text-2xl font-light opacity-90 italic tracking-wide max-w-4xl mx-auto leading-relaxed">
              "Sống cùng miền Tiên - Nơi thiên nhiên và con người hòa làm một"
            </p>
          </div>
          
          {/* Premium CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={() => scrollToSection('contact')}
              className="group relative px-10 py-5 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white rounded-full overflow-hidden hover:shadow-2xl hover:shadow-orange-500/30 transition-all duration-500 transform hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
              <span className="relative z-10 flex items-center gap-3 text-lg font-bold tracking-wide">
                <Gift className="w-6 h-6" />
                Nhận bảng giá & CSBH VIP
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
            
            <button 
              onClick={() => setShowVideoModal(true)}
              className="group relative px-8 py-4 border-2 border-white/50 text-white rounded-full backdrop-blur-sm hover:backdrop-blur-md transition-all duration-500 hover:border-white hover:shadow-2xl hover:shadow-white/20"
            >
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
              <span className="relative z-10 flex items-center gap-3 text-base font-semibold tracking-wide">
                <div className="relative">
                  <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-white/30 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500"></div>
                </div>
                Xem video giới thiệu
              </span>
            </button>
          </div>
        </div>
        
        {/* Slideshow Controls */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex space-x-3 mb-4">
            {heroBackgrounds.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentBgIndex(index)}
                className={`w-3 h-3 rounded-full slideshow-indicator ${
                  index === currentBgIndex 
                    ? 'bg-white scale-125 active' 
                    : 'bg-white/50 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>
        
        {/* Current Image Info */}
        <div className="absolute bottom-32 left-6 z-20 text-white">
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 max-w-xs">
            <h3 className="text-lg font-bold mb-1">
              {heroBackgrounds[currentBgIndex]?.title}
            </h3>
            <p className="text-sm text-white/80">
              {heroBackgrounds[currentBgIndex]?.subtitle}
            </p>
          </div>
        </div>
        
        {/* Navigation Arrows */}
        <button
          onClick={() => setCurrentBgIndex((prev) => (prev - 1 + heroBackgrounds.length) % heroBackgrounds.length)}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 nav-arrow bg-black/30 text-white p-3 rounded-full"
        >
          <ChevronDown className="w-6 h-6 rotate-90" />
        </button>
        
        <button
          onClick={() => setCurrentBgIndex((prev) => (prev + 1) % heroBackgrounds.length)}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 nav-arrow bg-black/30 text-white p-3 rounded-full"
        >
          <ChevronDown className="w-6 h-6 -rotate-90" />
        </button>
        
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-white/70 hover:text-white transition-colors animate-bounce"
          >
            <ChevronDown className="w-6 h-6" />
          </button>
        </div>
      </section>



      {/* About Section - Về dự án */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Về dự án La Tiên Villa
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                La Tiên Villa tọa lạc tại vịnh Nha Trang – một trong những vịnh biển đẹp nhất thế giới, 
                dự án sở hữu vị trí chiến lược, quy hoạch đồng bộ và chuỗi tiện ích 5 sao. 
                Đây không chỉ là nơi an cư nghỉ dưỡng mà còn là sản phẩm đầu tư tiềm năng bậc nhất miền Trung.
              </p>
            </div>

            {/* Infographic */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 text-center border border-blue-100">
                <div className="text-blue-600 mb-3">
                  <Building2 className="w-10 h-10 mx-auto" />
                  </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Quy mô</h3>
                <p className="text-sm text-gray-600 mb-2">Hơn 50 ha</p>
                <p className="text-xs text-blue-600 font-semibold">Villa nghỉ dưỡng cao cấp</p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 text-center border border-green-100">
                <div className="text-green-600 mb-3">
                  <Home className="w-10 h-10 mx-auto" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Loại hình</h3>
                <p className="text-sm text-gray-600 mb-2">4 phân khu</p>
                <p className="text-xs text-green-600 font-semibold">Oceanview, Central, Garden, Sandy</p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-6 text-center border border-purple-100">
                <div className="text-purple-600 mb-3">
                  <Award className="w-10 h-10 mx-auto" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Chủ đầu tư</h3>
                <p className="text-sm text-gray-600 mb-2">KDI Holdings</p>
                <p className="text-xs text-purple-600 font-semibold">Uy tín 15+ năm kinh nghiệm</p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-6 text-center border border-orange-100">
                <div className="text-orange-600 mb-3">
                  <Star className="w-10 h-10 mx-auto" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Pháp lý</h3>
                <p className="text-sm text-gray-600 mb-2">Sổ đỏ lâu dài</p>
                <p className="text-xs text-orange-600 font-semibold">Hoàn chỉnh 100%</p>
              </div>
            </div>

            {/* Key Features */}
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="relative">
                <img 
                  src="https://www.annhome.vn/wp-content/uploads/2024/08/La-Tien-Villa-Nha-Trang.jpg"
                  alt="La Tiên Villa - Phối cảnh tổng thể"
                  className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
                />
                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-xl border">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  <div>
                      <p className="font-semibold text-gray-900 text-sm">Đã khởi công</p>
                      <p className="text-xs text-gray-600">Tiến độ đúng cam kết</p>
                    </div>
                  </div>
                  </div>
                </div>
                
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Vị trí kim cương</h4>
                    <p className="text-sm text-gray-600">Mặt tiền biển Nha Trang, 30 phút đến sân bay Cam Ranh</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Tiện ích resort 5 sao</h4>
                    <p className="text-sm text-gray-600">Hồ bơi vô cực, spa, nhà hàng, sân golf mini</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Thiết kế bền vững</h4>
                    <p className="text-sm text-gray-600">Kiến trúc hài hòa với thiên nhiên, thân thiện môi trường</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Tiềm năng sinh lời cao</h4>
                    <p className="text-sm text-gray-600">Cam kết hỗ trợ cho thuê, lợi nhuận 8-12%/năm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section - Vị trí kết nối */}
      <section id="location" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Vị trí kết nối kim cương
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                La Tiên Villa nằm trên trục kết nối huyết mạch, chỉ 30 phút tới sân bay Cam Ranh, 
                15 phút đến trung tâm Nha Trang. Từ đây, dễ dàng tiếp cận các điểm du lịch nổi tiếng, 
                bến du thuyền và hệ sinh thái nghỉ dưỡng ven biển.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Sân bay Cam Ranh</h3>
                    <p className="text-sm text-gray-600">30 phút di chuyển</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Building2 className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Trung tâm Nha Trang</h3>
                    <p className="text-sm text-gray-600">15 phút di chuyển</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Waves className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Bến du thuyền</h3>
                    <p className="text-sm text-gray-600">5 phút đi bộ</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <Car className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Quốc lộ 1A</h3>
                    <p className="text-sm text-gray-600">Kết nối Bắc - Nam</p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 text-center">
                  <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Bản đồ vị trí</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Tọa lạc tại vị trí đắc địa nhất vịnh Nha Trang
                  </p>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors">
                    Xem bản đồ chi tiết
                  </button>
                </div>
              </div>
            </div>

            {/* Nearby Attractions */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Điểm du lịch nổi tiếng lân cận</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Star className="w-6 h-6 text-yellow-600" />
                </div>
                  <h4 className="font-semibold text-gray-900 mb-1">Vinpearl Land</h4>
                  <p className="text-sm text-gray-600">10 phút di chuyển</p>
                </div>
                <div className="text-center">
                  <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Waves className="w-6 h-6 text-teal-600" />
                </div>
                  <h4 className="font-semibold text-gray-900 mb-1">Bãi biển Nha Trang</h4>
                  <p className="text-sm text-gray-600">Mặt tiền trực tiếp</p>
              </div>
                <div className="text-center">
                  <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <TreePine className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">Đảo Hòn Tre</h4>
                  <p className="text-sm text-gray-600">15 phút đi thuyền</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Tiện ích đẳng cấp */}
      <section id="features" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Tiện ích đẳng cấp resort 5 sao
                </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Hệ sinh thái tiện ích hoàn hảo đáp ứng mọi nhu cầu từ văn hóa, giải trí, thể thao đến ẩm thực, 
                mang đến lifestyle nghỉ dưỡng đẳng cấp quốc tế.
              </p>
            </div>

            {/* 4 nhóm tiện ích chính */}
            <div className="space-y-12">
              {/* Văn hóa - Nghệ thuật */}
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-8">
                <div className="text-center mb-8">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Văn hóa - Nghệ thuật</h3>
                  <p className="text-gray-600">Không gian văn hóa đa dạng, nâng tầm tinh thần</p>
                  </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                    <Star className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">Quảng trường Âm nhạc</h4>
                    <p className="text-sm text-gray-600">Sân khấu ngoài trời với chương trình nghệ thuật thường xuyên</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                    <Building2 className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">Nhà hát Đó</h4>
                    <p className="text-sm text-gray-600">Không gian biểu diễn chuyên nghiệp, âm thanh hiện đại</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                    <Waves className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">Sân khấu nhạc nước</h4>
                    <p className="text-sm text-gray-600">Show diễn nghệ thuật kết hợp ánh sáng và âm nhạc</p>
                  </div>
                </div>
              </div>
              
              {/* Giải trí - Nghỉ dưỡng */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8">
                <div className="text-center mb-8">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Gift className="w-8 h-8 text-blue-600" />
                    </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Giải trí - Nghỉ dưỡng</h3>
                  <p className="text-gray-600">Trải nghiệm nghỉ dưỡng đẳng cấp quốc tế</p>
                  </div>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                    <Waves className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">Yacht Clubhouse</h4>
                    <p className="text-sm text-gray-600">Câu lạc bộ du thuyền cao cấp</p>
                </div>
                  <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                    <Waves className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">Hồ bơi Infinity</h4>
                    <p className="text-sm text-gray-600">Hồ bơi vô cực view biển</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                    <Heart className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">Healing Center</h4>
                    <p className="text-sm text-gray-600">Trung tâm chăm sóc sức khỏe</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                    <Sparkles className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">Song Spa</h4>
                    <p className="text-sm text-gray-600">Spa cao cấp phong cách Á Đông</p>
                  </div>
              </div>
            </div>

              {/* Thể thao */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8">
                <div className="text-center mb-8">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Dumbbell className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Thể thao</h3>
                  <p className="text-gray-600">Chuỗi tiện ích thể thao đa dạng, hiện đại</p>
                </div>
            <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                    <Target className="w-8 h-8 text-green-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">Sân Pickleball</h4>
                    <p className="text-sm text-gray-600">Môn thể thao thịnh hành hiện nay</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                    <Waves className="w-8 h-8 text-green-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">Thể thao biển Vasada</h4>
                    <p className="text-sm text-gray-600">Lướt sóng, chèo thuyền kayak</p>
                </div>
                  <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                    <Dumbbell className="w-8 h-8 text-green-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">Sân thể thao tổng hợp</h4>
                    <p className="text-sm text-gray-600">Tennis, bóng rổ, cầu lông</p>
                  </div>
                </div>
              </div>

              {/* Ẩm thực - Mua sắm */}
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-3xl p-8">
                <div className="text-center mb-8">
                  <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Coffee className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Ẩm thực - Mua sắm</h3>
                  <p className="text-gray-600">Thiên đường ẩm thực và mua sắm đẳng cấp</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                    <Coffee className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">Nhà hàng Nhật ShiBui</h4>
                    <p className="text-sm text-gray-600">Tinh hoa ẩm thực Nhật Bản</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                    <Star className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">Hispania Restaurant</h4>
                    <p className="text-sm text-gray-600">Hương vị Tây Ban Nha đích thực</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                    <TreePine className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">Natura Restaurant</h4>
                    <p className="text-sm text-gray-600">Ẩm thực hữu cơ, thân thiện môi trường</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                    <ShoppingBag className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-2">Shophouse 24/7</h4>
                    <p className="text-sm text-gray-600">Phố thương mại sầm uất</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Master Plan & Unit Plan Section - Mặt bằng & Mã căn */}
      <section id="masterplan" className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url("./src/assets/pictures/output-042.jpg")'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/70 to-transparent"></div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="text-white space-y-8">
                <div>
                  <h2 className="text-5xl md:text-7xl font-light mb-4 leading-tight">
                    Những ngôi nhà
              </h2>
                  <h3 className="text-3xl md:text-4xl font-light italic opacity-90 mb-6">
                    Biết Thở
                  </h3>
                </div>
                
                <div className="space-y-4 text-lg md:text-xl font-light leading-relaxed opacity-90">
                  <p>Thiết kế "Lost in Nature",</p>
                  <p>Nằm lặng cây xanh ôm trọn hiên nhà,</p>
                  <p>Gần 14.000m² mặt nước len lỏi khắp không gian,</p>
                  <p>Ba bãi tắm riêng tư, trải rộng giữa vịnh trời.</p>
                </div>

                <div className="pt-6">
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/30 transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center gap-3"
                  >
                    Tải chi tiết mặt bằng & mã căn PDF
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Right Content - Villa Types */}
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-2xl font-bold text-white">Oceanview Villa</h4>
                    <div className="text-white/80">
                      <Waves className="w-8 h-8" />
                    </div>
                  </div>
                  <p className="text-white/90 mb-3 leading-relaxed">
                    Villa mặt biển với tầm nhìn panorama ra vịnh Nha Trang, 
                    thiết kế hiện đại hòa quyện với thiên nhiên.
                  </p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-white/80">Diện tích: 180-250m²</span>
                    <span className="text-yellow-400 font-semibold">Từ 12-18 tỷ</span>
                  </div>
            </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-2xl font-bold text-white">Central Villa</h4>
                    <div className="text-white/80">
                      <Building2 className="w-8 h-8" />
                  </div>
                  </div>
                  <p className="text-white/90 mb-3 leading-relaxed">
                    Villa trung tâm khu vực, gần các tiện ích chính, 
                    phù hợp cho gia đình và đầu tư cho thuê.
                  </p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-white/80">Diện tích: 154-210m²</span>
                    <span className="text-yellow-400 font-semibold">Từ 8-15 tỷ</span>
                </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-2xl font-bold text-white">Garden Villa</h4>
                    <div className="text-white/80">
                      <TreePine className="w-8 h-8" />
                    </div>
                  </div>
                  <p className="text-white/90 mb-3 leading-relaxed">
                    Villa vườn với không gian xanh mát, 
                    thiết kế riêng tư và yên tĩnh cho nghỉ dưỡng.
                  </p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-white/80">Diện tích: 200-280m²</span>
                    <span className="text-yellow-400 font-semibold">Từ 10-16 tỷ</span>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-2xl font-bold text-white">Sandy Villa</h4>
                    <div className="text-white/80">
                      <Star className="w-8 h-8" />
                    </div>
                  </div>
                  <p className="text-white/90 mb-3 leading-relaxed">
                    Villa cát trắng với bãi tắm riêng, 
                    trải nghiệm nghỉ dưỡng đẳng cấp nhất.
                  </p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-white/80">Diện tích: 220-300m²</span>
                    <span className="text-yellow-400 font-semibold">Từ 15-25 tỷ</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Information Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Khoảnh khắc gắn kết - Lễ ký kết đại lý
              </h2>
              <p className="text-base text-gray-600 max-w-3xl mx-auto">
                Cao trào của sự kiện vang lên trong lễ ký kết hợp tác với các đại lý phân phối chính thức. 
                Những cái bắt tay, những tấm chứng nhận trao tay đã khẳng định: La Tiên Villa không đi một mình.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border mb-12">
              <p className="text-base text-gray-600 leading-relaxed mb-6">
                Đằng sau dự án này là sự đồng hành của những đối tác chiến lược, cùng chung tầm nhìn đưa La Tiên trở thành chuẩn mực mới cho bất động sản nghỉ dưỡng.
                Ánh đèn flash chớp sáng liên tục, ghi lại khoảnh khắc khởi đầu một chặng đường mới hành trình đồng hành và kiến tạo giá trị.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
                <div className="text-blue-600 mb-3">
                  <MapPin className="w-8 h-8" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">Vị trí</h3>
                <p className="text-xs text-gray-600 mb-2">Trung tâm Nha Trang, Khánh Hòa</p>
                <p className="text-sm text-blue-600 font-semibold">5 phút đến biển</p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
                <div className="text-green-600 mb-3">
                  <Building2 className="w-8 h-8" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">Quy mô</h3>
                <p className="text-xs text-gray-600 mb-2">Villa nghỉ dưỡng cao cấp</p>
                <p className="text-sm text-green-600 font-semibold">50+ căn villa</p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-6 border border-purple-100">
                <div className="text-purple-600 mb-3">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">Tiến độ</h3>
                <p className="text-xs text-gray-600 mb-2">Đang xây dựng</p>
                <p className="text-sm text-purple-600 font-semibold">Bàn giao Q4/2024</p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-6 border border-orange-100">
                <div className="text-orange-600 mb-3">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">Chủ đầu tư</h3>
                <p className="text-xs text-gray-600 mb-2">KDI Holdings</p>
                <p className="text-sm text-orange-600 font-semibold">Uy tín 15+ năm</p>
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-6 border border-teal-100">
                <div className="text-teal-600 mb-3">
                  <Star className="w-8 h-8" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">Pháp lý</h3>
                <p className="text-xs text-gray-600 mb-2">Sổ đỏ sở hữu lâu dài</p>
                <p className="text-sm text-teal-600 font-semibold">Hoàn chỉnh 100%</p>
              </div>

              <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-6 border border-rose-100">
                <div className="text-rose-600 mb-3">
                  <Heart className="w-8 h-8" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">Giá bán</h3>
                <p className="text-xs text-gray-600 mb-2">Từ 8-15 tỷ/căn</p>
                <p className="text-sm text-rose-600 font-semibold">Chiết khấu 1.6 tỷ</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offers Section - Chính sách bán hàng */}
      <section id="offers" className="py-20 bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Chính sách bán hàng đặc biệt
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Nhà đầu tư La Tiên Villa được hưởng ưu đãi hấp dẫn: thanh toán linh hoạt, 
                chiết khấu lên đến 1.6 tỷ, quà tặng cho khách hàng tiên phong.
              </p>
            </div>

            {/* Main Offers Grid */}
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {/* Left - Key Offers */}
              <div className="space-y-6">
                {offers.filter(offer => offer.highlight).map((offer, index) => (
                <div
                  key={index}
                    className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl p-6 text-white shadow-2xl transform hover:scale-105 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-white/90">
                    {offer.icon}
                      </div>
                      <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold">
                        SIÊU HOT
                      </span>
                  </div>
                  
                    <h3 className="text-2xl font-bold mb-3">
                    {offer.title}
                  </h3>
                  
                    <p className="text-white/90 mb-4 leading-relaxed">
                    {offer.description}
                  </p>
                  
                    <div className="text-3xl font-bold">
                    {offer.value}
                  </div>
                </div>
              ))}
            </div>

              {/* Right - Other Benefits */}
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Ưu đãi bổ sung
                </h3>
                <div className="space-y-4">
                  {offers.filter(offer => !offer.highlight).map((offer, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                      <div className="text-orange-600 mt-1">
                        {offer.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {offer.title}
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          {offer.description}
                        </p>
                        <span className="text-lg font-bold text-orange-600">
                          {offer.value}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Payment & Financing Table */}
            <div className="bg-white rounded-3xl p-8 shadow-xl mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Bảng tiến độ thanh toán & Ưu đãi vay vốn
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Payment Schedule */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Tiến độ thanh toán</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <span className="text-sm font-medium text-gray-700">Ký HĐMB</span>
                      <span className="font-bold text-green-600">5% (100 khách đầu)</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                      <span className="text-sm font-medium text-gray-700">Trong 30 ngày</span>
                      <span className="font-bold text-blue-600">15%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                      <span className="text-sm font-medium text-gray-700">Theo tiến độ xây dựng</span>
                      <span className="font-bold text-purple-600">60%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                      <span className="text-sm font-medium text-gray-700">Bàn giao</span>
                      <span className="font-bold text-orange-600">20%</span>
                    </div>
                  </div>
                </div>

                {/* Bank Support */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Hỗ trợ vay vốn</h4>
                  <div className="space-y-4">
                    <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
                      <div className="flex items-center space-x-3 mb-2">
                        <Shield className="w-5 h-5 text-blue-600" />
                        <span className="font-semibold text-gray-900">Vietinbank & Sacombank</span>
                      </div>
                      <p className="text-sm text-gray-600">Lãi suất ưu đãi 0% trong 24 tháng đầu</p>
                    </div>
                    <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
                      <div className="flex items-center space-x-3 mb-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <span className="font-semibold text-gray-900">Vay đến 70%</span>
                      </div>
                      <p className="text-sm text-gray-600">Thời gian vay lên đến 25 năm</p>
                    </div>
                    <div className="p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl">
                      <div className="flex items-center space-x-3 mb-2">
                        <Gift className="w-5 h-5 text-yellow-600" />
                        <span className="font-semibold text-gray-900">Miễn phí</span>
                      </div>
                      <p className="text-sm text-gray-600">Phí thẩm định, phí bảo hiểm năm đầu</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-orange-400 to-red-400 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">
                  Cơ hội có hạn - Chỉ dành cho 100 khách hàng đầu tiên
                </h3>
                <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                  Đăng ký ngay để được tư vấn chi tiết và nhận ưu đãi độc quyền. 
                  Đội ngũ chuyên gia sẽ liên hệ trong vòng 30 phút.
                </p>
              <button 
                onClick={() => scrollToSection('contact')}
                  className="bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-orange-50 transition-all duration-300 hover:shadow-2xl hover:scale-105 inline-flex items-center gap-3"
              >
                  Nhận ưu đãi ngay hôm nay
                  <ArrowRight className="w-6 h-6" />
              </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Potential Section - Tiềm năng đầu tư */}
      <section id="investment" className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url("./src/assets/pictures/output-031.jpg")'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/90 via-blue-800/80 to-purple-900/90"></div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
                Tại sao nên đầu tư ngay hôm nay?
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
                Nha Trang thuộc top điểm đến du lịch quốc tế. La Tiên Villa sở hữu vị trí hiếm có 
                + tiện ích khác biệt, tiềm năng tăng giá và sinh lời cao.
              </p>
            </div>

            {/* Investment Reasons */}
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {/* Left - Key Statistics */}
              <div className="space-y-8">
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 transform hover:scale-105 transition-all duration-500 animate-slide-in-left">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-yellow-400 rounded-full p-4">
                      <Star className="w-8 h-8 text-yellow-800" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Top điểm đến du lịch</h3>
                      <p className="text-white/80">Nha Trang - Vịnh biển đẹp nhất thế giới</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-yellow-400 mb-1">8M+</div>
                      <div className="text-sm text-white/80">Khách du lịch/năm</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-yellow-400 mb-1">25%</div>
                      <div className="text-sm text-white/80">Tăng trưởng hàng năm</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 transform hover:scale-105 transition-all duration-500 animate-slide-in-left animation-delay-300">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-green-400 rounded-full p-4">
                      <TrendingUp className="w-8 h-8 text-green-800" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Tiềm năng tăng giá</h3>
                      <p className="text-white/80">Bất động sản nghỉ dưỡng ven biển</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-400 mb-1">15-20%</div>
                      <div className="text-sm text-white/80">Tăng giá/năm</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-400 mb-1">8-12%</div>
                      <div className="text-sm text-white/80">Lợi nhuận cho thuê</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Benefits */}
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-white mb-8 animate-slide-in-right">
                  Lợi ích khi đầu tư La Tiên Villa
                </h3>
                
                <div className="space-y-4">
                  {[
                    {
                      icon: <MapPin className="w-6 h-6" />,
                      title: "Vị trí kim cương",
                      desc: "Mặt tiền biển Nha Trang, gần sân bay và trung tâm thành phố"
                    },
                    {
                      icon: <Building2 className="w-6 h-6" />,
                      title: "Sản phẩm độc quyền",
                      desc: "Villa biết thở với thiết kế Lost in Nature, không gian 14.000m² mặt nước"
                    },
                    {
                      icon: <Shield className="w-6 h-6" />,
                      title: "Pháp lý minh bạch",
                      desc: "Sổ đỏ sở hữu lâu dài, hoàn chỉnh 100% thủ tục pháp lý"
                    },
                    {
                      icon: <Heart className="w-6 h-6" />,
                      title: "Cam kết vận hành",
                      desc: "Hỗ trợ khai thác cho thuê, đảm bảo lợi nhuận ổn định"
                    },
                    {
                      icon: <Gift className="w-6 h-6" />,
                      title: "Ưu đãi đặc biệt",
                      desc: "Chiết khấu lên đến 1.6 tỷ, thanh toán linh hoạt 0% lãi suất"
                    }
                  ].map((benefit, index) => (
                    <div 
                      key={index}
                      className="flex items-start space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 transform hover:bg-white/20 transition-all duration-300 animate-slide-in-right"
                      style={{animationDelay: `${index * 100}ms`}}
                    >
                      <div className="text-blue-300 mt-1">
                        {benefit.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">{benefit.title}</h4>
                        <p className="text-sm text-white/80">{benefit.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-3xl p-8 text-gray-900 transform hover:scale-105 transition-all duration-500 animate-bounce-in">
                <h3 className="text-3xl font-bold mb-4">
                  🔥 Cơ hội đầu tư thế kỷ - Chỉ có tại La Tiên Villa
                </h3>
                <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
                  Đừng để lỡ cơ hội sở hữu villa biển hiếm có tại vịnh đẹp nhất thế giới. 
                  Liên hệ ngay để được tư vấn và nhận ưu đãi độc quyền!
                </p>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-gray-900 text-white px-10 py-4 rounded-full text-xl font-bold hover:bg-gray-800 transition-all duration-300 hover:shadow-2xl hover:scale-110 inline-flex items-center gap-3"
                >
                  Đầu tư ngay hôm nay
                  <ArrowRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section with Book Effect */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Thư viện hình ảnh & Tiến độ
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Khám phá vẻ đẹp tuyệt vời của La Tiên Villa qua bộ sưu tập hình ảnh độc quyền
                và cập nhật tiến độ xây dựng mới nhất
              </p>
            </div>

            {/* Interactive Photo Book */}
            <div className="mb-16">
              <div className="relative max-w-4xl mx-auto">
                <div className="bg-gradient-to-r from-amber-100 to-yellow-50 rounded-3xl p-8 shadow-2xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                    📖 Album ảnh La Tiên Villa
                  </h3>
                  
                  {/* Book Pages */}
                  <div className="relative h-96 bg-white rounded-2xl shadow-inner overflow-hidden">
                    <div className="grid grid-cols-2 h-full">
                      {/* Left Page */}
                      <div className="relative p-6 border-r border-gray-200">
                        <img 
                          src="./src/assets/pictures/output-018.jpg"
                          alt="Villa Overview"
                          className="w-full h-64 object-cover rounded-lg shadow-md mb-4"
                        />
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">Tổng quan dự án</h4>
                        <p className="text-sm text-gray-600">Phối cảnh tổng thể khu villa nghỉ dưỡng La Tiên Villa với thiết kế hiện đại</p>
                      </div>
                      
                      {/* Right Page */}
                      <div className="relative p-6">
                        <img 
                          src="./src/assets/pictures/output-042.jpg"
                          alt="Villa Design"
                          className="w-full h-64 object-cover rounded-lg shadow-md mb-4"
                        />
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">Thiết kế villa</h4>
                        <p className="text-sm text-gray-600">Những ngôi nhà biết thở với concept "Lost in Nature"</p>
                      </div>
                    </div>
                    
                    {/* Page Navigation */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Book Navigation */}
                  <div className="flex justify-center mt-6 space-x-4">
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
                      ← Trang trước
                    </button>
                    <span className="flex items-center text-gray-700 font-medium">Trang 1 / 3</span>
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
                      Trang sau →
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline Progress with Tilted Cards */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-white mb-12 text-center">
                Tiến độ xây dựng dự án
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    date: "Q1/2024",
                    title: "Khởi công xây dựng",
                    desc: "Bắt đầu thi công hạ tầng và móng villa",
                    status: "completed",
                    image: "./src/assets/pictures/output-171.jpg"
                  },
                  {
                    date: "Q2/2024",
                    title: "Xây dựng cơ sở hạ tầng",
                    desc: "Hoàn thành hệ thống điện, nước, đường nội bộ",
                    status: "completed",
                    image: "./src/assets/pictures/output-177.jpg"
                  },
                  {
                    date: "Q3/2024",
                    title: "Thi công villa và tiện ích",
                    desc: "Xây dựng các căn villa và khu tiện ích chung",
                    status: "in-progress",
                    image: "./src/assets/pictures/output-255.jpg"
                  },
                  {
                    date: "Q4/2024",
                    title: "Hoàn thiện và bàn giao",
                    desc: "Hoàn thiện nội thất và chuẩn bị bàn giao",
                    status: "upcoming",
                    image: "./src/assets/pictures/output-281.jpg"
                  }
                ].map((milestone, index) => (
                  <div
                    key={index}
                    className="group relative tilted-card card-glow"
                    style={{
                      transform: `perspective(1000px) rotateX(${index % 2 === 0 ? '5deg' : '-5deg'}) rotateY(${index % 2 === 0 ? '-2deg' : '2deg'})`
                    }}
                  >
                    {/* Card Container */}
                    <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 glass-morphism">
                      {/* Background Image */}
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{
                          backgroundImage: `url(${milestone.image})`
                        }}
                      ></div>
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                      
                      {/* Status Badge */}
                      <div className="absolute top-4 right-4">
                        <div className={`px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm ${
                          milestone.status === 'completed' ? 'bg-green-400/90 text-green-900' :
                          milestone.status === 'in-progress' ? 'bg-yellow-400/90 text-yellow-900' :
                          'bg-gray-400/90 text-gray-900'
                        }`}>
                          {milestone.status === 'completed' ? '✓ Hoàn thành' :
                           milestone.status === 'in-progress' ? '🔄 Đang thực hiện' :
                           '⏳ Sắp tới'}
                        </div>
                      </div>
                      
                      {/* Date Badge */}
                      <div className="absolute top-4 left-4">
                        <div className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-bold">
                          {milestone.date}
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h4 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors">
                          {milestone.title}
                        </h4>
                        <p className="text-white/90 text-sm leading-relaxed">
                          {milestone.desc}
                        </p>
                        
                        {/* Progress Indicator */}
                        <div className="mt-4 flex items-center space-x-2">
                          <div className="flex-1 bg-white/20 rounded-full h-2 overflow-hidden">
                            <div 
                              className={`h-full progress-bar ${
                                milestone.status === 'completed' ? 'bg-green-400' :
                                milestone.status === 'in-progress' ? 'bg-yellow-400' :
                                'bg-gray-400'
                              }`}
                              style={{
                                '--progress-width': milestone.status === 'completed' ? '100%' :
                                                  milestone.status === 'in-progress' ? '75%' : '25%'
                              } as React.CSSProperties}
                            ></div>
                          </div>
                          <span className="text-white/80 text-xs font-medium">
                            {milestone.status === 'completed' ? '100%' :
                             milestone.status === 'in-progress' ? '75%' :
                             '25%'}
                          </span>
                        </div>
                      </div>
                      
                      {/* Hover Effect Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    
                    {/* Reflection Effect */}
                    <div 
                      className="absolute -bottom-2 left-2 right-2 h-8 bg-gradient-to-b from-white/10 to-transparent rounded-b-2xl blur-sm opacity-60"
                      style={{
                        transform: 'perspective(1000px) rotateX(180deg) scaleY(0.5)'
                      }}
                    ></div>
                  </div>
                ))}
              </div>
              
              {/* Overall Progress */}
              <div className="mt-12 text-center">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 max-w-2xl mx-auto border border-white/20">
                  <h4 className="text-xl font-bold text-white mb-4">Tổng quan tiến độ dự án</h4>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-white/80">Tiến độ tổng thể</span>
                    <span className="text-yellow-400 font-bold">75%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
                    <div className="h-full w-3/4 bg-gradient-to-r from-green-400 to-yellow-400 rounded-full transition-all duration-1000"></div>
                  </div>
                  <p className="text-white/70 text-sm mt-3">
                    Dự án đang trong giai đoạn thi công villa và tiện ích, dự kiến bàn giao Q4/2024
                  </p>
                </div>
              </div>
            </div>

            {/* Gallery Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { img: "./src/assets/pictures/output-343.jpg", title: "Khu vực tiện ích" },
                { img: "./src/assets/pictures/output-363.jpg", title: "Villa mẫu" },
                { img: "./src/assets/pictures/output-398.jpg", title: "Cảnh quan xanh" },
                { img: "./src/assets/pictures/output-643.jpg", title: "Hồ bơi vô cực" },
                { img: "./src/assets/pictures/output-679.jpg", title: "Khu vực nghỉ dưỡng" },
                { img: "./src/assets/pictures/output-724.jpg", title: "Tiến độ xây dựng" }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="relative group overflow-hidden rounded-2xl transform hover:scale-105 transition-all duration-500"
                >
                  <img 
                    src={item.img}
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h4 className="text-white font-bold text-lg mb-2">{item.title}</h4>
                      <button className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm hover:bg-white/30 transition-colors">
                        Xem chi tiết
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                Đăng ký nhận thông tin
              </h2>
              <p className="text-sm text-gray-600">
                Để lại thông tin để nhận báo giá chi tiết và ưu đãi đặc biệt
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-6 shadow-xl border">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                      Họ và tên *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all duration-200 text-sm"
                      placeholder="Nhập họ và tên"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Số điện thoại *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all duration-200 text-sm"
                      placeholder="Nhập số điện thoại"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all duration-200 text-sm"
                    placeholder="Nhập địa chỉ email"
                  />
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="terms"
                    required
                    checked={formData.agreeToTerms}
                    onChange={(e) => setFormData({...formData, agreeToTerms: e.target.checked})}
                    className="mt-1 w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-400"
                  />
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    Tôi đồng ý nhận thông tin marketing và chính sách bảo mật của La Tiên Villa
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-teal-600 to-blue-600 text-white py-3 px-6 rounded-xl text-base font-semibold hover:from-teal-700 hover:to-blue-700 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] flex items-center justify-center gap-3"
                >
                  Đăng ký nhận ưu đãi
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
              
              <p className="text-center text-xs text-gray-500 mt-4">
                <Shield className="w-4 h-4 inline mr-1" />
                Thông tin của bạn được bảo mật tuyệt đối. Chúng tôi sẽ liên hệ trong vòng 24h.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-indigo-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div>
                <div className="flex items-center space-x-2 mb-3">
                  <img src={logoImage} alt="La Tiên Villa Logo" className="w-8 h-8 object-contain brightness-0 invert" />
                  <span className="text-base font-bold">La Tiên Villa</span>
                </div>
                <p className="text-indigo-100 leading-relaxed text-sm">
                  Biểu tượng nghỉ dưỡng mới tại Nha Trang, nơi thiên nhiên và 
                  con người hòa làm một.
                </p>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold mb-3">Liên hệ</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-indigo-200" />
                    <span className="text-indigo-100 text-sm">0896.68.66.68</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-indigo-200" />
                    <span className="text-indigo-100 text-sm">hello@annhome.vn</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-4 h-4 text-indigo-200" />
                    <span className="text-indigo-100 text-sm">Nha Trang, Khánh Hòa</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold mb-3">Dự án</h4>
                <ul className="space-y-1">
                  <li><a href="#" className="text-indigo-100 hover:text-white transition-colors text-sm">Giới thiệu</a></li>
                  <li><a href="#" className="text-indigo-100 hover:text-white transition-colors text-sm">Tiến độ</a></li>
                  <li><a href="#" className="text-indigo-100 hover:text-white transition-colors text-sm">Pháp lý</a></li>
                  <li><a href="#" className="text-indigo-100 hover:text-white transition-colors text-sm">Tiện ích</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold mb-3">Công ty</h4>
                <ul className="space-y-1">
                  <li><a href="#" className="text-indigo-100 hover:text-white transition-colors text-sm">CTCP Nhà Ann Home</a></li>
                  <li><a href="#" className="text-indigo-100 hover:text-white transition-colors text-sm">MST: 0314251205</a></li>
                  <li><a href="#" className="text-indigo-100 hover:text-white transition-colors text-sm">Số 122 Nguyễn Hoàng</a></li>
                  <li><a href="#" className="text-indigo-100 hover:text-white transition-colors text-sm">P. Bình Trưng, TP.HCM</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-indigo-500 pt-6 text-center">
              <p className="text-indigo-100 text-sm">
                © 2025 CTCP Nhà Ann Home. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Video Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setShowVideoModal(false)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="bg-black rounded-lg overflow-hidden aspect-video">
              <iframe
                src="https://www.youtube.com/embed/jnh3VzqdiEs?autoplay=1&rel=0&modestbranding=1"
                title="Video giới thiệu La Tiên Villa"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;