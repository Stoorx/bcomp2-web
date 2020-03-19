<template>
    <div>
        BComp view
        <div class="registers-grid">
            <Register :value="0xDEAD" name="AC" state="read"/>
            <Register :value="0xBABA" name="BR"/>
            <Register :value="0x0101" name="PS"/>
            <Register :value="0xDDDD" name="DR" radix="2" state="write"/>
            <Register :value="0xC000" name="CR"/>
            <Register :radix="10" :value="0x0C00" name="IP"/>
            <Register :radix="36" :value="0xABAC" name="SP"/>
            <Register :bits-count="11" :value="0x0122" name="AR"/>
        </div>
        <!--        <Alu/>-->
    </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'
  import Register from '@/components/Register.vue'
  import Alu from '@/components/Alu.vue'

  @Component({
    components: {
      Register,
      Alu
    }
  })
  export default class BcompView extends Vue {

  }
</script>

<style scoped>
    .registers-grid {
        display: flex;
        flex-wrap: wrap;
    }
</style>