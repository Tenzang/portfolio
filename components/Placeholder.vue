<script setup lang="ts">
import { getIconUrl } from "~/util";
</script>

<template>
    <div>
        <img :src="getIconUrl('construction')" alt="">
        Section under construction...
    </div>
</template>

<style scoped lang="scss">
div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    img {
        width: 4rem;
        filter: brightness(0) saturate(100%) invert(100%) sepia(51%) saturate(2831%) hue-rotate(311deg) brightness(98%) contrast(92%);
    }
}
</style>