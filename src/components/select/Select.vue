<template>
  <div class="zc-select" :class="{'zc-focus': isFocus}" :style="{
    fontSize: fontSize + 'px', 
    lineHeight: fontSize*2 + 'px'}">
    <span v-if="label!==''" :style="{
      paddingRight: fontSize + 'px'
    }">{{label}}</span>
    <div class="zc-input-wrap" :style="{}" ref="input-wrap">
      <input type="text" :placeholder="placeholder" :style="{
        fontSize: fontSize + 'px', 
        lineHeight: fontSize*2 + 'px'
      }" 
      v-model="currentValue"
      @blur="() => {isFocus = false}"
      @focus="() => {isFocus = true}"
      @input="handleInput"
      >
    </div>
    <div class="zc-options" >
      <div class="zc-option" v-for="item in options" :key="item.value">{{item.label}}</div>
    </div>
  </div>
</template>

<script lang="ts" src="./select.ts">
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.zc-select {
  display: block;
  position: relative;
  .zc-input-wrap {
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 0 6px;
    input {
      border: transparent;
      outline: 0;
    }
  }
  .zc-options {
    display: none;
    position: absolute;
    .zc-option {
      border-bottom: 1px solid #ccc;
      &:last-child {
        border-bottom: none;
      }
      &:hover {
        color: lighten(blue, 20%);
      }
    }
    
  }
  &.zc-focus {
    .zc-input-wrap {
      border-color: lighten(blue, 20%);
      transform: all .4s;
    }
    .zc-options {
      display: block;
      padding: 10px;
      border: 1px solid lighten(blue, 20%);
    }
  }
}
</style>
