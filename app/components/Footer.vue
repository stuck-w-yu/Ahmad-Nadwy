<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import {
  ArrowUp,
  Clock,
  Sparkles,
  Heart,
  Activity
} from '@lucide/vue'
import { GithubIcon, LinkedinIcon } from '~/components/BrandIcons.vue'
import { PERSONAL_INFO } from '~/data/portfolio'

const currentTime = ref('')

const updateTime = () => {
  const options: Intl.DateTimeFormatOptions = {
    timeZone: 'Asia/Jakarta',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  }
  currentTime.value = new Intl.DateTimeFormat('en-GB', options).format(new Date()) + ' WIB (UTC+7)'
}

let timer: any = null

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  updateTime()
  timer = setInterval(updateTime, 1000)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<template>
  <footer class="border-t border-white/5 bg-space-950 py-12 px-4 sm:px-6 relative overflow-hidden">
    <div class="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
      <!-- Left: Identity & Live Clock -->
      <div>
        <div class="text-sm font-bold text-white tracking-tight">
          {{ PERSONAL_INFO.name }} <span class="text-zinc-500 font-mono text-xs">({{ PERSONAL_INFO.nickname }})</span>
        </div>
        <div class="flex items-center justify-center sm:justify-start gap-2 mt-1 text-xs text-zinc-400 font-mono">
          <Clock class="w-3.5 h-3.5 text-sky-400" />
          <span>{{ currentTime || 'Indonesia • WIB' }}</span>
        </div>
      </div>

      <!-- Right: Back to Top & Social -->
      <div class="flex items-center gap-3">
        <a
          :href="PERSONAL_INFO.github"
          target="_blank"
          rel="noopener noreferrer"
          class="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-zinc-400 hover:text-white transition-colors btn-press"
          aria-label="GitHub"
        >
          <GithubIcon class="w-4 h-4" />
        </a>

        <a
          :href="PERSONAL_INFO.linkedin"
          target="_blank"
          rel="noopener noreferrer"
          class="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-zinc-400 hover:text-white transition-colors btn-press"
          aria-label="LinkedIn"
        >
          <LinkedinIcon class="w-4 h-4" />
        </a>

        <button
          @click="scrollToTop"
          class="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-white/10 text-zinc-400 hover:text-white transition-colors btn-press flex items-center gap-1 text-xs font-medium"
          aria-label="Back to top"
        >
          <ArrowUp class="w-3.5 h-3.5" />
          <span class="text-xs font-mono">Top</span>
        </button>
      </div>
    </div>

    <!-- Bottom Copyright Subtext -->
    <div class="max-w-4xl mx-auto mt-6 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-zinc-500 font-mono">
      <div>
        © {{ new Date().getFullYear() }} Ahmad Nadwy Anshory
      </div>
      <div class="flex items-center gap-1">
        <span>Crafted with Apple fluid design & Nuxt 4</span>
      </div>
    </div>
  </footer>
</template>
