<template>
  <div>
    <div>
      <canvas id="cnv" width="800" height="600"></canvas>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    
  },
  mounted() {
    var c = document.getElementById("cnv");
    var ctx = c.getContext("2d");
    //this.vueCanvas = ctx;
    this.RectDraw(ctx)
    
  },
  methods: {
    RectDraw(ctx) {
        ctx.beginPath();
        ctx.rect(0, 0, 800, 600);
        ctx.fillStyle = 'gray'
        ctx.fillRect(0,0,800,600)

        ctx.stroke();
    }
  }
};
</script>