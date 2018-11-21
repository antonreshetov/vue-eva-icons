<template>
  <div class="btn" :class="{'btn--active': isActive}" @click="onClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'AppButton',

  props: {
    name: String
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
