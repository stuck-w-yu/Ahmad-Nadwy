<script setup lang="ts">
import {
  User,
  Heart,
  Sparkles,
  Compass,
  CheckCircle2,
  Code2,
  Cpu,
  Coffee,
  Terminal,
  MapPin,
  Laptop
} from '@lucide/vue'
import { PERSONAL_INFO } from '~/data/portfolio'
</script>

<template>
  <section id="about" class="py-24 px-4 sm:px-6 max-w-6xl mx-auto">
    <!-- Section Header -->
    <div class="text-center max-w-3xl mx-auto mb-16">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-xs font-medium text-sky-400 mb-3">
        <User class="w-3.5 h-3.5" />
        <span>Tentang Saya & Filosofi</span>
      </div>
      <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tightest">
        Di Balik Layar <span class="bg-gradient-to-r from-sky-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">Kode & Kreativitas</span>.
      </h2>
      <p class="mt-3 text-sm sm:text-base text-zinc-400">
        Mengenal lebih dekat siapa saya, bagaimana cara saya bekerja, dan apa yang mendorong saya terus berkarya di dunia web development.
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
      <!-- Left: Personal Story & Intro Card (7 cols) -->
      <div class="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
        <div class="space-y-4">
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-2xl bg-gradient-to-tr from-sky-500 via-indigo-500 to-purple-500 p-[1.5px] shrink-0">
              <div class="w-full h-full rounded-2xl bg-zinc-950 flex items-center justify-center text-sm font-bold text-white font-mono">
                NA
              </div>
            </div>
            <div>
              <h3 class="text-lg font-bold text-white tracking-tight">{{ PERSONAL_INFO.name }}</h3>
              <p class="text-xs text-zinc-400 font-mono">{{ PERSONAL_INFO.title }} • {{ PERSONAL_INFO.location }}</p>
            </div>
          </div>

          <div class="pt-2 text-sm sm:text-base text-zinc-300 leading-relaxed space-y-3">
            <p>
              {{ PERSONAL_INFO.aboutMe.intro }}
            </p>
            <p class="text-zinc-400 text-sm">
              {{ PERSONAL_INFO.aboutMe.story }}
            </p>
          </div>
        </div>

        <!-- Personal Quick Highlights / Principles -->
        <div class="mt-8 pt-6 border-t border-white/5 space-y-3">
          <h4 class="text-xs font-semibold text-zinc-400 uppercase tracking-wider font-mono flex items-center gap-2">
            <Sparkles class="w-3.5 h-3.5 text-indigo-400" />
            Prinsip yang Selalu Saya Pegang
          </h4>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div
              v-for="(principle, idx) in PERSONAL_INFO.aboutMe.principles"
              :key="idx"
              class="p-3 rounded-2xl bg-zinc-900/60 border border-white/5"
            >
              <div class="text-xs font-semibold text-white">{{ principle.title }}</div>
              <div class="text-[11px] text-zinc-400 mt-1 leading-snug">{{ principle.description }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right: Personal Setup & Exploration Card (5 cols) -->
      <div class="lg:col-span-5 flex flex-col gap-6">
        <!-- Currently Exploring Card -->
        <div class="glass-card rounded-3xl p-6 sm:p-7 flex-1 flex flex-col justify-between">
          <div>
            <div class="flex items-center gap-2.5 text-xs font-semibold text-purple-400 font-mono uppercase tracking-wider mb-4">
              <Compass class="w-4 h-4" />
              <span>Sedang Saya Eksplorasi Saat Ini</span>
            </div>
            <div class="space-y-2.5">
              <div
                v-for="(item, idx) in PERSONAL_INFO.aboutMe.currentlyExploring"
                :key="idx"
                class="flex items-center gap-2.5 p-3 rounded-2xl bg-zinc-900/70 border border-white/5 text-xs text-zinc-200"
              >
                <div class="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0"></div>
                <span>{{ item }}</span>
              </div>
            </div>
          </div>

          <!-- Working Style Badge -->
          <div class="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-zinc-400 font-mono">
            <span class="flex items-center gap-1.5 text-zinc-300">
              <Coffee class="w-3.5 h-3.5 text-amber-400" />
              Problem Solver Mindset
            </span>
            <span class="text-sky-400 flex items-center gap-1">
              <Laptop class="w-3.5 h-3.5" />
              Remote Ready
            </span>
          </div>
        </div>

        <!-- Personal Philosophy Quote -->
        <div class="glass-panel rounded-3xl p-6 border border-white/10 relative overflow-hidden">
          <div class="absolute top-0 right-0 p-6 opacity-5 text-zinc-100 font-serif text-6xl select-none pointer-events-none">
            “
          </div>
          <p class="text-xs sm:text-sm text-zinc-300 italic leading-relaxed">
            "Bagi saya, menulis kode bukan sekadar membuat program berjalan, melainkan merancang pengalaman yang menyenangkan bagi orang yang menggunakannya."
          </p>
          <div class="mt-3 flex items-center gap-2 text-xs font-mono text-zinc-400">
            <span class="w-3 h-px bg-zinc-600"></span>
            <span>Ahmad Nadwy Anshory</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
