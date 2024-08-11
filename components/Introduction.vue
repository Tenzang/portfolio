<script setup lang="ts">
import { getImageUrl } from "~/util"
</script>
<template>
    <Section heading="Introduction" class="backdrop">
        <img :src="getImageUrl('profile.png')" alt="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius at magnam tempore ipsam cupiditate. Dolor, quasi
        amet corrupti culpa nostrum in molestiae. Ea reprehenderit doloribus nisi quod sequi perferendis in?
    </Section>
</template>

<style scoped lang="scss">
img {
    height: 50vw;
    width: 50vw;
    border-radius: 100%;
    border: 1px solid $highlight;
    box-shadow: 0 0 2rem -1rem $highlight;
    margin: 0 auto;
}
</style>