<template>
  <div class="deve">
    <h1>c'est les dev</h1>
    <table class="table table-striped">
      <thead>
    <tr>
      <th>lastname</th>
      <th>firstname</th>
      <th>email</th>
      <th>password</th>
      <th>startContract</th>
    </tr>
  </thead>
  <tbody>
      <tr v-for="developer in developers" :key="developer.lastname">
        <td>{{ developer.lastname }}</td>
        <td>{{ developer.firstname }}</td>
        <td>{{ developer.email }}</td>
        <td>{{ developer.password }}</td>
        <td>{{ developer.startContract }}</td>
      </tr>
  </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'Developers',
  props: {
    msg: String
  },
  computed:{
    developers(){
      return this.$store.state.developers;
    }
  },
  mounted() {
    this.$store.dispatch("getDevelopers");
  }
}
</script>