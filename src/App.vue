<template>
  <div id="app">
    <div class="header">
      <span>support the developer, put a star to</span>
      <a href="https://github.com/antonreshetov/vue-eva-icons" target="_blank">
        <app-button>
          <eva-icon name="github"></eva-icon>GitHub
        </app-button>
      </a>
      <span>repo :)</span>
    </div>
    <h1>Vue Eva Icons</h1>
    <p>
      Simply beautiful open source
      Eva icons as Vue components.
    </p>
    <p>
      Documentation
      <a href="https://github.com/antonreshetov/vue-eva-icons#vue-eva-icons">here</a>.
    </p>
    <div class="demo">
      <div
        class="tag"
      >&lt;eva-icon name=&quot;github&quot; animation=&quot;pulse&quot; fill=&quot;limegreen&quot;&gt;&lt;/eva-icon&gt;</div>
      <eva-icon name="github" animation="pulse" fill="limegreen"></eva-icon>
    </div>
    <div class="search-input">
      <input class="search-input__inner" type="text" v-model="search" placeholder="Type to search">
      <eva-icon name="search"></eva-icon>
    </div>
    <div class="icons-toolbar">
      <div class="icons-toolbar__col">
        <app-button-group v-model="fill">
          <app-button name="fill">
            <eva-icon name="star"></eva-icon>Fill
          </app-button>
          <app-button name="outline">
            <eva-icon name="star-outline"></eva-icon>Outline
          </app-button>
        </app-button-group>
      </div>
      <div class="icons-toolbar__col icons-toolbar__col--right">
        <span class="label">Animation:</span>
        <app-button-group v-model="animation">
          <app-button name="zoom">
            <eva-icon name="maximize-outline"></eva-icon>Zoom
          </app-button>
          <app-button name="pulse">
            <eva-icon name="activity"></eva-icon>Pulse
          </app-button>
          <app-button name="shake">
            <eva-icon name="radio"></eva-icon>Shake
          </app-button>
          <app-button name="flip">
            <eva-icon name="flip-2"></eva-icon>Flip
          </app-button>
        </app-button-group>
      </div>
    </div>
    <div class="desc right">Click by icon to copy html tag of component</div>
    <div class="icons">
      <template v-if="fill === 'fill'">
        <div class="icons__item" v-for="i in filled" :key="i.name" @click="onCopy(i.name)">
          <div class="tooltip">{{ i.name }}</div>
          <eva-icon :name="i.name" :animation="animation" fill="#409eff"></eva-icon>
        </div>
      </template>
      <template v-if="fill === 'outline'">
        <div class="icons__item" v-for="i in outline" :key="i.name" @click="onCopy(i.name)">
          <div class="tooltip">{{ i.name }}</div>
          <eva-icon :name="i.name" :animation="animation" fill="#409eff"></eva-icon>
        </div>
      </template>
    </div>
    <div class="no-result" v-if="isNoResult">Sorry, no result</div>
    <transition name="fade">
      <div class="overlay" v-if="alert">
        <h3>Tag copied</h3>
      </div>
    </transition>
    <textarea v-html="html" ref="html" style="opacity: 0"></textarea>
    <div class="vfc-project">
      <div class="vfc-project__inner">
        <div class="desc">Other cool project</div>
        <img src="./assets/vfc-logo.svg" alt="">
        <h4>Vue Form Components</h4>
        <p>Clean & minimal vue form elements with validation</p>
        <a
          href="https://antonreshetov.github.io/vue-form-components/#/components/install"
          target="_blank"
        >
          <div class="cta">View project</div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>

import * as eva from 'eva-icons/eva'
import AppButton from './components/ui/Button'
import AppButtonGroup from './components/ui/ButtonGroup'

export default {
  name: 'app',

  components: {
    AppButton,
    AppButtonGroup
  },

  data () {
    return {
      eva: eva.icons,
      search: '',
      fill: 'fill',
      animation: 'zoom',
      html: '<div></div>',
      alert: false
    }
  },

  computed: {
    icons () {
      return Object.keys(this.eva).map(key => this.eva[key])
    },
    searchedIcons () {
      const re = new RegExp(this.search.toLowerCase())
      return this.icons.filter(item => re.test(item.name))
    },
    filled () {
      return this.searchedIcons.filter(item => !/outline/.test(item.name))
    },
    outline () {
      return this.searchedIcons.filter(item => /outline/.test(item.name))
    },
    isNoResult () {
      return this.filled.length === 0 && this.outline.length === 0
    }
  },

  methods: {
    onCopy (name) {
      this.html = `<eva-icon name="${name}"></eva-icon>`
      this.showAlert()
      setTimeout(() => {
        this.$refs.html.select()
        document.execCommand('copy')
      }, 10)
    },
    showAlert () {
      this.alert = true
      setTimeout(() => {
        this.alert = false
      }, 500)
    }
  }

}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto:700,400');

$color-main: #409eff;
$color-border: lighten($color-main, 32%);
$color-grey: #ddd;
$color-grey-2: #aaa;
$font-family: 'Roboto', sans-serif;

#app {
  max-width: 1000px;
  font-family: $font-family;
  margin: 0 auto;
  padding-bottom: 80px;
  * {
    box-sizing: border-box;
  }
}
.header {
  text-align: right;
  padding: 30px 0;
  a {
    color: inherit;
  }
  span {
    color: $color-grey-2;
    font-size: 12px;
  }
  .btn {
    position: relative;
    top: 7px;
    margin: 0 5px;
  }
}
.demo {
  svg {
    margin-left: 10px;
    position: relative;
    top: 8px;
  }
}
.tag {
  font-family: 'Courier New', Courier, monospace;
  display: inline-block;
  padding: 0px 10px;
  background-color: #eee;
  line-height: 30px;
  border-radius: 3px;
}
.search-input {
  position: relative;
  &__inner {
    -webkit-appearance: none;
    border-radius: 3px;
    outline: none;
    border: 1px solid $color-border;
    line-height: 50px;
    padding: 0 40px;
    height: 50px;
    background-color: transparent;
    font-size: 14px;
    width: 100%;
    transition: border-color 0.3s;
    color: $color-main;
    font-size: 16px;
  }
  input::-webkit-input-placeholder {
    color: $color-grey-2;
  }
  margin: 30px 0;
  svg {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    fill: $color-grey-2;
  }
}
.icons {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-column: 1/2;
  grid-gap: 10px;
  justify-content: center;
  &__item {
    display: flex;
    width: 100%;
    height: 91px;
    border: 1px solid $color-border;
    border-radius: 3px;
    align-items: center;
    justify-content: center;
    position: relative;
    transition: all 0.2s;
    cursor: pointer;
    i {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &:hover {
      // transform: scale(1.1, 1.1);
    }
    .tooltip {
      position: absolute;
      top: -35px;
      // bottom: calc(100% + 30px);
      display: none;
      // left: 0;
      // right: 0;
      min-width: 120px;
      background: #222;
      padding: 5px 10px;
      border-radius: 3px;
      font-size: 12px;
      color: #fff;
      word-break: keep-all;
      text-align: center;
      pointer-events: none;
      z-index: 10;
      &::after {
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 6px 6px 0 6px;
        border-color: #222 transparent transparent transparent;
        bottom: -5px;
        left: 50%;
        transform: translateX(-50%);
      }
    }
    &:hover {
      .tooltip {
        display: block;
      }
    }
  }
}
.icons-toolbar {
  line-height: 28px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  .label {
    margin-right: 20px;
    font-size: 14px;
    color: #aaa;
  }
  &__col {
    display: flex;
    align-items: center;
    flex-grow: 1;
    &--right {
      justify-content: flex-end;
    }
  }
}
.btn {
  line-height: 40px;
  font-size: 14px;
  position: relative;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  color: #aaa;
  &--active {
    color: #000;
    svg {
      fill: #000 !important;
    }
  }
  + .btn {
    margin-left: 20px;
  }
  i {
    line-height: 0;
  }
  svg {
    fill: #aaa;
    margin-right: 5px;
  }
}
.desc {
  color: $color-grey-2;
  font-size: 12px;
  margin-bottom: 10px;
}
.right {
  text-align: right;
}
.overlay {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.8);
  h3 {
    font-size: 24px;
  }
}

.vfc-project {
  text-align: center;
  font-size: 14px;
  img {
    margin-top: 15px;
  }
  h4 {
    margin: 0;
    font-size: 18px;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  .cta {
    display: inline-block;
    line-height: 40px;
    border: 1px solid #aaa;
    padding: 0 20px;
    border-radius: 3px;
  }
}

.no-result {
  text-align: center;
  padding: 50px;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s;
  // transform: scale(1.3, 1.3);
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
  transform: scale(1.5, 1.5);
}
</style>
