import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { VNode } from 'vue';
import './Button.scss';

@Component
export default class Button extends Vue {
  @Prop({default: 16}) 
  private fontSize!: number;
  @Prop() private handler!: (e: object) => void;
  @Prop({ default: false })
  private ripple!: boolean;
  @Prop() type!: string;
  render (createElement: any): VNode {
    return createElement('div', {
      'class': {
        'zc-button': true,
        'zc-ripple': this.ripple || undefined,
        'zc-primary': this.type === 'primary'
      },
      style: {
        fontSize: this.fontSize + 'px',
        display: 'inline-block',
        border: '1px solid #ccc',
        paddingLeft: `${this.fontSize*2}px`,
        paddingRight: `${this.fontSize*2}px`,
        lineHeight: `${this.fontSize*2}px`
      },
      on: {
        click: this.handler
      }
    }, this.$slots.default)
  }
}
