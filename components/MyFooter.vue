<script setup lang="ts">
import '~/assets/scss/footer.scss'

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