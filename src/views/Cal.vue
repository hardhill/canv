<template>
  <div class="panel">
    <div class="cal">
      <div class="caption">
        <div class="ml">&larr;</div>
        <div class="mname">{{Month}}</div>
        <div class="mr">&rarr;</div>
      </div>
    </div>
  </div>
</template>

<script>
import Calendur from '@/assets/calendur'
export default {
  data: () => {
    return {
      monthname: ''
    };
  },
  computed: {
    Month(){ return this.monthname}
  },
  mounted() {
    var now = new Date();
    var calendur = new Calendur(now)
    var sMonth = calendur.NameMonth
    console.log(calendur.NameMonth)
    this.monthname = sMonth;
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
.mr,
.ml {
  cursor: pointer;
  padding: 1rem;
  color: rgb(3, 27, 37);
  font-size: 1rem;
}
</style>