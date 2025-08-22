import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  Phone, 
  Mail, 
  MapPin, 
  Star, 
  Award, 
  Users, 
  Calendar,
  Gift,
  Shield,
  Waves,
  Building2,
  CheckCircle,
  ArrowRight,
  Play,
  X,
  Clock,
  TrendingUp,
  Home,
  Car,
  Wifi,
  Coffee,
  Dumbbell,
  ShoppingBag,
  TreePine,
  Sparkles,
  Heart,
  Target,
  Zap
} from 'lucide-react';

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

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function App() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phone: '',
    email: '',
    agreeToTerms: false
  });
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [activeOffer, setActiveOffer] = useState(0);

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

  const features: Feature[] = [
    {
      icon: <Home className="w-5 h-5" />,
      title: "Thiết kế hiện đại",
      description: "Kiến trúc độc đáo hòa quyện với thiên nhiên"
    },
    {
      icon: <Waves className="w-5 h-5" />,
      title: "View biển tuyệt đẹp",
      description: "Tầm nhìn panorama ra vịnh Nha Trang"
    },
    {
      icon: <Car className="w-5 h-5" />,
      title: "Bãi đỗ xe riêng",
      description: "Không gian đỗ xe an toàn, tiện lợi"
    },
    {
      icon: <Wifi className="w-5 h-5" />,
      title: "Smart Home",
      description: "Hệ thống nhà thông minh cao cấp"
    },
    {
      icon: <Coffee className="w-5 h-5" />,
      title: "Café & Restaurant",
      description: "Ẩm thực đa dạng ngay tại dự án"
    },
    {
      icon: <Dumbbell className="w-5 h-5" />,
      title: "Gym & Spa",
      description: "Trung tâm thể dục thể thao hiện đại"
    },
    {
      icon: <ShoppingBag className="w-5 h-5" />,
      title: "Trung tâm thương mại",
      description: "Shopping mall ngay tại chân tòa"
    },
    {
      icon: <TreePine className="w-5 h-5" />,
      title: "Công viên xanh",
      description: "Không gian xanh mát, trong lành"
    }
  ];

  const projectHighlights = [
    {
      icon: <Target className="w-8 h-8 text-teal-600" />,
      title: "Vị trí đắc địa",
      description: "Tọa lạc tại trung tâm Nha Trang, gần các điểm du lịch nổi tiếng",
      stats: "5 phút đến biển"
    },
    {
      icon: <Zap className="w-8 h-8 text-teal-600" />,
      title: "Tiến độ vượt trội",
      description: "Dự án đang trong giai đoạn hoàn thiện, sẵn sàng bàn giao",
      stats: "Q4/2024"
    },
    {
      icon: <Heart className="w-8 h-8 text-teal-600" />,
      title: "Cộng đồng văn minh",
      description: "Môi trường sống an toàn, thân thiện cho gia đình",
      stats: "1000+ cư dân"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveOffer((prev) => (prev + 1) % offers.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [offers.length]);

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
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm transition-all duration-300">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Waves className="w-7 h-7 text-teal-600" />
              <span className="text-lg font-bold text-gray-900">La Tiên Villa</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <button onClick={() => scrollToSection('about')} className="text-sm text-gray-700 hover:text-teal-600 transition-colors">
                Giới thiệu
              </button>
              <button onClick={() => scrollToSection('offers')} className="text-sm text-gray-700 hover:text-teal-600 transition-colors">
                Ưu đãi
              </button>
              <button onClick={() => scrollToSection('features')} className="text-sm text-gray-700 hover:text-teal-600 transition-colors">
                Tiện ích
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-sm text-gray-700 hover:text-teal-600 transition-colors">
                Liên hệ
              </button>
              <a href="tel:0896686668" className="bg-teal-600 text-white px-5 py-2 rounded-full text-sm hover:bg-teal-700 transition-all duration-300 hover:shadow-lg">
                0896.68.66.68
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/90 via-teal-800/80 to-blue-900/90 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")'
          }}
        ></div>
        
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            La Tiên Villa
          </h1>
          <p className="text-lg md:text-xl mb-3 opacity-90">
            Biểu tượng nghỉ dưỡng mới tại Nha Trang
          </p>
          <p className="text-base md:text-lg mb-6 opacity-80 italic">
            "Sóng vọng miền Tiên – Nơi thiên nhiên và con người hòa làm một"
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <button 
              onClick={() => scrollToSection('offers')}
              className="bg-teal-600 text-white px-6 py-3 rounded-full text-base font-semibold hover:bg-teal-700 transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center gap-2"
            >
              Khám phá ưu đãi siêu VIP
              <ArrowRight className="w-4 h-4" />
            </button>
            <button 
              onClick={() => setShowVideoModal(true)}
              className="border-2 border-white text-white px-6 py-3 rounded-full text-base font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 hover:shadow-2xl flex items-center gap-2"
            >
              <Play className="w-4 h-4" />
              Xem video giới thiệu
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
          <button 
            onClick={() => scrollToSection('kickoff')}
            className="text-white/70 hover:text-white transition-colors animate-bounce"
          >
            <ChevronDown className="w-6 h-6" />
          </button>
        </div>
      </section>

      {/* Kickoff Event Section */}
      <section id="kickoff" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Sự kiện Kick-off Hoành tráng
              </h2>
              <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Ngày 19/08, tại Quảng trường Trống Đồng – Libera Nha Trang, buổi lễ Kick‑off với 
                3.000 nhân viên kinh doanh đã thắp lên nguồn năng lượng sôi động, đánh dấu sự khởi đầu 
                của hành trình chinh phục thị trường bất động sản nghỉ dưỡng miền Trung.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10 items-center mb-12">
              <div className="space-y-5">
                <div className="flex items-center space-x-4">
                  <div className="bg-teal-100 p-3 rounded-full">
                    <Users className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">3.000+</h3>
                    <p className="text-sm text-gray-600">Nhân viên kinh doanh tham gia</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Calendar className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">19/08/2024</h3>
                    <p className="text-sm text-gray-600">Quảng trường Trống Đồng</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Award className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Đại lý chiến lược</h3>
                    <p className="text-sm text-gray-600">Ký kết hợp tác phân phối</p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/1709003/pexels-photo-1709003.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Sự kiện kick-off"
                  className="rounded-2xl shadow-2xl w-full h-[350px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
              </div>
            </div>

            {/* Key Partnerships */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Đối tác chiến lược</h3>
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div className="p-4">
                  <Building2 className="w-8 h-8 text-teal-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-900 text-sm">KDI Holdings</h4>
                  <p className="text-xs text-gray-600">Chủ đầu tư uy tín</p>
                </div>
                <div className="p-4">
                  <Sparkles className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-900 text-sm">Vietinbank & Sacombank</h4>
                  <p className="text-xs text-gray-600">Đối tác tài chính</p>
                </div>
                <div className="p-4">
                  <Star className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-900 text-sm">Masterise Homes</h4>
                  <p className="text-xs text-gray-600">Đối tác phát triển</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-10 items-center mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Hòa nhịp thiên nhiên
                </h2>
                <p className="text-base text-gray-600 mb-5 leading-relaxed">
                  Ngôi nhà biết thở, bãi cát trắng, làn nước biển trong xanh - La Tiên Villa 
                  mang đến trải nghiệm nghỉ dưỡng đẳng cấp với TVC "Lasting Memories, Lasting Freedom" 
                  đưa bạn vào cảm xúc tự do và thanh thản.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-sm text-gray-700">Thiết kế kiến trúc độc đáo</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-sm text-gray-700">Hướng biển tuyệt đẹp</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-sm text-gray-700">Tiện ích resort 5 sao</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-sm text-gray-700">Vị trí vàng Nha Trang</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Villa view"
                  className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
                />
                <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-xl border">
                  <div className="flex items-center space-x-3">
                    <Star className="w-6 h-6 text-yellow-500" />
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Đánh giá</p>
                      <p className="text-xs text-gray-600">4.9/5 từ khách hàng</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Highlights */}
            <div className="grid md:grid-cols-3 gap-6">
              {projectHighlights.map((highlight, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="mb-4">
                    {highlight.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{highlight.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{highlight.description}</p>
                  <div className="text-lg font-bold text-teal-600">{highlight.stats}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Tiện ích đẳng cấp resort
              </h2>
              <p className="text-base text-gray-600 max-w-3xl mx-auto">
                Hệ thống tiện ích hoàn hảo mang đến cuộc sống tiện nghi và đẳng cấp cho cư dân
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-5 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="text-teal-600 mb-3">
                    {feature.icon}
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section id="offers" className="py-16 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Ưu đãi đặc quyền người tiên phong
              </h2>
              <p className="text-base text-gray-600 max-w-3xl mx-auto">
                Những ưu đãi độc quyền dành riêng cho khách hàng đầu tiên, 
                mang lại giá trị đầu tư vượt trội và trải nghiệm đẳng cấp.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {offers.map((offer, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 ${
                    offer.highlight ? 'ring-2 ring-teal-400 relative overflow-hidden' : ''
                  } ${activeOffer === index ? 'scale-105 shadow-2xl' : ''}`}
                >
                  {offer.highlight && (
                    <div className="absolute top-0 right-0 bg-gradient-to-l from-teal-400 to-blue-400 text-white px-3 py-1 rounded-bl-lg text-xs font-semibold">
                      HOT
                    </div>
                  )}
                  
                  <div className="text-teal-600 mb-3">
                    {offer.icon}
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {offer.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                    {offer.description}
                  </p>
                  
                  <div className="text-xl font-bold text-teal-600">
                    {offer.value}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-teal-600 to-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-teal-700 hover:to-blue-700 transition-all duration-300 hover:shadow-2xl hover:scale-105 inline-flex items-center gap-3"
              >
                Tôi muốn là người tiên phong
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Gallery dự án
              </h2>
              <p className="text-base text-gray-300 max-w-3xl mx-auto">
                Khám phá vẻ đẹp tuyệt vời của La Tiên Villa qua bộ sưu tập hình ảnh độc quyền
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&w=600",
                "https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=600",
                "https://images.pexels.com/photos/1709003/pexels-photo-1709003.jpeg?auto=compress&cs=tinysrgb&w=600",
                "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=600",
                "https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=600",
                "https://images.pexels.com/photos/2029667/pexels-photo-2029667.jpeg?auto=compress&cs=tinysrgb&w=600"
              ].map((image, index) => (
                <div key={index} className="relative group overflow-hidden rounded-xl">
                  <img 
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Đăng ký nhận thông tin
              </h2>
              <p className="text-base text-gray-600">
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
      <footer className="bg-teal-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Waves className="w-6 h-6 text-white" />
                  <span className="text-lg font-bold">La Tiên Villa</span>
                </div>
                <p className="text-teal-100 leading-relaxed text-sm">
                  Biểu tượng nghỉ dưỡng mới tại Nha Trang, nơi thiên nhiên và 
                  con người hòa làm một.
                </p>
              </div>
              
              <div>
                <h4 className="text-base font-semibold mb-4">Liên hệ</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-teal-200" />
                    <span className="text-teal-100 text-sm">0896.68.66.68</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-teal-200" />
                    <span className="text-teal-100 text-sm">hello@annhome.vn</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-4 h-4 text-teal-200" />
                    <span className="text-teal-100 text-sm">Nha Trang, Khánh Hòa</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-base font-semibold mb-4">Dự án</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-teal-100 hover:text-white transition-colors text-sm">Giới thiệu</a></li>
                  <li><a href="#" className="text-teal-100 hover:text-white transition-colors text-sm">Tiến độ</a></li>
                  <li><a href="#" className="text-teal-100 hover:text-white transition-colors text-sm">Pháp lý</a></li>
                  <li><a href="#" className="text-teal-100 hover:text-white transition-colors text-sm">Tiện ích</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-base font-semibold mb-4">Công ty</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-teal-100 hover:text-white transition-colors text-sm">CTCP Nhà Ann Home</a></li>
                  <li><a href="#" className="text-teal-100 hover:text-white transition-colors text-sm">MST: 0314251205</a></li>
                  <li><a href="#" className="text-teal-100 hover:text-white transition-colors text-sm">Số 122 Nguyễn Hoàng</a></li>
                  <li><a href="#" className="text-teal-100 hover:text-white transition-colors text-sm">P. Bình Trưng, TP.HCM</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-teal-500 pt-6 text-center">
              <p className="text-teal-100 text-sm">
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
              <div className="flex items-center justify-center h-full text-white">
                <div className="text-center">
                  <Play className="w-12 h-12 mx-auto mb-3" />
                  <p className="text-lg">Video giới thiệu La Tiên Villa</p>
                  <p className="text-gray-400 mt-2 text-sm">Coming soon...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;