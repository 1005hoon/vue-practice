const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    add() {
      return this.counter++;
    },
    reduce() {
      return this.counter--;
    },
    setName(event, lastName) {
      this.name = lastName + " " + event.target.value;
    },
    submitForm(e) {
      alert("submitted");
    },
    confirmName() {
      this.confirmedName = this.name;
    },
  },
});

app.mount("#events");
