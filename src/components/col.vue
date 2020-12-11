<template>
  <div class="col"
       :class="colClass"
       :style="colStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'H-col',
  props: {
    span: {
      type: [Number, String]
    },
    offset: {
      type: [Number, String]
    },
    phone:{
      type: Object,
      validator(value) {
        let valid = true
        let keys = Object.keys(value)
        keys.forEach(key => {
          if(!['span','offset'].includes(key)){
            valid = false
          }
        })
        return valid
      }
    }
  },
  data() {
    return {
      gutter: 0
    };
  },
  computed: {
    colClass() {
      let phoneClass = []
      if(this.phone){
        phoneClass=[`col-phone-${this.phone.span}`]
      }
      return [
        this.span && `col-${this.span}`,
        this.offset && `offset-${this.offset}`,
        ...phoneClass
      ];
    },
    colStyle() {
      return {
        paddingLeft: this.gutter / 2 + 'px',
        paddingRight: this.gutter / 2 + 'px'
      };
    }

  }
};
</script>

<style scoped lang="scss">
.col {
  border: 1px solid red;
  height: 100px;
  width: 50%;
  $class-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n/24)*100%;
    }
  }
  $class-prefix: offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n/24)*100%;
    }
  }
  @media(max-width: 576px){
    $class-prefix: col-phone-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n/24)*100%;
      }
    }
    $class-prefix: offset-phone-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n/24)*100%;
      }
    }
  }
  @media(min-width: 576px)and (max-width: 768px){
    $class-prefix: col-ipad-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n/24)*100%;
      }
    }
    $class-prefix: offset-ipad-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n/24)*100%;
      }
    }
  }
  @media(min-width: 769px)and (max-width: 992px){
    $class-prefix: col-narrow-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n/24)*100%;
      }
    }
    $class-prefix: offset-narrow-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n/24)*100%;
      }
    }
  }
  @media(min-width: 993px)and (max-width: 1200px){
    $class-prefix: col-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n/24)*100%;
      }
    }
    $class-prefix: offset-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n/24)*100%;
      }
    }
  }
  @media(min-width: 1201px){
    $class-prefix: col-wide-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n/24)*100%;
      }
    }
    $class-prefix: offset-wide-pc-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n/24)*100%;
      }
    }
  }
}

</style>