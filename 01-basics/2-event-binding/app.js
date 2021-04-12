Vue.createApp({
  data() {
    return {
      alertMessage: "",
      inputMessage: "",
      confirmedMessage: "",
    };
  },
  methods: {
    toggleAlert() {
      this.alertMessage = this.alertMessage ? "" : "Show Alert";
    },
    setInputMessage(e) {
      this.inputMessage = e.target.value;
    },
    confirmInputMessage(e) {
      this.confirmedMessage = e.target.value;
    },
  },
}).mount("#assignment");
