<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search by Name"
          v-model="name"/>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button"
            @click="searchName"
          >
            Search
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>Appointments List</h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(appointment, index) in appointments"
          :key="index"
          @click="setActiveAppointment(appointment, index)"
        >
          {{ appointment.name }}
        </li>
      </ul>

    </div>
    <div class="col-md-6">
      <div v-if="currentAppointment">
        <h4>Appointment</h4>
        <div>
          <label><strong>Name:</strong></label> {{ currentAppointment.name }}
        </div>
        <div>
          <label><strong>Description:</strong></label> {{ currentAppointment.action }}
        </div>
        <div>
          <label><strong>Date:</strong></label> {{ currentAppointment.date }}
        </div>
        <div>
          <label><strong>Time:</strong></label> {{ currentAppointment.time }}
        </div>

        <a class="badge badge-warning"
          :href="'/appointments/' + currentAppointment.id"
        >
          Edit
        </a>
      </div>
      <div v-else>
        <br />
        <p>Please click on a Appointment...</p>
      </div>
    </div>
  </div>
</template>

<script>
import AppointmentDataService from "../services/AppointmentDataService";

export default {
  name: "appointments-list",
  data() {
    return {
      appointments: [],
      currentAppointment: null,
      currentIndex: -1,
      name: ""
    };
  },
  methods: {
    retrieveAppointments() {
      AppointmentDataService.getAll()
        .then(response => {
          this.appointments = response.data.data;
          console.log(response.data.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveAppointments();
      this.currentAppointment = null;
      this.currentIndex = -1;
    },

    setActiveAppointment(appointment, index) {
      this.currentAppointment = appointment;
      this.currentIndex = index;
    },
    
    searchName() {
      AppointmentDataService.findByName(this.name)
        .then(response => {
          this.appointments = response.data.data;
          console.log(response.data.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.retrieveAppointments();
  }
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>