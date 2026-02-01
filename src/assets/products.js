export const PRODUCT_CATEGORIES = [
  { id: 'hot_cups', nameAr: 'أكواب حارة', nameEn: 'Hot Cups' },
  { id: 'cold_cups', nameAr: 'أكواب باردة', nameEn: 'Cold Cups' },
  { id: 'food_boxes', nameAr: 'علب الأطعمة', nameEn: 'Food Packaging' },
  { id: 'accessories', nameAr: 'كماليات', nameEn: 'Accessories' },
  { id: 'hygiene', nameAr: 'نظافة', nameEn: 'Hygiene' },
];

export const PRODUCTS = [
  /* --- CATEGORY: HOT DRINKS --- */
  {
    id: 'h-001',
    category: 'hot_cups',
    name: 'أكواب ورقية (طبقة واحدة)',
    nameEn: 'Single Wall Paper Cups',
    description:
      'أكواب ورقية اقتصادية وعملية، متوفرة بالأبيض، الأسود، والكرافت.',
    descriptionEn:
      'Economical and practical paper cups. Available in White, Black, and Kraft.',
    image: '/assets/02_Product_Catalog/Paper_Cups/Single_Wall.jpg',
    sizes: ['4oz', '7oz', '8oz', '12oz'],
    colors: ['White', 'Black', 'Kraft'],
  },
  {
    id: 'h-002',
    category: 'hot_cups',
    name: 'أكواب ورقية (طبقتين)',
    nameEn: 'Double Wall Paper Cups',
    description:
      'عزل حراري عالي الجودة للحماية من الحرارة، مثالية للكافيهات المختصة.',
    descriptionEn:
      'High-quality thermal insulation. Perfect for specialty coffee shops.',
    image: '/assets/02_Product_Catalog/Paper_Cups/Double_Wall_Kraft.jpg',
    sizes: ['4oz', '8oz', '12oz'],
    colors: ['White', 'Black', 'Kraft'],
  },
  {
    id: 'h-003',
    category: 'hot_cups',
    name: 'أكواب ريبل (متموجة)',
    nameEn: 'Ripple Wall Cups',
    description: 'تصميم متموج فاخر يوفر حماية قصوى لليدين ومظهر أنيق.',
    descriptionEn:
      'Premium ripple design offering maximum hand protection and elegant look.',
    image: '/assets/02_Product_Catalog/Paper_Cups/Ripple_Cups.jpg',
    sizes: ['4oz', '8oz', '12oz'],
    colors: ['Black', 'Kraft'],
  },

  /* --- CATEGORY: COLD DRINKS --- */
  {
    id: 'c-001',
    category: 'cold_cups',
    name: 'أكواب بلاستيكية شكل U',
    nameEn: 'U-Shape Plastic Cups',
    description: 'تصميم عصري للمشروبات الباردة والعصائر، متينة وشفافة.',
    descriptionEn:
      'Modern U-shape design for cold drinks and juices. Durable and clear.',
    image: '/assets/02_Product_Catalog/Cold_Cups/U_Shape_Plastic.jpg',
    sizes: ['12oz', '16oz'],
  },
  {
    id: 'c-002',
    category: 'cold_cups',
    name: 'أكياس موهيتو (مع سحاب)',
    nameEn: 'Mojito Juice Bags',
    description: 'أكياس عصير شفافة مع فتحة للمصاص، خيار مميز للطلبات الخارجية.',
    descriptionEn:
      'Clear juice pouches with zipper and straw hole. Distinctive choice for takeout.',
    image: '/assets/02_Product_Catalog/Cold_Cups/Mojito_Bags.jpg',
    sizes: ['450ml', '500ml'],
  },

  /* --- CATEGORY: FOOD PACKAGING --- */
  {
    id: 'f-001',
    category: 'food_boxes',
    name: 'صحن ورق كرافت (قارب)',
    nameEn: 'Kraft Paper Boats',
    description: 'مثالي للوجبات الخفيفة، البطاطس، والبرجر. مقاوم للزيوت.',
    descriptionEn: 'Perfect for snacks, fries, and burgers. Grease resistant.',
    image: '/assets/02_Product_Catalog/Food_Boxes/Kraft_Boats.jpg',
    sizes: ['#4', '#5', '#6'],
  },
  {
    id: 'f-002',
    category: 'food_boxes',
    name: 'علب ورقية بنافذة',
    nameEn: 'Window Kraft Boxes',
    description: 'علب للسلطات أو الحلويات مع نافذة شفافة لإظهار المنتج.',
    descriptionEn:
      'Boxes for salads or sweets with a clear window to showcase the product.',
    image: '/assets/02_Product_Catalog/Food_Boxes/Window_Boxes.jpg',
    sizes: ['900ml', '1200ml', '1600ml'],
  },
  {
    id: 'f-003',
    category: 'food_boxes',
    name: 'علب مايكرويف (قاعدة سوداء)',
    nameEn: 'Microwave Containers',
    description: 'علب فاخرة تتحمل الحرارة، قاعدة سوداء وغطاء شفاف محكم.',
    descriptionEn:
      'Premium heat-resistant containers. Black base with tight clear lid.',
    image: '/assets/02_Product_Catalog/Food_Boxes/Microwave_Containers.jpg',
    shapes: ['Rectangular', 'Round'],
    sizes: ['1 Section', '2 Sections', '3 Sections'],
  },

  /* --- CATEGORY: HYGIENE & ACCESSORIES --- */
  {
    id: 'a-001',
    category: 'accessories',
    name: 'مجموعة أدوات مائدة VIP',
    nameEn: 'VIP Cutlery Set',
    description: 'مغلفة آلياً: ملعقة، شوكة، سكين، منديل. لون أسود فاخر.',
    descriptionEn:
      'Auto-wrapped: Spoon, Fork, Knife, Napkin. Premium Black color.',
    image: '/assets/02_Product_Catalog/Accessories/Cutlery_Sets.jpg',
    colors: ['Black'],
  },
  {
    id: 'a-002',
    category: 'hygiene',
    name: 'قفازات فينيل',
    nameEn: 'Vinyl Gloves',
    description:
      'قفازات عالية الجودة لتحضير الطعام، متوفرة باللون الأسود أو الشفاف.',
    descriptionEn:
      'High-quality food prep gloves. Available in Black or Clear.',
    image: '/assets/02_Product_Catalog/Hygiene/Gloves.jpg',
    sizes: ['M', 'L', 'XL'],
    colors: ['Black', 'Clear'],
  },
];
