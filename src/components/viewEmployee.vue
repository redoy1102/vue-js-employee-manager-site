<template id="view-employee">
  <div>
    <ul class="collection with-header">
      <li class="collection-header">
        <h4>{{ name }}</h4>
      </li>
      <li class="collection-item">Employee ID#: {{ employee_id }}</li>
      <li class="collection-item">Department: {{ dept }}</li>
      <li class="collection-item">Position: {{ position }}</li>
    </ul>
    <router-link to="/" class="btn primary">Back</router-link>
    <button @click="deleteEmployee" class="btn red">Delete</button>

    <div class="fixed-action-btn">
      <router-link v-bind:to="{name: 'edit-employee',
                   params: {employee_id: employee_id}}"
                   class="btn-floating btn-large red">
                   <i class="fa fa-pencil"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
import db from './firebaseinit'

export default {
  name: "view-employee",
  data() {
    return {
      employee_id: null,
      name: null,
      dept: null,
      position: null,
    }
  },
  beforeRouteEnter(to, from, next) {
    db.collection('employees').where('employee_id', '==', to.params.employee_id).get()
      .then(querySnapShot => {
        querySnapShot.forEach(doc => {
          const {employee_id, name, dept, position} = doc.data()
          next(vm => {
            vm.employee_id = employee_id
            vm.name = name
            vm.position = position
            vm.dept = dept
          })
        })
      })
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData() {
      db.collection('employees').where('employee_id', '==',
        this.$route.params.employee_id).get()
        .then(querySnapShot => {
          const {employee_id, name, dept, position} = doc.data()
          querySnapShot.forEach(doc => {
            this.employee_id = employee_id
            this.name = name
            this.dept = dept
            this.position = position
          })
        })
    },
    deleteEmployee() {
      if (confirm('Are you sure?')) {
        db.collection('employees').where('employee_id', '==',
          this.$route.params.employee_id).get()
          .then(querySnapShot => {
            querySnapShot.forEach(doc => {
              doc.ref.delete()
              this.$router.push('/')
            })
          })
      }
    }
  }
}
</script>

<style scoped>

</style>
