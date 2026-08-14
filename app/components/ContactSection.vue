<script setup lang="ts">
import { ref, reactive } from 'vue'
import {
  Mail,
  Send,
  Check,
  Copy,
  ArrowUpRight,
  Sparkles,
  MessageCircle,
  MapPin
} from '@lucide/vue'
import { GithubIcon, LinkedinIcon } from '~/components/BrandIcons.vue'
import confetti from 'canvas-confetti'
import { PERSONAL_INFO } from '~/data/portfolio'

const copied = ref(false)
const isSubmitting = ref(false)
const submitted = ref(false)

const form = reactive({
  name: '',
  email: '',
  message: ''
})

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(PERSONAL_INFO.email)
    copied.value = true

    confetti({
      particleCount: 35,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#38bdf8', '#818cf8', '#34d399']
    })

    setTimeout(() => {
      copied.value = false
    }, 2500)
  } catch (err) {
    console.error('Failed to copy', err)
  }
}

const handleSubmit = () => {
  if (!form.name || !form.email || !form.message) return

  isSubmitting.value = true

  setTimeout(() => {
    isSubmitting.value = false
    submitted.value = true

    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#38bdf8', '#818cf8', '#c084fc', '#34d399']
    })

    setTimeout(() => {
      form.name = ''
      form.email = ''
      form.message = ''
      submitted.value = false
    }, 5000)
  }, 700)
}
</script>

<template>
  <section id="contact" class="py-16 px-4 sm:px-6 max-w-4xl mx-auto reveal-on-scroll">
    <!-- Header -->
    <div class="mb-8">
      <div class="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 mb-1">
        <Mail class="w-3.5 h-3.5 text-emerald-400" />
        <span>04 // HUBUNGI SAYA</span>
      </div>
      <h2 class="text-2xl sm:text-3xl font-bold text-white tracking-tight">
        Let's Connect & Collaborate
      </h2>
      <p class="mt-2 text-xs sm:text-sm text-zinc-400">
        Punya ide seru, proyek yang ingin dibangun, tawaran kerja, atau sekadar ingin say hi? Silakan hubungi saya kapan saja.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <!-- Left: Quick Direct Channels with Spotlight -->
      <div class="glass-card spotlight-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between space-y-6 group">
        <div class="relative z-10">
          <h3 class="text-base font-bold text-white tracking-tight">Kontak Langsung</h3>
          <p class="text-xs text-zinc-400 mt-1">Saluran yang paling cepat saya respon:</p>

          <!-- Email Copy Box with Hover Scale -->
          <div class="mt-4 p-3.5 rounded-2xl bg-zinc-900/90 border border-white/10 flex items-center justify-between gap-3 group-hover:border-white/20 transition-all">
            <div class="min-w-0">
              <div class="text-[10px] text-zinc-500 font-mono">EMAIL</div>
              <div class="text-xs sm:text-sm font-semibold text-zinc-200 truncate font-mono">
                {{ PERSONAL_INFO.email }}
              </div>
            </div>
            <button
              @click="copyEmail"
              class="p-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-all btn-press shrink-0 hover:scale-105"
              title="Salin email"
            >
              <component :is="copied ? Check : Copy" class="w-4 h-4" :class="copied ? 'text-emerald-400' : 'text-zinc-400'" />
            </button>
          </div>

          <!-- Telegram Button with Hover Glow -->
          <a
            :href="PERSONAL_INFO.telegram"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-3 flex items-center justify-between p-3.5 rounded-2xl bg-zinc-900/60 hover:bg-zinc-800 border border-white/5 hover:border-sky-400/30 text-xs text-zinc-200 hover:text-white transition-all duration-300 btn-press group/tg"
          >
            <div class="flex items-center gap-2.5">
              <div class="p-1.5 rounded-lg bg-sky-500/10 text-sky-400 group-hover/tg:scale-110 transition-transform">
                <Send class="w-3.5 h-3.5" />
              </div>
              <div>
                <div class="font-medium">Telegram Chat</div>
                <div class="text-[10px] text-zinc-500 font-mono">@stuckwyu</div>
              </div>
            </div>
            <ArrowUpRight class="w-3.5 h-3.5 text-zinc-500 group-hover/tg:text-white group-hover/tg:translate-x-0.5 group-hover/tg:-translate-y-0.5 transition-all" />
          </a>
        </div>

        <!-- Social Buttons -->
        <div class="pt-4 border-t border-white/5 flex items-center gap-2 relative z-10">
          <a
            :href="PERSONAL_INFO.github"
            target="_blank"
            rel="noopener noreferrer"
            class="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-2xl bg-zinc-900 hover:bg-zinc-800 border border-white/5 hover:border-white/20 text-xs text-zinc-300 hover:text-white transition-all btn-press hover:scale-[1.02]"
          >
            <GithubIcon class="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>

          <a
            :href="PERSONAL_INFO.linkedin"
            target="_blank"
            rel="noopener noreferrer"
            class="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-2xl bg-zinc-900 hover:bg-zinc-800 border border-white/5 hover:border-white/20 text-xs text-zinc-300 hover:text-white transition-all btn-press hover:scale-[1.02]"
          >
            <LinkedinIcon class="w-3.5 h-3.5 text-sky-400" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>

      <!-- Right: Friendly Message Box with Spotlight -->
      <div class="glass-card spotlight-card rounded-3xl p-6 sm:p-7">
        <div class="relative z-10">
          <h3 class="text-base font-bold text-white tracking-tight">Kirim Pesan</h3>
          <p class="text-xs text-zinc-400 mt-1 mb-4">Tulis pesan singkat Anda di sini:</p>

          <!-- Success Alert -->
          <div
            v-if="submitted"
            class="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center animate-in fade-in zoom-in-95 my-4"
          >
            <div class="inline-flex p-2.5 rounded-full bg-emerald-500/20 text-emerald-300 mb-2">
              <Check class="w-5 h-5" />
            </div>
            <h4 class="text-sm font-bold text-white">Pesan Terkirim!</h4>
            <p class="text-xs text-zinc-300 mt-1">
              Terima kasih! Saya akan membalas pesan Anda secepatnya.
            </p>
          </div>

          <form v-else @submit.prevent="handleSubmit" class="space-y-3">
            <div>
              <label class="block text-[11px] font-mono text-zinc-400 mb-1" for="name">Nama</label>
              <input
                id="name"
                v-model="form.name"
                required
                type="text"
                placeholder="Nama Anda"
                class="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900/90 border border-white/10 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-sky-400 transition-all"
              />
            </div>

            <div>
              <label class="block text-[11px] font-mono text-zinc-400 mb-1" for="email">Email</label>
              <input
                id="email"
                v-model="form.email"
                required
                type="email"
                placeholder="nama@email.com"
                class="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900/90 border border-white/10 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-sky-400 transition-all"
              />
            </div>

            <div>
              <label class="block text-[11px] font-mono text-zinc-400 mb-1" for="message">Pesan</label>
              <textarea
                id="message"
                v-model="form.message"
                required
                rows="3"
                placeholder="Hai Nadwy, saya ingin..."
                class="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900/90 border border-white/10 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-sky-400 transition-all resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full py-2.5 rounded-xl bg-white text-zinc-950 hover:bg-zinc-200 font-bold text-xs transition-all btn-press shadow-md flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50 hover:scale-[1.02]"
            >
              <span v-if="isSubmitting" class="inline-block w-3.5 h-3.5 border-2 border-zinc-950 border-t-transparent rounded-full animate-spin"></span>
              <template v-else>
                <span>Kirim Pesan</span>
                <Send class="w-3.5 h-3.5" />
              </template>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
