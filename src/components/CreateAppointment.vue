<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          required
          v-model="appointment.name"
          name="name"
        />
      </div>

      <div class="form-group">
        <label for="action">Action</label>
        <input
          class="form-control"
          id="action"
          required
          v-model="appointment.action"
          name="action"
        />
      </div>

      <div class="form-group">
        <label for="date">Date</label>
        <input
          class="form-control"
          type="date"
          id="date"
          required
          v-model="appointment.date"
          name="date"
        />
      </div>

      <div class="form-group">
        <label for="time">Time</label>
        <input
          class="form-control"
          type="time"
          id="time"
          required
          v-model="appointment.time"
          name="time"
        />
      </div>

      <button @click="saveAppointment" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newAppointment">Add another Appointment</button>
    </div>
  </div>
</template>


<script>
import AppointmentDataService from "../services/AppointmentDataService";

export default {
  name: "add-appointment",
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
    saveAppointment() {
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
    
    newAppointment() {
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
