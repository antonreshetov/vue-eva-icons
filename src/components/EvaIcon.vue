<template>
  <i class="eva-hover">
    <!-- eslint-disable vue/no-v-html -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="width"
      :height="height"
      viewBox="0 0 24 24"
      :fill="fill"
      class="eva eva-animation"
      :class="`eva-icon-hover-${animation}`"
      @click="$emit('click')"
      v-html="icon"
    />
  </i>
</template>

<script>
import * as eva from 'eva-icons/eva'

export default {
  name: 'EvaIcon',

  props: {
    name: {
      type: String,
      default: undefined
    },
    width: {
      type: [String, Number],
      default: 24
    },
    height: {
      type: [String, Number],
      default: 24
    },
    animation: {
      type: String,
      default: undefined
    },
    fill: {
      type: String,
      default: 'inherit'
    }
  },

  computed: {
    icon () {
      if (eva.icons[this.name]) {
        return eva.icons[this.name].contents
      } else {
        console.error('Name of icon is not correct')
        return undefined
      }
    }
  }
}
</script>
