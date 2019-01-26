<template>
  <div
    class="btn"
    :class="{'btn--active': isActive}"
    @click="onClick"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'AppButton',

  props: {
    name: {
      type: String,
      default: undefined
    }
  },

  computed: {
    isActive () {
      return this.$parent.active === this.name
    }
  },

  methods: {
    onClick () {
      this.$parent.$emit('change', this.name)
    }
  }
}
</script>

<style lang="scss">
</style>
