<template>
  <div class="deve">
    <h1>C'est la task</h1>

    <table class="table table-striped">
      <thead>
        <tr>
          <th v-for="status in taskStatus" :key="status.label">
            {{ status.label }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td v-for="task in tasks" :key="task.title">
            {{ task.title }}
          </td>
        </tr>
      </tbody>
    </table>
    <table>
      <thead>
        <tr>
          <th scope="col">Items</th>
          <th scope="col">Expenditure</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Donuts</th>
          <td>3,000</td>
        </tr>
        <tr>
          <th scope="row">Stationery</th>
          <td>18,000</td>
        </tr>
      </tbody>
    </table>
    <table>
      <tr>
        <td v-for="status in taskStatus" :key="status.label">
          <table>
            <tr>
              <th>{{ status.label }}</th>
            </tr>
            <tr v-for="task in tasks" :key="task.title">
              <td v-if="task.status.label==status.label">
                {{ task.title }}
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  name: "Tasks",
  props: {
    msg: String,
  },
  computed: {
    taskStatus() {
      return this.$store.state.taskStatus;
    },
    tasks() {
      return this.$store.state.tasks;
    },
    developers() {
      return this.$store.state.developers;
    },
  },
  mounted() {
    this.$store.dispatch("getTaskStatus");
    this.$store.dispatch("getTasks");
    this.$store.dispatch("getDevelopers");
  },
};
</script>
<style scoped>
thead,
tfoot {
  background-color: #3f87a6;
  color: #fff;
}

tbody {
  background-color: #e4f0f5;
}

caption {
  padding: 10px;
  caption-side: bottom;
}

table {
  border-collapse: collapse;
  border: 2px solid rgb(200, 200, 200);
  letter-spacing: 1px;
  font-family: sans-serif;
  font-size: 0.8rem;
}

td,
th {
  border: 1px solid rgb(190, 190, 190);
  padding: 5px 10px;
}

td {
  text-align: center;
}
</style>