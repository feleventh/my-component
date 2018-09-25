<template>
  <div class="zc-select" :class="{'zc-focus': isFocus, 'zc-show': isShow}" :style="{
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
      readonly="true"
      @blur="handleBlur"
      @focus="handleFocus"
      >
      <div class="zc-options" >
        <div class="zc-option" v-for="item in options" :key="item.label" @click="handleSelect(item.label)">{{item.label}}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./select.ts">
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src="./select.scss">
</style>
