<template>
  <div class="container-fluid">
    <PageHeader :pageCurrentInfo="pageCurrentInfo" />

    <!-- 검색영역 시작-->
    <div class="widget has-shadow">
      <div class="widget-body">
        <div class="row">
          <div class="col col-sm-4">
            <agency-find></agency-find>
          </div>

          <div class="col col-sm-8">
            <agency-detail></agency-detail>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pageHeader from "@/mixin/pageHeader";
import AgencyFind from "./agency/AgencyFind.vue";
import AgencyDetail from "./agency/AgencyDetail.vue";
export default {
  components: { AgencyFind, AgencyDetail },
  mixins: [pageHeader({ title: "지역본부정보", groupName: "계정관리" })]
};
</script>

<style></style>
