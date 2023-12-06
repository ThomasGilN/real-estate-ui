<script setup lang="ts">
import { RouterView } from 'vue-router'
import Sidebar from "@/components/widgets/sidebar/sidebar.vue";
</script>

<template>
    <header></header>
    <main class="main-container">
        <div class="sidebar-container">
            <Sidebar/>
        </div>
        <div class="view-container">
            <RouterView />
        </div>
    </main>
    <footer></footer>
</template>

<style scoped>
    #app {
        min-height: 100%;
        min-width: 100%;
    }

    header {
        height: 3rem;
        background-color: var(--primay-color);
    }

    footer {
        height: 3rem;
        background-color: var(--primay-color);
    }

    .main-container {
        display: flex;
        height: calc(100vh - 6rem);
    }

    .sidebar-container {
        width: 15rem;
        background-color: var(--primay-color);
        padding: 1rem;
    }

    .view-container {
        width: calc(100% - 15rem);
    }
</style>