<script setup lang="ts">
import { getIconUrl } from "~/util";
</script>

<template>
    <div>
        <img :src="getIconUrl('construction')" alt="construction icon" class="fill-highlight">
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
    }
}
</style>