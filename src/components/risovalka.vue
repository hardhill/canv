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
    var c = document.getElementById("cnv")
    const ctx = c.getContext("2d")
    this.Drawer(ctx)
  },
  methods: {
    Drawer(ctx){
      var start = 0;
      setInterval(()=>{
        start++
        if(start==360){start=0}
        this.RectDraw(ctx)
        this.CircleDraw(ctx,start)

      },16)
    },
    RectDraw(ctx) {
        ctx.beginPath();
        ctx.rect(0, 0, 800, 600);
        ctx.fillStyle = 'gray'
        ctx.fillRect(0,0,800,600)
        ctx.stroke();
    },
    CircleDraw(ctx,start){
        ctx.beginPath()
        ctx.lineWidth = 5;
        ctx.strokeStyle = "rgb(129,78,110)"
        ctx.lineCap = "round"
        ctx.fillStyle = "rgb(123, 180, 110)";
        ctx.arc(400, 300, 200, (Math.PI/180)*start, (Math.PI/180)*(10+start), false)
        ctx.stroke()
        ctx.lineTo(400,300)
        ctx.closePath()
        ctx.stroke()
    }
  }
};
</script>