<template>
  <header>
    <div class="header-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
            <div class="logo-area">
              <a href="index.html"><img src="static/images/logo.png" alt=""></a>
            </div>
          </div>
          <div class="col-lg-7 col-md-7 col-sm-12 col-xs-12">
            <div class="main-menu">
             <header-navbar></header-navbar>
            </div>
          </div>
          <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <div class="header-right">
              <ul>
                <li>
                  <div class="search">
                    <a href="index.html#">
                      <i class="fa fa-search" aria-hidden="true"></i>
                    </a>
                    <div class="search-area">
                      <form>
                        <fieldset>
                          <div class="col-xs-12 acurate">
                            <div class="form-group">
                              <input type="text" class="form-control" placeholder="Search Here..">
                              <span>
                                <i class="fa fa-search" aria-hidden="true"></i>
                              </span>
                            </div>
                          </div>
                        </fieldset>
                      </form>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="user">
                    <a href="account.html">
                      <i class="fa fa-user" aria-hidden="true"></i>
                    </a>
                  </div>
                </li>

                <li>
                 <header-cart></header-cart>
                </li>
                <li>
                   <div class="cart">
                    <a href="javascript:;">
                      <i class="fa fa-language" aria-hidden="true"></i>
                    </a>
                    <div class="cart-area">
                      <div class="mini-single-product">
                      
                       
                        <div class="button-area">
                          <ul>
                            <li>
                              <a href="cart.html">Tiếng Việt</a>
                            </li>
                            <li>
                              <a href="checkout.html">Tiếng Anh</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- mobile-menu-area start -->
    <div class="mobile-menu-area">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
         
          </div>
        </div>
      </div>
    </div>
    <!-- mobile-menu-area end -->
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import HeaderNavbarComponent from './header-navbar.vue'
import HeaderNavbarMobileComponent from './header-navbar-mobile.vue'
import HeaderCartomponent from './header-cart.vue'
@Component({
  components: {
    'header-navbar': HeaderNavbarComponent,
    'header-navbar-mobile': HeaderNavbarMobileComponent,
    'header-cart': HeaderCartomponent
  }
})
export default class HeaderComponent extends Vue { }
</script>

