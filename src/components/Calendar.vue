<template>
  
  <div class="m-auto">
    <h1 class="text-2xl mb-4 text-center">Vue Calendar</h1>
    <section class="flex justify-between">
      <h2 class="font-bold">{{ currentMonthName }}</h2>
      <h2 class="font-bold"> {{ currentYear }}</h2>
    </section>
    <section class="flex my-2">
      <p class="text-center" style="width:14.28%" v-for="day in days" :key="day">{{ day }}</p>
    </section>
    <section class="flex flex-wrap">      
      <p class="text-center" style="width:14.28%" v-for="num in startDay()" :key="num"></p>    
      <p class="text-center" style="width:14.28%" v-for="num in daysInMonth()" :key="num" :class="currentDateClass(num)">{{num}}</p>     
    </section>
    <section class="flex justify-between">
      <button class="px-2 border rounded" @click="previous">previous</button>
      <button class="px-2 border rounded" @click="next">next</button>
    </section>
  </div>
</template>

<script>
export default {
 data(){
   return {
    //  currentDate: new Date().getDate().toLocaleString("en-US", {timeZone: "Asia/Kolkata"}),
     currentDate: new Date().getUTCDate(),
     currentMonth: new Date().getMonth(),
     currentYear: new Date().getFullYear(),
     days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
   }
 },
    methods: {
      daysInMonth(){
        return new Date(this.currentYear, this.currentMonth, 0).getDate();
      },
      startDay(){
        return new Date(this.currentYear, this.currentMonth, 1).getDay();
      },
      previous(){
        if(this.currentMonth === 0) {
          this.currentMonth = 11;
          this.currentYear--;
        }
        else{
        this.currentMonth--;
        } 
      },
      next(){
        if(this.currentMonth === 11){ 
        this.currentMonth = 0;
        this.currentYear++;
      } else {
        this.currentMonth++;
      }
    },
    currentDateClass(num){
      const calenderFullDate = new Date(this.currentYear,this.currentMonth,num).toDateString();
      const currentFullDate = new Date().toDateString();
      return calenderFullDate === currentFullDate ? 'bg-blue-800 text-white' : '';
    }
   },

   computed: {
     currentMonthName() {
       return new Date(this.currentYear,this.currentMonth).toLocaleString('default',{month: 'long'});
     }
   }
}
</script>

<style>

</style> 