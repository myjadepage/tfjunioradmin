<template>
  <div class="filebox">
    <input type="file" :id="id" @change="onFileChange" />
    <input class="upload-name" v-model="fileName" />
    <label :for="id" class="btn btn-outline-primary">{{ title }}</label>
  </div>
</template>

<script>
export default {
  props: {
    id: String,
    title: {
      type: String,
      default: "파일찾기"
    }
  },
  data() {
    return {
      file: "",
      fileName: ""
    };
  },
  methods: {
    onFileChange(e) {
      this.file = e.currentTarget.files[0];
      this.fileName = e.currentTarget.files[0].name;
      this.$emit(this.id, this.file);
    }
  }
};
</script>

<style></style>
