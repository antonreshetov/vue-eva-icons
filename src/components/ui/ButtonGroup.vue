<template>
  <div class="btn-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'AppButtonGroup',

  props: {
    active: String
  },

  model: {
    prop: 'active',
    event: 'change'
  },

  data () {
    return {

    }
  }
}
</script>

<style lang="scss">
.btn-group {
  display: inline-block;
}
</style>
