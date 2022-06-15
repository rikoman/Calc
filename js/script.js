const calc = Vue.createApp({
  data() {
    return {
      numbers: [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, "."],
      operat: ["/", "*"],
      operations: ["-", "+"],
      result: "",
    };
  },
  methods: {
    item(char) {
      this.result = this.result.toString();
      this.result += char;
    },
    calcAll() {
      this.result = eval(this.result);
    },
    clearAll() {
      this.result = "";
    },
    back() {
      this.result = this.result.slice(0, -1);
    },
    menuBurger(){
      const headBurger = document.querySelector('.head_burger')
      const burgerMenu = document.querySelector('.burger_menu')
      document.querySelector('.head_burger').classList.toggle('active')
      if(headBurger.className === "head_burger"){
        burgerMenu.classList.remove('active')
        document.querySelector('.head').classList.remove('active')


      }
      if(headBurger.className==="head_burger active"){
        burgerMenu.classList.add('active')
        document.querySelector('.head').classList.add('active')
      }
    }
  },
}).mount(".app");
