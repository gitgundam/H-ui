<template>
  <div class="wrapper"  :class="{error}">
    <label>
      <input type="text" :value="value" :disabled="disabled" :readonly="readonly">
    </label>
    <template v-if="error">
      <h-icon name="error" class="icon-error"></h-icon>
      <span class="error-message">{{error}}</span>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Input',
  props:{
    value:{
      type: String
    },
    disabled:{
      type: Boolean,
      default: false
    },
    readonly:{
      type: Boolean,
      default: false
    },
    error:{
      type: String,
    }
}

};
</script>

<style scoped lang="scss">
$height: 32px;
$border-color: #999;
$border-color-hover: #666;
$border-radius: 4px;
$font-size: 12px;
$box-shadow-color: rgba(0,0,0,0.5);
$red: #f1453d;
.wrapper {
  display: inline-flex;
  align-items: center;
  font-size: $font-size;
  > :not(:last-child){
    margin-right: .5em;
  }
  input {
    height: 32px;
    border: 1px solid #999;
    border-radius: $border-radius;
    padding: 0 8px;
    font-size: inherit;
    &:hover {
      border-color: $border-color-hover;
    }
    &:focus{
      box-shadow: inset 0 1px 3px $box-shadow-color;
      outline: none;

    }
    &[disabled]{
      border-color: #aaa;
      color: #aaa;
      cursor: not-allowed;
    }
  }
  &.error{
    input {
      border-color: $red;
    }
  }
  & .icon-error{
    width: 1em;
    height: 1em;
  }
  & .error-message{
    color: $red;
  }
}

</style>