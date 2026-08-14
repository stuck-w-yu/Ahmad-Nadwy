<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import {
  Sparkles,
  Layers,
  FolderGit2,
  Briefcase,
  Mail,
  Search,
  Menu,
  X,
  ArrowUpRight,
  Terminal
} from '@lucide/vue'
import { PERSONAL_INFO } from '~/data/portfolio'

const emit = defineEmits<{
  (e: 'open-spotlight'): void
}>()

const isScrolled = ref(false)
const activeSection = ref('hero')
const mobileMenuOpen = ref(false)

const navLinks = [
  { id: 'about', label: 'Tentang', icon: Sparkles },
  { id: 'projects', label: 'Proyek', icon: FolderGit2 },
  { id: 'experience', label: 'Pengalaman', icon: Briefcase },
  { id: 'contact', label: 'Kontak', icon: Mail }
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 40

  const sections = ['hero', 'about', 'projects', 'experience', 'contact']
  const scrollPosition = window.scrollY + 200

  for (const sectionId of sections) {
    const el = document.getElementById(sectionId)
    if (el) {
      const top = el.offsetTop
      const height = el.offsetHeight
      if (scrollPosition >= top && scrollPosition < top + height) {
        activeSection.value = sectionId
      }
    }
  }
}

const scrollTo = (id: string) => {
  mobileMenuOpen.value = false
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-40 transition-all duration-500 flex justify-center px-4 sm:px-6 pt-4"
    :class="[isScrolled ? 'py-3' : 'py-5']"
  >
    <!-- Floating Glass Island Navbar -->
    <nav
      class="glass-pill rounded-full px-3.5 py-2 sm:px-5 sm:py-2.5 flex items-center justify-between gap-2 sm:gap-6 max-w-5xl w-full transition-all duration-300 shadow-2xl"
    >
      <!-- Brand / Logo -->
      <button
        @click="scrollTo('hero')"
        class="group flex items-center gap-2.5 text-left focus:outline-none btn-press"
        aria-label="Scroll to top"
      >
        <div class="relative w-8 h-8 rounded-full bg-gradient-to-tr from-sky-500 via-indigo-500 to-purple-500 p-[1.5px] transition-transform duration-300 group-hover:scale-105">
          <div class="w-full h-full rounded-full bg-zinc-950 flex items-center justify-center text-xs font-bold text-white font-mono">
            NA
          </div>
        </div>
        <div class="hidden sm:block">
          <div class="text-xs font-semibold text-zinc-100 group-hover:text-white transition-colors flex items-center gap-1.5">
            {{ PERSONAL_INFO.name }}
            <span class="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          </div>
          <div class="text-[10px] text-zinc-400 font-mono tracking-tight">@{{ PERSONAL_INFO.nickname }}</div>
        </div>
      </button>

      <!-- Desktop Nav Items -->
      <div class="hidden md:flex items-center gap-1 bg-zinc-900/60 p-1 rounded-full border border-white/5">
        <button
          v-for="link in navLinks"
          :key="link.id"
          @click="scrollTo(link.id)"
          class="relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-300 btn-press flex items-center gap-1.5"
          :class="[
            activeSection === link.id
              ? 'text-white bg-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)] font-semibold'
              : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/5'
          ]"
        >
          <component :is="link.icon" class="w-3.5 h-3.5 opacity-70" />
          {{ link.label }}
        </button>
      </div>

      <!-- Actions -->
      <div class="flex items-center gap-2">
        <!-- Spotlight / Command Palette Button -->
        <button
          @click="emit('open-spotlight')"
          class="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/80 hover:bg-zinc-800/90 border border-white/10 text-zinc-300 hover:text-white text-xs font-medium transition-all btn-press"
          title="Open Command Palette (⌘K)"
        >
          <Search class="w-3.5 h-3.5 text-zinc-400" />
          <span class="hidden sm:inline text-zinc-400 font-mono text-[10px]">⌘K</span>
        </button>

        <!-- GitHub / Resume Quick Action -->
        <a
          :href="PERSONAL_INFO.github"
          target="_blank"
          rel="noopener noreferrer"
          class="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-indigo-500/20 to-sky-500/20 hover:from-indigo-500/30 hover:to-sky-500/30 border border-indigo-500/30 text-indigo-200 hover:text-white text-xs font-medium transition-all btn-press"
        >
          <Terminal class="w-3.5 h-3.5 text-sky-400" />
          <span>GitHub</span>
          <ArrowUpRight class="w-3 h-3 opacity-60" />
        </a>

        <!-- Mobile Menu Toggle -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden p-2 rounded-full bg-zinc-900/80 border border-white/10 text-zinc-300 hover:text-white transition-colors btn-press"
          aria-label="Toggle menu"
        >
          <component :is="mobileMenuOpen ? X : Menu" class="w-4 h-4" />
        </button>
      </div>
    </nav>

    <!-- Mobile Dropdown Menu -->
    <div
      v-if="mobileMenuOpen"
      class="md:hidden fixed top-20 inset-x-4 glass-panel rounded-2xl p-4 shadow-2xl border border-white/10 flex flex-col gap-2 transition-all duration-300 animate-in fade-in zoom-in-95"
    >
      <button
        v-for="link in navLinks"
        :key="link.id"
        @click="scrollTo(link.id)"
        class="flex items-center justify-between p-3 rounded-xl text-left text-sm font-medium transition-colors btn-press"
        :class="[
          activeSection === link.id
            ? 'text-white bg-white/10 font-semibold'
            : 'text-zinc-300 hover:bg-zinc-800/60'
        ]"
      >
        <div class="flex items-center gap-3">
          <component :is="link.icon" class="w-4 h-4 text-sky-400" />
          {{ link.label }}
        </div>
        <span class="text-xs text-zinc-500 font-mono">→</span>
      </button>

      <div class="h-px bg-white/10 my-1"></div>

      <button
        @click="emit('open-spotlight'); mobileMenuOpen = false"
        class="flex items-center justify-between p-3 rounded-xl text-left text-sm font-medium text-zinc-300 hover:bg-zinc-800/60 btn-press"
      >
        <div class="flex items-center gap-3">
          <Search class="w-4 h-4 text-indigo-400" />
          Quick Search / Actions
        </div>
        <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-400 border border-white/5">⌘K</span>
      </button>
    </div>
  </header>
</template>
