<template>
  <div class="container-fluid">
    <div class="row">
      <PageHeader :pageCurrentInfo="pageCurrentInfo" />

      <div class="col-sm-12">
        <!-- 검색영역 시작-->
        <div class="widget has-shadow">
          <div class="widget-body">
            <table class="table table-bordered" summary="지역본부 검색하기">
              <colgroup>
                <col width="10%" />
                <col width="40%" />
                <col width="10%" />
                <col width="40%" />
              </colgroup>
              <tbody>
                <tr>
                  <th scope="row">
                    <span class="text-primary">검색구분</span>
                  </th>
                  <td>
                    <div class="row">
                      <div class="col col-sm-4">
                        <input
                          type="text"
                          class="form-control"
                          v-model="searchParam.pitemName"
                          placeholder="품목명 입력"
                        />
                      </div>
                    </div>
                  </td>
                  <th><span class="text-primary">사업자번호</span></th>
                  <td>
                    <div class="row">
                      <div class="col-sm-3">
                        <input
                          type="text"
                          class="form-control"
                          v-model="searchParam.pitemName"
                        />
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">지역구분</th>
                  <td>
                    <div class="row">
                      <div class="col-sm-3">
                        <select
                          class="form-control"
                          v-model="searchParam.pgubun"
                        >
                          <option key="" value="">선택</option>
                          <option key="1" value="1">품목코드</option>
                          <option key="2" value="2">관리번호</option>
                        </select>
                      </div>
                    </div>
                  </td>
                  <th><span class="text-primary">상태</span></th>
                  <td>
                    <div class="row">
                      <div class="col-sm-12 d-flex align-items-center">
                        <div class="styled-radio">
                          <input
                            type="radio"
                            id="radio1"
                            name="rdoHandling"
                            value=""
                            v-model="searchParam.pitemHandling"
                          />
                          <label for="radio1">전체</label>
                        </div>
                        <div class="styled-radio">
                          <input
                            type="radio"
                            id="radio2"
                            name="rdoHandling"
                            value="1"
                            v-model="searchParam.pitemHandling"
                          />
                          <label for="radio2">취급</label>
                        </div>
                        <div class="styled-radio">
                          <input
                            type="radio"
                            id="radio3"
                            name="rdoHandling"
                            value="0"
                            v-model="searchParam.pitemHandling"
                          />
                          <label for="radio3">미취급</label>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

            <div class="text-center">
              <button class="btn btn-primary" @click="onSearch">검색</button>
            </div>
          </div>
        </div>
        <!-- 검색영역 끝-->

        <!-- 리스트영역 시작 -->
        <div class="widget has-shadow">
          <div class="widget-header bordered">
            <div class="row">
              <div
                class="col-sm-6 d-flex align-items-center justify-content-md-start justify-content-center"
              >
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
                <label class="col-sm-4">조회건수 : {{ rows.length }} 건</label>
              </div>
              <div
                class="col-sm-6 d-flex align-items-center justify-content-md-end justify-content-center"
              >
                <button
                  class="btn btn-outline-primary"
                  @click="$router.push({ name: 'AgencyView' })"
                >
                  + 신규등록
                </button>
              </div>
            </div>
          </div>
          <div class="widget-body">
            <vue-bootstrap4-table
              :rows="rows"
              :columns="columns"
              :config="config"
              :classes="classes"
              :show-loader="showLoader"
            >
              <template slot="empty-results">조회된 정보가 없습니다.</template>
            </vue-bootstrap4-table>
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
import { getAgency } from "@/api";

export default {
  components: { VueBootstrap4Table },
  mixins: [pageHeader({ title: "지역본부관리", groupName: "계정관리" })],
  data() {
    return {
      rows: [],
      columns: [
        { label: "No", name: "dacCode", sort: true, row_classes: "w80" },
        {
          label: "지역구분",
          name: "dacArea",
          sort: true,
          row_classes: ""
        },
        {
          label: "지역본부ID",
          name: "dacName",
          sort: true
        },
        {
          label: "지역본부명",
          name: "dacArea",
          sort: true,
          row_classes: "table-text-left"
        },
        {
          label: "관리지역",
          name: "dacCompanyYn",
          sort: true,
          row_classes: "w100"
        },
        {
          label: "대표휴대폰",
          name: "dacCeoHp",
          sort: true
        },
        {
          label: "대표Email",
          name: "dacCeoEmail",
          sort: true,
          row_classes: "table-text-left"
        },
        {
          label: "거래시작일",
          name: "dacRegdate",
          sort: false,
          row_classes: "table-text-left"
        }
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
        pitemName: "" /* 품목명 */,
        pbigCode: "" /* 대분류코드 */,
        pmidCode: "" /* 중분류코드 */,
        pgubun: "" /* 검색구분 (ITEM|MANAGE) */,
        pgubunTxt: "" /* 검색구분Text 품목번호|관리번호 */,
        pitemUseYn: "" /* 사용여부 */
      }
    };
  },
  mounted() {
    this.showLoader = true;
    this.init();
  },
  computed: {},
  methods: {
    init() {
      getAgency()
        .then(res => {
          console.log(res);
          this.rows = res.data;
          this.showLoader = false;
        })
        .catch(err => {
          this.showLoader = false;
          console.log(err);
        });
    },
    // 조회버튼
    onSearch() {}
  }
};
</script>
