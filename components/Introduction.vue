<script setup lang="ts">
import { getImageUrl } from "~/util"
</script>

<template>
    <Section heading="Introduction" variant="no-header">
        <MyHeader />
        <div>
            <NuxtImg :src="getImageUrl('profile.png')" format="webp" class="profile" alt="profile picture of Loden" />
            <NuxtImg :src="getImageUrl('profile-doodle-glasses.png')" format="webp" class="doodle glow glasses"
                alt="profile picture glasses doodle" />
            <NuxtImg :src="getImageUrl('profile-doodles.png')" format="webp" class="doodle glow"
                alt="profile picture doodles" />
        </div>
        <span class="quote">
            <q>Most good programmers do programming not because they expect to get paid or get adulation by the public,
                but
                because it is fun to program.</q> - Linus Torvalds</span>
    </Section>
</template>

<style scoped lang="scss">
div {
    position: relative;
    margin: 1rem auto;
}

img {
    width: 100%;
    max-width: 30rem;
}

img.profile {
    border-radius: 100%;
    border: 1px solid $highlight;
    box-shadow: 0 0 2rem -1rem $highlight;
}

img.doodle {
    position: absolute;
    top: 0;
    left: 0;

    transition: opacity 0.5s, top 3s linear;

    @media (min-width: $screen-large) {
        opacity: 0;
    }

    &.glasses {
        top: -100%;
        opacity: 1;
    }
}

img.doodle:hover,
.doodle:has(+ .doodle:hover) {
    opacity: 1;

    &.glasses {
        top: 0;
    }
}

span.quote {
    max-width: 50rem;
    margin: 0 auto;

    text-align: center;

    q {
        font-style: italic;
        font-size: $font-medium;
    }
}
</style>