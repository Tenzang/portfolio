<script setup lang="ts">
import { getImageUrl } from "~/util"
</script>
<template>
    <Section heading="Introduction" class="backdrop">
        <div>
            <img :src="getImageUrl('profile.png')" class="profile" alt="profile picture of Loden">
            <img :src="getImageUrl('profile-doodles.png')" class="doodle" alt="profile picture doodles">
        </div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius at magnam tempore ipsam cupiditate. Dolor, quasi
        amet corrupti culpa nostrum in molestiae. Ea reprehenderit doloribus nisi quod sequi perferendis in?
    </Section>
</template>

<style scoped lang="scss">
div {
    position: relative;
    margin: 0 auto;
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
    filter: brightness(0) saturate(100%) invert(100%) sepia(51%) saturate(2831%) hue-rotate(311deg) brightness(98%) contrast(92%) drop-shadow(0 0 1rem $highlight);

    transition: opacity 0.5s;

    @media (min-width: $screen-large) {
        opacity: 0;
    }
}

img.doodle:hover {
    opacity: 1;
}
</style>