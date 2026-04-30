export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  date: string;
  readTime: string;
  category: string;
  image: string;
  author: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'dental-implants-guide',
    title: 'Are Dental Implants Right for You? Everything You Need to Know',
    excerpt: 'Dental implants are the most advanced solution for missing teeth. Learn about the procedure, recovery time, costs, and whether you are a good candidate.',
    content: [
      'Dental implants have revolutionized the way we replace missing teeth. Unlike dentures or bridges, implants provide a permanent solution that looks, feels, and functions just like natural teeth.',
      'The implant itself is a small titanium post that is surgically placed into the jawbone. Over time, the bone fuses with the implant in a process called osseointegration, creating a strong foundation for the artificial tooth.',
      'Most adults with good general health are candidates for dental implants. However, factors like bone density, gum health, and certain medical conditions can affect eligibility. A thorough examination with X-rays and 3D scans is essential.',
      'The procedure is typically done under local anesthesia and is virtually painless. Recovery time varies, but most patients return to normal activities within a few days. The full healing process takes 3-6 months.',
      'At Tooth & Smile, we use premium-grade titanium implants and our in-house lab ensures perfect-fitting crowns. Dr. R. R. Murali Karthik has placed over 2,000 implants with a 98% success rate.',
    ],
    date: 'Jan 15, 2025',
    readTime: '5 min read',
    category: 'Dental Implants',
    image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&q=80',
    author: 'Dr. R. R. Murali Karthik',
  },
  {
    slug: 'root-canal-myths',
    title: 'Root Canal Myths Debunked: Why Modern RCT is Painless',
    excerpt: 'Think root canals are painful? Modern rotary endodontics and laser technology have made RCT as comfortable as getting a filling.',
    content: [
      'Root canal treatment (RCT) has long been one of the most feared dental procedures, but modern technology has completely transformed the experience. Today\'s RCT is virtually painless and highly effective.',
      'We use advanced rotary endodontic instruments that clean and shape the root canals with precision. Combined with digital apex locators, we ensure accurate treatment every time.',
      'Laser-assisted disinfection eliminates bacteria more thoroughly than traditional methods, reducing the risk of reinfection. This means better outcomes and fewer complications.',
      'Most root canal treatments at our clinic are completed in a single visit lasting 45-90 minutes. Patients often describe the experience as no more uncomfortable than getting a routine filling.',
      'After RCT, we restore the tooth with a high-quality crown from our in-house lab. This protects the weakened tooth and restores full function and aesthetics.',
    ],
    date: 'Jan 8, 2025',
    readTime: '4 min read',
    category: 'Root Canal',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80',
    author: 'Dr. R. R. Murali Karthik',
  },
  {
    slug: 'aligners-vs-braces',
    title: 'Invisible Aligners vs. Traditional Braces: Which is Better?',
    excerpt: 'Choosing between clear aligners and metal braces? We break down the pros, cons, costs, and timeline for each option to help you decide.',
    content: [
      'When it comes to straightening teeth, patients today have more options than ever. The two most popular choices are clear aligners (like Invisalign) and traditional metal braces.',
      'Clear aligners are nearly invisible, removable, and generally more comfortable. They are ideal for mild to moderate cases and offer the convenience of eating and brushing normally. Treatment typically takes 12-18 months.',
      'Traditional braces are more effective for complex orthodontic issues, including severe crowding, significant bite problems, and teeth that need vertical movement. They are also typically more affordable.',
      'At Tooth & Smile, we use digital smile design technology to create a 3D preview of your expected results before treatment begins. This helps you visualize the outcome and make an informed decision.',
      'The best option depends on your specific case, lifestyle, and budget. During your consultation, we will evaluate your teeth and recommend the most suitable approach for your needs.',
    ],
    date: 'Dec 28, 2024',
    readTime: '6 min read',
    category: 'Orthodontics',
    image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&q=80',
    author: 'Dr. R. R. Murali Karthik',
  },
  {
    slug: 'teeth-whitening-tips',
    title: 'Professional vs. At-Home Teeth Whitening: What Works Best?',
    excerpt: 'Discover the differences between professional whitening and home remedies, and learn how to maintain your bright smile for longer.',
    content: [
      'Everyone wants a brighter smile, but with so many whitening options available, it can be hard to know what actually works. Let\'s compare professional and at-home whitening methods.',
      'Professional in-office whitening uses medical-grade hydrogen peroxide gel activated by LED light. In just one hour, you can achieve results up to 8 shades lighter. The procedure is safe, supervised, and customized to your needs.',
      'At-home whitening kits, whitening toothpastes, and natural remedies like baking soda offer milder results. While they can help maintain brightness, they rarely deliver dramatic changes and may take weeks or months to show minimal improvement.',
      'The key to long-lasting results is maintenance. Avoid staining foods and drinks like coffee, tea, and red wine. Use a straw when possible, and maintain excellent oral hygiene.',
      'At Tooth & Smile, we recommend professional whitening for significant results, followed by custom take-home trays for touch-ups. This combination gives you the best of both worlds.',
    ],
    date: 'Dec 20, 2024',
    readTime: '5 min read',
    category: 'Teeth Whitening',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80',
    author: 'Dr. R. R. Murali Karthik',
  },
  {
    slug: 'smile-makeover-process',
    title: 'What to Expect During a Smile Makeover Journey',
    excerpt: 'A complete guide to the smile makeover process, from initial consultation to final results, including timelines and costs.',
    content: [
      'A smile makeover is a comprehensive approach to transforming your smile using one or more cosmetic dental procedures. It is one of the most rewarding treatments we offer at Tooth & Smile.',
      'The journey begins with a detailed consultation. We take photographs, digital scans, and discuss your goals and concerns. Using digital smile design software, we create a preview of your new smile.',
      'Common procedures in a smile makeover include porcelain veneers, teeth whitening, gum contouring, dental crowns, and orthodontic treatment. Each plan is customized to address your unique needs.',
      'The timeline varies based on the complexity of your case. Simple makeovers may take 2-3 weeks, while comprehensive cases can take 1-3 months. We provide a detailed schedule during your consultation.',
      'The results are life-changing. Patients report increased confidence, better social interactions, and a renewed sense of self-esteem. It is an investment in yourself that pays dividends every day.',
    ],
    date: 'Dec 12, 2024',
    readTime: '7 min read',
    category: 'Smile Makeover',
    image: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?w=800&q=80',
    author: 'Dr. R. R. Murali Karthik',
  },
  {
    slug: 'dental-crowns-explained',
    title: 'Dental Crowns Explained: Types, Costs, and Longevity',
    excerpt: 'Everything you need to know about dental crowns — from zirconia to porcelain, costs in India, and how long they last.',
    content: [
      'A dental crown is a cap that covers a damaged or weakened tooth, restoring its shape, size, strength, and appearance. Crowns are one of the most common restorative procedures in dentistry.',
      'There are several types of crowns available. Metal crowns are durable and affordable but less aesthetic. Porcelain-fused-to-metal (PFM) crowns offer a balance of strength and appearance. All-ceramic and zirconia crowns provide the most natural look.',
      'Zirconia crowns are increasingly popular due to their exceptional strength and lifelike appearance. They are metal-free, making them ideal for patients with metal allergies. At our clinic, we offer same-day zirconia crowns using CAD/CAM technology.',
      'With proper care, dental crowns can last 10-15 years or longer. Good oral hygiene, avoiding hard foods, and regular dental check-ups are key to maximizing their lifespan.',
      'The cost of crowns in India ranges from ₹5,000 to ₹15,000 depending on the material. We provide detailed estimates and help you choose the best option for your needs and budget.',
    ],
    date: 'Dec 5, 2024',
    readTime: '5 min read',
    category: 'Crowns & Bridges',
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&q=80',
    author: 'Dr. R. R. Murali Karthik',
  },
  {
    slug: 'oral-hygiene-daily',
    title: 'The Perfect Daily Oral Hygiene Routine for Healthy Teeth',
    excerpt: 'A step-by-step guide to maintaining excellent oral health at home, including brushing techniques and product recommendations.',
    content: [
      'Good oral hygiene is the foundation of a healthy smile. While regular dental visits are essential, what you do at home every day matters just as much.',
      'Brush your teeth twice daily for at least two minutes using a soft-bristled toothbrush and fluoride toothpaste. Use gentle circular motions and do not forget to brush your tongue.',
      'Flossing is equally important. It removes plaque and food particles from between teeth where your toothbrush cannot reach. If traditional floss is difficult, try floss picks or a water flosser.',
      'Use an antibacterial mouthwash to reduce bacteria and freshen breath. However, do not use it immediately after brushing, as it can wash away the concentrated fluoride from your toothpaste.',
      'Limit sugary and acidic foods and drinks. If you do consume them, rinse your mouth with water afterward. And never skip your biannual dental check-ups for professional cleaning and early problem detection.',
    ],
    date: 'Nov 28, 2024',
    readTime: '4 min read',
    category: 'Oral Health',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80',
    author: 'Dr. R. R. Murali Karthik',
  },
  {
    slug: 'laser-dentistry-benefits',
    title: 'How Laser Dentistry is Changing Dental Care in India',
    excerpt: 'Explore the benefits of laser-assisted dental procedures — less pain, faster healing, and more precise treatments.',
    content: [
      'Laser dentistry is one of the most exciting advancements in modern dental care. At Tooth & Smile, we use laser technology to provide safer, more comfortable, and more precise treatments.',
      'Dental lasers can be used for a wide range of procedures, including gum contouring, cavity detection, root canal disinfection, teeth whitening activation, and treating gum disease.',
      'The biggest advantage is minimal discomfort. Lasers are precise and cause less trauma to surrounding tissues, which means less bleeding, swelling, and pain. Many procedures require little to no anesthesia.',
      'Healing is significantly faster with laser treatments. The laser promotes blood clotting and stimulates tissue regeneration, reducing recovery time from days to hours in many cases.',
      'Laser dentistry is also more hygienic. The high-energy beam sterilizes the treatment area, reducing the risk of infection. It is a game-changer for patients who experience dental anxiety.',
    ],
    date: 'Nov 20, 2024',
    readTime: '5 min read',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80',
    author: 'Dr. R. R. Murali Karthik',
  },
  {
    slug: 'children-dental-care',
    title: 'When Should Your Child First Visit the Dentist?',
    excerpt: 'Pediatric dental care guidelines, common childhood dental issues, and tips for making dental visits stress-free for kids.',
    content: [
      'The Indian Dental Association recommends that children have their first dental visit by their first birthday or within six months of their first tooth erupting. Early visits help prevent problems and establish good habits.',
      'Common childhood dental issues include early childhood caries (tooth decay), thumb sucking, tongue thrusting, and misaligned teeth. Early intervention can prevent these from becoming serious problems.',
      'At Tooth & Smile, we create a child-friendly environment to make dental visits enjoyable. Our team is trained in pediatric care and knows how to communicate with children in a way that reduces fear and anxiety.',
      'Parents play a crucial role in their child\'s oral health. Supervise brushing until age 7-8, limit sugary snacks and drinks, and never put a baby to bed with a bottle of milk or juice.',
      'Regular dental check-ups every six months help catch problems early. Preventive treatments like fluoride application and dental sealants can protect your child\'s teeth from decay.',
    ],
    date: 'Nov 12, 2024',
    readTime: '4 min read',
    category: 'Pediatric Dentistry',
    image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&q=80',
    author: 'Dr. R. R. Murali Karthik',
  },
  {
    slug: 'wisdom-teeth-removal',
    title: 'Wisdom Teeth Removal: Signs, Procedure, and Recovery',
    excerpt: 'Everything you need to know about wisdom teeth extraction — when it is necessary, what to expect, and how to recover quickly.',
    content: [
      'Wisdom teeth, or third molars, typically emerge between ages 17 and 25. For many people, there is not enough space in the jaw, leading to impaction, crowding, or infection.',
      'Common signs that wisdom teeth need removal include pain at the back of the mouth, swollen gums, difficulty opening the mouth, and recurring infections. An X-ray will confirm if extraction is necessary.',
      'The extraction procedure is straightforward. After numbing the area with local anesthesia, the tooth is carefully removed. For impacted teeth, a small incision may be needed. The procedure usually takes 30-60 minutes.',
      'Recovery typically takes 3-7 days. Rest, apply ice packs to reduce swelling, eat soft foods, and avoid smoking or using straws. We provide detailed aftercare instructions and follow-up appointments.',
      'At Tooth & Smile, we use advanced imaging to plan extractions precisely, minimizing trauma and ensuring a smooth recovery. Most patients are back to normal activities within a week.',
    ],
    date: 'Nov 5, 2024',
    readTime: '5 min read',
    category: 'Oral Surgery',
    image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&q=80',
    author: 'Dr. R. R. Murali Karthik',
  },
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((b) => b.slug === slug);
}

export function getRelatedBlogs(currentSlug: string, limit: number = 3): BlogPost[] {
  const current = getBlogBySlug(currentSlug);
  if (!current) return blogPosts.slice(0, limit);
  return blogPosts
    .filter((b) => b.slug !== currentSlug)
    .filter((b) => b.category === current.category || true)
    .slice(0, limit);
}
