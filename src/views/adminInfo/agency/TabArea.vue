<template>
  <div class="widget">
    <div
      class="widget-body no-padding-top"
      style="height: calc(100vh - 50vh);overflow-y: scroll;"
    >
      <VueBootstrap4Table
        :rows="rows"
        :columns="columns"
        :config="config"
        :classes="classes"
        :show-loader="showLoader"
        @on-select-row="selectRowData"
        @on-unselect-row="selectRowData"
      >
        <template slot="empty-results">
          조회된 정보가 없습니다.
        </template>
      </VueBootstrap4Table>
    </div>
  </div>
</template>

<script>
import VueBootstrap4Table from "vue-bootstrap4-table";
export default {
  components: { VueBootstrap4Table },
  data() {
    return {
      rows: [],
      columns: [
        {
          label: "지역코드",
          name: "dpoOrderRegdate",
          sort: true,
          row_classes: "w120"
        },
        {
          label: "지역명",
          name: "cuName",
          sort: true,
          row_classes: "table-text-left w200"
        },
        {
          label: "지역본부ID",
          name: "itemName",
          sort: true,
          row_classes: "table-text-left"
        },
        {
          label: "지역본부명",
          name: "dpiCount",
          sort: true,
          row_classes: "w100"
        }
      ],
      config: {
        pagination: false,
        pagination_info: false,
        num_of_visibile_pagination_buttons: 10,
        checkbox_rows: true,
        highlight_row_hover: false,
        multi_column_sort: false,
        card_mode: false,
        per_page: 20,
        per_page_options: [20, 50, 100],
        show_reset_button: false,
        show_refresh_button: false,
        global_search: {
          placeholder: "",
          visibility: false,
          case_sensitive: false
        },
        loaderText: ""
      },
      classes: {
        table: "table table-bordered"
      },
      showLoader: false
    };
  },
  methods: {
    selectRowData() {}
  }
};
</script>

<style></style>
