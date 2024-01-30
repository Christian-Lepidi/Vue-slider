const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      displayedImage: 0,
      images: [
        "./img/01.webp",
        "./img/02.webp",
        "./img/03.webp",
        "./img/04.webp",
        "./img/05.webp",
      ],
    };
  },

  methods: {
    nextClick() {
      if (this.displayedImage >= this.images.length - 1) {
        this.displayedImage = 0;
      } else {
        this.displayedImage++;
      }
    },
    prevClick() {
      if (this.displayedImage <= 0) {
        this.displayedImage = this.images.length - 1;
      } else {
        this.displayedImage--;
      }
    },
  },
}).mount("#app");
