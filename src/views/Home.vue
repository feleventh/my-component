<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <Button :handler="clickHandler" :ripple="true" type="primary">hello</Button>
    <Input :fontSize="18" label="姓名" placeholder="请输入姓名" v-model="inputValue" />
    <p>输入的值为：{{inputValue}}</p>
    <Count @add-to-count="handleCount"></Count>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Button from '@/components/Button.ts'; 
import Input from '@/components/input/Input.vue'; 
import Count from '@/components/Count.vue'; 
@Component({
  components: {
    HelloWorld, Button, Input, Count
  },
})
export default class Home extends Vue {
  clickHandler(): void{
    // window.alert('clicked')
    console.info('xx');
  }
  private inputValue: string = '';

  handleCount(data: any) {
    console.log(data);
  }
}
</script>
