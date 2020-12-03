<template>
  <button :class="{[`icon-${iconPosition}`]: true}" @click="$emit('click')">
    <h-icon v-if="icon && !isLoading" class="icon" :name="icon"></h-icon>
    <h-icon v-if="isLoading" class="loading icon" name="loading"></h-icon>
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    icon: {},
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

    }

  }
};
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
button {
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
  }

  &:active {
    background: $button-color-active;
  }

  &:focus {
    outline: none;
  }

  > .icon {
    margin-right: .3em;
  }

  &.icon-right {
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