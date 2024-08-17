<template>
    <header>
        <h1>Loden Gendun</h1>
        <h2>Software Engineer</h2>
    </header>
</template>

<style scoped lang="scss">
header {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    flex-wrap: wrap;
    align-items: baseline;

    @media (min-width: $screen-small) {
        gap: 2rem;
    }

    h1 {
        font-size: $font-large;
    }
}
</style>