// VueJS
const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Hello Vue!",
      myEmailArr: [],
      emailAdressNumber: 10,
    };
  },
  created() {
    for (let i = 0; i < this.emailAdressNumber; i++) {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((res) => {
          console.log(res.data.response);
          this.myEmailArr.push(res.data.response);

          // lo assegno alla mia proprietà
        });
    }
  },
}).mount("#app");
