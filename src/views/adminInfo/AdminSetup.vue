<template>
  <div class="container-fluid">
    <div class="row">
      <PageHeader :pageCurrentInfo="pageCurrentInfo" />
      <div class="col-sm-12">
        <!-- 리스트영역 시작 -->
        <div class="widget has-shadow">
          <div class="widget-body">
            <VueBootstrap4Table
              :rows="rows"
              :columns="columns"
              :config="config"
              :classes="classes"
              :show-loader="showLoader"
            >
              <template slot="empty-results">조회된 정보가 없습니다.</template>
              <template slot="button" slot-scope="">
                <button
                  class="btn btn-sm btn-outline-danger"
                  @click="$router.push({ name: 'AdminSetupView' })"
                >
                  권한설정
                </button>
              </template>
            </VueBootstrap4Table>
          </div>
          <!-- 리스트영역 끝 -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueBootstrap4Table from "vue-bootstrap4-table";
import pageHeader from "@/mixin/pageHeader";
import { getGroupAuth } from "@/api";
export default {
  components: {
    VueBootstrap4Table
  },
  mixins: [pageHeader({ title: "그룹권한별 설정", groupName: "계정관리" })],
  data() {
    return {
      rows: [],
      columns: [
        { label: "No", name: "index", sort: true, row_classes: "w80" },
        {
          label: "업무구분코드",
          name: "userGroupId",
          sort: true,
          row_classes: "w150"
        },
        {
          label: "업무구분명",
          name: "userGroupName",
          sort: true,
          row_classes: "table-text-left"
        },
        {
          label: "등록메뉴순",
          name: "mcnt",
          sort: true,
          row_classes: "w100"
        },
        {
          label: "등록자",
          name: "userGroupName",
          sort: true,
          row_classes: "w200"
        },
        {
          label: "등록일자",
          name: "insertTime",
          sort: true,
          row_classes: "w200"
        },
        { label: "관리", name: "button", sort: false, row_classes: "w100" }
      ],
      config: {
        pagination: false,
        pagination_info: false,
        num_of_visibile_pagination_buttons: 10,
        checkbox_rows: false,
        highlight_row_hover: false,
        rows_selectable: false,
        multi_column_sort: false,
        card_mode: false,
        selected_rows_info: false,
        per_page: 20,
        per_page_options: [20, 50, 100],
        show_reset_button: false,
        show_refresh_button: false,
        global_search: {
          placeholder: "",
          visibility: false,
          case_sensitive: false
        }
      },
      classes: {
        table: "table table-bordered"
      },
      showLoader: false
    };
  },
  mounted() {
    this.showLoader = true;
    this.init();
  },
  methods: {
    init() {
      getGroupAuth()
        .then(res => {
          this.rows = res.data;
          this.showLoader = false;
          console.log(res);
        })
        .catch(err => {
          this.showLoader = false;
          console.log(err);
        });
    }
  }
};
</script>

<style></style>
