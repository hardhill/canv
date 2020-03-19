<template>
  <div class="panel">
    <div class="cal">
      <div class="year">{{Year}}</div>
      <div class="caption">
        <div class="ml" @click="Back()">&larr;</div>
        <div class="mname">{{Month}}</div>
        <div class="mr" @click="Forward()">&rarr;</div>
      </div>
      <div>
        <div v-for="week in Calend" :key="week.date"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Calendur from '@/assets/calendur'
export default {
  data: () => {
    return {
      monthname: '',
      yearname:'',
      calendur: null,
      monthdays:[]
    };
    
  },
  computed: {
    Month(){ return this.monthname},
    Year(){ return this.yearname},
    Calend(){return this.monthdays}
  },
  methods:{
    Back(){
      this.calendur.Back()
      this.monthname = this.calendur.NameMonth
      this.yearname = this.calendur.YearName
    },
    Forward(){
      this.calendur.Forward()
      this.monthname = this.calendur.NameMonth
      this.yearname = this.calendur.YearName
    }
  },
  mounted() {
    var now = new Date();
    var calendur = new Calendur(now)
    this.monthname = calendur.NameMonth
    this.yearname = calendur.YearName
    this.calendur = calendur
    this.monthdays = calendur.MonthDaysArr
    console.log(calendur.MonthDaysArr)

  }
};
</script>

<style scoped>
.panel {
  display: flex;
  justify-content: center;
  height: auto;
  min-width: 370px;
}
.cal{
    border:1px solid chocolate
}
.caption {
  display: flex;
  align-items: center;
}
.year{
  width: 100%;
  text-align: center;
  padding: 0.5rem 0rem;
}
.mr,
.ml {
  cursor: pointer;
  padding: 1rem;
  color: rgb(3, 27, 37);
  font-size: 1rem;
}
</style>