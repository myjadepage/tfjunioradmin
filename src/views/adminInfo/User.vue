<template>
  <div class="container-fluid">
    <div class="row">
      <PageHeader :pageCurrentInfo="pageCurrentInfo" />

      <div class="col-sm-12">
        <!-- 검색영역 시작-->
        <div class="widget has-shadow">
          <div class="widget-body">
            <div class="row">
              <div class="col col-sm-4">
                <user-find></user-find>
              </div>

              <div class="col col-sm-8">
                <user-detail></user-detail>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pageHeader from "@/mixin/pageHeader";
import UserFind from "./user/UserFind.vue";
import UserDetail from "./user/UserDetail.vue";
export default {
  components: { UserFind, UserDetail },
  mixins: [pageHeader({ title: "직원관리", groupName: "계정관리" })]
};
</script>

<style></style>
