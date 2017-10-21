<template>
  <div class="subscribe-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                    <div class="subscribe">
                        <h2>Đăng ký nhận tin mới</h2>
                        <p>Hãy nhập email của bạn để theo dõi nhưng thông tin mới nhất từ shop bạn nhé.</p>
                        <form>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <input type="text" class="form-control form-inline" placeholder="Nhập email">
                                </div>

                            </div>
                            <div class="col-sm-2 acurate text-left">
                                <div class="form-group acurate">
                                    <button type="submit" class="btn btn-default">Đăng ký</button>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component
export default class SubcribeComponent extends Vue {}
</script>
