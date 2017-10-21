<template>
<div>
  <home-slider></home-slider>
  <home-fashion-collection></home-fashion-collection>
  <home-feauture-propduct></home-feauture-propduct>
  <home-slider-trend></home-slider-trend>
  <home-blog></home-blog>
  <home-subcribe></home-subcribe>
</div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import HomeSliderComponent from "./home-slider.vue";
import HomeFeatureProductComponent from "./home-feature-product.vue";
import HomeFashionCollectionComponent from "./home-fashion-collection.vue";
import HomeSliderTrendComponent from "./home-slider-trend.vue";
import HomeCustomerCommentComponent from "./home-customer-comments.vue";
import BlogComponent from "./home-blog.vue";
import SubcribeComponent from "./home-subscribe.vue";
import SpecialInfoComponent from "./special-info.vue";

@Component({
  components: {
    "home-slider": HomeSliderComponent,
    "home-fashion-collection": HomeFashionCollectionComponent,
    "home-feauture-propduct": HomeFeatureProductComponent,
    "home-slider-trend": HomeSliderTrendComponent,
    "home-customer-comments": HomeCustomerCommentComponent,
    "home-blog": BlogComponent,
    "home-subcribe": SubcribeComponent,
    "home-special-info": SpecialInfoComponent
    // 'header-navbar-mobile': HeaderNavbarMobileComponent,
    // 'header-cart': HeaderCartomponent
  }
})
export default class HomeComponent extends Vue {}
</script>
