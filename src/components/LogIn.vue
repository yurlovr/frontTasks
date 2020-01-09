<template>
  <div>Вы Вошли как
    {{getUser}}
  </div>

</template>

<script>
import { mapGetters } from 'vuex'


export default {
  name: 'LogIn',
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters('user', [
      'getUser'
    ])
  }
}
</script>