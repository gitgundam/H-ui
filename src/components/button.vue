<template>
  <button :class="{[`icon-${iconPosition}`]: true}" class="h-button"
          @click="$emit('click')">
    <h-icon v-if="icon && !isLoading" class="icon" :name="icon"></h-icon>
    <h-icon v-if="isLoading" class="loading icon" name="loading"></h-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
import icon from './icon';

export default {
  props: {
    icon: {
      type: String,
      default: 'setting'
    },
    isLoading: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      type: String,
      default: 'left',
      validator(value) {
        return !(value !== 'left' && value !== 'right');
      }
    },

  },
  components: {
    'h-icon': icon
  }
}
</script>

<style lang="scss">
@import '../assets/style/helper';

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.h-button {
  font-size: $font-size;
  height: $button-height;
  background: $button-bg;
  border: 1px solid $border-color;
  border-radius: $border-radius;
  vertical-align: middle;
  display: inline-flex;
  padding: 0 0.8em;
  cursor: pointer;
  justify-content: center;
  align-items: center;

  &:hover {
    border: 1px solid $button-color-hover;
    transition: all .3s;
  }

  &:active {
    background: $button-color-active;
  }

  &:focus {
    outline: none;
  }

  > .content {
    order: 2;
  }
  > .icon {
    order: 1;
  }
  > .icon-left{
    > .icon{
      margin-right: .3em;
    }
  }

  &.icon-right {
    > .content {
      order: 1;
    }
    > .icon {
      order: 2;
      margin-right: 0;
      margin-left: .3em;
    }
  }

  .loading {
    animation: spin 2s linear infinite;
  }
}
</style>