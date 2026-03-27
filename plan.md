# Pitstop - Street Food Fusion: Website Plan

## About the Business

**Pitstop - Street Food Fusion** is a small, cozy street food restaurant in central Turku, Finland (Aurakatu 3). They serve smash burgers, wok dishes, wraps, and loaded fries with a fusion twist — blending Western comfort food with South Asian and Asian flavors. The restaurant features an open kitchen where food is cooked in front of guests. It's run by a passionate, friendly owner/chef (Khan) and has overwhelmingly positive reviews on both Google and Facebook.

**Key brand traits from reviews:** friendly/welcoming owner, fresh ingredients cooked in front of you, bold flavors, cozy atmosphere, fast service, generous portions, fair prices, halal, feels like home.

**Tagline from their branding:** "Ignite Your Taste"

---

## Recommendation: Static HTML/CSS/JS (NOT Next.js)

**We recommend building a static HTML site**, not a Next.js app. Here's why:

| Factor | Static HTML | Next.js |
|--------|------------|---------|
| Complexity | Simple, no build step | Requires Node.js, npm, build pipeline |
| Hosting | Any hosting, even free (Netlify, GitHub Pages) | Needs Vercel/Node server or static export |
| Maintenance | Client can understand and edit basic HTML | Requires developer for any change |
| Speed to build | 1-2 days | 3-5 days |
| Performance | Instant load, no JS framework overhead | Heavier, overkill for this use case |
| SEO | Straightforward | Possible but more setup |
| What they need | Info site + menu + reviews + Wolt link | No dynamic features, no login, no CMS |

**Bottom line:** Pitstop needs a brochure-style website with their menu, photos, reviews, location, and a link to order via Wolt. There is no need for a React framework. A well-crafted static site will load faster, cost nothing to host, and be easier for anyone to maintain. We can always migrate to Next.js later if they need a blog, online ordering, or CMS.

---

## Color Scheme (inspired by the logo)

The logo uses warm, earthy, appetizing tones:

| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| **Primary Dark** | Charcoal Brown | `#3D3229` | Headings, navbar, footer text |
| **Primary Accent** | Flame Orange | `#E8652B` | CTAs, buttons, highlights, links |
| **Secondary Accent** | Warm Amber | `#E9A630` | Flame accents, hover states, badges |
| **Background Light** | Warm Cream | `#F5F0E8` | Page background |
| **Background Alt** | Soft Tan | `#E8DFD0` | Alternating sections, cards |
| **Text Body** | Dark Brown | `#2C2420` | Body text |
| **White** | Off-White | `#FEFCF8` | Card backgrounds, contrast areas |

This palette matches the logo's warm earth tones and flame imagery — appetizing colors that work well for food brands.

---

## Site Structure (Single Page + Menu Sub-page)

### Page 1: Home (index.html) — Single-page scrolling site

#### Section 1: Hero
- Full-width hero image (use `chef_cooking.jpg` or `pitstop_ignite_your_taste_flames_pan.jpg`)
- Logo overlay (`pitstop_logo.jpg`)
- Tagline: "Ignite Your Taste" / "Street Food Fusion in the Heart of Turku"
- Two CTA buttons: **"See Our Menu"** and **"Order on Wolt"** (links to https://wolt.com/fi/fin/turku/restaurant/ravintola-pitstop)

#### Section 2: About / Story
- Brief intro about Pitstop — fusion street food, open kitchen, fresh ingredients, cozy spot
- Side-by-side layout: text + image (`pitstop_bar_desk.jpg` or `single_table.jpg`)
- Mention halal, made fresh in front of you, friendly atmosphere

#### Section 3: Food Highlights (Photo Gallery)
- Grid of 6-8 best food photos with subtle hover effects
- Suggested images: `coke_burger_and_fries.jpg`, `simple_shrimp_bowl.jpg`, `meal_bowl_with_logo.jpg`, `wraps_coke_and_fries.jpg`, `shrimp_bowl_closeup.jpg`, `burger_on_platter.jpg`, `cup_meal_with_coke.jpg`, `tomatoes_on_burgers.jpg`
- Link/button to full menu page

#### Section 4: Menu Preview
- Summarized menu categories with prices (extracted from menu images):
  - **WOK** (from 7.90EUR) — Choose base, veggies, protein, sauce (Beijing/Bangkok/Osaka/Hanoi/Colombo/Mumbai)
  - **Burgers** (9.90-12.90EUR) — OG Smash, BBQ Steakhouse, PitStop Chipotle, Masala Smash, Blaze Siracha
  - **Chicken Burgers** (9.90EUR) — Holy Chick, Fried Chicken, PitStop Chipotle Chicken, Blaze Siracha Chicken
  - **Vege Burgers** (9.90EUR) — Earth Bite, PitStop Chipotle Halloumi, Blaze Siracha Veggie
  - **Wraps** (9.50EUR)
  - **Loaded Fries** (6.50-8.50EUR)
  - **Meal deal:** +5EUR for drink (0.33L) and french fries
- Button: "View Full Menu" (links to menu page)
- Button: "Order on Wolt"

#### Section 5: Reviews / Testimonials
- Carousel or grid of 6-8 curated reviews from Google and Facebook
- Suggested reviews to feature (mix of languages, emphasizing key themes):

  1. *"Pitstop has really wowed me with their wok dishes and smash burgers! The wok is bursting with flavour and freshness, and the smash burgers have a perfect sear, juicy inside, and delicious toppings."* — Google Local Guide
  2. *"Erittain maistuvaa ruokaa, kannatti kokeilla. Mielettoman ihana ja ystavallinen omistaja."* — Marika K., Facebook
  3. *"Tried the burger and the wok today — both were super tasty! Big portions, fresh flavors, and a really nice vibe."* — Hasib M., Facebook
  4. *"Best burger in Turku!"* — Google Local Guide
  5. *"I have tasted Wok Noodles from many places across the globe but this is one of the bests!"* — Google Local Guide
  6. *"This place gave me japan vibes, open kitchen, wok, burgers. The people were amazing."* — Google Review
  7. *"Really good authentic Asian food. The WOK is really amazing. Price/quality combo best in Turku."* — Carl-Bertil B., Google
  8. *"A cozy, small burger+wok spot... Best burger I've had in Turku in a long time."* — Google Review

- Show Google rating (4.9 stars) and Facebook rating (100% recommend)

#### Section 6: Location & Hours
- Embedded Google Maps showing Aurakatu 3, Turku
- Opening hours:
  - Mon-Thu: 11:00 - 23:00
  - Fri-Sat: 12:00 - 03:00
  - Sun: 11:00 - 22:00
- Contact: Phone numbers (045 3282140 / +358 50 556 5573)
- Address: Aurakatu 3, 20100 Turku, Finland

#### Section 7: Footer
- Logo (small)
- Social links: Facebook, Wolt
- Contact info repeated
- "Street Food Fusion in Turku" tagline
- Copyright

### Page 2: Full Menu (menu.html)

- Display all 6 menu page images in a clean, scrollable layout
- Bilingual: the menu images already have both Finnish and English versions (pages 1,3,5 = English; pages 2,4,6 = Finnish)
- Option to toggle between English and Finnish menu views
- "Order on Wolt" floating button

---

## Available Assets & Their Usage

### Images (24 photos in `/images/`)
| Image | Suggested Use |
|-------|--------------|
| `pitstop_ignite_your_taste_flames_pan.jpg` | Hero background (dramatic, shows brand + fire) |
| `chef_cooking.jpg` | About section / alternative hero |
| `pitstop_bar_desk.jpg` | About section (shows cozy interior) |
| `single_table.jpg` | About section alternative |
| `pitstop_logo_by_the_street.jpg` | About section / location section |
| `coke_burger_and_fries.jpg` | Food gallery |
| `simple_shrimp_bowl.jpg` | Food gallery |
| `meal_bowl_with_logo.jpg` | Food gallery (great - shows logo) |
| `wraps_coke_and_fries.jpg` | Food gallery |
| `shrimp_bowl_closeup.jpg` | Food gallery |
| `burger_on_platter.jpg` | Food gallery |
| `burger_meal.jpg` | Food gallery |
| `cup_meal_with_coke.jpg` | Food gallery |
| `tomatoes_on_burgers.jpg` | Food gallery |
| `bowl_closeup_steaming_hot.jpg` | Food gallery |
| `fries_meal.jpg` | Food gallery |
| `coca_cola_dimmed_2_meals.jpg` | Parallax / background |
| `meal_image_with_logo.jpg` | Menu section background |
| `pitstop_meal_on_bar.jpg` | Testimonials section background |
| `beef_frying_chef.jpg` | About section / gallery |
| `chef_in_the_pan_frying.jpg` | Gallery |
| `kitchen_on_pan_cooking.jpg` | Gallery |
| `sauce_to_pan.jpg` | Gallery |
| `spicing_meal_steaming_hot.jpg` | Gallery |

### Menu Images (6 pages in `/menu/`)
- Pages 1, 3, 5: English menu
- Pages 2, 4, 6: Finnish menu
- Used on the dedicated menu page

### Logo
- `pitstop_logo.jpg` — Used in navbar, hero, footer, favicon (will need to be cropped/converted)

---

## Technical Implementation Plan

### Step 1: Project Setup
- Create `/site/` directory for the website
- Set up file structure:
  ```
  /site/
    index.html
    menu.html
    css/
      style.css
    js/
      main.js
    images/         (optimized copies)
    menu/           (menu page images)
    pitstop_logo.jpg
  ```

### Step 2: Build HTML Structure
- Semantic HTML5 with proper heading hierarchy
- Mobile-first responsive design
- Accessibility: proper alt texts, ARIA labels, keyboard navigation
- Meta tags for SEO (title, description, Open Graph for social sharing)
- Finnish as primary language with English content mixed in (matching the bilingual brand)

### Step 3: CSS Styling
- CSS custom properties for the color scheme
- Responsive grid and flexbox layouts
- Smooth scroll behavior
- Image lazy loading
- Subtle animations (fade-in on scroll, hover effects on food images)
- Mobile hamburger menu
- Typography: Use a warm, slightly rustic font pairing (e.g., "Playfair Display" for headings + "Inter" or "Open Sans" for body)

### Step 4: JavaScript (minimal)
- Mobile nav toggle
- Smooth scroll to sections
- Simple testimonial carousel/slider
- Scroll-triggered fade-in animations
- Menu language toggle (English/Finnish)
- Lazy loading for images

### Step 5: Image Optimization
- Compress all images for web (target <200KB each)
- Generate WebP versions with JPG fallback
- Create responsive sizes (mobile/tablet/desktop)
- Proper alt text for all images

### Step 6: Testing & Launch
- Test on mobile, tablet, desktop
- Test on Chrome, Firefox, Safari
- Lighthouse audit (target 90+ on all scores)
- Validate HTML/CSS
- Deploy to hosting (Netlify recommended for free static hosting)

---

## Tone & Voice for Website Copy

Based on the reviews and existing social media presence, the website copy should be:

- **Warm and inviting** — like the owner himself ("feels like home")
- **Confident but not corporate** — street food energy, casual but proud
- **Bilingual-friendly** — Finnish primary with English naturally mixed in
- **Emphasis on:** freshness, bold flavors, open kitchen, fusion concept, friendly service
- **Key phrases to use:** "Ignite Your Taste", "Street Food Fusion", "Made fresh in front of you", "Where East meets West"

---

## Estimated Deliverables

1. **Fully responsive single-page website** (index.html) with all sections above
2. **Menu sub-page** (menu.html) with full menu display
3. **Optimized image assets** ready for web
4. **SEO-ready** with meta tags, Open Graph, and semantic HTML
5. **Fast loading** — target under 3 seconds on mobile

---

## Future Enhancements (out of scope for v1)

- Online ordering integration (beyond Wolt link)
- Blog / news section for specials and events
- Instagram feed integration
- Multi-language toggle (full site in Finnish + English)
- Google Business Profile integration
- Newsletter signup
- Migration to Next.js if dynamic features are needed
