<template>
  <div class="container-fluid">
    <PageHeader :pageCurrentInfo="pageCurrentInfo" />

    <div class="widget has-shadow">
      <div class="widget-body">
        <table class="table table-bordered" summary="앰배서더 검색하기">
          <colgroup>
            <col width="10%" />
            <col width="30%" />
            <col width="10%" />
            <col width="*" />
          </colgroup>
          <tbody>
            <tr>
              <th scope="row">시험유형</th>
              <td>
                <div class="row">
                  <div class="col-sm-9">
                    <select
                      class="form-control"
                      v-model="searchParam.testTypeCode"
                      @change="onCodeChange"
                    >
                      <option value="">선택</option>
                      <option
                        :value="data.testTypeCode"
                        v-for="data in testtypeDtoList"
                        :key="data.testTypeCode"
                      >
                        {{ data.testTypeName }}</option
                      >
                    </select>
                  </div>
                </div>
              </td>
              <th>시험회차</th>
              <td>
                <div class="row">
                  <div class="col-sm-4">
                    <select class="form-control" v-model="searchParam.testSeq">
                      <option value="">선택</option>
                      <option
                        :value="data.testSeq"
                        v-for="data in testseqDtoList"
                        :key="data.testCode"
                        >{{ data.testSeq }}</option
                      >
                    </select>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="text-center">
          <button class="btn btn-primary" @click="searchBtn">검색</button>
        </div>
      </div>
    </div>
    <!-- 검색영역 끝-->

    <!-- 리스트영역 시작 -->
    <div class="widget has-shadow">
      <div class="widget-header bordered">
        <div class="row">
          <div class="col-sm-6 d-flex align-items-center justify-content-start">
            <!--table pageper-->
            <div class="dropdown show vbt-per-page-dropdown col-sm-2">
              <a
                class="btn btn-block dropdown-toggle form-control"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {{ config.per_page }}
              </a>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a
                  v-for="(option, key, index) in config.per_page_options"
                  :key="index"
                  class="dropdown-item"
                  href=""
                  @click.prevent="perPageHandler(option)"
                  v-bind:class="{ active: option == config.per_page }"
                >
                  {{ option }}
                </a>
              </div>
            </div>
            <label class="col-sm-4 mt-2"
              >조회건수 :
              {{ searchFlag === true ? searchRows.length : rows.length }}
              건</label
            >
          </div>
          <div
            class="col-sm-6 d-flex align-items-center justify-content-md-end justify-content-center"
          >
            <button
              class="btn btn-outline-primary"
              @click="$router.push({ name: '' })"
            >
              + 신규 정기시험
            </button>
            <button
              class="btn btn-outline-warning"
              @click="$router.push({ name: '' })"
            >
              + 신규 기관시험
            </button>
          </div>
        </div>
      </div>
      <div class="widget-body">
        <VueBootstrap4Table
          :rows="searchFlag === true ? searchRows : rows"
          :columns="columns"
          :config="config"
          :classes="classes"
          :show-loader="showLoader"
        >
          <template slot="empty-results">
            조회된 정보가 없습니다.
          </template>
          <template slot="testName" slot-scope="props">
            <router-link
              :to="{
                name: 'TestMakeViewPlan',
                params: { testCode: props.row.testCode, obj: props.row }
              }"
              >{{ props.cell_value }}</router-link
            >
          </template>
        </VueBootstrap4Table>
      </div>
      <!-- 리스트영역 끝 -->
    </div>
  </div>
</template>

<script>
import VueBootstrap4Table from "vue-bootstrap4-table";
import pageHeader from "@/mixin/pageHeader";
import { getTestTypeSeq, getTestMakeList } from "@/api";

export default {
  mixins: [pageHeader({ title: "시험생성", groupName: "시험접수" })],
  components: {
    VueBootstrap4Table
  },
  data: function() {
    return {
      selectRow: {},
      testtypeDtoList: [],
      testseqDtoList: [],
      rows: [],
      searchRows: [],
      columns: [
        {
          label: "No",
          name: "index",
          sort: true,
          initial_sort: true,
          initial_sort_order: "desc"
        },
        { label: "시험진행상태", name: "ccodeName", sort: true },
        {
          label: "시험명",
          name: "testName",
          sort: true,
          row_classes: "table-text-left notice-ellipsis"
        },
        {
          label: "시험유형",
          name: "ptestTypeCode",
          sort: true,
          row_classes: "table-text-left"
        },
        { label: "시험회차", name: "testSeq", sort: true },
        { label: "응시일시", name: "testDate", sort: true },
        { label: "접수기간", name: "applyDate", sort: true },
        { label: "응시료", name: "testFee", sort: true }
      ],
      config: {
        pagination: true,
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
      showLoader: false,
      searchParam: {
        testTypeCode: "",
        testSeq: ""
      },
      searchFlag: false
    };
  },
  created() {
    this.showLoader = true;
    this.selectType();
    this.init();
  },
  methods: {
    init() {
      getTestMakeList()
        .then(res => {
          this.rows = res.data;
          this.rows = this.rows.map((el, index) => {
            const container = {};
            container.index = index + 1;
            container.applyDate = `${this.$moment(el.applyStartDate).format(
              "YYYY-MM-DD"
            )} ~ ${this.$moment(el.applyEndDate).format("YYYY-MM-DD")}`;
            container.ccodeName = el.ccodeName;
            container.enterTimeHhmm = el.enterTimeHhmm;
            container.ptestTypeCode = el.ptestTypeCode;
            container.showTestIdYn = el.showTestIdYn;
            container.testCode = el.testCode;
            container.testDate = `${this.$moment(el.testDate).format(
              "YYYY-MM-DD"
            )} ${el.testTimeHhmm}`;
            container.testFee = this.numberWithCommas(el.testFee);
            container.testName = el.testName;
            container.testProgress = el.testProgress;
            container.testSeq = el.testSeq;
            container.testTypeCode = el.testTypeCode;
            return container;
          });

          this.searchFlag = false;
          this.showLoader = false;
        })
        .catch(err => {
          this.showLoader = false;
          console.log(err);
        });
    },
    selectType() {
      // 시험유형 선택하기
      getTestTypeSeq()
        .then(res => {
          this.selectRow = res.data;
          this.testtypeDtoList = this.selectRow.testtypeDtoList;
        })
        .catch(err => {
          console.log(err);
        });
    },
    onCodeChange(e) {
      // 시험유형별 회차 선택하기
      this.testseqDtoList = this.selectRow.testseqDtoList.filter(el => {
        return el.testCode.split("-")[0] === e.target.value;
      });
      this.searchParam.testSeq = "";
    },
    // table perpage
    perPageHandler(option) {
      this.config.per_page = option;
    },
    searchBtn() {
      if (this.searchParam.testTypeCode === "") {
        this.searchFlag = false;
        return this.rows;
      } else {
        this.searchFlag = true;
        this.searchRows = this.rows.filter(el => {
          if (this.searchParam.testSeq === "") {
            return el.testTypeCode === this.searchParam.testTypeCode;
          }
          return (
            el.testTypeCode === this.searchParam.testTypeCode &&
            el.testSeq === this.searchParam.testSeq
          );
        });
      }
    },
    numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  }
};
</script>

<style></style>
