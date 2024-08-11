<template>
  <MyHeader />
  <NavBar />
  <Introduction />
  <About />
  <Skills />
  <Projects />
  <Experience />
  <Contact />
  <MyFooter />
</template>

<style lang="scss">
// -- RESET
*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

input,
button,
textarea,
select {
  font: inherit;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}

#root,
#__next {
  isolation: isolate;
}

// -- CUSTOM
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&family=Arvo:ital,wght@0,400;0,700;1,400;1,700&display=swap');

html {
  scroll-behavior: smooth;
}

body {
  background: $bg-primary;
  color: $font-primary;

  font-family: "Quicksand";
}

h1,
h2 {
  font-family: $font-family-heading;
  font-weight: normal;
}

#__nuxt {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

.font-small {
  font-size: $font-small;
}

html:has(nav:focus),
html:has(nav:focus-within) {
  overflow-y: hidden;
}


img.fill-highlight {
  filter: brightness(0) saturate(100%) invert(100%) sepia(51%) saturate(2831%) hue-rotate(311deg) brightness(98%) contrast(92%);
}
</style>