<script setup lang="ts">
import throttle from 'lodash.throttle'
import { getIconUrl } from '~/util';

const navItems = ref([
    "Introduction",
    "About",
    "Skills",
    "Projects",
    "Experience",
    "Contact Me"
]);

const isNavOpen = ref(false);

// NOTE: throttle used because clicking nav button
// triggers twice even w/ e.stopPropogation() call
const toggleNav = ref(throttle((e) => {
    console.log('toggle')
    e.stopPropogation();
    isNavOpen.value = !isNavOpen.value;
}, 100, {
    trailing: false
}));

</script>

<template>
    <!-- NOTE: focusout closes nav when link selected w/ keyboard -->
    <nav :class="{ open: isNavOpen }" @click="toggleNav" @focusout="isNavOpen = false">
        <a v-for="item in navItems" :href="`#${item}`" tabIndex="0">
            {{ item }}
        </a>
        <button id="nav-open" aria-label="Close Nav" @click="toggleNav" tabIndex="-1">
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

// NOTE: :focus-within enables nav control by tabbing
nav.open,
nav:focus-within {
    transform: translate(0, 0);
}
</style>
