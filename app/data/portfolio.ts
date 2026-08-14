export interface Project {
  id: string
  title: string
  tagline: string
  category: string
  year: string
  description: string
  whyIBuiltIt: string
  techStack: string[]
  githubUrl?: string
  liveUrl?: string
  featured: boolean
  accentColor: string
}

export interface ExperienceItem {
  year: string
  role: string
  place: string
  description: string
  skills: string[]
}

export const PERSONAL_INFO = {
  name: 'Ahmad Nadwy Anshory',
  shortName: 'Nadwy',
  nickname: 'stuckwyu',
  role: 'Software Engineer & UI Craftsman',
  location: 'Indonesia 🇮🇩',
  timezone: 'Asia/Jakarta (WIB • UTC+7)',
  bio: 'Seorang developer yang terobsesi dengan detail antarmuka, fluid motion, dan arsitektur web yang kencang. Menghabiskan sebagian besar waktu di terminal, meracik komponen Vue/Nuxt, dan bereksperimen dengan backend Go.',
  shortBio: 'Suka ngoding hal-hal yang berguna, interaktif, dan enak dipandang.',
  email: 'ahmadnadwy.dev@gmail.com',
  github: 'https://github.com/stuckwyu',
  linkedin: 'https://linkedin.com/in/ahmadnadwy',
  telegram: 'https://t.me/stuckwyu',
  x: 'https://x.com/stuckwyu',
  currentStatus: 'Lagi open untuk freelance projects, contract, & full-time engineering roles.',
  interests: [
    'Apple Fluid Motion & Spring Physics',
    'High-Performance Web & Nuxt 4',
    'Backend Systems with Go & Bun',
    'Open Source Tooling & Neovim',
    'Kopi & Lo-Fi Beats saat Coding'
  ],
  stack: [
    { name: 'Vue 3 / Nuxt 4', tag: 'Frontend' },
    { name: 'TypeScript', tag: 'Language' },
    { name: 'Tailwind CSS', tag: 'Styling' },
    { name: 'React / Next.js', tag: 'Frontend' },
    { name: 'Node.js / Bun', tag: 'Backend' },
    { name: 'Go (Golang)', tag: 'Backend' },
    { name: 'PostgreSQL', tag: 'Database' },
    { name: 'Redis', tag: 'Cache' },
    { name: 'Docker', tag: 'DevOps' },
    { name: 'Linux / Git', tag: 'Tools' }
  ]
}

export const PROJECTS: Project[] = [
  {
    id: 'omniflow-canvas',
    title: 'OmniFlow Canvas',
    tagline: 'Visual node-based workflow editor dengan fluid drag & drop',
    category: 'Web App',
    year: '2024',
    description: 'Aplikasi canvas interaktif untuk mendesain alur kerja dan flowchart otomatisasi secara visual. Dibuat dengan animasi koordinat berbasis fisika pegas (spring) yang mulus tanpa lag.',
    whyIBuiltIt: 'Saya ingin membuat node editor yang rasanya seringan native desktop app di macOS, tanpa ketergantungan library canvas yang berat.',
    techStack: ['Nuxt 4', 'Vue 3', 'TypeScript', 'Tailwind CSS', 'Go', 'WebSockets'],
    githubUrl: 'https://github.com/stuckwyu',
    liveUrl: 'https://github.com/stuckwyu',
    featured: true,
    accentColor: '#38bdf8'
  },
  {
    id: 'aura-ui',
    title: 'Aura UI Primitives',
    tagline: 'Kumpulan komponen web dengan estetika Apple & physics animation',
    category: 'Design System',
    year: '2024',
    description: 'Koleksi komponen UI minimalis dengan translucent dark glassmorphism, font optical tracking, dan transisi gesture yang bisa diinterupsi kapan saja (interruptible spring transitions).',
    whyIBuiltIt: 'Eksplorasi pribadi saya terhadap panduan WWDC "Designing Fluid Interfaces" yang diterjemahkan langsung ke ekosistem web modern.',
    techStack: ['Vue 3', 'TypeScript', 'Tailwind CSS', 'Motion Physics'],
    githubUrl: 'https://github.com/stuckwyu',
    liveUrl: 'https://github.com/stuckwyu',
    featured: true,
    accentColor: '#c084fc'
  },
  {
    id: 'pulse-telemetry',
    title: 'Pulse Telemetry',
    tagline: 'Server & service real-time monitoring dashboard minimalis',
    category: 'Developer Tool',
    year: '2023',
    description: 'Dashboard pemantauan server pribadi yang menampilkan metrik penggunaan CPU, RAM, latensi jaringan, dan status log secara real-time dengan tampilan dark mode elegan.',
    whyIBuiltIt: 'Sering butuh monitoring server pribadi tanpa harus setup sistem monitoring enterprise yang ribet dan makan RAM besar.',
    techStack: ['TypeScript', 'Node.js', 'Go', 'Tailwind CSS', 'ClickHouse', 'Docker'],
    githubUrl: 'https://github.com/stuckwyu',
    liveUrl: 'https://github.com/stuckwyu',
    featured: true,
    accentColor: '#818cf8'
  },
  {
    id: 'hypervault-pass',
    title: 'HyperVault Core',
    tagline: 'Zero-knowledge secret manager dengan autentikasi biometrik Passkeys',
    category: 'Security / Tool',
    year: '2023',
    description: 'Tool manajemen password & env variables dengan enkripsi client-side AES-256 dan integrasi biometrik WebAuthn (Touch ID / Face ID).',
    whyIBuiltIt: 'Eksperimen kriptografi dan implementasi standar FIDO2 WebAuthn untuk keamanan kredensial mandiri.',
    techStack: ['Go', 'PostgreSQL', 'WebAuthn', 'Docker', 'Vue 3', 'Tailwind CSS'],
    githubUrl: 'https://github.com/stuckwyu',
    liveUrl: 'https://github.com/stuckwyu',
    featured: false,
    accentColor: '#34d399'
  },
  {
    id: 'zenith-store',
    title: 'Zenith Storefront',
    tagline: 'Headless storefront eksperimen dengan sub-second transitions',
    category: 'Full Stack',
    year: '2023',
    description: 'E-commerce storefront kustom dengan keranjang belanja swipeable bottom-sheet dan optimasi Core Web Vitals 100/100.',
    whyIBuiltIt: 'Membuktikan bahwa website belanja bisa seringan dan semenyenangkan aplikasi mobile tanpa delay loading.',
    techStack: ['Nuxt 4', 'Supabase', 'Tailwind CSS', 'TypeScript'],
    githubUrl: 'https://github.com/stuckwyu',
    liveUrl: 'https://github.com/stuckwyu',
    featured: false,
    accentColor: '#fbbf24'
  }
]

export const EXPERIENCES: ExperienceItem[] = [
  {
    year: '2023 — Sekarang',
    role: 'Full-Stack Developer & Freelancer',
    place: 'Independent / Remote',
    description: 'Membangun aplikasi web kustom untuk klien, mulai dari dashboard bisnis, landing page interaktif, hingga API backend. Terbiasa menangani proyek dari nol sampai live di server.',
    skills: ['Nuxt 4', 'Vue 3', 'TypeScript', 'Go', 'PostgreSQL', 'Tailwind CSS']
  },
  {
    year: '2021 — 2023',
    role: 'Frontend & UI Developer',
    place: 'Tech Agency & Studio',
    description: 'Mengembangkan antarmuka aplikasi web klien, membangun component library yang rapi, dan melakukan optimasi performa serta integrasi REST API.',
    skills: ['React', 'Next.js', 'Vue.js', 'Node.js', 'Tailwind CSS']
  },
  {
    year: '2019 — 2021',
    role: 'Junior Web Developer',
    place: 'Software House',
    description: 'Slicing desain Figma ke kode HTML/CSS/JS yang responsif dan pixel-perfect, serta memelihara kode aplikasi yang ada.',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'Vue.js', 'Git']
  }
]
