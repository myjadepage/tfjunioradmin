<template>
  <div class="container-fluid">
    <PageHeader :pageCurrentInfo="pageCurrentInfo" />

    <div class="widget has-shadow">
      <div class="widget-body">
        <table class="table table-bordered" summary="배너 검색하기">
          <colgroup>
            <col width="10%" />
            <col width="30%" />
            <col width="10%" />
            <col width="*" />
          </colgroup>
          <tbody>
            <tr>
              <th scope="row">제목</th>
              <td>
                <input
                  type="text"
                  class="form-control"
                  placeholder=""
                  v-model="searchParam.title"
                />
              </td>
              <th>등록일자</th>
              <td>
                <div class="row">
                  <div class="col">
                    <!-- date select component -->
                    <DateSelect
                      @state-start-date="
                        date => (this.searchParam.pfromDate = date)
                      "
                      @state-end-date="
                        date => (this.searchParam.ptoDate = date)
                      "
                      :defStartDate="searchParam.pfromDate"
                      :defEndDate="searchParam.ptoDate"
                    />
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">구분</th>
              <td>
                <div class="row">
                  <div class="col-sm-5">
                    <select class="form-control" v-model="searchParam.type">
                      <option value="">선택</option>
                      <option value="main">메인</option>
                      <option value="gnb">GNB</option>
                      <option value="login">로그인</option>
                      <option value="apply">시험접수</option>
                      <option value="scores">성적확인</option>
                    </select>
                  </div>
                </div>
              </td>
              <th>상태</th>
              <td>
                <div class="row">
                  <div class="col-sm-12 d-flex align-items-center">
                    <div class="styled-radio">
                      <input
                        type="radio"
                        id="radio1"
                        name="rdoHandling"
                        value=""
                        v-model="searchParam.status"
                      />
                      <label for="radio1">전체</label>
                    </div>
                    <div class="styled-radio">
                      <input
                        type="radio"
                        id="radio2"
                        name="rdoHandling"
                        value="공개"
                        v-model="searchParam.status"
                      />
                      <label for="radio2">공개</label>
                    </div>
                    <div class="styled-radio">
                      <input
                        type="radio"
                        id="radio3"
                        name="rdoHandling"
                        value="비공개"
                        v-model="searchParam.status"
                      />
                      <label for="radio3">비공개</label>
                    </div>
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
              @click="$router.push({ name: 'NoticeInput' })"
            >
              + 신규
            </button>
          </div>
        </div>
      </div>
      <div class="widget-body">
        <VueBootstrap4Table
          :rows="rows"
          :columns="columns"
          :config="config"
          :classes="classes"
          :show-loader="showLoader"
        >
          <template slot="empty-results">
            조회된 정보가 없습니다.
          </template>
          <!-- <template slot="title" slot-scope="props">
            <a
              href="#"
              @click.prevent="
                $router.push({
                  name: 'noticeDetail',
                  params: { id: props.row.noticeId }
                })
              "
              >{{ props.cell_value }}</a
            >
          </template> -->
        </VueBootstrap4Table>
      </div>
      <!-- 리스트영역 끝 -->
    </div>
  </div>
</template>

<script>
import VueBootstrap4Table from "vue-bootstrap4-table";
import pageHeader from "@/mixin/pageHeader";
import DateSelect from "./../../components/datepicker/DateSelect";
import { getBanner } from "@/api";

export default {
  mixins: [pageHeader({ title: "공지사항 관리", groupName: "홈페이지관리" })],
  components: {
    VueBootstrap4Table,
    DateSelect
  },
  data: function() {
    return {
      rows: [],
      columns: [
        { label: "No", name: "dbrCode", sort: true },
        { label: "구분", name: "dbrType", sort: true },
        {
          label: "제목",
          name: "dbrTitle",
          sort: true,
          row_classes: "table-text-left notice-ellipsis"
        },
        { label: "", name: "", sort: false },
        { label: "등록자", name: "dbrUpUser", sort: true },
        { label: "공개여부", name: "dbrStatus", sort: true },
        { label: "등록일자", name: "dbrUpdate", sort: true }
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
        title: "",
        type: "",
        status: "",
        pfromDate: this.$moment()
          .add(-30, "days")
          .format("YYYY-MM-DD"),
        ptoDate: this.$moment().format("YYYY-MM-DD")
      }
    };
  },
  mounted() {
    this.showLoader = true;
    this.init();
  },
  methods: {
    init() {
      getBanner()
        .then(res => {
          this.rows = res.data.map((el, index) => {
            const container = {};
            container.index = index + 1;
            container.dbrCode = el.dbrCode;
            container.dbrInsertUser = el.dbrInsertUser;
            container.dbrLinkType = el.dbrLinkType;
            container.dbrRegdate = this.$moment(el.dbrRegdate).format(
              "YYYY-MM-DD"
            );
            if (el.dbrStatus === "Y") {
              container.dbrStatus = "O";
            } else {
              container.dbrStatus = "X";
            }

            container.dbrTitle = el.dbrTitle;
            container.dbrType = el.dbrType;
            container.dbrUpUser = el.dbrUpUser;
            container.dbrUpdate = this.$moment(el.dbrUpdate).format(
              "YYYY-MM-DD"
            );
            container.dbrUrl = el.dbrUrl;
            return container;
          });

          this.showLoader = false;
          console.log(res);
        })
        .catch(err => {
          this.showLoader = false;
          console.log(err);
        });
    },
    // table perpage
    perPageHandler(option) {
      this.config.per_page = option;
    },
    searchBtn() {}
  }
};
</script>

<style></style>
