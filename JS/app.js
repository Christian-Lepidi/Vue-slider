const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      images: [
        "./vue-slider-markup-base/img/01.webp",
        "./vue-slider-markup-base/img/02.webp",
        "./vue-slider-markup-base/img/03.webp",
        "./vue-slider-markup-base/img/04.webp",
        "./vue-slider-markup-base/img/05.webp",
      ],
    };
  },
}).mount("#app");
