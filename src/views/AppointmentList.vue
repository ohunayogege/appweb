<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="tutorial.title"
          name="title"
        />
      </div>

      <div class="form-group">
        <label for="description">Description</label>
        <input
          class="form-control"
          id="description"
          required
          v-model="tutorial.description"
          name="description"
        />
      </div>

      <button @click="saveTutorial" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newTutorial">Add</button>
    </div>
  </div>
</template>


<script>
import AppointmentDataService from "../services/AppointmentDataService";

export default {
  name: "create-appointment",
  data() {
    return {
      appointment: {
        id: null,
        name: "",
        action: "",
        date: "",
        time: ""
      },
      submitted: false
    };
  },
  methods: {
    saveTutorial() {
      var data = {
        name: this.appointment.name,
        action: this.appointment.action,
        date: this.appointment.date,
        time: this.appointment.time
      };

      AppointmentDataService.create(data)
        .then(response => {
          this.appointment.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newTutorial() {
      this.submitted = false;
      this.appointment = {};
    }
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
