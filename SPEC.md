# Developer Portfolio Website Specification

## Project Overview
- **Project Name**: Developer Portfolio
- **Type**: Full-stack developer portfolio website
- **Core Functionality**: Showcase developer skills, projects, and provide contact options
- **Target Users**: Potential employers, clients, and collaborators

## Tech Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Lucide React (icons)

---

## UI/UX Specification

### Design System

#### Color Palette

**Light Mode:**
- Background: `#FAFAFA`
- Surface: `#FFFFFF`
- Text Primary: `#0A0A0A`
- Text Secondary: `#525252`
- Text Muted: `#A3A3A3`
- Accent Primary: `#0D0D0D`
- Accent Secondary: `#262626`
- Border: `#E5E5E5`
- Shadow: `rgba(0, 0, 0, 0.05)`

**Dark Mode:**
- Background: `#0A0A0A`
- Surface: `#171717`
- Text Primary: `#FAFAFA`
- Text Secondary: `#A3A3A3`
- Text Muted: `#525252`
- Accent Primary: `#FFFFFF`
- Accent Secondary: `#E5E5E5`
- Border: `#262626`
- Shadow: `rgba(0, 0, 0, 0.3)`

#### Typography
- **Font Family**: `Geist` (Next.js default) or `Inter` as fallback
- **Headings**: 
  - H1: 4rem/64px, font-weight: 700
  - H2: 2.5rem/40px, font-weight: 600
  - H3: 1.5rem/24px, font-weight: 600
- **Body**: 1rem/16px, font-weight: 400
- **Small**: 0.875rem/14px

#### Spacing System
- Section padding: 6rem (96px) vertical
- Container max-width: 1200px
- Grid gap: 2rem (32px)
- Card padding: 1.5rem (24px)

#### Visual Effects
- Border radius (cards): 16px
- Border radius (buttons): 8px
- Border radius (badges): 9999px (pill)
- Box shadow (cards): `0 4px 24px rgba(0, 0, 0, 0.06)`
- Hover transition: 200ms ease-out
- Gradient accent: Subtle radial gradient in hero

---

### Components Specification

#### 1. Navbar
- Fixed/sticky at top
- Height: 72px
- Background: blur effect (backdrop-filter)
- Logo/Name on left
- Navigation links center: Home, Projects, About, Contact
- Right side: GitHub icon link + Dark/Light toggle
- Mobile: Hamburger menu with slide-out drawer

#### 2. Hero Section
- Full viewport height (min-h-screen with navbar offset)
- Centered content
- Large heading with name
- Subtitle: "Full Stack Developer"
- Tagline paragraph
- Three CTA buttons:
  - "View Projects" (primary - dark fill)
  - "Contact Me" (outline)
  - GitHub link (icon button)
- Tech badges below buttons (pill style)
- Subtle gradient background blob

#### 3. About Section
- Two-column layout on desktop (text left, image/visual right)
- Personal introduction paragraph
- Tech stack grid with categorized cards:
  - Frontend (React, Next.js, TypeScript, Tailwind CSS)
  - Backend (Node.js, Prisma, REST APIs)
  - Database (PostgreSQL)
  - Tools (Git, GitHub, Vercel)

#### 4. Projects Section
- Section title with underline accent
- Responsive grid: 2 columns on tablet, 1 on mobile, 2 on desktop
- Project cards with:
  - Image placeholder (gradient background with icon)
  - Project title
  - Description (2-3 lines)
  - Tech stack tags (pill badges)
  - Two action buttons: "Live Demo" + "GitHub"
- Click card or "View Details" to navigate to detail page

#### 5. Project Detail Page
- Back navigation
- Project header with title and description
- Sections:
  - Overview
  - Problem
  - Solution
  - Tech Stack (badges)
  - Key Features (bulleted list)
  - Challenges & Learnings
- Demo link and GitHub link buttons
- Screenshot placeholders

#### 6. Skills Section
- Categorized cards
- Categories: Frontend, Backend, Database, Tools
- Each card has icon + title + skill list
- Grid layout: 2x2 on desktop

#### 7. Contact Section
- Centered heading
- Contact info: Email, GitHub links
- Contact form:
  - Name input
  - Email input
  - Message textarea
  - Submit button
- Form has validation styling

#### 8. Footer
- Simple centered layout
- Name + copyright
- Social links row: GitHub, LinkedIn, Email

#### 9. Developer Activity Widget
- Small floating card
- Three items:
  - "Currently building: Hotel Reservation App"
  - "Learning: System Design"
  - "Interested in: Scalable Web Applications"
- Position: Below hero section or in sidebar

---

### Animations & Interactions

#### Page Load
- Fade in sections with stagger (100ms delay between elements)
- Hero text slides up

#### Scroll Animations
- Sections reveal on scroll (fade + translateY)
- Use Intersection Observer or CSS animation on viewport entry

#### Hover Effects
- Project cards: lift (translateY -4px) + shadow increase
- Buttons: background color shift
- Links: underline slide-in
- Cards: subtle scale (1.02) on hover

#### Transitions
- All interactive elements: 200ms ease-out
- Dark mode toggle: 300ms transition on colors

---

### Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px
- Container padding: 1rem mobile, 2rem tablet, 3rem desktop

---

## Functionality Specification

### Navigation
- Smooth scroll to sections on single page
- Active section highlighting in navbar
- Mobile drawer with close on link click

### Dark/Light Mode
- Toggle persists in localStorage
- Respects system preference on first visit
- Smooth transition between modes

### Contact Form
- Client-side validation
- Required fields: name, email, message
- Email format validation
- Submit shows success message (no backend - log to console)

### Project Data
- Stored in `/data/projects.ts`
- Type-safe Project interface
- Easy to add/edit projects

---

## File Structure
```
/app
  /layout.tsx
  /page.tsx
  /projects
    /page.tsx
    /[slug]/page.tsx
  /about/page.tsx
  /contact/page.tsx
/components
  /Navbar.tsx
  /Hero.tsx
  /About.tsx
  /Projects.tsx
  /ProjectCard.tsx
  /ProjectDetail.tsx
  /Skills.tsx
  /Contact.tsx
  /Footer.tsx
  /ThemeToggle.tsx
  /ActivityWidget.tsx
  /Section.tsx
/data
  /projects.ts
  /skills.ts
/types
  /index.ts
```

---

## Acceptance Criteria

### Visual Checkpoints
- [ ] Navbar is sticky with blur effect
- [ ] Dark/light mode toggle works and persists
- [ ] Hero section has gradient accent background
- [ ] Project cards have hover lift animation
- [ ] All sections have proper spacing
- [ ] Typography is consistent throughout
- [ ] Mobile menu works correctly

### Functional Checkpoints
- [ ] Navigation links scroll smoothly to sections
- [ ] All pages load without errors
- [ ] Project detail pages display correct project data
- [ ] Contact form validates inputs
- [ ] Responsive design works on all breakpoints

### Performance
- [ ] No console errors
- [ ] Images/placeholders load properly
- [ ] Animations are smooth (60fps)
