<script setup lang="ts">
const publishDate = new Date().toLocaleString('en-AU', {
    dateStyle: "medium"
});
</script>

<template>
    <footer>
        <div>
            Personal Portfolio Website
        </div>
        <div class="font-small">
            Published: {{ publishDate }}
        </div>
    </footer>
</template>

<style scoped lang="scss">
footer {
    text-align: center;

    display: flex;
    flex-direction: column;
    gap: 1rem;
}
</style>