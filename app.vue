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

// -- FONTS
/* latin */
@font-face {
  font-family: 'Arvo';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/arvo/v22/tDbN2oWUg0MKqSIg75Tv.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

/* latin */
@font-face {
  font-family: 'Arvo';
  font-style: italic;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/arvo/v22/tDbO2oWUg0MKqSIoVLH68dr_.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

/* latin */
@font-face {
  font-family: 'Arvo';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/arvo/v22/tDbD2oWUg0MKqScQ7Q.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

/* latin */
@font-face {
  font-family: 'Arvo';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/arvo/v22/tDbM2oWUg0MKoZw1-LPK8w.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

/* vietnamese */
@font-face {
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 300 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/quicksand/v31/6xKtdSZaM9iE8KbpRA_hJFQNcOM.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;
}

/* latin-ext */
@font-face {
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 300 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/quicksand/v31/6xKtdSZaM9iE8KbpRA_hJVQNcOM.woff2) format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;
}

/* latin */
@font-face {
  font-family: 'Quicksand';
  font-style: normal;
  font-weight: 300 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/quicksand/v31/6xKtdSZaM9iE8KbpRA_hK1QN.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

// -- CUSTOM

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

img.glow {
  filter: brightness(0) saturate(100%) invert(100%) sepia(51%) saturate(2831%) hue-rotate(311deg) brightness(98%) contrast(92%) drop-shadow(0 0 1rem $highlight);
}
</style>