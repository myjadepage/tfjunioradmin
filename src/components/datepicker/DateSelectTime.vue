<template>
  <div class="input-group">
    <datepicker
      :value="getStartdate"
      @selected="selectStartDate($event)"
      :format="dateFormat"
      :language="ko"
      placeholder="날짜선택"
      input-class="form-control"
    ></datepicker>
    <span class="input-group-addon"><i class="la la-calendar"></i></span>

    <!--시간선택-->
    <select class="form-control col-sm-2" v-model="getStartHour">
      <option value="">선택</option>
      <option
        :value="data.value"
        v-for="(data, index) in timeHour"
        :key="index"
      >
        {{ data.value }}</option
      >
    </select>
    <span class="input-group-addon">시</span>

    <!---분선택-->
    <select class="form-control col-sm-2" v-model="getStartMin">
      <option value="">선택</option>
      <option :value="data.value" v-for="(data, index) in timeMin" :key="index">
        {{ data.value }}</option
      >
    </select>
    <span class="input-group-addon">분</span>
  </div>
</template>

<script>
import datepicker from "vuejs-datepicker";
import { ko } from "vuejs-datepicker/dist/locale";
export default {
  name: "dateSelect",
  components: {
    datepicker
  },
  props: {
    defStartDate: {
      type: String,
      default: ""
    },
    defStartHour: {
      type: String,
      default: ""
    },
    defStartMin: {
      type: String,
      default: ""
    }
  },
  data: function() {
    return {
      startdate: new Date(),
      ko: ko,
      timeHour: [
        { value: "01" },
        { value: "02" },
        { value: "03" },
        { value: "04" },
        { value: "05" },
        { value: "06" },
        { value: "07" },
        { value: "08" },
        { value: "09" },
        { value: "10" },
        { value: "11" },
        { value: "12" }
      ],
      timeMin: [
        { value: "00" },
        { value: "05" },
        { value: "10" },
        { value: "15" },
        { value: "20" },
        { value: "25" },
        { value: "30" },
        { value: "35" },
        { value: "40" },
        { value: "45" },
        { value: "50" },
        { value: "55" }
      ],
      selectHour: "",
      selectMin: ""
    };
  },
  computed: {
    getStartdate: function() {
      return this.defStartDate === "" ? this.startdate : this.defStartDate;
    },
    getStartHour: function() {
      return this.defStartHour === "" ? "" : this.defStartHour;
    },
    getStartMin: function() {
      return this.defStartMin === "" ? "" : this.defStartMin;
    }
  },
  methods: {
    dateFormat(date) {
      return this.$moment(date).format("YYYY-MM-DD");
    },
    selectStartDate(e) {
      let tempDate = this.dateFormat(e);
      this.$emit("state-start-date", tempDate);
    }
  }
};
</script>

<style scoped>
.vdp-datepicker {
  width: 150px;
}
</style>
