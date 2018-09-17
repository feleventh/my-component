<template>
  <div class="zc-input" :style="{
    fontSize: fontSize + 'px', 
    lineHeight: fontSize*2 + 'px'}">
    <span v-if="label!==''" :style="{
      paddingRight: fontSize + 'px'
    }">{{label}}</span>
    <div class="zc-input-wrap" :class="{'zc-focus': isFocus}" :style="{}">
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
  </div>
</template>

<script lang="ts" src="./input.ts">
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.zc-input {
  display: block;
  .zc-input-wrap {
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 0 6px;
    input {
      border: transparent;
      outline: 0;
    }
    &.zc-focus {
      border-color: lighten(blue, 20%);
      transform: all .4s;
    }
  }
}
</style>
