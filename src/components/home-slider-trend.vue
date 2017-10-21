<template>
   <div class="product-testimonial-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="total-product-testimonial">
                        <div class="single-product-testimonial" v-for="item in 3" :key="item">
                            <h3>2018 Xu hướng thời trang 2018</h3>
                            <h2>HOÀI CỔ</h2>
                            <p>Hoài niệm về quá khứ, những xu hướng thời trang đã và đang là cảm hứng của rất nhiều bộ sưu tập thời trang của các nhà thiết kế hiện đại.</p>
                            <div class="read-more">
                                <a href="javascript:;">Mua sắm</a>
                            </div>
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
    /*----------------------------
 Product testimonial Carousel
------------------------------ */

    $(".total-product-testimonial").owlCarousel({
      autoPlay: true,
      slideSpeed: 2000,
      pagination: true,
      navigation: false,
      items: 1,
      navigationText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
      ],
      itemsDesktop: [1199, 1],
      itemsDesktopSmall: [993, 1],
      itemsTablet: [767, 1],
      itemsMobile: [479, 1]
    });
  }
};
</script>
