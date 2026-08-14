<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import {
  X,
  ExternalLink,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
  Zap,
  Terminal,
  Code2
} from '@lucide/vue'
import { GithubIcon } from '~/components/BrandIcons.vue'
import type { Project } from '~/data/portfolio'

const props = defineProps<{
  project: Project | null
  isOpen: boolean
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && props.isOpen) {
    emit('close')
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <Teleport to="body">
    <div
      v-if="isOpen && project"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      <!-- Backdrop Dim Scrim -->
      <div
        class="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
        @click="emit('close')"
      ></div>

      <!-- Modal Card -->
      <div
        class="relative w-full max-w-2xl glass-panel rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/15 my-8 z-10 animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto"
      >
        <!-- Top Controls Bar -->
        <div class="flex items-center justify-between gap-4 pb-4 border-b border-white/10">
          <div class="flex items-center gap-2.5">
            <span
              class="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white border border-white/10"
              :style="{ borderColor: `${project.accentColor}40` }"
            >
              {{ project.category }}
            </span>
            <span class="text-xs font-mono text-zinc-500">{{ project.year }}</span>
          </div>

          <button
            @click="emit('close')"
            class="p-2 rounded-full bg-zinc-900/80 hover:bg-zinc-800 border border-white/10 text-zinc-400 hover:text-white transition-colors btn-press"
            aria-label="Close dialog"
          >
            <X class="w-4 h-4" />
          </button>
        </div>

        <!-- Header Information -->
        <div class="mt-5">
          <h2 class="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {{ project.title }}
          </h2>
          <p class="mt-1 text-sm sm:text-base text-zinc-300 font-medium">
            {{ project.tagline }}
          </p>
        </div>

        <!-- Story & Details -->
        <div class="mt-6 space-y-5">
          <div>
            <h3 class="text-xs font-semibold text-zinc-400 uppercase tracking-wider font-mono flex items-center gap-2">
              <Terminal class="w-3.5 h-3.5 text-sky-400" />
              Tentang Proyek Ini
            </h3>
            <p class="mt-2 text-sm sm:text-base text-zinc-300 leading-relaxed">
              {{ project.description }}
            </p>
          </div>

          <!-- Why I Built It -->
          <div class="p-4 rounded-2xl bg-zinc-900/70 border border-white/5">
            <h3 class="text-xs font-semibold text-zinc-300 uppercase tracking-wider font-mono flex items-center gap-2">
              <Sparkles class="w-3.5 h-3.5 text-amber-400" />
              Kenapa Saya Membangun Ini?
            </h3>
            <p class="mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed">
              {{ project.whyIBuiltIt }}
            </p>
          </div>

          <!-- Tech Stack Badges -->
          <div>
            <h3 class="text-xs font-semibold text-zinc-400 uppercase tracking-wider font-mono flex items-center gap-2">
              <Layers class="w-3.5 h-3.5 text-purple-400" />
              Teknologi yang Digunakan
            </h3>
            <div class="mt-3 flex flex-wrap gap-2">
              <span
                v-for="tag in project.techStack"
                :key="tag"
                class="px-3 py-1 rounded-lg bg-zinc-900 border border-white/10 text-xs font-mono text-zinc-300"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>

        <!-- Footer Action Buttons -->
        <div class="mt-8 pt-5 border-t border-white/10 flex flex-wrap items-center justify-end gap-3">
          <a
            v-if="project.githubUrl"
            :href="project.githubUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="px-4 py-2.5 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-white/15 text-zinc-200 hover:text-white text-xs font-medium transition-all btn-press flex items-center gap-2"
          >
            <GithubIcon class="w-4 h-4" />
            <span>Lihat di GitHub</span>
          </a>

          <a
            v-if="project.liveUrl"
            :href="project.liveUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="px-5 py-2.5 rounded-full bg-white text-zinc-950 font-semibold text-xs hover:bg-zinc-200 transition-all btn-press flex items-center gap-2 shadow-lg"
          >
            <span>Live Demo</span>
            <ExternalLink class="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  </Teleport>
</template>
