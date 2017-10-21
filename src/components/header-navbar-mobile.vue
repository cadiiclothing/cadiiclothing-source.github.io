<template>
     <div class="mobile-menu">
          <nav id="dropdown">
            <ul>
              <li v-for="(navbar,key,index) in navbars" :key="key" v-if="navbar.parentId === null">
                <router-link :to="{path: navbar.path}">{{navbar.displayName}}
                  <i class="fa fa-angle-down" v-if="countNavbarByParentId(navbar.id)" aria-hidden="true"></i>
                </router-link>
                <ul v-if="countNavbarByParentId(navbar.id)">
                  <li v-for="(childNavbar,skey,index) in getNavbarByParentId(navbar.id)" :key="skey" >
                    <router-link :to="{path: childNavbar.path}">{{childNavbar.displayName}}</router-link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { INavbar } from '../models'
@Component
export default class HeaderNavbarMobileComponent extends Vue {
  navbars: INavbar[] | null;
  /**
   *
   */
  constructor () {
    super()
    this.navbars = require('../api/header-navbar.vi-VN.json')
  }
  /* eslint-disable */
  getNavbarByParentId(parentId: number) {
    let childrenNavbars: INavbar[] = [];
    return this.navbars.filter(item => item.parentId === parentId)
  }
  /* eslint-disable */
  countNavbarByParentId(parentId: number) {
    let childrenNavbars: INavbar[] = [];
    return this.navbars.filter(item => item.parentId === parentId).length > 0
  }
  
}
</script>

