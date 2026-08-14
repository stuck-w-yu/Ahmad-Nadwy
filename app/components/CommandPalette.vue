<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue'
import {
  Search,
  FolderGit2,
  Layers,
  Briefcase,
  Mail,
  Copy,
  ExternalLink,
  X,
  Sparkles,
  ArrowRight,
  Terminal
} from '@lucide/vue'
import { GithubIcon, LinkedinIcon } from '~/components/BrandIcons.vue'
import { PERSONAL_INFO, PROJECTS } from '~/data/portfolio'
import confetti from 'canvas-confetti'

const props = defineProps<{
  isOpen: boolean
}>()

const emit = defineEmits<{
  (e: 'close'): void
  (e: 'select-project', project: any): void
}>()

const searchQuery = ref('')
const selectedIndex = ref(0)
const searchInput = ref<HTMLInputElement | null>(null)

interface ActionItem {
  id: string
  title: string
  subtitle: string
  category: 'Navigation' | 'Projects' | 'Actions' | 'Social'
  icon: any
  action: () => void
}

const actions = computed<ActionItem[]>(() => {
  const items: ActionItem[] = [
    // Navigation
    {
      id: 'nav-projects',
      title: 'Navigate to Projects',
      subtitle: 'View full-stack systems and case studies',
      category: 'Navigation',
      icon: FolderGit2,
      action: () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
        emit('close')
      }
    },
    {
      id: 'nav-skills',
      title: 'Navigate to Skills Matrix',
      subtitle: 'Frontend, backend, cloud & architecture stack',
      category: 'Navigation',
      icon: Layers,
      action: () => {
        document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })
        emit('close')
      }
    },
    {
      id: 'nav-experience',
      title: 'Navigate to Experience & Career',
      subtitle: 'Work history, achievements & education',
      category: 'Navigation',
      icon: Briefcase,
      action: () => {
        document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })
        emit('close')
      }
    },
    {
      id: 'nav-contact',
      title: 'Navigate to Contact Form',
      subtitle: 'Direct email and inquiry dispatch',
      category: 'Navigation',
      icon: Mail,
      action: () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
        emit('close')
      }
    },
    // Actions
    {
      id: 'action-copy-email',
      title: 'Copy Email to Clipboard',
      subtitle: PERSONAL_INFO.email,
      category: 'Actions',
      icon: Copy,
      action: async () => {
        await navigator.clipboard.writeText(PERSONAL_INFO.email)
        confetti({
          particleCount: 30,
          spread: 60,
          origin: { y: 0.5 }
        })
        emit('close')
      }
    },
    // Social
    {
      id: 'social-github',
      title: 'Open GitHub Profile',
      subtitle: PERSONAL_INFO.github,
      category: 'Social',
      icon: GithubIcon,
      action: () => {
        window.open(PERSONAL_INFO.github, '_blank')
        emit('close')
      }
    },
    {
      id: 'social-linkedin',
      title: 'Open LinkedIn Profile',
      subtitle: PERSONAL_INFO.linkedin,
      category: 'Social',
      icon: LinkedinIcon,
      action: () => {
        window.open(PERSONAL_INFO.linkedin, '_blank')
        emit('close')
      }
    }
  ]

  // Add all featured projects
  for (const proj of PROJECTS) {
    items.push({
      id: `proj-${proj.id}`,
      title: `Project: ${proj.title}`,
      subtitle: proj.tagline,
      category: 'Projects',
      icon: Terminal,
      action: () => {
        emit('select-project', proj)
        emit('close')
      }
    })
  }

  return items
})

const filteredActions = computed(() => {
  if (!searchQuery.value.trim()) return actions.value

  const q = searchQuery.value.toLowerCase()
  return actions.value.filter(
    item =>
      item.title.toLowerCase().includes(q) ||
      item.subtitle.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q)
  )
})

const handleKeydown = (e: KeyboardEvent) => {
  if (!props.isOpen) {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault()
      // Open spotlight
      return
    }
    return
  }

  if (e.key === 'Escape') {
    emit('close')
  } else if (e.key === 'ArrowDown') {
    e.preventDefault()
    selectedIndex.value = (selectedIndex.value + 1) % filteredActions.value.length
  } else if (e.key === 'ArrowUp') {
    e.preventDefault()
    selectedIndex.value = (selectedIndex.value - 1 + filteredActions.value.length) % filteredActions.value.length
  } else if (e.key === 'Enter') {
    e.preventDefault()
    const selected = filteredActions.value[selectedIndex.value]
    if (selected) {
      selected.action()
    }
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
      v-if="isOpen"
      class="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 sm:px-6"
      role="dialog"
      aria-modal="true"
    >
      <!-- Backdrop Blur Scrim -->
      <div
        class="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
        @click="emit('close')"
      ></div>

      <!-- Spotlight Container Card -->
      <div
        class="relative w-full max-w-xl glass-panel rounded-3xl shadow-2xl border border-white/20 overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200"
      >
        <!-- Search Input Bar -->
        <div class="flex items-center gap-3 px-5 py-4 border-b border-white/10">
          <Search class="w-5 h-5 text-indigo-400 shrink-0" />
          <input
            ref="searchInput"
            v-model="searchQuery"
            type="text"
            placeholder="Type a command, project, or section..."
            class="w-full bg-transparent text-white placeholder-zinc-500 text-sm sm:text-base focus:outline-none"
            autofocus
          />
          <button
            @click="emit('close')"
            class="p-1 rounded-lg bg-zinc-900 text-zinc-500 hover:text-white border border-white/5 text-xs font-mono px-2 py-1"
          >
            ESC
          </button>
        </div>

        <!-- Action Items List -->
        <div class="max-h-80 overflow-y-auto p-2 space-y-1">
          <div
            v-if="filteredActions.length === 0"
            class="p-8 text-center text-xs text-zinc-500"
          >
            No matches found for "{{ searchQuery }}"
          </div>

          <button
            v-for="(item, idx) in filteredActions"
            :key="item.id"
            @click="item.action()"
            class="w-full flex items-center justify-between p-3 rounded-2xl text-left transition-all btn-press"
            :class="[
              idx === selectedIndex
                ? 'bg-indigo-600/20 text-white border border-indigo-500/30'
                : 'text-zinc-300 hover:bg-zinc-900/60 hover:text-white'
            ]"
          >
            <div class="flex items-center gap-3 min-w-0">
              <div
                class="p-2 rounded-xl bg-zinc-900 text-zinc-400 border border-white/5 shrink-0"
                :class="{ 'text-indigo-400': idx === selectedIndex }"
              >
                <component :is="item.icon" class="w-4 h-4" />
              </div>
              <div class="min-w-0">
                <div class="text-xs sm:text-sm font-semibold truncate">{{ item.title }}</div>
                <div class="text-[11px] text-zinc-400 truncate">{{ item.subtitle }}</div>
              </div>
            </div>

            <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-white/5 shrink-0 ml-2">
              {{ item.category }}
            </span>
          </button>
        </div>

        <!-- Spotlight Footer -->
        <div class="px-5 py-2.5 bg-zinc-950/90 border-t border-white/10 flex items-center justify-between text-[11px] text-zinc-500 font-mono">
          <div class="flex items-center gap-3">
            <span><kbd class="px-1.5 py-0.5 rounded bg-zinc-900 border border-white/10 text-zinc-400">↑</kbd> <kbd class="px-1.5 py-0.5 rounded bg-zinc-900 border border-white/10 text-zinc-400">↓</kbd> Navigate</span>
            <span><kbd class="px-1.5 py-0.5 rounded bg-zinc-900 border border-white/10 text-zinc-400">↵</kbd> Select</span>
          </div>
          <span>Apple Spotlight UI</span>
        </div>
      </div>
    </div>
  </Teleport>
</template>
