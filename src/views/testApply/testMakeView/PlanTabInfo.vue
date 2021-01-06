<template>
  <!-- 작성영역 시작-->
  <div class="widget has-shadow">
    <div class="widget-body">
      <table class="table table-bordered totla-info" summary="정기시험 정보">
        <colgroup>
          <col width="10%" />
          <col width="40%" />
          <col width="10%" />
          <col width="40%" />
        </colgroup>
        <tbody>
          <tr>
            <th scope="row">시험구분</th>
            <td colspan="3">
              <input
                type="text"
                class="form-control"
                placeholder=""
                :value="getObj.ptestTypeCode"
                readonly
              />
            </td>
          </tr>
          <tr>
            <th scope="row">시험유형</th>
            <td>
              <div class="row">
                <div class="col-sm-6">
                  <select class="form-control" v-model="getObj.ptestTypeCode">
                    <option value="">{{ getObj.ptestTypeCode }}</option>
                  </select>
                </div>
              </div>
            </td>
            <th>시험회차</th>
            <td>
              <div class="row">
                <div class="col-sm-6">
                  <input
                    class="form-control"
                    :value="getObj.testSeq"
                    readonly
                  />
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <th scope="row">시험명</th>
            <td>
              <div class="row">
                <div class="col-sm-6">
                  <input
                    class="form-control"
                    :value="getObj.testName"
                    readonly
                  />
                </div>
              </div>
            </td>
            <th>시험진행상태</th>
            <td>
              <div class="row">
                <div class="col-sm-6">
                  <select class="form-control" v-model="getObj.ccodeName">
                    <option value="">{{ getObj.ccodeName }}</option>
                  </select>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <th scope="row">응시일시</th>
            <td>
              <date-select-time
                @state-start-date="getObj.testDate"
                @state-start-hour="applyHour"
                :defStartDate="applyDate"
                :defStartHour="applyHour"
                :defStartMin="applyMin"
              ></date-select-time>
            </td>
            <th>입실일시</th>
            <td>
              <date-select-time
                @state-start-date="getObj.testDate"
                @state-start-hour="getObj.enterTimeHhmm"
                :defStartDate="applyDate"
                :defStartHour="applyHour"
                :defStartMin="applyMin"
              ></date-select-time>
            </td>
          </tr>

          <tr>
            <th scope="row">접수기간</th>
            <td colspan="3">
              <div class="row">
                <div class="col-sm-4 no-padding-right">
                  <date-select-time
                    @state-start-date="applyDate"
                    @state-start-hour="applyHour"
                    :defStartDate="applyDate"
                    :defStartHour="applyHour"
                    :defStartMin="applyMin"
                  ></date-select-time>
                </div>
                <div class="input-group col-sm-1">
                  <span class="input-group-addon">~</span>
                </div>
                <div class="col-sm-4  no-padding-left">
                  <date-select-time
                    @state-start-date="applyDate"
                    @state-start-hour="applyHour"
                    :defStartDate="applyDate"
                    :defStartHour="applyHour"
                    :defStartMin="applyMin"
                  ></date-select-time>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <th scope="row">100%환불기준</th>
            <td>
              <div class="input-group">
                <datepicker
                  :value="refundAll"
                  :format="getFormatDate"
                  :language="ko"
                  input-class="form-control"
                ></datepicker>
                <span class="input-group-addon"
                  ><i class="la la-calendar"></i
                ></span>
                <span class="input-group-addon">자정까지</span>
              </div>
            </td>
            <th>50%환불기준</th>
            <td>
              <div class="input-group">
                <datepicker
                  :value="refundHalf"
                  :format="getFormatDate"
                  :language="ko"
                  input-class="form-control"
                ></datepicker>
                <span class="input-group-addon"
                  ><i class="la la-calendar"></i
                ></span>
                <span class="input-group-addon">자정까지</span>
              </div>
            </td>
          </tr>

          <tr>
            <th scope="row">변경마감일시</th>
            <td>
              <date-select-time
                @state-start-date="applyDate"
                @state-start-hour="applyHour"
                :defStartDate="applyDate"
                :defStartHour="applyHour"
                :defStartMin="applyMin"
              ></date-select-time>
            </td>
            <th>성적발표일시</th>
            <td>
              <date-select-time
                @state-start-date="applyDate"
                @state-start-hour="applyHour"
                :defStartDate="applyDate"
                :defStartHour="applyHour"
                :defStartMin="applyMin"
              ></date-select-time>
            </td>
          </tr>

          <tr>
            <th scope="row">응시료</th>
            <td>
              <div class="input-group">
                <input
                  class="form-control col-sm-3 mr-2 text-right"
                  :value="getObj.testFee"
                />
                <div class="styled-checkbox">
                  <input
                    type="checkbox"
                    id="resign-1"
                    v-model="getObj.showTestIdYn"
                  />
                  <label for="resign-1">수험표 공개</label>
                </div>
              </div>
            </td>
            <th>테스트폼</th>
            <td>
              <input type="text" class="form-control" />
            </td>
          </tr>
          <tr>
            <th scope="row">메모</th>
            <td colspan="3">
              <textarea class="form-control"></textarea>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="widget-footer">
      <div class="row col">
        <div class="col-sm-6">
          <button
            type="button"
            class="btn btn-outline-primary"
            @click="$router.push({ name: 'TestMake' })"
          >
            목록
          </button>
          <button type="button" class="btn btn-outline-warning">신규</button>
          <button type="button" class="btn btn-outline-danger">삭제</button>
        </div>
        <div class="col-sm-6 d-flex justify-content-end">
          <button type="button" class="btn btn-primary">
            저장
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- 입력폼 끝-->
</template>

<script>
import datepicker from "vuejs-datepicker";
import { ko } from "vuejs-datepicker/dist/locale";
import DateSelectTime from "../../../components/datepicker/DateSelectTime.vue";
export default {
  components: { datepicker, DateSelectTime },
  filters: {
    formatNumber(value) {
      if (!value) return "0";
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  },
  data: function() {
    return {
      ko: ko,
      applyDate: "",
      applyHour: "",
      applyMin: "",
      refundAll: new Date(),
      refundHalf: new Date(),
      resignChecked: ""
    };
  },
  props: {
    objInfo: {
      type: Object
    }
  },
  computed: {
    getObj() {
      return this.objInfo;
    }
  },
  methods: {
    getFormatDate(date) {
      return this.$moment(date).format("YYYY-MM-DD");
    }
  }
};
</script>

<style scoped>
.vdp-datepicker {
  width: 150px;
}
</style>
