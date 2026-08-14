<script setup lang="ts">
import {
  Sparkles,
  Code2,
  Terminal,
  Heart,
  Coffee,
  Layers,
  Cpu,
  Compass,
  Laptop,
  CheckCircle2,
  Smile
} from '@lucide/vue'
import { PERSONAL_INFO } from '~/data/portfolio'
</script>

<template>
  <section id="about" class="py-16 px-4 sm:px-6 max-w-4xl mx-auto">
    <!-- Header -->
    <div class="mb-8">
      <div class="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 mb-1">
        <Sparkles class="w-3.5 h-3.5 text-sky-400" />
        <span>01 // TENTANG & DAILY STACK</span>
      </div>
      <h2 class="text-2xl sm:text-3xl font-bold text-white tracking-tight">
        A Little About Me & What I Use
      </h2>
    </div>

    <!-- Bento Grid Layout -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <!-- Bento Item 1: Personal Story (2 cols) -->
      <div class="md:col-span-2 glass-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden">
        <div>
          <div class="flex items-center gap-2 text-xs font-mono text-indigo-400 mb-3">
            <Terminal class="w-3.5 h-3.5" />
            <span>BEHIND THE CODE</span>
          </div>
          <p class="text-sm sm:text-base text-zinc-300 leading-relaxed">
            Saya suka membangun web yang tidak hanya bekerja dengan baik di server, tapi juga terasa mulus dan responsif di tangan pengguna. Buat saya, hal-hal kecil seperti transisi yang halus, feedback instan saat tombol ditekan, dan layout yang bersih sangat berpengaruh terhadap kenyamanan sebuah aplikasi.
          </p>
          <p class="mt-3 text-xs sm:text-sm text-zinc-400 leading-relaxed">
            Di luar coding klien dan proyek pribadi, saya sering mengutak-atik animasi berbasis fisika pegas (spring physics), eksplorasi fitur terbaru Nuxt 4, dan menyederhanakan arsitektur sistem.
          </p>
        </div>

        <div class="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-zinc-400 font-mono">
          <span class="flex items-center gap-1.5 text-zinc-300">
            <Coffee class="w-3.5 h-3.5 text-amber-400" />
            Coffee & Clean Code
          </span>
          <span class="text-emerald-400 flex items-center gap-1">
            <Smile class="w-3.5 h-3.5" />
            Always Learning
          </span>
        </div>
      </div>

      <!-- Bento Item 2: Status & Focus (1 col) -->
      <div class="glass-card rounded-3xl p-6 flex flex-col justify-between">
        <div>
          <div class="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-3">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>CURRENT STATUS</span>
          </div>
          <h3 class="text-base font-bold text-white tracking-tight">Open for Projects</h3>
          <p class="mt-2 text-xs text-zinc-400 leading-relaxed">
            {{ PERSONAL_INFO.currentStatus }}
          </p>
        </div>

        <div class="mt-6 p-3 rounded-2xl bg-zinc-900/80 border border-white/5 text-[11px] text-zinc-300 font-mono">
          <div class="text-zinc-500 text-[10px]">LOKASI & ZONA WAKTU</div>
          <div class="mt-0.5 text-zinc-200">{{ PERSONAL_INFO.location }} • WIB (UTC+7)</div>
        </div>
      </div>

      <!-- Bento Item 3: Daily Tools & Tech Stack (Full 3 cols) -->
      <div class="md:col-span-3 glass-card rounded-3xl p-6 sm:p-7">
        <div class="flex items-center justify-between gap-4 mb-4">
          <div class="flex items-center gap-2 text-xs font-mono text-sky-400">
            <Layers class="w-3.5 h-3.5" />
            <span>MY DAILY DRIVER STACK</span>
          </div>
          <span class="text-[11px] text-zinc-500 font-mono hidden sm:inline">Tools yang biasa saya pakai sehari-hari</span>
        </div>

        <div class="flex flex-wrap gap-2">
          <div
            v-for="item in PERSONAL_INFO.stack"
            :key="item.name"
            class="px-3 py-1.5 rounded-xl bg-zinc-900/90 border border-white/5 text-xs text-zinc-200 hover:border-white/20 transition-colors flex items-center gap-2 font-mono"
          >
            <span class="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
            <span>{{ item.name }}</span>
            <span class="text-[10px] text-zinc-500 bg-zinc-800 px-1.5 py-0.5 rounded">{{ item.tag }}</span>
          </div>
        </div>
      </div>

      <!-- Bento Item 4: Personal Principles (3 cols) -->
      <div class="md:col-span-3 glass-panel rounded-3xl p-6">
        <div class="text-xs font-mono text-purple-400 mb-3 flex items-center gap-2">
          <Sparkles class="w-3.5 h-3.5" />
          <span>WHAT I CARE ABOUT</span>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div class="p-3.5 rounded-2xl bg-zinc-900/60 border border-white/5">
            <div class="text-xs font-bold text-white">⚡ Fluid & Instant</div>
            <div class="text-[11px] text-zinc-400 mt-1">Interaksi tanpa lag, transisi halus, dan animasi yang terasa natural.</div>
          </div>
          <div class="p-3.5 rounded-2xl bg-zinc-900/60 border border-white/5">
            <div class="text-xs font-bold text-white">🛡️ Clean & Maintainable</div>
            <div class="text-[11px] text-zinc-400 mt-1">Struktur kode rapi, type-safe, dan mudah dikembangkan untuk jangka panjang.</div>
          </div>
          <div class="p-3.5 rounded-2xl bg-zinc-900/60 border border-white/5">
            <div class="text-xs font-bold text-white">🎯 Purposeful Craft</div>
            <div class="text-[11px] text-zinc-400 mt-1">Fokus pada fungsionalitas utama tanpa animasi yang berlebihan atau mengganggu.</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
