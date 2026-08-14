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
      particleCount: 35,
      spread: 65,
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
  <section id="hero" class="relative min-h-[88vh] flex flex-col justify-center pt-32 pb-16 px-4 sm:px-6 max-w-4xl mx-auto">
    <!-- Subtle Ambient Glow with slow float -->
    <div class="absolute -top-16 left-1/2 -translate-x-1/2 w-[550px] h-[380px] bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-subtle"></div>
    <div class="absolute top-1/2 -left-20 w-64 h-64 bg-sky-500/10 rounded-full blur-[100px] pointer-events-none -z-10 animate-float-slow"></div>

    <div class="flex flex-col items-start text-left">
      <!-- Profile Tag & Status Pill with ripple ring -->
      <div class="flex flex-wrap items-center gap-2.5 mb-6">
        <div class="relative flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs text-zinc-200 shadow-lg group hover:border-white/20 transition-all">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span class="font-medium">Available for work</span>
        </div>
        <div class="px-3 py-1.5 rounded-full bg-zinc-900/80 border border-white/5 text-xs text-zinc-400 font-mono">
          {{ PERSONAL_INFO.location }}
        </div>
      </div>

      <!-- Main Personal Greeting & Headline with Shimmer Text -->
      <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tightest leading-[1.1] text-white">
        Halo, saya <span class="shimmer-gradient">{{ PERSONAL_INFO.shortName }}</span>.
      </h1>

      <p class="mt-4 text-xl sm:text-2xl text-zinc-300 font-medium tracking-tight leading-snug">
        {{ PERSONAL_INFO.role }}
      </p>

      <!-- Personal Story Intro -->
      <p class="mt-4 text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed">
        {{ PERSONAL_INFO.bio }}
      </p>

      <!-- Quick Passion Badges with Spring Hover -->
      <div class="mt-6 flex flex-wrap gap-2">
        <span class="px-3 py-1.5 rounded-full bg-zinc-900/80 hover:bg-zinc-800/90 border border-white/5 hover:border-sky-400/30 text-xs text-zinc-300 hover:text-white flex items-center gap-1.5 font-mono transition-all duration-300 hover:scale-105 cursor-default">
          <Code2 class="w-3.5 h-3.5 text-sky-400" />
          Nuxt & Vue
        </span>
        <span class="px-3 py-1.5 rounded-full bg-zinc-900/80 hover:bg-zinc-800/90 border border-white/5 hover:border-indigo-400/30 text-xs text-zinc-300 hover:text-white flex items-center gap-1.5 font-mono transition-all duration-300 hover:scale-105 cursor-default">
          <Cpu class="w-3.5 h-3.5 text-indigo-400" />
          Go & TypeScript
        </span>
        <span class="px-3 py-1.5 rounded-full bg-zinc-900/80 hover:bg-zinc-800/90 border border-white/5 hover:border-purple-400/30 text-xs text-zinc-300 hover:text-white flex items-center gap-1.5 font-mono transition-all duration-300 hover:scale-105 cursor-default">
          <Sparkles class="w-3.5 h-3.5 text-purple-400" />
          Fluid Motion UI
        </span>
        <span class="px-3 py-1.5 rounded-full bg-zinc-900/80 hover:bg-zinc-800/90 border border-white/5 hover:border-amber-400/30 text-xs text-zinc-300 hover:text-white flex items-center gap-1.5 font-mono transition-all duration-300 hover:scale-105 cursor-default">
          <Coffee class="w-3.5 h-3.5 text-amber-400" />
          Indie Craftsman
        </span>
      </div>

      <!-- Action Buttons -->
      <div class="mt-8 flex flex-wrap items-center gap-3">
        <!-- View Work -->
        <button
          @click="scrollTo('projects')"
          class="px-5 py-2.5 rounded-full bg-white text-zinc-950 font-semibold text-xs sm:text-sm hover:bg-zinc-200 transition-all btn-press flex items-center gap-2 shadow-[0_0_25px_-5px_rgba(255,255,255,0.3)] hover:scale-105"
        >
          <span>Lihat Proyek Saya</span>
          <ArrowDown class="w-3.5 h-3.5" />
        </button>

        <!-- Copy Email -->
        <button
          @click="copyEmail"
          class="px-4 py-2.5 rounded-full glass-pill text-zinc-300 hover:text-white text-xs sm:text-sm font-medium transition-all btn-press flex items-center gap-2 hover:border-white/25 hover:scale-105"
        >
          <component :is="copied ? Check : Copy" class="w-3.5 h-3.5" :class="copied ? 'text-emerald-400' : 'text-zinc-400'" />
          <span>{{ copied ? 'Email Disalin!' : 'Salin Email' }}</span>
        </button>

        <!-- GitHub -->
        <a
          :href="PERSONAL_INFO.github"
          target="_blank"
          rel="noopener noreferrer"
          class="p-2.5 rounded-full bg-zinc-900/90 hover:bg-zinc-800 border border-white/10 text-zinc-400 hover:text-white transition-all btn-press hover:scale-105"
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
          class="px-4 py-2.5 rounded-full bg-zinc-900/90 hover:bg-zinc-800 border border-white/10 text-zinc-300 hover:text-white text-xs sm:text-sm font-medium transition-all btn-press flex items-center gap-1.5 hover:scale-105"
        >
          <Send class="w-3.5 h-3.5 text-sky-400" />
          <span>Chat Telegram</span>
        </a>
      </div>
    </div>
  </section>
</template>
