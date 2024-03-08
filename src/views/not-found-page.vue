<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter()

const handleBackHome = () => {
  router.push('/common-mode')
}

</script>
<template>
  <a-result status="404" subtitle="Whoops, that page is gone.">
    <template #extra>
      <a-space>
        <a-button type="primary" @click="handleBackHome">回首页</a-button>
      </a-space>
    </template>
  </a-result>
</template>
