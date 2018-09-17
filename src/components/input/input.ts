import { Component, Prop, Vue, Model, Emit } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private label?: string;
  @Prop() private placeholder?: string;
  @Prop({default: 16}) private fontSize?: number;

  @Model('input', {type: String}) value!: string;

  @Emit('input')
  emitInput(value: string) {}
  @Emit('change')
  emitChange(value: string) {}

  private isFocus: boolean = false;
  
  private currentValue: string = this.value;

  handleInput() {
    this.emitInput(this.currentValue)
    this.emitChange(this.currentValue)
  }
}