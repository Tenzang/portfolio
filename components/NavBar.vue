<script setup lang="ts">
import { getIconUrl } from '~/util';

const navItems = ref([
    "Introduction",
    "About",
    "Skills",
    "Projects",
    "Experience",
    "Contact Me"
]);
</script>

<template>
    <nav>
        <a v-for="item in navItems" :href="`#${item}`">
            {{ item }}
        </a>
        <button id="nav-open" aria-label="Close Nav">
            <NuxtImg :src="getIconUrl('hamburger')" alt="hamburger icon" />
        </button>
    </nav>
</template>;

<style scoped lang="scss">
nav {
    z-index: 99;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    color: $highlight;

    height: 100vh;
    width: 100vw;

    transform: translate(100%, 0);
    transition: transform 0.25s;

    position: fixed;
    top: 0;
    right: 0;

    background: $bg-primary;

    a {
        color: inherit;
        font-size: $font-large;
        font-family: $font-family-heading;
        padding: 1rem;
        font-weight: bold;
        text-decoration: none;
    }

    button {
        $button-width: 4rem;
        z-index: 100;

        width: $button-width;
        height: $button-width;

        position: fixed;
        top: 0;
        left: -$button-width;

        border-radius: 0 0 0 1rem;

        background: $highlight;

        border: none;

        img {
            width: 80%;
            margin: 0 auto;
        }
    }
}

nav:focus,
nav:focus-within {
    transform: translate(0, 0);
}
</style>
