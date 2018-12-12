<template>
  <i class="eva-hover">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="width"
      :height="height"
      viewBox="0 0 24 24"
      :fill="fill"
      v-html="icon"
      class="eva eva-animation"
      :class="`eva-icon-hover-${animation}`"
      @click="$emit('click')"
    ></svg>
  </i>
</template>

<script>
import * as eva from 'eva-icons/eva'

export default {
  name: 'EvaIcon',

  props: {
    name: String,
    width: {
      type: [String, Number],
      default: 24
    },
    height: {
      type: [String, Number],
      default: 24
    },
    animation: String,
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
