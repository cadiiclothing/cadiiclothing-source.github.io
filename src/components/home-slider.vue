<template>
        <div class="slider-area">
            <div class="bend niceties preview-2">
                <div id="ensign-nivoslider" class="slides"> 
                    <img src="static/images/slider/thiep moi 3.jpg" alt="" title="#slider-direction-1"  />
                    <img src="static/images/slider/2.png" alt="" title="#slider-direction-2"  />
                </div>
                <!-- direction 2 -->
                <!-- <div id="slider-direction-1" class="slider-direction">
                    <div class="slider-content t-cn s-tb slider-1">
                        <div class="title-container s-tb-c">
                            <h1 class="title1" style="color:#FFF;"><span>C A D I I </span>Clothing </h1>
                            <div class="title2" style="color:#FFF;">Fashion for man and woman</div>
                        </div>
                    </div>  
                </div> -->
                <!-- direction 2 -->
                <div id="slider-direction-2" class="slider-direction">
                    <div class="slider-content t-cn s-tb slider-2">
                        <div class="title-container s-tb-c">
                            <h1 class="title1"> <span>HOÀI CỔ</span> Collection</h1>
                            <div class="title2" >Hoài niệm về quá khứ, những xu hướng thời trang đã và đang là cảm hứng của rất nhiều bộ sưu tập thời trang của các nhà thiết kế hiện đại.</div>
                            <div class="slider-botton" >
                                <ul>
                                    <li class="acitve"><a href="javascript:;">Đọc thêm</a></li>
                                    <li><a href="javascript:;">Liên hệ</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
</template>

<script>
export default {
  mounted() {
      this.initNivoSlider()
  },
  methods: {
    initNivoSlider() {
      $('#ensign-nivoslider').nivoSlider();
    }
  }
};
</script>
