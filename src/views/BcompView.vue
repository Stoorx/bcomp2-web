<template>
    <div>
        BComp view
        <Register name="AC" value="0xDEAD"/>
        <Register name="BR" value="0xBABA"/>
        <Register name="PS" value="0x0101"/>
        <Register name="DR" value="0xDDDD"/>
        <Register name="CR" value="0xC000"/>
        <Register name="IP" value="0x0C00"/>
        <Register name="SP" value="0xABAC"/>
        <Register name="AR" value="0x0122"/>
    </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'
  import Register from '@/components/Register.vue'

  @Component({
    components: {
      Register
    }
  })
  export default class BcompView extends Vue {

  }
</script>

<style scoped>

</style>