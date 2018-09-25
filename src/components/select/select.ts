import { Component, Prop, Vue, Model, Emit, Watch } from 'vue-property-decorator';
interface option {
  label: string | number;
  value: string | number | boolean;
}
@Component
export default class Select extends Vue {
  @Prop() private label?: string;
  @Prop() private placeholder?: string;
  @Prop({default: 16}) private fontSize?: number;
  @Prop() private options!: option[];

  @Model('input', {type: String}) value!: string|number;

  // @Emit('input')
  // emitInput(value: string) {}
  // @Emit('change')
  // emitChange(value: string) {}
  private isFocus: boolean = false;
  private isShow: boolean = false;
  
  private currentValue: string|number = this.value;

  handleFocus() {
    this.isFocus = true;
    this.isShow = true;
  }
  handleBlur() {
    this.isFocus = false;
  }
  handleSelect(value: string|number) {
    this.currentValue = value
    this.isShow = false;
    this.isFocus = false;
  }
}