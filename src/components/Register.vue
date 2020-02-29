<template>
    <div class="root">
        <div class="name">{{name}}</div>
        <div class="value">{{value}}</div>
    </div>
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator'

  @Component
  export default class Register extends Vue {
    @Prop()
    private name!: string

    @Prop()
    private value!: string
  }
</script>

<style lang="scss" scoped>
    $paddingSize: 7px;
    $borderRadius: 4px;
    $borderColor: #404040;
    $nameBgColor: #C0C0C0;
    $textColor: #202020;

    .root {
        color: $textColor;
        margin: 2px;
        font-family: Monospaced, monospace;
        font-size: 12pt;
        display: flex;
        flex-direction: row;
        border-radius: $borderRadius;
        border: 1px solid $borderColor;
        overflow: hidden;

        .name {
            border-right: solid 1px $borderColor;
            padding: $paddingSize;
            background: $nameBgColor;
            font-weight: bolder;
        }

        .value {
            padding: $paddingSize;
            text-align: center;
            flex-grow: 1;
        }
    }
</style>