<script setup lang="ts">
import { ref } from 'vue'
import {
  ArrowDown,
  ArrowUpRight,
  Copy,
  Check,
  Sparkles,
  Terminal,
  Send,
  Code2,
  Cpu,
  Coffee,
  Laptop
} from '@lucide/vue'
import { GithubIcon } from '~/components/BrandIcons.vue'
import confetti from 'canvas-confetti'
import { PERSONAL_INFO } from '~/data/portfolio'

const copied = ref(false)

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(PERSONAL_INFO.email)
    copied.value = true

    confetti({
      particleCount: 30,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#38bdf8', '#818cf8', '#c084fc']
    })

    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy', err)
  }
}

const scrollTo = (id: string) => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <section id="hero" class="relative min-h-[85vh] flex flex-col justify-center pt-32 pb-16 px-4 sm:px-6 max-w-4xl mx-auto">
    <!-- Subtle Ambient Glow -->
    <div class="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[350px] bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none -z-10"></div>

    <div class="flex flex-col items-start text-left">
      <!-- Profile Tag & Status Pill -->
      <div class="flex flex-wrap items-center gap-2.5 mb-6">
        <div class="flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-xs text-zinc-300">
          <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Available for work</span>
        </div>
        <div class="px-3 py-1 rounded-full bg-zinc-900 border border-white/5 text-xs text-zinc-400 font-mono">
          {{ PERSONAL_INFO.location }}
        </div>
      </div>

      <!-- Main Personal Greeting & Headline -->
      <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tightest leading-[1.1] text-white">
        Halo, saya <span class="bg-gradient-to-r from-sky-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">{{ PERSONAL_INFO.shortName }}</span>.
      </h1>

      <p class="mt-4 text-xl sm:text-2xl text-zinc-300 font-medium tracking-tight leading-snug">
        {{ PERSONAL_INFO.role }}
      </p>

      <!-- Personal Story Intro -->
      <p class="mt-4 text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed">
        {{ PERSONAL_INFO.bio }}
      </p>

      <!-- Quick Passion Badges -->
      <div class="mt-6 flex flex-wrap gap-2">
        <span class="px-3 py-1 rounded-full bg-zinc-900/80 border border-white/5 text-xs text-zinc-300 flex items-center gap-1.5 font-mono">
          <Code2 class="w-3.5 h-3.5 text-sky-400" />
          Nuxt & Vue
        </span>
        <span class="px-3 py-1 rounded-full bg-zinc-900/80 border border-white/5 text-xs text-zinc-300 flex items-center gap-1.5 font-mono">
          <Cpu class="w-3.5 h-3.5 text-indigo-400" />
          Go & TypeScript
        </span>
        <span class="px-3 py-1 rounded-full bg-zinc-900/80 border border-white/5 text-xs text-zinc-300 flex items-center gap-1.5 font-mono">
          <Sparkles class="w-3.5 h-3.5 text-purple-400" />
          Fluid Motion UI
        </span>
        <span class="px-3 py-1 rounded-full bg-zinc-900/80 border border-white/5 text-xs text-zinc-300 flex items-center gap-1.5 font-mono">
          <Coffee class="w-3.5 h-3.5 text-amber-400" />
          Indie Craftsman
        </span>
      </div>

      <!-- Action Buttons -->
      <div class="mt-8 flex flex-wrap items-center gap-3">
        <!-- View Work -->
        <button
          @click="scrollTo('projects')"
          class="px-5 py-2.5 rounded-full bg-white text-zinc-950 font-semibold text-xs sm:text-sm hover:bg-zinc-200 transition-all btn-press flex items-center gap-2 shadow-lg"
        >
          <span>Lihat Proyek Saya</span>
          <ArrowDown class="w-3.5 h-3.5" />
        </button>

        <!-- Copy Email -->
        <button
          @click="copyEmail"
          class="px-4 py-2.5 rounded-full glass-pill text-zinc-300 hover:text-white text-xs sm:text-sm font-medium transition-all btn-press flex items-center gap-2"
        >
          <component :is="copied ? Check : Copy" class="w-3.5 h-3.5" :class="copied ? 'text-emerald-400' : 'text-zinc-400'" />
          <span>{{ copied ? 'Email Disalin!' : 'Salin Email' }}</span>
        </button>

        <!-- GitHub -->
        <a
          :href="PERSONAL_INFO.github"
          target="_blank"
          rel="noopener noreferrer"
          class="p-2.5 rounded-full bg-zinc-900/90 hover:bg-zinc-800 border border-white/10 text-zinc-400 hover:text-white transition-all btn-press"
          aria-label="GitHub Profile"
          title="GitHub"
        >
          <GithubIcon class="w-4 h-4" />
        </a>

        <!-- Telegram -->
        <a
          :href="PERSONAL_INFO.telegram"
          target="_blank"
          rel="noopener noreferrer"
          class="px-4 py-2.5 rounded-full bg-zinc-900/90 hover:bg-zinc-800 border border-white/10 text-zinc-300 hover:text-white text-xs sm:text-sm font-medium transition-all btn-press flex items-center gap-1.5"
        >
          <Send class="w-3.5 h-3.5 text-sky-400" />
          <span>Chat Telegram</span>
        </a>
      </div>
    </div>
  </section>
</template>
