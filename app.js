
const mainImage = document.querySelector(".main-image");
const imageSecondery = document.querySelector(".image-secondery");

window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;

    // Calculate the rotation angle based on the scroll position
    let rotation = (scroll / (document.documentElement.scrollHeight - window.innerHeight)) * 150;

    // Apply the rotation to the main image
    mainImage.style.transform = `rotate(${rotation}deg)`;
    

});

// Add the following code inside the window.addEventListener('scroll', () => {}) block
const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));






// Translations object
const translations = {
  en: {
    title: "Etmam Alarabia",
    year: "year",
    home: "Home",
    about: "About",
    services: "Services",
    packages: "Packages and Services",
    contact: "Contact",
    slugain: "Manage your business",
    slugain2: "A newly established Saudi company to keep pace with the rapid changes and rapid development in the field of e-government as Etmam Al-Arabia has a team of experts in the field of e-government relations And field workers with high efficiency, in addition to the presence of an expert cadre in human materials.",
    button1: "Services and packages",
    why: "Why choosing us?",
    experts: "Experts",
    experts2: "Experts in the field of government relations management",
    quality: "Quality",
    quality2: "Quality of performance and speed of work",
    consulting: "Consulting",
    consulting2: "Providing consultations and analytical studies",
    packages2: "Packages and Services",
    package3: "Services Packages Plan",
    month1: "Per Month",
    month2: "Per Month",
    month3: "Per Month",
    gom1: "Government operations management",
    gom2: "Government operations management",
    gom3: "Government operations management",
    employees1: "Company size 1 - 30 employees",
    employees2: "Company size 31 - 100 employees",
    employees3: "Company size 101 - 200 employees",
    bs1: "Browse services",
    bs2: "Browse services",
    bs3: "Browse services",
    workingProcedure: "Working Procedure",
    q1: "How is coordination done?",
    a1: "The initial meeting with the employer or the responsible employee to coordinate and receive the work and key points.",
    q2: "How is delegation carried out?",
    a2: "Determining the mechanism for managing government platforms and delegating them by the employer or through authorization.",
    q3: "What's next?",
    a3: "Identifying the preferred communication methods the employer desires for monitoring task completion and daily operations.",
    a4: "Determining the method for sharing operations online, allowing the employer to access them anytime and anywhere.",
    a5: "Establishing the mechanism for periodic reports, their schedules, and the key data the employer needs in the reports.",
    featuresAndGuarantees: "Features and Guarantees",
    feature1: "The presence of an account manager for the facility who carries out daily operations in coordination with the employer and provides reports.",
    feature2: "Experience in managing government operations for establishments extending for more than 10 years and understanding of regulations and bylaws.",
    feature3: "Guarantee to bear the value of any violation or fine for which we are responsible.",
    feature4: "Smooth entry and integration with the employer and the human resources management team.",
    feature5: "We work as part of the organization and as a highly experienced employee within your work team.",
    ourServices: "Our Services",
    st1: "Management of commercial records and all licenses affiliated with the establishment",
    sp1: "Comprehensive management of commercial records and all licenses affiliated with the establishment (national addresses - chambers of commerce - trademarks - social insurance certificates - zakat and tax certificates - municipal licenses - civil defense - administrative control and camera installation, and other records and licenses affiliated with the establishment), following up, scheduling, and providing a monthly report on their status, including issuance, renewal, modification, transfer, and other operations.",
    st2: "Management of all government employee operations",
    sp2: "Comprehensive management of all government employee operations such as (issuing and renewing residency permits - issuing and renewing work permits - authenticating employee contracts and adhering to the percentages required by the ministry - issuing visas, authorizing them, and recruitment - following up on task completion obstacles and solving them - adding and excluding from social insurance - single and multiple exit and re-entry visas and following up on them - uploading salary files through Mudd and providing justifications - modifying professions and transferring sponsorships - providing technical support to all employees of the establishment at any time), following up, and providing a detailed monthly report to the employer or the Human Resources department in the establishment.",
    st3: "Compliance with all programs and regulations of the Ministry of Human Resources",
    sp3: "Such as (commitment to improving the Nitaqat range in the best ways and at the lowest costs - commitment to job localization programs and finding the best solutions compatible with the ministry's programs - helping the establishment understand and comply with nationality ratios - commitment to the program of professions associated with the establishment's activity - commitment to designating and following up on the establishment's locations - commitment to self-assessment of the establishment - providing work organization regulations for establishments - submitting objections to violations against the establishment, if any - helping the establishment avoid violations by providing advice and guidance periodically with reports - providing the best consultations to the employer or Human Resources department in all government operations).",
    st4: "Comprehensive Reporting and Consultation Services",
    sp4: "Almost daily, weekly, and monthly periodic meetings and visits to employers (field visits or online in Riyadh - online only outside Riyadh) and providing comprehensive reports on the status of government operations for the establishment (reports on records and licenses and their status - reports on all government employee operations - reports on compliance with all regulations and bylaws for the establishment according to the nature of its activity - providing necessary consultations to reduce costs for the establishment and assisting the financial department with this).",
    ourPartners: "Our Clients",
    contactUs: "Contact Us",
    fullName: "Full Name",
    email: "Email",
    message: "Message",
    send: "Send",
    phoneNumber: "Phone Number",
    rights: "©2024, All rights reserved to Etmam Alarabia.",
    etmam: "Etmam Alarabia",     
    trp: "Types of Reports Provided to the Employer",  
    trp1: "Report on the records and licenses related to the establishment and any observations concerning them.",
    trp2: "Employee and workforce report, including (expiry dates of work permits and residency permits, contract expiration dates, status of job titles and their updates, percentage of contract documentation and the establishment's compliance, assignment of locations in Qiwa, sponsorship transfer and recruitment if applicable, and recruitment balance).",
    trp3: "Report on field visits to government entities for completing the establishment's transactions and the outcomes.",
    trp4: "Report on observations and warnings from government entities that may cause some services to be disrupted.",  
    trp5: "Specialized reports (Nitaqat, nationality ratios, Saudized jobs, non-counted labor).",
    companySize: "Company Size",
    go1: "For all government platforms and field transactions",
    go2: "For all government platforms and field transactions",
    go3: "For all government platforms and field transactions",



  },
  ar: {
    title: "إتمام العربية",
    year: "سنة",
    home: "الرئيسية",
    about: "من نحن",
    services: "الخدمات",
    packages: "الخدمات والباقات",
    contact: "تواصل معنا",
    slugain: "إدارة العمليات الحكومية للمنشأة",
    slugain2: "إتمام العربية شركة متخصصة لخدمات الأعمال لمواكبة التغيرات السريعة والتطور السريع في مجال الحكومة الإلكترونية في المملكة حيث تمتلك إتمام العربية فريق من الخبراء في مجال العلاقات الحكومة والعاملين في الميدان وإدارة المنصات الحكومية للمنشآت بكفاءة عالية بالإضافة إلى وجود كوادر متخصصة في عمليات الموارد البشرية وشؤون الموظفين.",
    button1: "الخدمات والباقات",
    why: "لماذا تختارنا؟",
    experts: "خبراء",
    experts2: "خبراء في إدارة جميع العمليات والعلاقات الحكومية للمنشآت بما في ذلك إدارة المنصات الحكومية وعملياتها",
    quality: "جودة",
    quality2: "نتميز في جودة أداء وتنفيذ العمليات وسرعة العمل عليها وتسليمها مما يزيد كفاءة العمليات الحكومية",
    consulting: "استشارات",
    consulting2: "تقديم الاستشارات والدراسات التحليلية للمنشآت التي تساعدهم على اتخاذ أفضل القرارات المناسبة",
    packages2: "الخدمات والباقات",
    package3: "خطة باقات الخدمات",
    month1: "شهرياً",
    month2: "شهرياً",
    month3: "شهرياً",
    gom1: "إدارة العمليات الحكومية للمنشأة",
    gom2: "إدارة العمليات الحكومية للمنشأة",
    gom3: "إدارة العمليات الحكومية للمنشأة",
    employees1: " حجم المنشأة 1-30 موظف",
    employees2: " حجم المنشأة 31-100 موظف",
    employees3: " حجم المنشأة 101-200 موظف",
    bs1: "اطلع على الخدمات والية العمل",
    bs2: "اطلع على الخدمات والية العمل",
    bs3: "اطلع على الخدمات والية العمل",
    workingProcedure: "آلية العمل",
    q1: "كيف يتم التنسيق؟",
    a1: "الاجتماع الاولي مع صاحب العمل أو الموظف المسؤول للتنسيق واستلام الاعمال وأهم النقاط.",
    q2: "كيف يتم التفويض؟",
    a2: "تحديد آلية إدارة المنصات الحكومية والتفويض عليها من قبل صاحب العمل أو التوكيل عليها.",
    q3: "ماذا بعد؟",
    a3: "تحديد أفضل طرق التواصل التي يرغبها صاحب العمل لمتابعة إنجاز المهام والعمليات اليومية.",
    a4: "تحديد طريقة مشاركة العمليات أونلاين للرجوع لها من قبل صاحب العمل في أي وقت وأي مكان.",
    a5: "تحديد آلية التقارير الدورية ومواعيدها وأهم البيانات التي يحتاجها صاحب العمل في التقارير.",
    featuresAndGuarantees: "الميزات والضمانات",
    feature1: "وجود مدير حساب لكل منشأة يقوم بتنفيذ العمليات اليومية والتواصل مع صاحب العمل وتقديم التقارير بشكل دوري",
    feature2: "خبرة في إدارة العمليات الحكومية للمنشآت تمتد لأكثر من 10 سنوات وفهم الأنظمة واللوائح",
    feature3: "ضمان تحمل قيمة أي مخالفة أو غرامة نكون نحن المتسببين بها",
    feature4: "الدخول السلس والاندماج مع صاحب العمل وفريق إدارة الموارد البشرية",
    feature5: "نعمل كجزء من المنظمة وكموظف بخبرة عالية ضمن فريق العمل لديكم",
    ourServices: "الخدمات التفصيلية",
    st1: "إدارة السجلات التجارية وجميع التراخيص المنتسبة للمنشأة",
    sp1: "الإدارة الشاملة للسجلات التجارية وجميع التراخيص التابعة للمنشأة (العناوين الوطنية – الغرف التجارية – العلامات التجارية – شهادات التأمينات الاجتماعية – شهادات الزكاة والضريبة – رخص البلديات – الدفاع المدني – الضبط الإداري وإنجاز الكاميرات وغيرها من سجلات وتراخيص تابعة للمنشأة) ومتابعتها وجدولتها وتقديم تقرير شهري عن حالتها وذلك يشمل الإصدار والتجديد والتعديل والنقل وغيرها من عمليات.",
    st2: "إدارة جميع عمليات الموظفين الحكومية",
    sp2: "الإدارة الشاملة لجميع عمليات الموظفين الحكومية مثل ( إصدار الاقامات وتجديدها – إصدار رخص العمل وتجديدها – توثيق عقود الموظفين والالتزام بالنسب المطلوبة من الوزارة – إصدار التأشيرات والتفويض عليها والاستقدام – متابعة عوائق إنجاز المهام وحلها – الإضافة والاستبعاد من التأمينات الاجتماعية – تأشيرات الخروج والعودة المفردة والمتعددة ومتابعتها – رفع ملفات الرواتب عن طريق مدد وتقديم التبريرات – تعديل المهن ونقل الكفالات – تقديم الدعم الفني لجميع موظفي المنشأة في أي وقت ) ومتابعتها وتقديم تقرير شهري مفصل عنها لصاحب العمل أو لإدارة الموارد البشرية في المنشأة.",
    st3: "الالتزام بجميع برامج وأنظمة وزارة الموارد البشرية",
    sp3: "الالتزام بجميع برامج ولوائح وزارة الموارد البشرية مثل (الالتزام بتحسين النطاق بأفضل الطرق وأقل التكاليف – الالتزام ببرامج توطين المهن وإيجاد أفضل الحلول المتوافقة مع برامج الوزارة – مساعدة المنشأة على فهم نسب الجنسيات والالتزام بها – الالتزام ببرنامج المهن المرتبطة بنشاط المنشأة - الالتزام بتعيين مواقع المنشأة ومتابعتها – الالتزام بالتقييم الذاتي للمنشأة – تقديم لوائح تنظيم العمل للمنشآت – تقديم الاعتراضات على المخالفات الواقعة على المنشأة إن وجدت – مساعدة المنشأة على تجنب المخالفات وذلك بتقديم النصائح والارشادات بشكل دوري مع التقارير – تقديم أفضل الاستشارات لصاحب العمل أو إدارة الموارد البشرية في جميع العمليات الحكومية.",
    st4: "خدمات التقارير الشاملة والاستشارات",
    sp4: "اجتماعات دورية شبه يومية وأسبوعية وشهرية وزيارات لأصحاب العمل (الرياض زيارات ميدانية أو اونلاين – خارج الرياض أونلاين فقط) وتقديم التقارير الشاملة عن وضع العمليات الحكومية الخاصة بالمنشأة (تقارير السجلات والتراخيص وحالاتها – تقارير جميع عمليات الموظفين الحكومية – تقارير الالتزام بجميع الأنظمة واللوائح للمنشأة حسب طبيعة نشاطها – تقديم الاستشارات اللازمة لخفض التكاليف على المنشأة ومساعدة الإدارة المالية بذلك.",
    ourPartners: "عملاؤنا",
    contactUs: "تواصل معنا",
    fullName: "الاسم الكامل",
    email: "البريد الالكتروني",
    message: "الرسالة",
    send: "إرسال",
    phoneNumber: "رقم الجوال",
    rights: "©2024, جميع الحقوق محفوظة لإتمام العربية.",
    etmam: "إتمام العربية",
    trp: "أنواع التقارير المقدمة لصاحب العمل",
    trp1: "تقرير السجلات والتراخيص التابعة للمنشأة والملاحظات عليها.",
    trp2: "تقرير الموظفين والعاملين ويشمل (تواريخ انتهاء رخص العمل والاقامات – تواريخ انتهاء العقود - حالة المهن وتحديثها – نسبة توثيق العقود والتزام المنشأة بها – تعيين المواقع في قوى – نقل الكفالة والاستقدام إن وجدت – رصيد الاستقطاب).",
    trp3: "تقرير بالزيارات الميدانية للجهات الحكومية لإنجاز المعاملات الخاصة بالمنشأة وما تم خلالها.",
    trp4: "تقرير بالملاحظات والتنبيهات لدى الجهات الحكومية والتي قد تتسبب في تعطل بعض الخدمات.",
    trp5: "تقارير متخصصة (نطاقات – نسب الجنسيات – المهن الموطنة – العمالة الغير محتسبين)",
    companySize: "حجم المنشأة",
    go1: "لجميع المنصات الحكومية والمعاملات الميدانية",
    go2: "لجميع المنصات الحكومية والمعاملات الميدانية",
    go3: "لجميع المنصات الحكومية والمعاملات الميدانية",

  }
};

// Function to safely set text content
function setTextContent(id, text) {
  const element = document.getElementById(id);
  if (element) {
    element.textContent = text;
  } else {
    console.warn(`Element with id "${id}" not found`);
  }
}

// Function to toggle direction and language
function toggleDirection(lang) {
  // Save the selected language direction in localStorage
  localStorage.setItem('languageDirection', lang);

  // Translate text
  Object.keys(translations[lang]).forEach(key => {
    setTextContent(key, translations[lang][key]);
  });


  // Set RTL or LTR
  const html = document.documentElement;
  if (lang === 'ar') {
    html.setAttribute('dir', 'rtl');
    html.setAttribute('lang', 'ar');
    document.body.classList.add('rtl');
    document.body.classList.remove('ltr');
  } else {
    html.setAttribute('dir', 'ltr');
    html.setAttribute('lang', 'en');
    document.body.classList.add('ltr');
    document.body.classList.remove('rtl');
  }


  // Update language buttons
  const enButton = document.querySelector(".En");
  const arButton = document.querySelector(".Ar");
  if (enButton) enButton.classList.toggle('text-[#329fda]', lang === 'en');
  if (arButton) arButton.classList.toggle('text-[#329fda]', lang === 'ar');
}

// Function to apply saved direction
function applySavedDirection() {
  const savedLang = localStorage.getItem('languageDirection') || 'ar';
  toggleDirection(savedLang);
}

// Call applySavedDirection when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', applySavedDirection);

// Event listeners for language buttons
document.addEventListener('DOMContentLoaded', () => {
  const enButton = document.querySelector(".En");
  const arButton = document.querySelector(".Ar");
  if (enButton) enButton.addEventListener('click', () => toggleDirection('en'));
  if (arButton) arButton.addEventListener('click', () => toggleDirection('ar'));
});