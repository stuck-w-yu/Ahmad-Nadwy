<script setup lang="ts">
import {
  Briefcase,
  Calendar,
  Building,
  GraduationCap
} from '@lucide/vue'
import { EXPERIENCES } from '~/data/portfolio'
</script>

<template>
  <section id="experience" class="py-16 px-4 sm:px-6 max-w-4xl mx-auto reveal-on-scroll">
    <!-- Header -->
    <div class="mb-8">
      <div class="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 mb-1">
        <Briefcase class="w-3.5 h-3.5 text-purple-400" />
        <span>03 // PENGALAMAN & JEJAK</span>
      </div>
      <h2 class="text-2xl sm:text-3xl font-bold text-white tracking-tight">
        Work & Experience
      </h2>
    </div>

    <!-- Career Timeline Cards with Spotlight -->
    <div class="space-y-4">
      <div
        v-for="(exp, idx) in EXPERIENCES"
        :key="idx"
        class="glass-card spotlight-card rounded-3xl p-6 sm:p-7 relative overflow-hidden group hover:border-white/20 transition-all duration-300"
      >
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-3 border-b border-white/5 relative z-10">
          <div>
            <span class="text-xs font-mono text-indigo-400 font-semibold uppercase">
              {{ exp.year }}
            </span>
            <h3 class="text-lg sm:text-xl font-bold text-white tracking-tight mt-0.5 group-hover:text-sky-300 transition-colors">
              {{ exp.role }}
            </h3>
            <div class="text-xs sm:text-sm text-zinc-400 mt-0.5 flex items-center gap-2">
              <span class="text-zinc-200">{{ exp.place }}</span>
            </div>
          </div>
        </div>

        <!-- Description -->
        <p class="mt-4 text-xs sm:text-sm text-zinc-300 leading-relaxed relative z-10">
          {{ exp.description }}
        </p>

        <!-- Tech Stack -->
        <div class="mt-4 flex flex-wrap gap-1.5 relative z-10">
          <span
            v-for="skill in exp.skills"
            :key="skill"
            class="px-2.5 py-0.5 rounded-lg bg-zinc-900 border border-white/5 text-[11px] font-mono text-zinc-400 group-hover:border-white/10 transition-colors"
          >
            {{ skill }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
