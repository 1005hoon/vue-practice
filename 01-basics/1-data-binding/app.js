Vue.createApp({
  data() {
    return {
      name: "Hoon OH",
      age: 30,
    };
  },
  methods: {
    getAgeIn5Years() {
      return this.age + 5;
    },
    getRandomNumber() {
      return Math.random();
    },
  },
}).mount("#assignment");
