<template>
  <div class="child-component">
    <h4 class="child-title">📤 子组件区域</h4>
    <a-space size="large">
      <a-input
        v-model:value="inputValue"
        placeholder="输入要传给父组件的数据"
        style="width: 280px"
        size="large"
      />
      <a-button type="primary" size="large" @click="sendToParent">
        📤 发送给父组件
      </a-button>
    </a-space>
    <p class="tip">💡 提示：使用 $emit 触发自定义事件，父组件通过 @send-message 监听</p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const inputValue = ref('')

const emit = defineEmits<{
  (e: 'send-message', data: string): void
}>()

const sendToParent = () => {
  if (!inputValue.value) {
    return
  }
  emit('send-message', inputValue.value)
  inputValue.value = ''
}
</script>

<style scoped>
.child-component {
  padding: 24px;
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
  border-radius: 12px;
}

.child-title {
  margin: 0 0 16px 0;
  color: #333;
  font-size: 18px;
}

.tip {
  margin: 12px 0 0 0;
  color: #666;
  font-size: 13px;
}
</style>
