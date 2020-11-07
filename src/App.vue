<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">Appointment Web</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/appointments" class="nav-link">Appointments</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/add-appointment" class="nav-link">Add Appointment</router-link>
        </li>
      </div>
    </nav>

    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>
