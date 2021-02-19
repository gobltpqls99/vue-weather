<template lang="pug">
  .search-wrapper
    b-form-select(v-model="selected" :options="city" size="lg")
</template>
<script>
export default {
  name: 'Search',
  data() {
    return {
      selected: null,
      city: [
        { value: '191123', text: '서울' },
        { value: '325462', text: '인천' },
      ]
    }
  }
}
</script>
<style lang="scss">
  @import '@/assets/scss/_mixins.scss';
  
</style>