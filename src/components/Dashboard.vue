<template>
  <div id="dashboard">
    <ul class="collection with-header">
      <li class="collection-header">
        <h4>Employees</h4>
      </li>
      <li v-for="employee in employees"
          v-bind:key="employee.id"
          class="collection-item">
        <div class="chip">{{ employee.dept }}</div>
        {{ employee.name }}

        <router-link
          class="secondary-content"
          v-bind:to="{name: 'view-employee', params: {employee_id: employee.employee_id}}">
          <i class="fa fa-eye"></i>
        </router-link>
      </li>
    </ul>


    <div class="fixed-action-btn">
      <router-link to="/new" class="btn-floating btn-large red">
        <i class="fa fa-plus"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
import db from './firebaseinit'

export default {
  name: "dashboard",
  data() {
    return {
      employees: []
    }
  },
  created() {
    db.collection('employees').orderBy('dept').get().then
    (querySnapShot => {
      querySnapShot.forEach(doc => {
        // console.log(doc.data());
        const {employee_id, name, dept, position} = doc.data();
        const data = {
          //this id is firebase id
          'id': doc.id,
          'employee_id': employee_id,
          'name': name,
          'dept': dept,
          'position': position,
        }
        this.employees.push(data)
      })
    })
  }
}
</script>

<style scoped>

</style>
