(function(){
  const translations = {
    en: {
      "nav.home":"Home",
      "nav.bookings":"Bookings",
      "nav.about":"About",
      "nav.why":"Why Choose Us",
      "nav.fleet":"Fleet",
      "nav.hotels":"Hotels",
      "nav.hajj":"Hajj Services",
      "nav.faq":"FAQ",

      "hero.title":"Darbak Transport - Luxury Transport between Jeddah, Mecca, Medina",
      "hero.subtitle":"Your journey starts with complete safety and unmatched luxury",
      "hero.cities":"Jeddah • Mecca • Medina • All Airports",
      "btn.whatsapp":"Direct WhatsApp",
      "btn.book":"Book Now",

      "btn.whatsapp.short":"WhatsApp",

      "about.title":"About Darbak Service",
      "about.desc1":"Darbak is a 100% Saudi luxury land transport company, dedicated to providing exceptional service to pilgrims, visitors, and all travelers to the Kingdom. We combine tradition with modernity to ensure every journey is safe, comfortable, and memorable.",
      "about.desc2":"We cover all routes: Jeddah ↔ Mecca ↔ Medina ↔ Taif ↔ Airports with a modern and comfortable fleet with professional drivers.",

      "hajj.services":"Our Services for Pilgrims and Visitors",
      "hajj.wifi":"WiFi + Drinks",
      "hajj.transport":"Transport to and from the Holy Places",

      "quick.title":"Book Your Trip Now",
      "service.1":"From Jeddah Airport to Mecca and back",
      "service.2":"From Jeddah to Mecca and back",
      "service.3":"From Taif Airport to Mecca and back",
      "service.4":"From Mecca to the train station and back",
      "service.5":"From Taif to Mecca and back",
      "service.6":"From Medina Airport to Mecca and back",
      "service.7":"Custom Route",

      "why.title":"Why Choose Darbak?",
      "why.desc":"Choose Darbak for an unparalleled transport experience that combines ultimate safety, luxury, and punctuality. With our modern 2025 fleet, professional drivers, and 24/7 customer service, every journey becomes a testament to excellence and meticulous care for every detail. We ensure your comfort and peace of mind throughout your trip.",
      "feature.1":"Luxury fleet of modern 2025 model cars",
      "feature.2":"Complete safety and privacy with guaranteed security",
      "feature.3":"Free Wi-Fi + cold drinks throughout the trip",
      "feature.4":"Professional and welcoming drivers with long experience",
      "feature.5":"24/7 customer service always available",

      "fleet.title":"Our Luxury Fleet 2025",

      "footer.desc":"Luxury and safe transport services in Saudi Arabia",
      "footer.quickLinks":"Quick Links",
      "footer.contact":"Contact Us",
      "footer.whatsapp":"Direct WhatsApp",
      "footer.support":"24/7 Support",
      "footer.wifi":"Free Wi-Fi in cars",
      "footer.copyright":"Darbak - All rights reserved",

      "lang.ar":"Arabic",
      "lang.en":"English",

      "footer.home":"Home",
      "footer.services":"Our Services",
      "footer.fleet":"Fleet",
      "footer.hajj":"Pilgrims Services",
      "footer.faq":"FAQ",
      "footer.hotels":"Hotels",
      "footer.book":"Book Now",

      "faq.title":"Frequently Asked Questions",
      "faq.q1":"Do you wait in case of flight delay?",
      "faq.a1":"Yes, we follow flights moment by moment and wait for you no matter how long the delay without any additional fees.",
      "faq.q2":"Are the prices fixed?",
      "faq.a2":"Yes, the price is agreed upon in advance and there are no hidden fees.",
      "faq.q3":"Are the cars modern and comfortable?",
      "faq.a3":"All our cars are modern, fully air-conditioned, clean, and comfortable for long and short trips.",
      "faq.q4":"Can I book round trip?",
      "faq.a4":"Yes, you can book round trip at a better price.",
      "faq.q5":"Is the service available 24 hours?",
      "faq.a5":"Yes, our services are available 24 hours a day, seven days a week.",
      "faq.q6":"How to book?",
      "faq.a6":"Through the website, direct call, or via WhatsApp easily.",

      "book.title":"Book Your Trip",
      "book.name":"Full Name",
      "book.phone":"Phone Number",
      "book.phone.placeholder":"Enter phone number",
      "book.from":"From City",
      "book.to":"To City",
      "book.chooseCity":"Choose city",
      "city.riyadh":"Riyadh",
      "city.jeddah":"Jeddah",
      "city.makkah":"Mecca",
      "city.madinah":"Medina",
      "book.date":"Trip Date",
      "book.time":"Trip Time",
      "book.passengers":"Passengers",
      "book.carType":"Car Type",
      "book.tripType":"Trip Type",
      "book.notes.placeholder":"Tell us any special requirements...",
      "book.submit":"Send booking via WhatsApp",

      "brand.name":"Darbak",
      "brand.tagline":"Your solution with us.. Safety and luxury",
      "nav.homepage":"Home Page",
      "book.hero.title":"Book Your Luxury Trip Now",
      "book.hero.subtitle":"Safe and comfortable transport service between cities and airports",
      "book.form.name":"Full Name",
      "book.form.phone":"Phone Number",
      "book.form.from":"From City",
      "book.form.to":"To City",
      "book.form.date":"Trip Date",
      "book.form.time":"Trip Time",
      "book.form.passengers":"Number of Passengers",
      "book.form.carType":"Car Type",
      "book.chooseCar":"Choose Car",
      "book.form.tripType":"Trip Type",
      "book.form.notes":"Special Requirements",
      "book.form.submit":"Send Booking via WhatsApp",

      "book.extra.services":"Extra Services",
      "book.wifi":"Free WiFi",
      "book.water":"Cold Water",
      "book.magazines":"Magazines and Newspapers",
      "book.baby.seat":"Baby Seat",

      "book.trip.individual":"Individual Trip",
      "book.trip.group":"Group Trip",
      "book.trip.vip":"VIP",

      "car.toyota.camry":"Toyota Camry 2025",
      "car.land.cruiser":"Land Cruiser 2025",
      "car.mercedes.sclass":"Mercedes S-Class 2025",
      "car.lexus.ls":"Lexus LS 2025",
      "car.range.rover":"Range Rover 2025",
      "car.gmc.yukon":"GMC Yukon 2025",
      "car.toyota.hiace":"Toyota Hiace 2025",
      "car.ford.taurus":"Ford Taurus 2025",
      "car.lexus.lx570":"Lexus LX 570 2025",
      "car.toyota.crown":"Toyota Crown 2025",
      "car.mercedes.vclass":"Mercedes-Benz V-Class 2025",

      "passengers.1":"1 Person",
      "passengers.2":"2 Persons",
      "passengers.3":"3 Persons",
      "passengers.4":"4 Persons",
      "passengers.5":"5 Persons",
      "passengers.6":"6+ Persons",

      "hotels.title":"Hotels",
      "hotels.mecca":"Mecca Hotels",
      "hotels.medina":"Medina Hotels",
      "hotels.jeddah":"Jeddah Hotels",
      "hotels.riyadh":"Riyadh Hotels",
      "hotels.book":"Book via WhatsApp",

      "hotel.fairmont.clock":"Fairmont Clock Tower Hotel",
      "hotel.fairmont.kaaba":"Kaaba View Room - Fairmont Makkah",
      "hotel.pullman.zamzam":"Pullman Zamzam Makkah",
      "hotel.movenpick.makkah":"Mövenpick Makkah",
      "hotel.anwar.madinah":"Anwar Al Madinah Mövenpick",
      "hotel.hilton.madinah":"Hilton Madinah",
      "hotel.sofitel.shahd":"Sofitel Shahd Al Madinah",
      "hotel.le.meridien":"Le Méridien Madinah",
      "hotel.pullman.zamzam.madinah":"Pullman Zamzam Madinah",
      "hotel.dar.taqwa":"Dar Al Taqwa Madinah",
      "hotel.intercontinental.madinah":"InterContinental Madinah",
      "hotel.rosewood.jeddah":"Rosewood Jeddah - Ultimate Luxury",
      "hotel.hilton.jeddah":"Hilton Jeddah",
      "hotel.sheraton.jeddah":"Sheraton Jeddah",
      "hotel.hyatt.jeddah":"Hyatt Regency Jeddah",
      "hotel.jw.marriott.riyadh":"JW Marriott Riyadh - Night Luxury",
      "hotel.movenpick.riyadh":"Mövenpick Residence Riyadh",
      "hotel.narcissus.riyadh":"Narcissus Spa Riyadh",
      "hotel.four.seasons.riyadh":"Four Seasons Riyadh",

      "nav.back.home":"Back to Home"
    },
    ar: {
      // Arabic keys mainly fallback to existing HTML, but keeping entries allows explicit override if needed
      "nav.home":"الرئيسية",
      "nav.bookings":"الحجوزات",
      "nav.about":"من نحن",
      "nav.why":"لماذا نحن",
      "nav.fleet":"الأسطول",
      "nav.hotels":"فنادق",
      "nav.hajj":"خدمات الحج",
      "nav.faq":"الأسئلة",

      "hero.title":"دربك للنقل - النقل الفاخر بين جدة مكة المدينة",
      "hero.subtitle":"رحلتك تبدأ بأمان تام ورفاهية لا مثيل لها",
      "hero.cities":"جدة • مكة • المدينة • المطارات",
      "btn.whatsapp":"واتساب مباشر",
      "btn.book":"احجز الآن",

      "btn.whatsapp.short":"واتساب",

      "about.title":"تعريف بخدمة دربك",
      "about.desc1":"دربك هي شركة نقل بري فاخر سعودية 100%، متخصصة في خدمة الحجاج والمعتمرين وزوار المملكة.",
      "about.desc2":"نغطي جميع المسارات الية: جدة ↔ مكة ↔ المدينة ↔ الطائف ↔ المطارات بأسطول حديث ومريح مع سائقين محترفين.",

      "hajj.services":"خدماتنا للحجاج والمعتمرين",
      "hajj.wifi":"واي فاي + مشروبات",
      "hajj.transport":"نقل من وإلى الحرمين",

      "quick.title":"احجز رحلتك الآن",
      "service.1":"من مطار جدة إلى مكة والعكس",
      "service.2":"من جدة إلى مكة والعكس",
      "service.3":"من مطار الطائف إلى مكة والعكس",
      "service.4":"من مكة إلى القطار والعكس",
      "service.5":"من الطائف إلى مكة والعكس",
      "service.6":"من مطار المدينة إلى مكة والعكس",
      "service.7":"مسار مخصص",

      "why.title":"لماذا تختار دربك؟",
      "why.desc":"نقدم لك تجربة تنقل راقية تجمع بين الأمان، الرفاهية، والالتزام بالمواعيد. كل رحلة معنا عنوان للتميز والعناية بأدق التفاصيل.",
      "feature.1":"أسطول سيارات حديثة 2025",
      "feature.2":"أمان وخصوصية تامة",
      "feature.3":"واي فاي + مشروبات مجانية",
      "feature.4":"سائقون محترفون ومرحبون",
      "feature.5":"خدمة عملاء 24/7",

      "fleet.title":"أسطولنا الفاخر 2025",

      "footer.desc":"لخدمات النقل الفاخر والآمن في المملكة العربية السعودية",
      "footer.quickLinks":"روابط سريعة",
      "footer.contact":"تواصل معنا",
      "footer.whatsapp":"واتساب مباشر",
      "footer.support":"دعم 24 ساعة يوميًا",
      "footer.wifi":"واي فاي مجاني في السيارات",
      "footer.copyright":"دربك - جميع الحقوق محفوظة",

      "footer.home":"الرئيسية",
      "footer.services":"خدماتنا",
      "footer.fleet":"الأسطول",
      "footer.hajj":"خدمات الحجاج",
      "footer.faq":"الأسئلة الشائعة",
      "footer.hotels":"فنادق",
      "footer.book":"احجز الآن",

      "lang.ar":"العربية",
      "lang.en":"الإنجليزية",

      "faq.title":"الأسئلة الشائعة",
      "faq.q1":"هل تنتظرون في حال تأخر الرحلة؟",
      "faq.a1":"نعم، نتابع الرحلات الجوية لحظة بلحظة وننتظرك مهما طال التأخير بدون أي رسوم إضافية.",
      "faq.q2":"هل الأسعار ثابتة؟",
      "faq.a2":"نعم، السعر يتم الاتفاق عليه مسبقًا ولا توجد أي رسوم مخفية.",
      "faq.q3":"هل السيارات حديثة ومريحة؟",
      "faq.a3":"جميع سياراتنا حديثة، مكيفة بالكامل، نظيفة، ومريحة لرحلات طويلة وقصيرة.",
      "faq.q4":"هل يمكن الحجز ذهاب وعودة؟",
      "faq.a4":"نعم، يمكن حجز ذهاب وعودة وبسعر أفضل.",
      "faq.q5":"هل الخدمة متوفرة 24 ساعة؟",
      "faq.a5":"نعم، خدماتنا متوفرة على مدار 24 ساعة طوال أيام الأسبوع.",
      "faq.q6":"كيف يتم الحجز؟",
      "faq.a6":"عن طريق الموقع، أو الاتصال المباشر، أو عبر واتساب بكل سهولة.",

      "book.title":"حجز رحلة دربك",
      "book.name":"الاسم الكامل",
      "book.phone":"رقم الجوال",
      "book.phone.placeholder":"أدخل رقم الجوال",
      "book.from":"من مدينة",
      "book.to":"إلى مدينة",
      "book.chooseCity":"اختر المدينة",
      "city.riyadh":"الرياض",
      "city.jeddah":"جدة",
      "city.makkah":"مكة المكرمة",
      "city.madinah":"المدينة المنورة",
      "book.date":"تاريخ الرحلة",
      "book.time":"وقت الرحلة",
      "book.passengers":"عدد المسافرين",
      "book.carType":"نوع السيارة",
      "book.tripType":"نوع الرحلة",
      "book.notes.placeholder":"أخبرنا بأي متطلبات خاصة...",
      "book.submit":"إرسال الحجز عبر واتساب",

      "brand.name":"دربك",
      "brand.tagline":"حلتك معنا.. أمان وفخامة",
      "nav.homepage":"الصفحة الرئيسية",
      "book.hero.title":"احجز رحلتك الفاخرة الآن",
      "book.hero.subtitle":"خدمة نقل آمنة ومريحة بين المدن والمطارات",
      "book.form.name":"الاسم الكامل",
      "book.form.phone":"رقم الجوال",
      "book.form.from":"من مدينة",
      "book.form.to":"إلى مدينة",
      "book.form.date":"تاريخ الرحلة",
      "book.form.time":"وقت الرحلة",
      "book.form.passengers":"عدد المسافرين",
      "book.form.carType":"نوع السيارة",
      "book.chooseCar":"اختر السيارة",
      "book.form.tripType":"نوع الرحلة",
      "book.form.notes":"متطلبات خاصة",
      "book.form.submit":"إرسال الحجز عبر واتساب",

      "book.extra.services":"خدمات إضافية",
      "book.wifi":"واي فاي مجاني",
      "book.water":"مياه باردة",
      "book.magazines":"مجلات وصحف",
      "book.baby.seat":"كرسي أطفال",

      "book.trip.individual":"رحلة فردية",
      "book.trip.group":"رحلة جماعية",
      "book.trip.vip":"VIP",

      "car.toyota.camry":"Toyota Camry 2025",
      "car.land.cruiser":"Land Cruiser 2025",
      "car.mercedes.sclass":"Mercedes S-Class 2025",
      "car.lexus.ls":"Lexus LS 2025",
      "car.range.rover":"Range Rover 2025",
      "car.gmc.yukon":"GMC Yukon 2025",
      "car.toyota.hiace":"Toyota Hiace 2025",
      "car.ford.taurus":"Ford Taurus 2025",
      "car.lexus.lx570":"Lexus LX 570 2025",
      "car.toyota.crown":"Toyota Crown 2025",
      "car.mercedes.vclass":"Mercedes-Benz V-Class 2025",

      "passengers.1":"1 شخص",
      "passengers.2":"2 شخص",
      "passengers.3":"3 أشخاص",
      "passengers.4":"4 أشخاص",
      "passengers.5":"5 أشخاص",
      "passengers.6":"6+ أشخاص",

      "hotels.title":"فنادق",
      "hotels.mecca":"فنادق مكة المكرمة",
      "hotels.medina":"فنادق المدينة المنورة",
      "hotels.jeddah":"فنادق جدة",
      "hotels.riyadh":"فنادق الرياض",
      "hotels.book":"حجز عبر واتساب",

      "hotel.fairmont.clock":"فندق فيرمونت برج الساعة مكة",
      "hotel.fairmont.kaaba":"غرفة إطلالة على الكعبة - فيرمونت مكة",
      "hotel.pullman.zamzam":"فندق بولمان زمزم مكة",
      "hotel.movenpick.makkah":"فندق موفنبيك مكة",
      "hotel.anwar.madinah":"فندق أنوار المدينة موفنبيك",
      "hotel.hilton.madinah":"فندق هيلتون المدينة",
      "hotel.sofitel.shahd":"فندق سوفيتيل شهد المدينة",
      "hotel.le.meridien":"فندق لو ميريديان المدينة",
      "hotel.pullman.zamzam.madinah":"فندق بولمان زمزم المدينة",
      "hotel.dar.taqwa":"فندق دار التقوى المدينة",
      "hotel.intercontinental.madinah":"فندق إنتركونتيننتال المدينة",
      "hotel.rosewood.jeddah":"فندق روزوود جدة - فخامة مطلقة",
      "hotel.hilton.jeddah":"فندق هيلتون جدة",
      "hotel.sheraton.jeddah":"فندق شيراتون جدة",
      "hotel.hyatt.jeddah":"فندق حياة ريجنسي جدة",
      "hotel.jw.marriott.riyadh":"فندق JW Marriott الرياض - فخامة ليلية",
      "hotel.movenpick.riyadh":"فندق موفنبيك وريزيدنس الرياض",
      "hotel.narcissus.riyadh":"فندق نارسيسوس وسبا الرياض",
      "hotel.four.seasons.riyadh":"فندق فور سيزونز الرياض",

      "nav.back.home":"العودة للرئيسية"
    }
  };

  const i18n = {
    current: localStorage.getItem('siteLang') || document.documentElement.lang || 'ar',
    t(key){
      return translations[this.current] && translations[this.current][key] ? translations[this.current][key] : null;
    },
    apply(){
      // set lang/dir
      document.documentElement.lang = this.current === 'ar' ? 'ar' : 'en';
      document.documentElement.dir = this.current === 'ar' ? 'rtl' : 'ltr';
      // set font family class
      document.body.classList.remove('lang-ar', 'lang-en');
      document.body.classList.add(this.current === 'ar' ? 'lang-ar' : 'lang-en');
      // translate elements with data-i18n
      document.querySelectorAll('[data-i18n]').forEach(el=>{
        const key = el.getAttribute('data-i18n');
        const txt = this.t(key);
        if(!txt) return; // leave original
        if(el.tagName === 'INPUT' || el.tagName === 'TEXTAREA'){
          el.placeholder = txt;
        } else if(el.tagName === 'OPTION'){
          el.textContent = txt;
        } else {
          el.innerHTML = txt;
        }
      });
      // also translate elements with data-i18n-placeholder
      document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
        const key = el.getAttribute('data-i18n-placeholder');
        const txt = this.t(key);
        if(txt) el.placeholder = txt;
      });
      // meta description
      const meta = document.querySelector('meta[name="description"]');
      if(meta){
        const metaKey = 'meta.description';
        const val = this.t(metaKey);
        if(val) meta.content = val;
      }
      // update active lang button
      document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.getAttribute('data-lang')===this.current));
    },
    set(lang){
      this.current = lang;
      localStorage.setItem('siteLang', lang);
      this.apply();
    },
    init(){
      document.addEventListener('DOMContentLoaded', ()=>{
        // attach to buttons
        document.querySelectorAll('.lang-btn').forEach(b=> b.addEventListener('click', ()=> this.set(b.getAttribute('data-lang'))));
        this.apply();
      });
      window.i18n = this;
    }
  };

  // Expose and init
  i18n.init();
})();
