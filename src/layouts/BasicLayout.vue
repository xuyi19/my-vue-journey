<template>
  <div id="basicLayout">
    <a-layout-header class="header">
      <GlobalHeader />
    </a-layout-header>
    <a-layout-content class="content">
      <router-view />
    </a-layout-content>
    <a-layout-footer class="footer">
      <a href="https://cn.vuejs.org/" target="_blank"> 渐进式Java框架 </a>
    </a-layout-footer>
  </div>
</template>

<script setup lang="ts">
import GlobalHeader from '@/components/GlobalHeader.vue'
import { onMounted } from 'vue'
import { useLoginUserStore } from '@/store/useLoginUserStore'

const loginUserStore = useLoginUserStore()

onMounted(async () => {
  await loginUserStore.fetchLoginUser()
})
</script>

<style scoped>
#basicLayout .footer {
  background: #efefef;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px;
}
#basicLayout .content {
  padding: 20px;
  margin-bottom: 20px;
  background: linear-gradient(to right, #fefefe, #ffffff);
}
#basicLayout .header {
  background: white;
  margin-bottom: 16px;
  color: unset;
  padding: 20px;
}
</style>

