<template>
  <div v-if="currentAppointment" class="edit-form">
    <h4>Appointment</h4>
    <form>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name"
          v-model="currentAppointment.name"
        />
      </div>
      <div class="form-group">
        <label for="action">Action</label>
        <input type="text" class="form-control" id="action"
          v-model="currentAppointment.action"
        />
      </div>

      <div class="form-group">
        <label for="date">Date</label>
        <input type="date" class="form-control" id="date"
          v-model="currentAppointment.date"
        />
      </div>

      <div class="form-group">
        <label for="time">Time</label>
        <input type="time" class="form-control" id="time"
          v-model="currentAppointment.time"
        />
      </div>
    </form>


    <button class="badge badge-danger mr-2"
      @click="deleteAppointment"
    >
      Delete
    </button>

    <button type="submit" class="badge badge-success"
      @click="updateAppointment"
    >
      Update
    </button>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a Appointment...</p>
  </div>
</template>

<script>
import AppointmentDataService from "../services/AppointmentDataService";

export default {
  name: "appointment",
  data() {
    return {
      currentAppointment: null,
      message: ''
    };
  },
  methods: {
    getAppointment(id) {
      AppointmentDataService.get(id)
        .then(response => {
          this.currentAppointment = response.data.data;
          console.log(response.data.data);
        })
        .catch(e => {
          console.log(e);
        });
    },


    updateAppointment() {
      AppointmentDataService.update(this.currentAppointment.id, this.currentAppointment)
        .then(response => {
          this.message = response.data.message;
        })
        .catch(e => {
          console.log(e);
        });
    },

    deleteAppointment() {
      AppointmentDataService.delete(this.currentAppointment.id)
        .then(response => {
          console.log(response.data.data);
          this.message = response.data.message;
          this.$router.push({ name: "appointment" });
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
    this.getAppointment(this.$route.params.id);
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
