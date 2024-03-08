<script setup lang="ts">
import { computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const route = useRoute()
const router = useRouter()
const routes = router.getRoutes().filter(i => i.name !== 'not-found')

const selectedKeys = computed(() => [route.name]);
</script>

<template>
  <a-layout class="save-manager-container">
    <a-layout-sider breakpoint="xl">
      <div class="logo" />
      <a-menu :selected-keys="selectedKeys" :style="{ width: '100%' }">
        <RouterLink v-for="item in routes" :key="item.name" :to="item.path">
          <a-menu-item :key="item.name">
            {{ item.meta.title }}
          </a-menu-item>
        </RouterLink>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="padding-left: 20px;">
        {{ route.meta.title }}
      </a-layout-header>
      <a-layout style="padding: 0 24px;">
        <a-layout-content>
          <RouterView />
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<style lang="stylus">
.save-manager-container
  width 100%
  min-height 100%
</style>./components/icon.vue