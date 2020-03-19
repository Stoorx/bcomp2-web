<template>
    <div :class="['root', displayRootClass]">
        <div class="name">{{name}}</div>
        <div class="value">{{displayValue}}</div>
        <div class="radix">{{displayRadix}}</div>
    </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator'

  @Component
  export default class Register extends Vue {
    @Prop({required: true})
    private name!: string

    @Prop({default: 0})
    private value!: number

    @Prop({default: 16})
    private radix!: number

    @Prop({default: 'default'})
    private state!: 'read' | 'write' | 'default'

    @Prop({default: 16})
    private bitsCount!: number

    private get _radix(): number {
      return Number(this.radix >= 2 && this.radix <= 36 ? this.radix : 16)
    }

    private get _bitsCount() {
      return Number(this.bitsCount >= 1 && this.bitsCount <= 64 ? this.bitsCount : 16)
    }

    private get displayValue(): string {
      const value = this.value.toString(this._radix).toUpperCase()
      switch (this._radix) {
        case 2:
          return value.padStart(this._bitsCount, '0').replace(/(\d)(?=(\d{4})+([^\d]|$))/g, '$1 ')
        case 10:
          return value.replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ')
        case 16:
          return value.padStart(this._bitsCount / 4 | 0, '0')
        default:
          return value
      }
    }

    private get displayRadix(): string {
      switch (this._radix) {
        case 2:
          return 'BIN'
        case 8:
          return 'OCT'
        case 10:
          return 'DEC'
        case 16:
          return 'HEX'
        default:
          return `(${this._radix})`
      }
    }

    private get displayRootClass() {
      switch (this.state) {
        case 'read':
          return {read: true}
        case 'write':
          return {write: true}
        case 'default':
        default:
          return {}
      }
    }
  }
</script>

<style lang="scss" scoped>
    $paddingSize: 8px;
    $borderRadius: 4px;
    $borderColor: #abbaba;
    $nameBgColor: #C0C0C0;
    $textColor: #202020;

    .root.read {
        background: #aaffaa;
        transition: background-color 0.2s ease-in;
    }

    .root.write {
        background: #ffaaaa;
        transition: background-color 0.2s ease-in;
    }

    .root {
        color: $textColor;
        margin: 4px;
        flex-grow: 1;
        flex-basis: 300px;
        font-size: 12pt;
        display: flex;
        flex-direction: row;
        align-items: baseline;
        border-radius: $borderRadius;
        overflow: hidden;
        box-shadow: 1px 1px 2px 0 #abbaba;
        background: #ffffff;
        transition: background-color 0.2s ease-out;

        .name {
            padding: $paddingSize;
            font-weight: bolder;
            min-width: 2.5rem;
        }

        .value {
            font-family: Monospaced, monospace;
            padding: $paddingSize;
            text-align: center;
            flex-grow: 1;
        }

        .radix {
            padding: $paddingSize;
            color: #3d4343;
            font-size: 9pt;
            min-width: 2.5rem;
        }
    }
</style>