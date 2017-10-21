<template>
 <div class="about-area">
          <div class="container">
            <div class="row">
               <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                 <div class="about-content">
                   <h2>OUR HISTORY</h2>
                   <span><img src="static/images/line.png" alt=""></span>
                    <p><span>Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled to make a type spmen.</span></p><p><span>It has survived not only five centuries, but also the leap into electronic ting remaining essentially unchanged.</span> </p>
                    <ul>
                      <li><i class="fa fa-check-circle" aria-hidden="true"></i> Temporibus autem quibusdam et aut officiis debitis aut rerumbus saepe eveniet ut et voluptates.</li>
                      <li><i class="fa fa-check-circle" aria-hidden="true"></i> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
                      <li><i class="fa fa-check-circle" aria-hidden="true"></i> Temporibus autem quibusdam et aut officiis debitis aut rerumbus saepe eveniet ut et voluptates.</li>
                    </ul>
                 </div>
               </div>
               <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                 <div class="about-images">
                   <img src="static/images/about/about.jpg" alt="">
                   <div class="overley">
                     <div class="text">
                       <p>We have 35 Years Experinced</p>
                     </div>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
@Component
export default class AboutUsComponent extends Vue {
}
</script>
