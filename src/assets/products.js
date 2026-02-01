export const PRODUCT_CATEGORIES = [
  { id: 'hot_cups', nameAr: 'أكواب حارة', nameEn: 'Hot Cups' },
  {
    id: 'cold_cups',
    nameAr: 'أكواب باردة وزجاج',
    nameEn: 'Cold Drinks & Bottles',
  },
  { id: 'food_boxes', nameAr: 'علب الأطعمة', nameEn: 'Food Packaging' },
  {
    id: 'bags_carriers',
    nameAr: 'الأكياس والحوامل',
    nameEn: 'Bags & Carriers',
  },
  {
    id: 'accessories',
    nameAr: 'الملحقات والمائدة',
    nameEn: 'Accessories & Cutlery',
  },
  { id: 'hygiene', nameAr: 'أدوات الحماية', nameEn: 'Hygiene & Safety' },
];

export const PRODUCTS = [
  /* =========================================
     CATEGORY 1: HOT CUPS (أكواب المشروبات الحارة)
     ========================================= */
  {
    id: 'h-001',
    category: 'hot_cups',
    name: 'أكواب ورقية (طبقة واحدة)',
    nameEn: 'Single Wall Paper Cups',
    description:
      'أكواب عملية للاستخدام اليومي. متوفرة بالأبيض، الأسود، والكرافت.',
    descriptionEn:
      'Practical daily use cups. Available in White, Black, and Kraft.',
    image: '/assets/02_Product_Catalog/Paper_Cups/Single_Wall.jpg',
    options: {
      sizes: ['4oz', '7oz', '8oz', '12oz'],
      colors: ['White', 'Black', 'Kraft'],
    },
  },
  {
    id: 'h-002',
    category: 'hot_cups',
    name: 'أكواب ورقية (طبقتين)',
    nameEn: 'Double Wall Paper Cups',
    description: 'عزل حراري عالي لا يحتاج لكم (Sleeve).',
    descriptionEn: 'High thermal insulation, no sleeve required.',
    image: '/assets/02_Product_Catalog/Paper_Cups/Double_Wall.jpg',
    options: {
      sizes: ['4oz', '8oz', '12oz'],
      colors: ['White', 'Black', 'Kraft'],
    },
  },
  {
    id: 'h-003',
    category: 'hot_cups',
    name: 'أكواب ورق (طباعة كرافت)',
    nameEn: 'Kraft Print Paper Cups',
    description: 'أكواب كرافت كلاسيكية مطبوعة بشعار أسود جانبي.',
    descriptionEn: 'Classic Kraft cups with side black logo print.',
    image: '/assets/02_Product_Catalog/Paper_Cups/Kraft_Print.jpg',
    options: {
      sizes: ['Standard'],
    },
  },
  {
    id: 'h-004',
    category: 'hot_cups',
    name: 'أغطية أكواب ورقية',
    nameEn: 'Paper Cup Lids',
    description: 'أغطية بلاستيكية محكمة الإغلاق مع فتحة شرب.',
    descriptionEn: 'Tight-seal plastic lids with sip hole.',
    image: '/assets/02_Product_Catalog/Paper_Cups/Lids.jpg',
    options: {
      colors: ['White', 'Black'],
      fit_size: ['4oz', '8oz', '12oz'],
    },
  },

  /* =========================================
     CATEGORY 2: COLD DRINKS & BOTTLES (المشروبات الباردة والزجاج)
     ========================================= */
  {
    id: 'c-001',
    category: 'cold_cups',
    name: 'أكواب بلاستيكية (U-Shape)',
    nameEn: 'U-Shape Plastic Cups',
    description: 'التصميم الدائري الرائج للمشروبات الباردة والآيس كوفي.',
    descriptionEn:
      'Trending round bottom design for cold drinks and iced coffee.',
    image: '/assets/02_Product_Catalog/Cold_Cups/U_Shape.jpg',
    options: {
      sizes: ['12oz', '16oz'],
    },
  },
  {
    id: 'c-002',
    category: 'cold_cups',
    name: 'أكواب بلاستيكية (PET)',
    nameEn: 'Standard PET Cups',
    description: 'أكواب شفافة عالية الجودة مع خيارات أغطية متعددة.',
    descriptionEn: 'High quality clear cups with multiple lid options.',
    image: '/assets/02_Product_Catalog/Cold_Cups/PET_Standard.jpg',
    options: {
      sizes: ['8oz', '10oz', '12oz', '14oz', '16oz'],
    },
  },
  {
    id: 'c-003',
    category: 'cold_cups',
    name: 'أكواب PP مقوى',
    nameEn: 'PP Hard Cups',
    description: 'أكواب بلاستيك مقوى (شبه مثلج) قابلة لإعادة الاستخدام.',
    descriptionEn: 'Hard plastic (frosted look) reusable cups.',
    image: '/assets/02_Product_Catalog/Cold_Cups/PP_Cups.jpg',
    options: {
      sizes: ['360ml', '500ml', '700ml', '1000ml'],
      lid_type: ['Heart Plug Lid'],
    },
  },
  {
    id: 'c-004',
    category: 'cold_cups',
    name: 'أكياس موهيتو وعصير',
    nameEn: 'Mojito & Juice Bags',
    description: 'أكياس شفافة بسحاب وفتحة للمصاص. (طلعات الوناسة).',
    descriptionEn: 'Clear zipper bags with straw hole.',
    image: '/assets/02_Product_Catalog/Cold_Cups/Mojito_Bags.jpg',
    options: {
      sizes: ['450ml', '500ml'],
    },
  },
  {
    id: 'c-005',
    category: 'cold_cups',
    name: 'قوارير زجاجية (مربعة)',
    nameEn: 'Square Glass Bottles',
    description: 'قوارير زجاجية فاخرة بغطاء معدني أسود.',
    descriptionEn: 'Premium glass bottles with black metal cap.',
    image: '/assets/02_Product_Catalog/Cold_Cups/Square_Bottle.jpg',
    options: {
      sizes: ['100ml', '200ml', '250ml'],
    },
  },
  {
    id: 'c-006',
    category: 'cold_cups',
    name: 'قوارير زجاجية (دائرية)',
    nameEn: 'Round Glass Bottles',
    description: 'قوارير زجاج بتصميم أكتاف دائرية وغطاء فضي/معدني.',
    descriptionEn: 'Round shoulder glass bottles with silver/metal cap.',
    image: '/assets/02_Product_Catalog/Cold_Cups/Round_Bottle.jpg',
    options: {
      sizes: ['250ml'],
    },
  },
  {
    id: 'c-007',
    category: 'cold_cups',
    name: 'أكواب ورقية للآيسكريم',
    nameEn: 'Paper Ice Cream Cups',
    description: 'أكواب مخصصة للآيسكريم والحلويات المجمدة.',
    descriptionEn: 'Dedicated cups for ice cream and frozen desserts.',
    image: '/assets/02_Product_Catalog/Cold_Cups/IceCream_Cups.jpg',
    options: {
      sizes: ['5oz', '8oz', '12oz', '16oz'],
      design: ['Colorful Pattern'],
    },
  },

  /* =========================================
     CATEGORY 3: FOOD BOXES & CONTAINERS (علب الأطعمة)
     ========================================= */
  {
    id: 'f-001',
    category: 'food_boxes',
    name: 'قوارب ورقية (كرافت)',
    nameEn: 'Kraft Paper Boats',
    description: 'صحن تقديم مفتوح للوجبات السريعة والبطاطس.',
    descriptionEn: 'Open serving tray for fast food and fries.',
    image: '/assets/02_Product_Catalog/Food_Boxes/Boats.jpg',
    options: {
      sizes: ['#4', '#5', '#6'],
    },
  },
  {
    id: 'f-002',
    category: 'food_boxes',
    name: 'علب ورقية بنافذة',
    nameEn: 'Window Kraft Boxes',
    description: 'علب مغلقة مع نافذة علوية شفافة.',
    descriptionEn: 'Closed boxes with top clear viewing window.',
    image: '/assets/02_Product_Catalog/Food_Boxes/Window_Box.jpg',
    options: {
      sizes: ['900ml', '1200ml', '1600ml'],
    },
  },
  {
    id: 'f-003',
    category: 'food_boxes',
    name: 'علب ورقية بدون نافذة',
    nameEn: 'Solid Kraft Boxes',
    description: 'علب كرافت مصمتة لحفظ الحرارة.',
    descriptionEn: 'Solid Kraft boxes for heat retention.',
    image: '/assets/02_Product_Catalog/Food_Boxes/Solid_Box.jpg',
    options: {
      sizes: ['700ml', '900ml', '1200ml', '1600ml'],
    },
  },
  {
    id: 'f-004',
    category: 'food_boxes',
    name: 'علب رول / ساندويتش',
    nameEn: 'Roll/Sandwich Box',
    description: 'علبة طويلة مخصصة للساندويتشات والرولات.',
    descriptionEn: 'Long box designed for sandwiches and rolls.',
    image: '/assets/02_Product_Catalog/Food_Boxes/Roll_Box.jpg',
    options: {
      type: ['Kraft'],
    },
  },
  {
    id: 'f-005',
    category: 'food_boxes',
    name: 'علب برجر كرافت',
    nameEn: 'Kraft Burger Boxes',
    description: 'علبة البرجر الكلاسيكية، ورق مقوى.',
    descriptionEn: 'Classic burger box, sturdy paper.',
    image: '/assets/02_Product_Catalog/Food_Boxes/Burger_Box.jpg',
    options: {
      size: ['Small', 'Large'],
    },
  },
  {
    id: 'f-006',
    category: 'food_boxes',
    name: 'علب مايكرويف (أسود)',
    nameEn: 'Microwave Containers (Black)',
    description: 'علب بلاستيكية آمنة للمايكرويف مع غطاء شفاف.',
    descriptionEn: 'Microwave safe plastic containers with clear lid.',
    image: '/assets/02_Product_Catalog/Food_Boxes/Microwave_Black.jpg',
    options: {
      shape: ['Round', 'Rectangular'],
      sections: ['1 Section', '2 Sections', '3 Sections'],
    },
  },
  {
    id: 'f-007',
    category: 'food_boxes',
    name: 'علب مايكرويف (غطاء ذهبي)',
    nameEn: 'Gold Lid Containers',
    description: 'صحن بلاستيك أسود مع غطاء لون ذهبي (VIP).',
    descriptionEn: 'Black plastic tray with Gold colored lid (VIP).',
    image: '/assets/02_Product_Catalog/Food_Boxes/Gold_Lid_Container.jpg',
    options: {
      usage: ['Sweets', 'Premium Dates'],
    },
  },
  {
    id: 'f-008',
    category: 'food_boxes',
    name: 'علب صوص',
    nameEn: 'Sauce Containers',
    description: 'علب صوص صغيرة محكمة الغلق.',
    descriptionEn: 'Small tight-seal sauce cups.',
    image: '/assets/02_Product_Catalog/Food_Boxes/Sauce_Cups.jpg',
    options: {
      colors: ['Black', 'Clear'],
      sizes: ['Standard'],
    },
  },

  /* =========================================
     CATEGORY 4: BAGS & CARRIERS (الأكياس والحوامل)
     ========================================= */
  {
    id: 'b-001',
    category: 'bags_carriers',
    name: 'أكياس ورقية (بيد)',
    nameEn: 'Paper Bags (Handle)',
    description: 'أكياس كرافت بنية مع مقبض يدوي.',
    descriptionEn: 'Brown Kraft bags with handle.',
    image: '/assets/02_Product_Catalog/Bags/Handle_Bag.jpg',
    options: {
      sizes: ['S', 'M', 'L'],
    },
  },
  {
    id: 'b-002',
    category: 'bags_carriers',
    name: 'أكياس ورقية (بدون يد)',
    nameEn: 'Paper Bags (No Handle)',
    description: 'أكياس سادة للوجبات الخفيفة والمخبوزات.',
    descriptionEn: 'Plain bags for snacks and bakery.',
    image: '/assets/02_Product_Catalog/Bags/No_Handle_Bag.jpg',
    options: {
      sizes: ['S', 'M', 'L'],
    },
  },
  {
    id: 'b-003',
    category: 'bags_carriers',
    name: 'أكياس قهوة (مختصة)',
    nameEn: 'Coffee Bean Bags',
    description: 'أكياس سوداء بفتحة تهوية (Valve) وسحاب لحفظ القهوة.',
    descriptionEn: 'Black bags with Valve and Zipper for coffee beans.',
    image: '/assets/02_Product_Catalog/Bags/Coffee_Bags.jpg',
    options: {
      sizes: ['250g', '1kg'],
    },
  },
  {
    id: 'b-004',
    category: 'bags_carriers',
    name: 'حامل أكواب (فايبر)',
    nameEn: 'Pulp Cup Carrier',
    description: 'حامل أكواب رباعي صديق للبيئة (كرتون مقوى).',
    descriptionEn: 'Eco-friendly 4-cup carrier (Molded Pulp).',
    image: '/assets/02_Product_Catalog/Bags/Pulp_Carrier.jpg',
    options: {
      capacity: ['2 Cups', '4 Cups'],
    },
  },
  {
    id: 'b-005',
    category: 'bags_carriers',
    name: 'حامل أكواب بلاستيك',
    nameEn: 'Plastic Cup Carrier',
    description: 'حامل بلاستيك أسود للكافيهات.',
    descriptionEn: 'Black plastic carrier for cafes.',
    image: '/assets/02_Product_Catalog/Bags/Plastic_Carrier.jpg',
    options: {
      capacity: ['4 Cups'],
    },
  },
  {
    id: 'b-006',
    category: 'bags_carriers',
    name: 'حامل كوب قماشي',
    nameEn: 'Fabric Cup Holder',
    description: 'حامل شبكي معلق لكوب واحد (ترند).',
    descriptionEn: 'Mesh hanging holder for single cup (Trend).',
    image: '/assets/02_Product_Catalog/Bags/Fabric_Holder.jpg',
    options: {
      color: ['Black'],
    },
  },
  {
    id: 'b-007',
    category: 'bags_carriers',
    name: 'حامل أكواب ورقي (يد)',
    nameEn: 'Cardboard Cup Carrier',
    description: 'حامل ورقي مسطح بمقبض علوي (تصميم خاص).',
    descriptionEn: 'Flat paper carrier with top handle (Custom design).',
    image: '/assets/02_Product_Catalog/Bags/Cardboard_Handle.jpg',
    options: {
      capacity: ['2 Cups'],
    },
  },

  /* =========================================
     CATEGORY 5: ACCESSORIES & CONSUMABLES (الملحقات والاستهلاكيات)
     ========================================= */
  {
    id: 'a-001',
    category: 'accessories',
    name: 'طقم ملاعق VIP',
    nameEn: 'VIP Cutlery Set',
    description: 'مغلف: ملعقة + شوكة + سكين + منديل. (أسود).',
    descriptionEn: 'Wrapped: Spoon + Fork + Knife + Napkin. (Black).',
    image: '/assets/02_Product_Catalog/Accessories/Cutlery_Set.jpg',
    options: {
      color: ['Black'],
    },
  },
  {
    id: 'a-002',
    category: 'accessories',
    name: 'ملاعق / شوك / سكاكين (فرط)',
    nameEn: 'Bulk Cutlery',
    description: 'ملاعق وشوك وسكاكين بلاستيك مقوى.',
    descriptionEn: 'Heavy duty plastic spoons, forks, knives.',
    image: '/assets/02_Product_Catalog/Accessories/Bulk_Cutlery.jpg',
    options: {
      type: ['Spoon', 'Fork', 'Knife'],
      color: ['Black'],
    },
  },
  {
    id: 'a-003',
    category: 'accessories',
    name: 'ملاعق آيسكريم',
    nameEn: 'Ice Cream Spoons',
    description: 'ملاعق صغيرة ملونة.',
    descriptionEn: 'Small colorful spoons.',
    image: '/assets/02_Product_Catalog/Accessories/IceCream_Spoons.jpg',
    options: {
      colors: ['Mixed', 'Pink', 'Blue', 'Purple'],
    },
  },
  {
    id: 'a-004',
    category: 'accessories',
    name: 'مناديل سفرة (Napkin)',
    nameEn: 'Table Napkins',
    description: 'مناديل مربعة عالية الامتصاص.',
    descriptionEn: 'Square high-absorbency napkins.',
    image: '/assets/02_Product_Catalog/Accessories/Napkins.jpg',
    options: {
      colors: ['White', 'Brown', 'Black'],
      size: ['30x30', '24x24 (Black)'],
    },
  },
  {
    id: 'a-005',
    category: 'accessories',
    name: 'أصابع سكر',
    nameEn: 'Sugar Sticks',
    description: 'سكر مغلف جاهز للتقديم.',
    descriptionEn: 'Wrapped sugar ready to serve.',
    image: '/assets/02_Product_Catalog/Accessories/Sugar.jpg',
    options: {
      type: ['White (5g)', 'Brown (4g)'],
    },
  },
  {
    id: 'a-006',
    category: 'accessories',
    name: 'أعواد تحريك خشب',
    nameEn: 'Wooden Stirrers',
    description: 'أعواد خشبية لتحريك القهوة (مغلفة).',
    descriptionEn: 'Wooden coffee stirrers (Wrapped).',
    image: '/assets/02_Product_Catalog/Accessories/Stirrers.jpg',
    options: {
      pack: ['1000 pcs'],
    },
  },
  {
    id: 'a-007',
    category: 'accessories',
    name: 'مصاصات (شاليمو)',
    nameEn: 'Drinking Straws',
    description: 'مصاصات سوداء مغلفة.',
    descriptionEn: 'Black wrapped straws.',
    image: '/assets/02_Product_Catalog/Accessories/Straws.jpg',
    options: {
      type: ['Black'],
    },
  },
  {
    id: 'a-008',
    category: 'accessories',
    name: 'ورق فواتير حراري',
    nameEn: 'Thermal Receipt Rolls',
    description: 'رولات ورق لطابعات الكاشير.',
    descriptionEn: 'Paper rolls for cashier printers.',
    image: '/assets/02_Product_Catalog/Accessories/Thermal_Rolls.jpg',
    options: {
      size: ['Standard 80mm'],
    },
  },
  {
    id: 'a-009',
    category: 'accessories',
    name: 'مناديل رول (ماكسي)',
    nameEn: 'Maxi Roll Tissues',
    description: 'رول مناديل كبير للمطبخ والتنظيف.',
    descriptionEn: 'Large tissue roll for kitchen and cleaning.',
    image: '/assets/02_Product_Catalog/Accessories/Maxi_Roll.jpg',
    options: {
      type: ['Embossed'],
    },
  },

  /* =========================================
     CATEGORY 6: HYGIENE & SAFETY (أدوات الحماية)
     ========================================= */
  {
    id: 's-001',
    category: 'hygiene',
    name: 'قفازات فينيل',
    nameEn: 'Vinyl Gloves',
    description: 'قفازات تحضير طعام بدون بودرة.',
    descriptionEn: 'Powder-free food prep gloves.',
    image: '/assets/02_Product_Catalog/Hygiene/Gloves.jpg',
    options: {
      colors: ['Black', 'Clear', 'White'],
      sizes: ['M', 'L', 'XL'],
    },
  },
  {
    id: 's-002',
    category: 'hygiene',
    name: 'كمامات وجه',
    nameEn: 'Face Masks',
    description: 'كمامات 3 طبقات للحماية.',
    descriptionEn: '3-ply protection masks.',
    image: '/assets/02_Product_Catalog/Hygiene/Masks.jpg',
    options: {
      colors: ['Black', 'Blue'],
    },
  },
  {
    id: 's-003',
    category: 'hygiene',
    name: 'غطاء رأس (Hairnet)',
    nameEn: 'Hair Nets',
    description: 'غطاء رأس شبكي للعاملين في المطابخ.',
    descriptionEn: 'Mesh head cover for kitchen staff.',
    image: '/assets/02_Product_Catalog/Hygiene/Hairnet.jpg',
    options: {
      colors: ['Black', 'Blue', 'White'],
    },
  },
];
