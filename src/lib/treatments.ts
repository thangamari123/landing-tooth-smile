export interface Review {
  author: string;
  rating: number;
  text: string;
  date: string;
  source: 'Google' | 'Practo' | 'Dentee' | 'Verified Patient';
}

export interface Treatment {
  slug: string;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDesc: string;
  tagline: string;
  image: string;
  heroImage: string;
  duration: string;
  recovery: string;
  costRange: string;
  overview: string;
  description: string[];
  procedure: string[];
  benefits: string[];
  faqs: { q: string; a: string }[];
  beforeAfter: { title: string; desc: string; beforeImg: string; afterImg: string }[];
  reviews: Review[];
}

export const treatments: Treatment[] = [
  {
    slug: 'dental-implants',
    title: 'Dental Implants',
    shortTitle: 'Implants',
    metaTitle: 'Dental Implants in Mylapore, Chennai | Tooth & Smile',
    metaDesc: 'Permanent tooth replacement with dental implants. MDS Prosthodontist & Implantologist in Mylapore, Chennai. Book your consultation today.',
    tagline: 'Permanent Teeth That Look and Feel Natural',
    image: 'https://res.cloudinary.com/dcldlvuib/image/upload/v1778327080/Dental_Implants_fncket.png',
    heroImage: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=1920&q=80',
    duration: '2-3 visits over 3-6 months',
    recovery: '3-7 days for initial healing',
    costRange: 'Starting from ₹25,000 per implant',
    overview: 'Replace missing teeth with titanium implants that fuse with your jawbone - giving you a restoration that looks, feels, and functions exactly like a natural tooth. No slipping, no discomfort, no compromise.',
    description: [
      'At Tooth & Smile Advanced Dentistry, we use premium-grade titanium implants from leading international brands. Our in-house dental lab ensures that every crown is custom-crafted for a perfect fit and natural appearance.',
      'Dr. R. R. Murali Karthik, MDS Prosthodontist & Implantologist, has placed over 2,000 implants with a 98% success rate. Using advanced OPG imaging and 3D planning software, every implant placement is precisely mapped before the procedure begins.',
      'Whether you need a single tooth replacement, multiple implants, or full-mouth rehabilitation with All-on-4 or All-on-6 systems, we have the expertise and technology to restore your smile permanently.',
    ],
    procedure: [
      'Comprehensive examination with OPG and 3D CBCT scan',
      'Treatment planning with digital smile design',
      'Implant placement surgery under local anesthesia',
      'Healing period of 3-6 months (osseointegration)',
      'Abutment placement and impression taking',
      'Custom crown fabrication in our in-house lab',
      'Final crown fitting and bite adjustment',
    ],
    benefits: [
      '3D digital implant planning',
      'Single-day implant procedures available',
      '95%+ success rate',
    ],
    faqs: [
      { q: 'Is the implant procedure painful?', a: 'No. The procedure is performed under local anesthesia, and most patients report minimal discomfort. We also offer sedation options for anxious patients.' },
      { q: 'How long do dental implants last?', a: 'With proper oral hygiene and regular check-ups, dental implants can last 25+ years or even a lifetime. The crown may need replacement after 10-15 years.' },
      { q: 'Am I a candidate for dental implants?', a: 'Most adults with good general health are candidates. We evaluate bone density, gum health, and medical history during your consultation. Bone grafting is available if needed.' },
      { q: 'What is the success rate?', a: 'Our implant success rate is 98%. This is achieved through careful planning, premium materials, and strict sterilization protocols.' },
      { q: 'How much does a dental implant cost?', a: 'Single implant treatment starts from ₹25,000. The final cost depends on the implant brand, bone condition, and type of crown. We provide a detailed estimate after your consultation.' },
    ],
    beforeAfter: [
      { title: 'Single Tooth Replacement', desc: 'Front tooth implant with zirconia crown', beforeImg: '/images/cases/dental_implant_before.png', afterImg: '/images/cases/dental_implant_after.png' },
    ],
    reviews: [
      { author: 'Rajesh K.', rating: 5, text: 'My new dental implants feel exactly like my natural teeth. I can finally eat apples again without worrying! Dr. Karthik is a true professional.', date: '2 months ago', source: 'Google' },
      { author: 'Suresh Kumar', rating: 5, text: 'Got full mouth implants for my father. The procedure was explained clearly and the results are amazing. Highly recommended for complex cases.', date: '3 months ago', source: 'Practo' },
      { author: 'Meenakshi R.', rating: 5, text: 'Very satisfied with the implant treatment. Painless and very affordable compared to other clinics in Chennai.', date: '5 months ago', source: 'Verified Patient' }
    ]
  },
  {
    slug: 'root-canal-treatment',
    title: 'Root Canal Treatment',
    shortTitle: 'Root Canal',
    metaTitle: 'Painless Root Canal Treatment in Mylapore, Chennai | Tooth & Smile',
    metaDesc: 'Expert painless root canal treatment (RCT) by MDS specialist in Mylapore, Chennai. Save your natural tooth with modern rotary endodontics.',
    tagline: 'Save Your Natural Tooth. End the Pain.',
    image: 'https://res.cloudinary.com/dcldlvuib/image/upload/v1778327077/Root_Canal_Treatment_w7yxys.png',
    heroImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1920&q=80',
    duration: '1-2 visits (45-90 minutes each)',
    recovery: 'Same day return to normal activities',
    costRange: 'Starting from ₹3,500 per tooth',
    overview: 'Modern root canal treatment is virtually painless. Our endodontists use rotary instruments and digital X-rays to clean and seal infected canals quickly - usually in just one or two visits.',
    description: [
      'At Tooth & Smile, we use the latest rotary endodontic systems that make RCT faster, more precise, and virtually painless. Our laser-assisted techniques ensure thorough disinfection of the root canal system.',
      'Dr. R. R. Murali Karthik specializes in complex root canal cases, including re-treatments and procedures on molars with multiple canals. Our digital apex locators ensure accurate working length measurement for optimal outcomes.',
      'After RCT, we restore the tooth with a high-quality crown from our in-house lab, ensuring both function and aesthetics are fully restored.',
    ],
    procedure: [
      'Digital X-ray and clinical examination',
      'Local anesthesia for complete numbness',
      'Access cavity preparation and pulp removal',
      'Canal cleaning and shaping with rotary instruments',
      'Laser-assisted disinfection of root canals',
      'Canal filling with gutta-percha and sealer',
      'Permanent filling and crown placement',
    ],
    benefits: [
      'Single-sitting RCT available',
      'Pain-free procedure',
      'Microscope-assisted precision',
    ],
    faqs: [
      { q: 'Is root canal treatment painful?', a: 'Modern RCT is virtually painless. We use advanced anesthesia techniques, and most patients report the procedure is as comfortable as getting a filling.' },
      { q: 'How many visits does RCT require?', a: 'Most cases are completed in a single visit (45-90 minutes). Complex cases may require 2 visits for optimal results.' },
      { q: 'Do I need a crown after RCT?', a: 'Yes, a crown is strongly recommended after RCT to protect the weakened tooth and restore full function. We offer same-day crown options.' },
      { q: 'What if my RCT fails?', a: 'Our success rate exceeds 95%. In rare cases of failure, we offer re-treatment or surgical options (apicoectomy) to save the tooth.' },
      { q: 'How much does RCT cost?', a: 'Root canal treatment starts from ₹3,500 per tooth. The cost varies based on tooth position (front vs. molar) and complexity. Crown cost is additional.' },
    ],
    beforeAfter: [
      { title: 'Infected Molar Saved', desc: 'Severely infected molar restored with RCT and crown', beforeImg: '/images/cases/root_canal_before.png', afterImg: '/images/cases/root_canal_after.png' },
    ],
    reviews: [
      { author: 'Priya S.', rating: 5, text: 'I was terrified of the dentist, but Dr. Karthik made my root canal completely painless. Best clinic in Chennai for anxious patients!', date: '1 month ago', source: 'Google' },
      { author: 'Arun V.', rating: 5, text: 'Single sitting RCT was a breeze. No pain even after the anesthesia wore off. Great experience.', date: '2 months ago', source: 'Dentee' },
      { author: 'Deepa T.', rating: 5, text: 'Best endodontist in Mylapore. Saved my tooth when others said it had to be removed.', date: '4 months ago', source: 'Practo' }
    ]
  },
  {
    slug: 'braces-aligners',
    title: 'Braces & Aligners',
    shortTitle: 'Braces',
    metaTitle: 'Braces & Clear Aligners in Mylapore, Chennai | Tooth & Smile',
    metaDesc: 'Straighten your teeth with metal braces, ceramic braces, or invisible aligners. Digital smile design planning in Mylapore, Chennai.',
    tagline: 'Straighten Your Smile, at Any Age',
    image: 'https://res.cloudinary.com/dcldlvuib/image/upload/v1778327082/Aligner_Braces_zyw3cc.png',
    heroImage: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=1920&q=80',
    duration: '12-24 months depending on case',
    recovery: 'Mild discomfort for 2-3 days after adjustments',
    costRange: 'Starting from ₹35,000',
    overview: "Whether you're a teen or an adult, we offer metal braces, ceramic braces, and clear aligners (Invisalign-compatible) tailored to your lifestyle and budget. Achieve the straight smile you've always wanted -discreetly.",
    description: [
      'At Tooth & Smile, we provide a full range of orthodontic options: metal braces, ceramic (tooth-colored) braces, lingual braces, and clear aligners. Our digital treatment planning allows you to see your expected results before starting treatment.',
      'Dr. R. R. Murali Karthik evaluates each patient’s facial structure, bite pattern, and aesthetic goals to recommend the most suitable orthodontic approach. We treat everything from simple crowding to complex bite corrections.',
      'Regular monitoring appointments ensure your treatment stays on track. Most patients achieve their desired results within the estimated timeframe with excellent stability.',
    ],
    procedure: [
      'Comprehensive examination and digital scans',
      'Digital smile design and treatment simulation',
      'Custom treatment plan with timeline estimate',
      'Brace/aligner fitting appointment',
      'Regular adjustment/check-up visits (4-8 weeks)',
      'Retention phase with fixed or removable retainers',
    ],
    benefits: [
      'Free orthodontic consultation',
      'Invisible aligner options',
      '12–24 month treatment plans',
    ],
    faqs: [
      { q: 'What is the best age for braces?', a: 'While braces can be done at any age, early evaluation at age 7-8 helps identify issues. Adults can also achieve excellent results with modern options.' },
      { q: 'How long does orthodontic treatment take?', a: 'Simple cases: 6-12 months. Moderate cases: 12-18 months. Complex cases: 18-24 months. We provide an accurate estimate during consultation.' },
      { q: 'Are clear aligners as effective as braces?', a: 'Clear aligners are highly effective for mild to moderate cases. For complex movements, traditional braces may be recommended. We help you choose the best option.' },
      { q: 'Do I need to wear retainers forever?', a: 'Retainers are essential for maintaining results. Initially full-time, then nighttime wear. Long-term retainer use prevents relapse.' },
      { q: 'How much do braces cost?', a: 'Metal braces start from ₹35,000. Ceramic braces from ₹55,000. Clear aligners from ₹1,50,000. We offer flexible payment plans.' },
    ],
    beforeAfter: [
      { title: 'Crowded Teeth Correction', desc: 'Severe crowding resolved with 18-month braces treatment', beforeImg: '/images/cases/braces_before.png', afterImg: '/images/cases/braces_after.png' },
    ],
    reviews: [
      { author: 'Ananya M.', rating: 5, text: 'I got my invisible aligners here. The 3D scan was so cool, and my teeth straightened out in just 8 months! So happy with my new smile.', date: '1 month ago', source: 'Google' },
      { author: 'Karthik N.', rating: 5, text: 'Metal braces treatment was very smooth. Proper follow-ups and transparent pricing. Best orthodontic care.', date: '6 months ago', source: 'Verified Patient' },
      { author: 'Sowmya R.', rating: 5, text: 'Discreet and effective. The aligners are so much better than traditional braces. Thank you Tooth & Smile!', date: '3 months ago', source: 'Practo' }
    ]
  },
  {
    slug: 'teeth-whitening',
    title: 'Teeth Whitening',
    shortTitle: 'Whitening',
    metaTitle: 'Professional Teeth Whitening in Mylapore, Chennai | Tooth & Smile',
    metaDesc: 'Get a brighter smile with professional teeth whitening. Safe, effective, and instant results. Book your whitening session in Mylapore, Chennai.',
    tagline: 'A Brighter Smile in Under an Hour',
    image: 'https://res.cloudinary.com/dcldlvuib/image/upload/v1780036007/Dental_Tooth_Whitening_b4djct.png',
    heroImage: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1920&q=80',
    duration: '45-60 minutes per session',
    recovery: 'No downtime – resume normal activities immediately',
    costRange: 'Starting from ₹8,000 per session',
    overview: 'Our professional-grade whitening treatments lighten your teeth by up to 8 shades in a single session - safely and effectively. Say goodbye to stains from coffee, tea, and time.',
    description: [
      'At Tooth & Smile, we offer both in-office power whitening and take-home custom tray systems. Our in-office treatment uses professional-grade hydrogen peroxide gel activated by LED light, delivering up to 8 shades lighter in one session.',
      'Before whitening, we conduct a thorough examination to ensure your teeth and gums are healthy. We also assess the type of staining to determine the most effective approach.',
      'For best results, we recommend a professional cleaning before whitening. We also provide maintenance guidance and touch-up kits to help you maintain your bright smile long-term.',
    ],
    procedure: [
      'Dental examination and shade assessment',
      'Professional cleaning (if needed)',
      'Gum protection with barrier gel',
      'Whitening gel application',
      'LED light activation (3-4 cycles of 15 min)',
      'Final rinse and post-treatment care instructions',
    ],
    benefits: [
      'Laser-assisted whitening',
      'Zero enamel damage',
      'Instant visible results',
    ],
    faqs: [
      { q: 'Is teeth whitening safe?', a: 'Yes, when performed by a dental professional. We use protective barriers for gums and carefully control the whitening agent concentration for safe, effective results.' },
      { q: 'How long do results last?', a: 'Results typically last 1-3 years depending on diet and habits. Avoiding staining foods/drinks and using maintenance kits extends results.' },
      { q: 'Will whitening work on all teeth?', a: 'Whitening works best on natural teeth. It does not change the color of crowns, veneers, or fillings. We assess this during your consultation.' },
      { q: 'Does whitening cause sensitivity?', a: 'Some patients experience temporary sensitivity for 24-48 hours. We use desensitizing agents and provide special toothpaste to minimize this.' },
      { q: 'How much does professional whitening cost?', a: 'In-office whitening starts from ₹8,000 per session. Take-home custom trays start from ₹5,000. Package deals are available.' },
    ],
    beforeAfter: [
      { title: 'Heavy Stain Removal', desc: 'Years of coffee and tobacco stains removed in one session', beforeImg: '/images/cases/teeth_whitening_before.png', afterImg: '/images/cases/teeth_whitening_after.png' },
    ],
    reviews: [
      { author: 'Venkatesh R.', rating: 5, text: 'The laser teeth whitening took less than an hour, and my smile is so much brighter for my upcoming wedding! Truly instant results.', date: '2 weeks ago', source: 'Google' },
      { author: 'Nithya S.', rating: 5, text: 'Safe and effective. I had zero sensitivity after the procedure. Highly recommend for a quick smile boost.', date: '1 month ago', source: 'Dentee' },
      { author: 'Manoj P.', rating: 5, text: 'Visible difference in just one sitting. Professional staff and relaxing environment.', date: '3 months ago', source: 'Verified Patient' }
    ]
  },
  {
    slug: 'smile-makeover',
    title: 'Smile Makeover',
    shortTitle: 'Smile Makeover',
    metaTitle: 'Smile Makeover in Mylapore, Chennai | Tooth & Smile',
    metaDesc: 'Complete smile transformation with veneers, crowns, and cosmetic bonding. Digital smile design preview. Book your consultation in Mylapore, Chennai.',
    tagline: 'Total Smile Transformation, Designed Just for You',
    image: 'https://res.cloudinary.com/dcldlvuib/image/upload/v1780036011/Smile_Makeover_gdabnx.png',
    heroImage: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?w=1920&q=80',
    duration: '2-4 visits over 2-4 weeks',
    recovery: 'Minimal – resume normal activities same day',
    costRange: 'Custom quote after consultation',
    overview: 'A smile makeover combines veneers, whitening, contouring, and more - crafted to complement your face and personality. We use digital smile design to show you your new smile before treatment even begins.',
    description: [
      'At Tooth & Smile, every smile makeover begins with a comprehensive aesthetic analysis. Using digital smile design software, we create a preview of your new smile before any treatment begins. You can see and approve the expected results.',
      'Dr. R. R. Murali Karthik specializes in aesthetic dentistry and considers factors like face shape, lip line, gum display, and tooth proportions to create a smile that looks naturally beautiful on you.',
      'Our in-house lab crafts every veneer and crown with meticulous attention to color, translucency, and surface texture for results that are virtually indistinguishable from natural teeth.',
    ],
    procedure: [
      'Comprehensive aesthetic evaluation and photography',
      'Digital smile design and 3D mock-up preview',
      'Treatment planning and cost estimate',
      'Tooth preparation and digital impressions',
      'Temporary restorations for preview',
      'Final veneer/crown fabrication in our lab',
      'Permanent placement and bite adjustment',
    ],
    benefits: [
      'Complete transformation of your smile',
      'Digital preview before treatment begins',
      'Customized to your unique facial features',
      'Natural-looking, long-lasting aesthetics',
      'Can fix multiple issues in one treatment plan',
      'Boosts confidence and social interactions',
    ],
    faqs: [
      { q: 'What procedures are included in a smile makeover?', a: 'It varies by patient. Common procedures include veneers, crowns, teeth whitening, gum contouring, and orthodontics. We create a customized plan based on your goals.' },
      { q: 'How long does a smile makeover take?', a: 'Simple makeovers: 2-3 weeks. Comprehensive cases: 1-3 months. We provide a detailed timeline during your consultation.' },
      { q: 'Are veneers permanent?', a: 'Veneers require minimal tooth preparation and are considered a permanent treatment. With proper care, they last 10-15 years or longer.' },
      { q: 'Can I see my results before treatment?', a: 'Yes! Our digital smile design creates a realistic preview. We also provide temporary restorations so you can “test drive” your new smile.' },
      { q: 'How much does a smile makeover cost?', a: 'Costs vary significantly based on the procedures needed. We provide a detailed estimate after your consultation. EMI options are available.' },
    ],
    beforeAfter: [
      { title: 'Full Smile Transformation', desc: 'Complete makeover with porcelain veneers and crowns', beforeImg: '/images/cases/smile_transform_before.png', afterImg: '/images/cases/smile_transform_after.png' },
    ],
    reviews: [
      { author: 'Lakshmi N.', rating: 5, text: 'My smile makeover with porcelain veneers changed my life. I used to hide my smile, now I show it off everywhere! Dr. Karthik is an artist.', date: '1 month ago', source: 'Google' },
      { author: 'Vijay S.', rating: 5, text: 'The digital smile design preview was so helpful. I knew exactly what to expect. The final result exceeded my expectations.', date: '4 months ago', source: 'Practo' },
      { author: 'Anita K.', rating: 5, text: 'Beautiful veneers that look 100% natural. The attention to detail is remarkable. Best investment in myself.', date: '2 months ago', source: 'Verified Patient' }
    ]
  },

  {
    slug: 'pediatric-dentistry',
    title: 'Pediatric Dentistry',
    shortTitle: 'Pediatric',
    metaTitle: 'Pediatric Dentistry in Mylapore, Chennai | Tooth & Smile',
    metaDesc: 'Gentle and fun dental care for your little ones in Mylapore, Chennai. Build healthy habits early with our specialized pediatric dentists.',
    tagline: 'Gentle Care for Your Little Ones',
    image: 'https://res.cloudinary.com/dcldlvuib/image/upload/v1780036006/Pediatric_Dentistry_knftv4.png',
    heroImage: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1920&q=80',
    duration: '30-45 minutes',
    recovery: 'Immediate',
    costRange: 'Consultation from ₹500',
    overview: 'We make dental visits fun and fear-free for kids. Our pediatric specialists are trained to handle anxious children with patience - building healthy habits that last a lifetime.',
    description: [
      'Early dental care is crucial for your child\'s overall health. At Tooth & Smile, we focus on preventive care, educating both parents and children on proper oral hygiene.',
      'Our clinic provides a child-friendly environment to ensure a positive experience. From routine check-ups and fluoride treatments to cavity fillings and sealants, we offer comprehensive care tailored to kids.',
    ],
    procedure: [
      'Gentle introduction to the dental chair',
      'Thorough examination of teeth and gums',
      'Professional cleaning and fluoride application',
      'Cavity treatment if necessary',
      'Oral hygiene education for parents and children',
    ],
    benefits: [
      'Child-friendly environment',
      'Specialists trained in handling anxious kids',
      'Focus on preventive care and education',
      'Painless treatment options',
    ],
    faqs: [
      { q: 'When should my child first see a dentist?', a: 'The first visit should be by their first birthday or when their first tooth erupts.' },
      { q: 'How can I prepare my child for the dentist?', a: 'Talk to them positively about the visit. Read books or watch videos about going to the dentist. Avoid using words like "pain" or "shot".' },
      { q: 'Are dental X-rays safe for children?', a: 'Yes, we use digital X-rays which emit very low radiation and are completely safe for kids.' },
    ],
    beforeAfter: [],
    reviews: [
      { author: 'Rohini G.', rating: 5, text: 'My 5-year-old was always afraid of dentists, but he loved the environment here. Dr. Karthik is so patient with kids.', date: '1 month ago', source: 'Google' },
      { author: 'Siddharth M.', rating: 5, text: 'Excellent pediatric care. No more dental fear for my daughter. Fun and gentle approach.', date: '3 months ago', source: 'Verified Patient' },
      { author: 'Kavitha L.', rating: 5, text: 'Safe, clean, and child-friendly. The best place for children’s dental health in Chennai.', date: '5 months ago', source: 'Practo' }
    ]
  },
];

export function getTreatmentBySlug(slug: string): Treatment | undefined {
  return treatments.find((t) => t.slug === slug);
}
