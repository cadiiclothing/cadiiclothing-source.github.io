<template>
<div class="testimonial-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="testimonial">
                        <div class="single-testimonial">
                            <div class="images">
                                <img src="static/images/testimonial/client.png" alt="">
                                <div class="details">
                                    <h4>Jonathan Doe</h4>
                                    <p>CEO of company</p>
                                </div>
                            </div>
                            <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut
                                et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur
                                a sapiente delectus</p>
                        </div>
                        <div class="single-testimonial">
                            <div class="images">
                                <img src="static/images/testimonial/client.png" alt="">
                                <div class="details">
                                    <h4>Jonathan Doe</h4>
                                    <p>CEO of company</p>
                                </div>
                            </div>
                            <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut
                                et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur
                                a sapiente delectus</p>
                        </div>
                        <div class="single-testimonial">
                            <div class="images">
                                <img src="static/images/testimonial/client.png" alt="">
                                <div class="details">
                                    <h4>Jonathan Doe</h4>
                                    <p>CEO of company</p>
                                </div>
                            </div>
                            <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut
                                et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur
                                a sapiente delectus</p>
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

    /*----------------------------
	Testimonial Carousel
	------------------------------ */
    $(".testimonial").owlCarousel({
      autoPlay: false,
      slideSpeed: 2000,
      pagination: true,
      navigation: true,
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