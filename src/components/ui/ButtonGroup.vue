<template>
  <div class="btn-group">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'AppButtonGroup',

  model: {
    prop: 'active',
    event: 'change'
  },

  props: {
    active: {
      type: String,
      default: undefined
    }
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
