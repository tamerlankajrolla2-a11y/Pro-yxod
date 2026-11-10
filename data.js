/* =========================================================
   PRO_YXOD_KZ — общие настройки и товары (для index.html и admin.html)
   ========================================================= */

const SHOP = {
  whatsapp: "77752209628",                       // номер без +
  instagram: "https://instagram.com/pro_yxod_kz"
};

/* SUPABASE
   Вставьте Project URL и anon (или publishable) key из Supabase → Project Settings → API.
   Пока здесь пусто, сайт показывает товары из списка ниже, а админка не работает. */
const SUPABASE_URL = "https://bieddzymmsqrspmdiczg.supabase.co";
const SUPABASE_KEY = "sb_publishable_UviWodhTFBBt8E_XxtjjSQ_tqT3y-_U";

/* Почта пользователя-админа из Supabase → Authentication → Users.
   Если вписать её здесь, в админке нужно вводить только пароль. */
const ADMIN_EMAIL = "admin@pro-yxod.kz";

/* Разделы. id попадает в ссылку: сайт/#tonery откроет сразу тонеры */
const CATS = [
  { id: "kremy",     name: "Кремы" },
  { id: "syvorotki", name: "Сыворотки" },
  { id: "tonery",    name: "Тонеры" },
  { id: "umyvanie",  name: "Умывание" },
  { id: "spf",       name: "SPF" },
  { id: "kollagen",  name: "Коллаген" }
];

const GOALS = {
  moist:   "Увлажнение",
  calm:    "Успокоение и барьер",
  pigment: "Пигментация и сияние",
  pores:   "Поры и высыпания",
  age:     "Морщины и упругость"
};

const STOCK = { in: "В наличии", order: "Под заказ", out: "Нет в наличии" };
const SHAPES = { tube: "Тюбик", jar: "Баночка", dropper: "Пипетка", pump: "Помпа", bottle: "Флакон", box: "Коробка" };

/* ТОВАРЫ (запасной список, пока не подключена база; из него же заполняется база)
   stock: in — в наличии, order — под заказ, out — нет
   days: срок доставки для «под заказ», например "10–14 дней"
   photo: путь к фото, например "img/medipeel-micro-tea.jpg"
   price: 0 — на сайте будет «Цена по запросу» */
const PRODUCTS = [
  // ---------- КРЕМЫ ----------
  { id:"c1",  cat:"kremy", brand:"Anua", name:"Крем PDRN Hyaluronic Acid 100", vol:"60 мл", price:8400, shape:"tube", color:"#5FB3AD", key:"PDRN", goals:["moist","age"],
    desc:"Крем с PDRN и гиалуроновой кислотой, прежде всего для глубокого увлажнения.", perks:["Глубоко увлажняет","Поддерживает упругость кожи","Подходит для ежедневного ухода"] },
  { id:"c2",  cat:"kremy", brand:"Dr.Plinus", name:"Крем Z Cure Cream", vol:"80 мл", price:8400, shape:"tube", color:"#A3C95A", key:"Мадекассосид", goals:["calm","pigment","age"],
    desc:"Лёгкий гель-крем с мадекассосидом, церамидами и ниацинамидом.", perks:["Успокаивает раздражённую кожу","Выравнивает тон","Повышает упругость","Лёгкая гелевая текстура"] },
  { id:"c3",  cat:"kremy", brand:"Round Lab", name:"Крем Camellia Deep Collagen", vol:"", price:7000, shape:"jar", color:"#D2453F", key:"Коллаген", goals:["age","moist"],
    desc:"Укрепляющий крем с экстрактом камелии и коллагеном.", perks:["Повышает упругость кожи","Питает и увлажняет","Подтягивающий эффект"] },
  { id:"c4",  cat:"kremy", brand:"Round Lab", name:"Крем с полынью Mugwort", vol:"", price:7200, shape:"jar", color:"#8EA47A", key:"Полынь", goals:["calm"],
    desc:"Успокаивающий крем с экстрактом полыни.", perks:["Снимает покраснения и раздражение","Подходит для чувствительной кожи","Увлажняет без тяжести"] },
  { id:"c5",  cat:"kremy", brand:"Round Lab", name:"Питательный крем Soybean", vol:"", price:7400, shape:"jar", color:"#C2A773", key:"Соя", goals:["moist","age"],
    desc:"Крем с соей для глубокого питания кожи.", perks:["Глубоко питает","Помогает сухой коже","Делает кожу мягкой и упругой"] },
  { id:"c6",  cat:"kremy", brand:"Round Lab", name:"Крем Pine Calming Cica", vol:"", price:6900, shape:"tube", color:"#2F5D4A", key:"Cica", goals:["calm","pores"],
    desc:"Крем с экстрактом сосны для успокоения проблемной кожи.", perks:["Успокаивает проблемную кожу","Снимает покраснения","Поддерживает защитный барьер"] },
  { id:"c7",  cat:"kremy", brand:"Dr. Althea", name:"Крем Reju 5000", vol:"", price:6300, shape:"tube", color:"#7A68B0", key:"", goals:["age","calm"],
    desc:"Восстанавливающий крем для уставшей кожи.", perks:["Помогает коже восстановиться","Увлажняет и питает"] },
  { id:"c8",  cat:"kremy", brand:"Dr. Althea", name:"Крем Pure Retinol", vol:"", price:6400, shape:"tube", color:"#3F4C8A", key:"Ретинол", goals:["age"],
    desc:"Крем с ретинолом для упругости и ровного рельефа.", perks:["Разглаживает мелкие морщины","Выравнивает текстуру кожи"] },
  { id:"c9",  cat:"kremy", brand:"Dr. Althea", name:"Крем 345 Relief Cream", vol:"", price:8100, shape:"tube", color:"#B5ADA2", key:"Ниацинамид", goals:["calm","moist"],
    desc:"Успокаивающий крем с ресвератролом и лёгкой текстурой, для всех типов кожи.", perks:["Ускоряет восстановление кожи","Укрепляет защитный барьер","Подходит для всех типов кожи"] },
  { id:"c18", cat:"kremy", brand:"Dr. Althea", name:"Крем 147 Barrier Cream", vol:"", price:8100, shape:"tube", color:"#A7A39C", key:"Авокадо", goals:["calm","moist"],
    desc:"Успокаивающий барьерный крем для нормальной и сухой кожи.", perks:["Устраняет сухость и шелушение","Укрепляет защитный барьер","Для нормальной и сухой кожи"] },
  { id:"c10", cat:"kremy", brand:"Dr. Althea", name:"Увлажняющий крем Aqua", vol:"50 мл", price:4500, shape:"tube", color:"#86AED0", key:"Бамбук", goals:["moist"],
    desc:"Лёгкий увлажняющий крем с гидролатом бамбука (70%).", perks:["Насыщает кожу влагой","Восстанавливает кожный барьер","Для всех типов кожи"] },
  { id:"c11", cat:"kremy", brand:"Celimax", name:"Барьерный крем Dual Barrier с церамидами", vol:"50 мл", price:6600, shape:"tube", color:"#98A1A6", key:"Церамиды", goals:["moist","calm"],
    desc:"Крем с комплексом церамидов для сухой и обезвоженной кожи: удерживает влагу и снимает сухость.", perks:["Насыщает влагой","Смягчает и успокаивает","Укрепляет защитный барьер"] },
  { id:"c12", cat:"kremy", brand:"Celimax", name:"Восстанавливающий крем Noni", vol:"50 мл", price:6900, shape:"tube", color:"#6E9B5A", key:"Нони", goals:["pigment","moist","age"],
    desc:"Крем с экстрактом нони для сухой, чувствительной и уставшей кожи.", perks:["Выравнивает тон","Уменьшает пигментацию","Увлажняет и успокаивает","Помогает с мелкими морщинами"] },
  { id:"c13", cat:"kremy", brand:"Celimax", name:"Осветляющий крем Pore + Dark Spot", vol:"30 мл", price:5500, shape:"tube", color:"#EAA92E", key:"Ниацинамид", goals:["pigment","pores"],
    desc:"Крем от пигментации с ниацинамидом.", perks:["Осветляет пигментацию","Сужает поры","Придаёт сияние","Для всех типов кожи"] },
  { id:"c14", cat:"kremy", brand:"VT Cosmetics", name:"Крем PDRN Capsule", vol:"30 мл", price:9800, shape:"jar", color:"#5DB8A9", key:"PDRN", goals:["moist","age"],
    desc:"Увлажняющий и омолаживающий крем с капсулами PDRN.", perks:["Увлажняет","Поддерживает упругость","Капсулы раскрываются при нанесении"] },
  { id:"c15", cat:"kremy", brand:"", name:"Крем для лица с церамидами", vol:"", price:8900, shape:"jar", color:"#78A9D1", key:"Церамиды", goals:["calm","moist"],
    desc:"Восстанавливающий крем с церамидами.", perks:["Восстанавливает защитный барьер","Глубоко увлажняет"] },
  { id:"c16", cat:"kremy", brand:"Round Lab", name:"Крем с берёзовым соком Birch Juice", vol:"80 мл", price:6900, shape:"jar", color:"#3E6FC0", key:"Берёза", goals:["moist"],
    desc:"Увлажняющий крем с берёзовым соком и гиалуроновой кислотой.", perks:["Поддерживает уровень влаги в коже","Освежает и увлажняет","Лёгкая текстура"] },
  { id:"c19", cat:"kremy", brand:"Centellian24", name:"Крем Madeca Time Reverse", vol:"50 мл", price:6900, shape:"tube", color:"#B0303C", key:"Центелла", goals:["age","calm"],
    desc:"Восстанавливающий и антивозрастной крем с центеллой азиатской.", perks:["Помогает коже восстанавливаться","Для упругости и разглаживания"] },
  { id:"c17", cat:"kremy", brand:"Celimax", name:"Бустер-крем The Vita-A Retinal Shot", vol:"15 мл", price:6300, shape:"tube", color:"#BCCF3E", key:"Ретиналь", goals:["age"],
    desc:"Концентрированный бустер-крем с ретиналем для точечного нанесения.", perks:["Уменьшает морщины и тонкие линии","Улучшает упругость и плотность кожи","Наносится на проблемные зоны: под глаза, носогубки"] },

  // ---------- СЫВОРОТКИ ----------
  { id:"s1",  cat:"syvorotki", brand:"VT Cosmetics", name:"Сыворотка для жирной кожи", vol:"", price:8200, shape:"pump", color:"#9EA7AF", key:"", goals:["pores"],
    desc:"Сыворотка, которая лучше всего подходит жирной коже.", perks:["Для жирной и комбинированной кожи","Лёгкая текстура"] },
  { id:"s2",  cat:"syvorotki", brand:"VT Cosmetics", name:"Сыворотка PDRN для сияния", vol:"", price:6720, shape:"dropper", color:"#3FB3A8", key:"PDRN", goals:["moist","pigment"],
    desc:"Сыворотка с PDRN для сияния и увлажнения.", perks:["Придаёт коже сияние","Увлажняет"] },
  { id:"s3",  cat:"syvorotki", brand:"VT Cosmetics", name:"Сыворотка с коллагеном", vol:"", price:12180, shape:"pump", color:"#D58A9C", key:"Коллаген", goals:["age"],
    desc:"Сыворотка с коллагеном для упругости кожи.", perks:["Поддерживает упругость","Разглаживает рельеф"] },
  { id:"s4",  cat:"syvorotki", brand:"Anua", name:"Сыворотка Azelaic Acid 10 + Hyaluron", vol:"30 мл", price:8800, shape:"dropper", color:"#5CAE6A", key:"Азелаиновая", goals:["calm","pores"],
    desc:"Успокаивающая сыворотка с 10% азелаиновой кислоты и гиалуроновой кислотой. Наносится вечером.", perks:["Помогает при покраснениях и куперозе","Выравнивает тон","Для проблемной кожи"] },
  { id:"s5",  cat:"syvorotki", brand:"Anua", name:"Сыворотка Niacinamide 10 + TXA 4", vol:"", price:8500, shape:"dropper", color:"#E06676", key:"Ниацинамид", goals:["pigment"],
    desc:"Сыворотка с ниацинамидом и транексамовой кислотой.", perks:["Осветляет пигментные пятна","Выравнивает тон кожи"] },
  { id:"s6",  cat:"syvorotki", brand:"VT Cosmetics", name:"Сыворотка PDRN Reedle Shot", vol:"", price:13000, shape:"pump", color:"#2E9E92", key:"PDRN", goals:["age","pores"],
    desc:"Сыворотка с PDRN и микроиглами.", perks:["Улучшает текстуру кожи","Помогает коже обновляться"] },
  { id:"s7",  cat:"syvorotki", brand:"VT Cosmetics", name:"Эссенция PDRN 100", vol:"", price:10660, shape:"pump", color:"#7CC2B7", key:"PDRN", goals:["moist","age"],
    desc:"Эссенция с PDRN для увлажнения и восстановления.", perks:["Увлажняет и придаёт сияние","Поддерживает восстановление кожи"] },
  { id:"s8",  cat:"syvorotki", brand:"VT Cosmetics", name:"Бустер-сыворотка Reedle Shot 300", vol:"50 мл", price:12600, shape:"pump", color:"#8F979E", key:"Микроиглы", goals:["pores","age"],
    desc:"Интенсивная бустер-сыворотка с микроиглами.", perks:["Уменьшает размер и глубину пор","Укрепляет защитный барьер","Помогает обновлению кожи"] },
  { id:"s9",  cat:"syvorotki", brand:"Dr. Althea", name:"Сыворотка Vitamin C Boosting", vol:"", price:6800, shape:"dropper", color:"#CC7A2E", key:"Витамин C", goals:["pigment"],
    desc:"Укрепляющая сыворотка с витамином C.", perks:["Придаёт сияние","Выравнивает тон"] },
  { id:"s10", cat:"syvorotki", brand:"Celimax", name:"Сыворотка Retinol Shot", vol:"30 мл", price:7200, shape:"pump", color:"#BCCF3E", key:"Ретинол", goals:["age","pores"],
    desc:"Подтягивающая сыворотка с микроиглами: 0,1% чистого ретинола и комплекс из 9 пептидов.", perks:["Разглаживает морщины","Сужает поры","Улучшает текстуру кожи"] },
  { id:"s11", cat:"syvorotki", brand:"Celimax", name:"Ампула с нони Noni", vol:"30 мл", price:7050, shape:"dropper", color:"#6D9A46", key:"Нони", goals:["moist","age","calm"],
    desc:"Восстанавливающая сыворотка с экстрактом нони.", perks:["Повышает упругость и эластичность","Интенсивно увлажняет","Помогает коже восстанавливаться","Для всех типов кожи"] },
  { id:"s12", cat:"syvorotki", brand:"Medicube", name:"Сыворотка PDRN", vol:"", price:8710, shape:"pump", color:"#C46A7A", key:"PDRN", goals:["moist","age"],
    desc:"Сыворотка с PDRN для увлажнения и упругости.", perks:["Увлажняет и придаёт сияние","Поддерживает упругость"] },
  { id:"s13", cat:"syvorotki", brand:"Anua", name:"Сыворотка PDRN + Hyaluron Capsule 100", vol:"30 мл", price:10800, shape:"dropper", color:"#4FBAB2", key:"PDRN", goals:["moist","age"],
    desc:"Восстанавливающая сыворотка для кожи, склонной к сухости и обезвоженности. PDRN, гиалуроновая кислота, ниацинамид, коллаген и аденозин.", perks:["Интенсивно увлажняет","Регенерация, эластичность и гладкость","Концентрированная формула"] },
  { id:"s14", cat:"syvorotki", brand:"Celimax", name:"Сыворотка Pore + Dark Spot", vol:"", price:6100, shape:"dropper", color:"#EE961E", key:"", goals:["pigment","pores"],
    desc:"Лёгкая осветляющая сыворотка.", perks:["Осветляет пигментацию и следы постакне","Придаёт здоровое сияние","Сужает расширенные поры","Для всех типов кожи"] },
  { id:"s15", cat:"syvorotki", brand:"Celimax", name:"Сыворотка Dual Barrier", vol:"30 мл", price:6900, shape:"pump", color:"#A2AE9B", key:"", goals:["calm","moist"],
    desc:"Сыворотка-бустер для восстановления защитного барьера.", perks:["Восстанавливает защитный барьер","Снимает стянутость и раздражение","Увлажняет и смягчает"] },
  { id:"s16", cat:"syvorotki", brand:"Round Lab", name:"Сыворотка с камелией и коллагеном", vol:"30 мл", price:6600, shape:"dropper", color:"#D84A45", key:"Коллаген", goals:["moist","age"],
    desc:"Глубокоувлажняющая сыворотка с экстрактом камелии и коллагеном.", perks:["Глубоко увлажняет","Подтягивающий эффект"] },
  { id:"s17", cat:"syvorotki", brand:"Skin Lab", name:"Сыворотка Vitamin C", vol:"", price:6300, shape:"dropper", color:"#6A9FD0", key:"Витамин C", goals:["pigment"],
    desc:"Осветляющая сыворотка с витамином C.", perks:["Придаёт сияние","Выравнивает тон кожи"] },
  { id:"s18", cat:"syvorotki", brand:"Dr. Althea", name:"Сыворотка для ресниц Lash Boost Serum", vol:"9 мл", price:0, shape:"tube", color:"#3A4E8C", key:"Биотин", goals:[],
    desc:"Сыворотка для ресниц с биотином, пантенолом и пептидами.", perks:["Ухаживает за ресницами","Удобная щёточка-аппликатор"],
    stock:"in", photo:"img/dr-althea-lash-boost.jpg" },

  // ---------- ТОНЕРЫ ----------
  { id:"t1",  cat:"tonery", brand:"Celimax", name:"Тонер Dual Barrier Creamy Toner", vol:"150 мл", price:6600, shape:"bottle", color:"#A9AEAD", key:"", goals:["calm","moist"],
    desc:"Кремовый тонер с молочной текстурой для сухой и чувствительной кожи.", perks:["Восстанавливает и укрепляет барьер","Увлажняет и смягчает","Для сухой и чувствительной кожи"] },
  { id:"t2",  cat:"tonery", brand:"Anua", name:"Тонер Rice 70 Glow Milky Toner", vol:"", price:7600, shape:"bottle", color:"#E2BE9C", key:"Рис", goals:["moist","pigment"],
    desc:"Питательный молочный тонер с рисовым экстрактом и керамидами, с эффектом сияния.", perks:["Глубоко питает и увлажняет","Устраняет сухость, стянутость и шелушение","Выравнивает тон и придаёт сияние","Для всех типов кожи"] },
  { id:"t3",  cat:"tonery", brand:"Celimax", name:"Тонер Noni Moisture Balancing", vol:"150 мл", price:5900, shape:"bottle", color:"#7FA04E", key:"Нони", goals:["moist","calm"],
    desc:"Увлажняющий тонер с экстрактом нони, особенно хорош для сухой и обезвоженной кожи.", perks:["Улучшает текстуру кожи","Успокаивает и увлажняет","Повышает эластичность","Для всех типов кожи"] },
  { id:"t4",  cat:"tonery", brand:"Anua", name:"Тонер Azelaic Acid 3 + Cica", vol:"250 мл", price:8100, shape:"bottle", color:"#86C873", key:"Азелаиновая", goals:["calm","pores"],
    desc:"Очищающий тонер с азелаиновой кислотой и центеллой, хорошо подходит чувствительной коже.", perks:["Для чувствительной кожи","Очищает и освежает","Центелла успокаивает кожу"] },

  // ---------- УМЫВАНИЕ ----------
  { id:"f16", cat:"umyvanie", brand:"Medipeel", name:"Пудра для умывания Micro Tea Powder Cleanser", vol:"", price:8000, shape:"bottle", color:"#7BA36B", key:"Чайное дерево", goals:["pores"],
    desc:"Микропудра для умывания с чайным деревом: мягко убирает загрязнения, кожа становится гладкой и чистой.", perks:["С чайным деревом и центеллой","Глубоко очищает поры","Для всех типов кожи"],
    stock:"in", photo:"img/medipeel-micro-tea.jpg" },
  { id:"f17", cat:"umyvanie", brand:"Dr. Althea", name:"Гидрофильный щербет Pure Grinding, зелёный", vol:"50 мл", price:5900, shape:"jar", color:"#2E8B3E", key:"", goals:["calm"],
    desc:"Мягкий гидрофильный бальзам-щербет для очищения кожи.", perks:["Растворяет макияж и загрязнения","Мягко очищает"] },
  { id:"f1",  cat:"umyvanie", brand:"Round Lab", name:"Пенка с полынью Mugwort", vol:"", price:4800, shape:"tube", color:"#8EA47A", key:"Полынь", goals:["calm"],
    desc:"Мягкая пенка с экстрактом полыни.", perks:["Бережно очищает","Успокаивает чувствительную кожу"] },
  { id:"f2",  cat:"umyvanie", brand:"Round Lab", name:"Пенка Dokdo", vol:"", price:4800, shape:"tube", color:"#7FB4D8", key:"", goals:["moist"],
    desc:"Мягкая пенка для ежедневного умывания.", perks:["Очищает, не пересушивая","Подходит для ежедневного ухода"] },
  { id:"f3",  cat:"umyvanie", brand:"Dr.Plinus", name:"Гель-пенка Z Acne Cleanser", vol:"", price:6900, shape:"tube", color:"#6DBB8D", key:"", goals:["pores"],
    desc:"Очищающая гель-пенка для проблемной кожи.", perks:["Очищает поры","Для кожи, склонной к высыпаниям"] },
  { id:"f4",  cat:"umyvanie", brand:"Dr. Althea", name:"Пенка с аминокислотами", vol:"", price:5200, shape:"pump", color:"#B9BEB4", key:"Аминокислоты", goals:["calm"],
    desc:"Нежная пенка на основе аминокислот.", perks:["Деликатно очищает","Подходит для чувствительной кожи"] },
  { id:"f5",  cat:"umyvanie", brand:"Round Lab", name:"Пенка Pine Calming Cica", vol:"", price:4800, shape:"tube", color:"#2F5D4A", key:"Cica", goals:["calm","pores"],
    desc:"Пенка с экстрактом сосны для проблемной кожи.", perks:["Успокаивает проблемную кожу","Мягко очищает"] },
  { id:"f6",  cat:"umyvanie", brand:"Dr.Ceuracle", name:"Пенка Pro Balance Pure", vol:"", price:5200, shape:"tube", color:"#2B4A8A", key:"", goals:["calm"],
    desc:"Пенка для мягкого очищения и баланса кожи.", perks:["Мягко очищает","Поддерживает баланс кожи"] },
  { id:"f7",  cat:"umyvanie", brand:"SKIN1004", name:"Пенка Madagascar Centella, розовая", vol:"", price:5600, shape:"tube", color:"#E9A3B2", key:"Центелла", goals:["pores"],
    desc:"Пенка с центеллой азиатской.", perks:["Очищает поры","Мягко ухаживает за кожей"] },
  { id:"f8",  cat:"umyvanie", brand:"SKIN1004", name:"Пенка Madagascar Centella, зелёная", vol:"", price:5700, shape:"tube", color:"#8CC294", key:"Центелла", goals:["pores","calm"],
    desc:"Пенка с центеллой азиатской.", perks:["Очищает и освежает","Успокаивает кожу"] },
  { id:"f9",  cat:"umyvanie", brand:"SKIN1004", name:"Пенка Madagascar Centella, серая", vol:"", price:5500, shape:"tube", color:"#A9AAA3", key:"Центелла", goals:["calm"],
    desc:"Пенка с центеллой азиатской.", perks:["Мягко очищает","Успокаивает кожу"] },
  { id:"f10", cat:"umyvanie", brand:"SKIN1004", name:"Пенка Madagascar Centella, коричневая", vol:"", price:5800, shape:"tube", color:"#B0884E", key:"Центелла", goals:["calm","moist"],
    desc:"Мягкая низкопенная пенка с центеллой.", perks:["Бережно очищает","Не стягивает кожу"] },
  { id:"f11", cat:"umyvanie", brand:"Round Lab", name:"Пенка с берёзовым соком", vol:"", price:4900, shape:"tube", color:"#3E6FC0", key:"Берёза", goals:["moist"],
    desc:"Очищающий гель-пенка с берёзовым соком.", perks:["Очищает и увлажняет","Подходит для сухой кожи"] },
  { id:"f12", cat:"umyvanie", brand:"LAGOM", name:"Пенка Cellup", vol:"", price:5500, shape:"tube", color:"#B4B9B0", key:"", goals:["calm"],
    desc:"Пенка для ежедневного мягкого очищения.", perks:["Деликатно очищает","Не пересушивает кожу"] },
  { id:"f13", cat:"umyvanie", brand:"AXIS-Y", name:"Пенка Sunday Morning Refresh", vol:"", price:4800, shape:"tube", color:"#7FA86E", key:"", goals:["moist"],
    desc:"Освежающая пенка для умывания.", perks:["Освежает кожу","Мягко очищает"] },
  { id:"f14", cat:"umyvanie", brand:"Celimax", name:"Пенка-мусс с нони", vol:"155 мл", price:5900, shape:"pump", color:"#6E9B5A", key:"Нони", goals:["calm"],
    desc:"Пенка-мусс на основе нони, pH 5,5–6,6.", perks:["Деликатно очищает","Смягчает и успокаивает кожу"] },
  { id:"f15", cat:"umyvanie", brand:"Celimax", name:"Гель-пенка Dual Barrier", vol:"", price:6700, shape:"pump", color:"#A9B3AD", key:"", goals:["calm","pores"],
    desc:"Мягкий бессульфатный гель для чувствительной кожи.", perks:["Очищает поры","Не сушит кожу","Без сульфатов"] },

  // ---------- SPF ----------
  { id:"p1",  cat:"spf", brand:"Celimax", name:"Солнцезащитный крем Pore + Dark Spot SPF 50+", vol:"50 мл", price:6100, shape:"tube", color:"#F2B632", key:"SPF 50+", goals:["pigment","pores"],
    desc:"Осветляющий солнцезащитный крем SPF 50+ PA++++: защищает от солнца и работает с порами и пятнами.", perks:["SPF 50+ PA++++","Ниацинамид 5% и транексамовая кислота 1%","Осветляет пигментацию","Для всех типов кожи"] },

  // ---------- КОЛЛАГЕН ----------
  { id:"k1",  cat:"kollagen", brand:"Healthy Place", name:"Коллаген-желе «Золушка», зелёное", vol:"14 стиков", price:6500, shape:"box", color:"#9CC34E", key:"Глутатион", goals:["age","pigment"],
    desc:"Корейская добавка в стиках-желе для красоты кожи. Яблочный вкус.", perks:["Коллаген и глутатион в каждом стике","Для упругости кожи","Помогает выровнять тон"] },
  { id:"k2",  cat:"kollagen", brand:"InnerNature", name:"Коллаген-желе с гранатом", vol:"60 стиков", price:15900, shape:"box", color:"#A8344E", key:"Глутатион", goals:["age"],
    desc:"Коллаген в стиках-желе с гранатом и глутатионом.", perks:["Большая упаковка","Удобно взять с собой"] },
  { id:"k3",  cat:"kollagen", brand:"EL AMOR", name:"Коллаген-желе с вишней", vol:"60 стиков", price:15900, shape:"box", color:"#C8283A", key:"Коллаген", goals:["age"],
    desc:"Коллаген в стиках-желе со вкусом вишни.", perks:["Большая упаковка","Удобно взять с собой"] }
].map((p, i) => ({ stock: "order", days: "", photo: "", hidden: false, sort: i, ...p }));

/* Фото товаров (файлы лежат в папке img). Клиентка может заменить любое фото в админке. */
const PHOTOS = {
  c17: "img/c17.jpg",
  c9: "img/c9.jpg",
  c2: "img/c2.jpg",
  t1: "img/t1.jpg",
  c1: "img/c1.jpg",
  c12: "img/c12.jpg",
  t3: "img/t3.jpg",
  t4: "img/t4.jpg",
  c18: "img/c18.jpg",
  c11: "img/c11.jpg",
  c19: "img/c19.jpg",
  s10: "img/s10.jpg",
  p1: "img/p1.jpg",
  f17: "img/f17.jpg",
  s4: "img/s4.jpg"
};
PRODUCTS.forEach(p => { if (!p.photo && PHOTOS[p.id]) p.photo = PHOTOS[p.id]; });
const LOCAL_PHOTO = Object.fromEntries(PRODUCTS.filter(p => p.photo).map(p => [p.id, p.photo]));

/* ====================== служебное ====================== */
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" }[c]));
const safeColor = c => /^#[0-9a-f]{6}$/i.test(c || "") ? c : "#8FA382";
function hx(h){ h = h.replace("#",""); return [0,2,4].map(i => parseInt(h.substr(i,2),16)); }
function mix(a,b,t){ const pa = hx(a), pb = hx(b); return "#" + pa.map((v,i) => Math.round(v + (pb[i]-v)*t).toString(16).padStart(2,"0")).join(""); }
const tint = c => mix(safeColor(c), "#ffffff", .82);
const fmt = n => Number(n).toLocaleString("ru-RU") + " ₸";
const priceText = p => p.price > 0 ? fmt(p.price) : "Цена по запросу";
const plural = (n, f) => f[(n%10===1 && n%100!==11) ? 0 : (n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20)) ? 1 : 2];
const goods = n => n + " " + plural(n, ["товар","товара","товаров"]);
const full = p => (p.brand ? p.brand + " " : "") + p.name + (p.vol ? ", " + p.vol : "");
const wa = text => `https://wa.me/${SHOP.whatsapp}?text=${encodeURIComponent(text)}`;
const stockText = p => p.stock === "order" && p.days ? `Под заказ, ${p.days}` : (STOCK[p.stock] || STOCK.order);

/* Строка базы ↔ товар */
const fromDb = r => ({ id:r.id, cat:r.cat, brand:r.brand||"", name:r.name||"", vol:r.vol||"", price:Number(r.price)||0,
  shape:r.shape||"tube", color:safeColor(r.color), key:r.key||"", goals:r.goals||[], desc:r.descr||"", perks:r.perks||[],
  photo: r.photo === "-" ? "" : (r.photo || LOCAL_PHOTO[r.id] || ""), stock:r.stock||"order", days:r.order_days||"", hidden:!!r.hidden, sort:r.sort||0 });
const toDb = p => ({ id:p.id, cat:p.cat, brand:p.brand, name:p.name, vol:p.vol, price:p.price, shape:p.shape, color:p.color,
  key:p.key, goals:p.goals, descr:p.desc, perks:p.perks, photo:p.photo || "-", stock:p.stock, order_days:p.days, hidden:p.hidden,
  sort:p.sort, updated_at:new Date().toISOString() });

/* Подключение к Supabase (библиотека грузится только если ключи заполнены) */
let _sbPromise = null;
function getSb(){
  if (!SUPABASE_URL || !SUPABASE_KEY) return Promise.resolve(null);
  if (_sbPromise) return _sbPromise;
  _sbPromise = new Promise(resolve => {
    const done = () => { try { resolve(window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY)); } catch(e){ console.warn(e); resolve(null); } };
    if (window.supabase) return done();
    const s = document.createElement("script");
    s.src = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2";
    s.onload = done;
    s.onerror = () => resolve(null);
    document.head.appendChild(s);
  });
  return _sbPromise;
}

/* Рисованная заглушка вместо фото */
function art(p){
  const c = safeColor(p.color), d = mix(c,"#000000",.3), l = mix(c,"#ffffff",.6), w = "#ffffff";
  const lines = (x,y,wd) => `<rect x="${x}" y="${y}" width="${wd*.6}" height="4" rx="2" fill="${d}" opacity=".75"/><rect x="${x}" y="${y+8}" width="${wd}" height="3" rx="1.5" fill="${d}" opacity=".3"/><rect x="${x}" y="${y+14}" width="${wd*.7}" height="3" rx="1.5" fill="${d}" opacity=".3"/>`;
  let s = "";
  switch(p.shape){
    case "jar": s = `<rect x="16" y="66" width="88" height="64" rx="12" fill="${l}"/><rect x="16" y="84" width="88" height="28" fill="${c}"/><rect x="34" y="89" width="52" height="18" rx="3" fill="${w}" opacity=".85"/><rect x="40" y="94" width="30" height="3.5" rx="1.75" fill="${d}" opacity=".7"/><rect x="40" y="100" width="40" height="3" rx="1.5" fill="${d}" opacity=".3"/><rect x="20" y="46" width="80" height="24" rx="8" fill="${d}"/><rect x="27" y="51" width="30" height="4" rx="2" fill="${w}" opacity=".25"/>`; break;
    case "dropper": s = `<rect x="32" y="56" width="56" height="74" rx="14" fill="${c}"/><rect x="52" y="46" width="16" height="12" fill="${l}"/><rect x="46" y="34" width="28" height="15" rx="3" fill="${d}"/><ellipse cx="60" cy="22" rx="11" ry="14" fill="${d}"/><rect x="40" y="76" width="40" height="34" rx="5" fill="${w}" opacity=".88"/>${lines(46,84,28)}<rect x="37" y="64" width="5" height="56" rx="2.5" fill="${w}" opacity=".3"/>`; break;
    case "pump": s = `<rect x="34" y="54" width="52" height="76" rx="10" fill="${l}"/><rect x="34" y="76" width="52" height="34" fill="${c}"/><rect x="41" y="82" width="38" height="22" rx="4" fill="${w}" opacity=".85"/><rect x="46" y="87" width="22" height="3.5" rx="1.75" fill="${d}" opacity=".7"/><rect x="46" y="94" width="28" height="3" rx="1.5" fill="${d}" opacity=".3"/><rect x="45" y="40" width="30" height="16" rx="4" fill="${d}"/><rect x="56" y="32" width="8" height="9" fill="${d}"/><rect x="42" y="24" width="34" height="9" rx="3" fill="${d}"/><rect x="72" y="26" width="18" height="5" rx="2.5" fill="${d}"/>`; break;
    case "bottle": s = `<rect x="36" y="38" width="48" height="92" rx="12" fill="${c}"/><rect x="44" y="14" width="32" height="27" rx="5" fill="${d}"/><rect x="42" y="68" width="36" height="40" rx="5" fill="${w}" opacity=".85"/>${lines(47,77,26)}<rect x="40" y="46" width="5" height="76" rx="2.5" fill="${w}" opacity=".3"/>`; break;
    case "box": s = `<g transform="rotate(9 94 86)"><rect x="86" y="44" width="16" height="86" rx="3" fill="${w}"/><rect x="86" y="44" width="16" height="14" rx="3" fill="${c}"/></g><rect x="18" y="34" width="66" height="96" rx="5" fill="${c}"/><rect x="18" y="34" width="66" height="30" rx="5" fill="${w}" opacity=".88"/><rect x="25" y="42" width="30" height="5" rx="2.5" fill="${d}" opacity=".7"/><rect x="25" y="51" width="40" height="3.5" rx="1.75" fill="${d}" opacity=".35"/><rect x="25" y="78" width="26" height="3" rx="1.5" fill="${w}" opacity=".6"/><rect x="25" y="85" width="34" height="3" rx="1.5" fill="${w}" opacity=".6"/>`; break;
    default: s = `<rect x="44" y="106" width="32" height="24" rx="5" fill="${d}"/><path d="M34 16H86L80 110H40Z" fill="${c}"/><rect x="31" y="10" width="58" height="9" rx="2.5" fill="${d}"/><rect x="41" y="44" width="38" height="36" rx="5" fill="${w}" opacity=".85"/>${lines(47,52,26)}<rect x="38" y="22" width="5" height="76" rx="2.5" fill="${w}" opacity=".25"/>`;
  }
  return `<svg viewBox="0 0 120 140" aria-hidden="true" focusable="false"><ellipse cx="60" cy="133" rx="40" ry="5" fill="#2E3B2C" opacity=".12"/>${s}</svg>`;
}
const photoTag = p => p.photo ? `<img src="${esc(p.photo)}" alt="${esc(full(p))}" loading="lazy" onerror="this.remove()">` : "";
