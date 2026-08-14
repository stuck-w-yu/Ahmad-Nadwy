<script setup lang="ts">
import { ref } from 'vue'
import {
  Layers,
  Server,
  Database,
  Cpu,
  Sparkles,
  CheckCircle,
  Zap,
  Code2
} from '@lucide/vue'
import { SKILL_CATEGORIES } from '~/data/portfolio'

const activeCategory = ref<number | null>(null)

const getCategoryIcon = (iconName: string) => {
  switch (iconName) {
    case 'Layers': return Layers
    case 'Server': return Server
    case 'Database': return Database
    case 'Cpu': return Cpu
    default: return Code2
  }
}
</script>

<template>
  <section id="skills" class="py-24 px-4 sm:px-6 max-w-6xl mx-auto">
    <!-- Section Header -->
    <div class="text-center max-w-3xl mx-auto mb-16">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-pill text-xs font-medium text-indigo-400 mb-3">
        <Sparkles class="w-3.5 h-3.5" />
        <span>Tech Stack & Keahlian</span>
      </div>
      <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tightest">
        Teknologi yang <span class="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">Saya Kuasai</span>.
      </h2>
      <p class="mt-3 text-sm sm:text-base text-zinc-400">
        Kumpulan framework, bahasa pemrograman, dan tools yang saya gunakan sehari-hari untuk mengembangkan solusi web dari frontend hingga backend dan deployment.
      </p>
    </div>

    <!-- Skills Category Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div
        v-for="(cat, idx) in SKILL_CATEGORIES"
        :key="idx"
        class="glass-panel rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden transition-all duration-300 hover:border-white/20 group"
      >
        <!-- Ambient category glow -->
        <div class="absolute -bottom-20 -right-20 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-indigo-500/20 transition-all duration-500"></div>

        <div>
          <!-- Header -->
          <div class="flex items-center gap-3.5 mb-3">
            <div class="p-2.5 rounded-2xl bg-zinc-900 border border-white/10 text-indigo-400 group-hover:scale-110 transition-transform">
              <component :is="getCategoryIcon(cat.icon)" class="w-5 h-5" />
            </div>
            <div>
              <h3 class="text-lg sm:text-xl font-bold text-white tracking-tight">{{ cat.title }}</h3>
              <p class="text-xs text-zinc-400">{{ cat.description }}</p>
            </div>
          </div>

          <!-- Skills List -->
          <div class="mt-6 space-y-3">
            <div
              v-for="skill in cat.skills"
              :key="skill.name"
              class="p-3 rounded-2xl bg-zinc-900/60 border border-white/5 hover:border-white/15 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-2"
            >
              <div class="flex items-center gap-2.5">
                <span class="w-1.5 h-1.5 rounded-full" :class="skill.highlight ? 'bg-indigo-400 ring-2 ring-indigo-400/30' : 'bg-zinc-600'"></span>
                <span class="text-sm font-semibold text-zinc-200">{{ skill.name }}</span>
              </div>

              <div class="flex items-center gap-2">
                <span class="text-[11px] text-zinc-400 font-mono hidden sm:inline">{{ skill.description }}</span>
                <span
                  class="px-2 py-0.5 rounded-md text-[10px] font-semibold uppercase tracking-wider font-mono self-start sm:self-auto"
                  :class="[
                    skill.level === 'Expert'
                      ? 'bg-indigo-500/15 text-indigo-300 border border-indigo-500/30'
                      : skill.level === 'Advanced'
                      ? 'bg-sky-500/15 text-sky-300 border border-sky-500/30'
                      : 'bg-zinc-800 text-zinc-400'
                  ]"
                >
                  {{ skill.level }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Section Footer Craft Badge -->
        <div class="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-zinc-500 font-mono">
          <span>Continuous Integration & Testing</span>
          <span class="text-emerald-400 flex items-center gap-1">
            <CheckCircle class="w-3.5 h-3.5" />
            Verified in Production
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
