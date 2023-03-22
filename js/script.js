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
          console.log(res);
          this.myEmailArr.push(res.data.response);
        });
    }
  },

  // async created() {
  //   try {
  //     for (let i = 0; i < this.emailAdressNumber; i++) {
  //       const response = await fetch(
  //         "https://flynn.boolean.careers/exercises/api/random/mail"
  //       );
  //       const data = await response.json();
  //       this.myEmailArr.push(data.response);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // },
}).mount("#app");
