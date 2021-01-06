<template>
  <div class="widget">
    <div class="widget-body no-padding-top">
      <table class="table table-bordered" summary="직원정보">
        <colgroup>
          <col width="10%" />
          <col width="40%" />
          <col width="10%" />
          <col width="40%" />
        </colgroup>
        <tbody>
          <tr>
            <th scope="row">지역본부명</th>
            <td>
              <div class="row">
                <div class="col-sm-6">
                  <input type="text" class="form-control" />
                </div>
              </div>
            </td>
            <th>지역본부코드</th>
            <td>
              <div class="row">
                <div class="col-sm-6">
                  <input type="text" class="form-control" disabled />
                </div>
                <div
                  class="col-sm-6 d-flex justify-content-end align-items-center"
                >
                  <span>(자동생성)</span>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">지역본부 ID</th>
            <td>
              <div class="row">
                <div class="col-sm-6">
                  <input type="text" class="form-control" disabled />
                </div>
              </div>
            </td>
            <th>비밀번호</th>
            <td>
              <div class="row">
                <div class="col col-sm-6">
                  <input type="password" class="form-control" placeholder="" />
                </div>
                <div class="col col-sm-4">
                  <button
                    type="button"
                    class="btn btn-sm btn-secondary input-btn-util"
                  >
                    초기화
                  </button>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">사업자구분</th>
            <td>
              <div class="row">
                <div class="col-sm-12 d-flex align-items-center">
                  <div class="styled-radio">
                    <input type="radio" id="pworkStatus-1" value="" />
                    <label for="pworkStatus-1">법인</label>
                  </div>
                  <div class="styled-radio">
                    <input type="radio" id="pworkStatus-2" value="정상" />
                    <label for="pworkStatus-2">개인</label>
                  </div>
                </div>
              </div>
            </td>
            <th>지역구분</th>
            <td>
              <div class="row">
                <div class="col-sm-6">
                  <select class="form-control">
                    <option value=""></option>
                    <option value="">중분류 1</option>
                    <option value="">중분류 2</option>
                  </select>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th>사업자번호</th>
            <td>
              <div class="row">
                <div class="col-sm-5">
                  <input type="text" class="form-control" placeholder="" />
                </div>
              </div>
            </td>
            <th>대표자명</th>
            <td>
              <div class="row">
                <div class="col-sm-5">
                  <input type="text" class="form-control" placeholder="" />
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th>업태</th>
            <td>
              <div class="row">
                <div class="col-sm-5">
                  <input type="text" class="form-control" placeholder="" />
                </div>
              </div>
            </td>
            <th>종목</th>
            <td>
              <div class="row">
                <div class="col-sm-5">
                  <input type="text" class="form-control" placeholder="" />
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">대표 휴대폰</th>
            <td>
              <div class="row">
                <div class="col col-sm-4">
                  <select class="form-control">
                    <option>선택</option>
                    <option>010</option>
                    <option>016</option>
                    <option>017</option>
                    <option>011</option>
                    <option>019</option>
                  </select>
                </div>
                <div class="col col-sm-4">
                  <input type="text" class="form-control" />
                </div>
                <div class="col col-sm-4">
                  <input type="text" class="form-control" />
                </div>
              </div>
            </td>
            <th scope="row">대표 전화</th>
            <td>
              <div class="row">
                <div class="col col-sm-4">
                  <select class="form-control">
                    <option>선택</option>
                    <option>02</option>
                    <option>031</option>
                    <option>032</option>
                    <option>042</option>
                    <option>051</option>
                  </select>
                </div>
                <div class="col col-sm-4">
                  <input type="text" class="form-control" />
                </div>
                <div class="col col-sm-4">
                  <input type="text" class="form-control" />
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">대표 이메일</th>
            <td colspan="3">
              <div class="row">
                <div class="col-sm-9 d-flex justify-content-between">
                  <div class="input-group">
                    <input type="text" class="form-control" />
                    <span class="input-group-addon">@</span>
                    <input type="text" class="form-control" />
                    <select class="form-control">
                      <option vlaue="naver.com">네이버</option>
                      <option>02</option>
                      <option>031</option>
                      <option>032</option>
                      <option>042</option>
                      <option>051</option>
                    </select>
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th>주소</th>
            <td colspan="3">
              <div class="row">
                <div class="col col-sm-2">
                  <input type="text" class="form-control" placeholder="" />
                </div>
                <div class="col col-sm-2">
                  <button
                    class="btn btn-sm btn-secondary input-btn-util"
                    @click="
                      () => {
                        openModalPopup('DaumPostPopup');
                      }
                    "
                  >
                    주소검색
                  </button>
                </div>
              </div>
              <div class="row  d-flex justify-content-start margin-top-5">
                <div class="col col-sm-4">
                  <input type="text" class="form-control" />
                </div>
                <div class="col col-sm-6">
                  <input type="text" class="form-control" />
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">거래시작일</th>
            <td>
              <div class="input-group">
                <datepicker
                  :format="getFormatDate"
                  :language="ko"
                  placeholder="날짜선택"
                  input-class="form-control"
                  class="input-color"
                ></datepicker>
                <span class="input-group-addon"
                  ><i class="la la-calendar"></i
                ></span>
              </div>
            </td>
            <th scope="row">거래종료일</th>
            <td>
              <div class="row d-flex justify-content-between">
                <div class="col-sm-9">
                  <div class="input-group">
                    <datepicker
                      :format="getFormatDate"
                      :language="ko"
                      placeholder="날짜선택"
                      input-class="form-control"
                      class="input-color"
                    ></datepicker>
                    <span class="input-group-addon"
                      ><i class="la la-calendar"></i
                    ></span>
                  </div>
                </div>
                <div class="col-sm-3 d-flex justify-content-end">
                  <div class="styled-checkbox">
                    <input type="checkbox" id="resign-1" />
                    <label for="resign-1">퇴사</label>
                  </div>
                </div>
              </div>
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
    <daum-post-popup
      v-if="modalOpenFlag && modalPopupId === 'DaumPostPopup'"
      title="주소검색"
      @close="closeModalPopup"
      @get-post-info="closeModalPopup"
    ></daum-post-popup>
  </div>
</template>

<script>
import datepicker from "vuejs-datepicker";
import { ko } from "vuejs-datepicker/dist/locale";
import DaumPostPopup from "../../../components/DaumPostPopup.vue";

export default {
  components: { datepicker, DaumPostPopup },
  data() {
    return {
      orderDelivery: {},
      ko: ko,
      modalOpenFlag: false, // 모달창 openFlag
      modalPopupId: "" // 오픈할 모달창 id
    };
  },
  methods: {
    getFormatDate(date) {
      return this.$moment(date).format("YYYY-MM-DD");
    },
    // 모달팝업 open
    openModalPopup(id) {
      if (id === "DaumPostPopup") {
        // 주소검색
        this.modalPopupId = "DaumPostPopup";
      }
      this.modalOpenFlag = true;
    },
    // 모달창 close
    closeModalPopup(data) {
      if (this.modalPopupId === "DaumPostPopup" && data !== undefined) {
        this.orderDelivery.deliveryPostalNo = data.zonecode.trim();
        this.orderDelivery.deliveryAddr1 = data.address.trim();
        this.orderDelivery.deliveryAddr2 = "";
      }
      this.modalPopupId = "";
      this.modalOpenFlag = false;
    }
  }
};
</script>

<style></style>
