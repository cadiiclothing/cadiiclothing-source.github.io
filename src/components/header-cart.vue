<template>
   <div class="cart">
                    <a href="index.html#">
                      <i class="fa fa-shopping-basket" aria-hidden="true"></i>
                      <span>2</span>
                    </a>
                    <div class="cart-area">
                      <div class="mini-single-product">
                        <div class="media">
                          <div class="pull-left">
                            <a href="single-product.html">
                              <img src="static/images/shop/small/1.png" alt="">
                            </a>
                          </div>
                          <div class="media-body">
                            <h4 class="media-heading">
                              <a href="index.html#">Dress Smoothie</a>
                            </h4>
                            <span>
                              <i class="fa fa-trash-o" aria-hidden="true"></i>
                            </span>
                            <p>1 x $150</p>
                          </div>
                        </div>
                        <div class="media">
                          <div class="pull-left">
                            <a href="single-product.html">
                              <img src="static/images/shop/small/2.png" alt="">
                            </a>
                          </div>
                          <div class="media-body">
                            <h4 class="media-heading">
                              <a href="index.html#">Dress Smoothie</a>
                            </h4>
                            <span>
                              <i class="fa fa-trash-o" aria-hidden="true"></i>
                            </span>
                            <p>1 x $150</p>
                          </div>
                        </div>
                        <div class="total">
                          <p>Subtotal
                            <span>$300</span>
                          </p>
                        </div>
                        <div class="button-area">
                          <ul>
                            <li>
                              <a href="cart.html">View Cart</a>
                            </li>
                            <li>
                              <a href="checkout.html">Checkout</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
@Component
export default class HeaderCartComponent extends Vue {
}
</script>
