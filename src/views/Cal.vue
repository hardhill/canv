<template>
  <div class="panel">
    <div class="cal">
      <div class="caption">
        <div class="ml">&larr;</div>
        <div class="mname">{{month}}</div>
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
      month: 0
    };
  },
  computed: {
    Month: {
      get: () => {
        return this.month;
      },
      set: value => {
        this.month = value;
      }
    }
  },
  mounted() {
    var now = new Date();
    var calendur = new Calendur(now)
    
    var sMonth = calendur.NameMonth
    this.month = sMonth;
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