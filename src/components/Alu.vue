<template>
    <div class="root">
        <div class="operation-type"></div>
        <div class="left-operand">{{displayLeftOperand}}</div>
        <div class="right-operand">{{displayRightOperand}}</div>
        <hr class="result-row">
        <div class="out">{{displayLeftOperand + displayRightOperand}}</div>
    </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator'

  export class AluState {
    public leftInvert: boolean | undefined
    public rightInvert: boolean | undefined
    public opAnd: boolean | undefined
    public plusOne: boolean | undefined
  }

  @Component
  export default class Alu extends Vue {
    @Prop({
      default: Object.create({
        leftInvert: false,
        rightInvert: false,
        opAnd: false,
        plusOne: false
      })
    })
    private state!: AluState
    @Prop({default: 0})
    private leftOperand!: number
    @Prop({default: 0})
    private rightOperand!: number

    private get displayLeftOperand() {
      return this.leftOperand;
    }

    private get displayRightOperand() {
      return this.rightOperand;
    }
  }
</script>

<style lang="scss" scoped>
    $textColor: #202020;
    $borderRadius: 4px;

    .root {
        color: $textColor;
        margin: 4px;
        font-size: 12pt;
        border-radius: $borderRadius;
        overflow: hidden;
        box-shadow: 1px 1px 2px 0 #abbaba;
        background: #ffffff;
        transition: background-color 0.2s ease-out;

        display: grid;
        grid-template-areas: "op" "left" "left-ext" "op" "right" "right-ext" "carry" "res" "res-ext";
        grid-template-columns: repeat(3, auto);
        grid-template-rows: repeat(3, auto);


        .operation-type {
            grid-area: op;
            background: #ffaaaa;
        }

        .left-operand {
            grid-row: 1;
            grid-column: 2;
            background: aquamarine;
        }

        .right-operand {
            grid-row: 2;
            grid-column: 2;
            background: coral;
        }

        .result-row {
            margin: 4px;
            border: solid 0.5px #404040;
        }
    }
</style>