<template>
  <div class="nav">
    <NavBar />
    <div id="botones">
      <v-btn style="margin: 20px"
        ><router-link style="text-decoration: none; color: inherit" to="/Login">
          Configuración
        </router-link>
      </v-btn>
      <v-btn style="margin: 20px"
        ><router-link style="text-decoration: none; color: inherit" to="/Login">
          Login
        </router-link></v-btn
      >
    </div>
  </div>
  <div class="maincontainer">
    <v-card
      ><v-card-title class="white--text mt-8">Tareas de Hoy</v-card-title>
      <v-card-actions class="justify-end">
        <v-btn>Ver Tareas</v-btn>
      </v-card-actions></v-card
    >
    <v-card
      ><v-card-title class="white--text mt-8"
        >Tareas Completadas</v-card-title
      ></v-card
    >
    <v-card
      ><v-card-title class="white--text mt-8">Cronómetro</v-card-title></v-card
    >
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";

export default {
  name: "Home",
  components: { NavBar },
};
</script>

<style>
.maincontainer {
  width: 100%;
  display: flex;
  margin-top: 30px;
}
.nav {
  background-color: #dc2626;
  height: 70px;
  display: inline-flex;
  color: white;
  width: 100%;
}
v-card {
  margin: auto;
  background-color: #dc2626;
  width: 20%;
  min-height: 70vh;
  display: flex;
  border-radius: 4px !important;
}
v-card-title {
  margin: auto;
  color: white;
}
img {
  height: inherit;
}
h1 {
  margin-left: 30px;
  margin-top: 10px;
}
v-btn {
  background-color: #ef5350;
  border-radius: 4px !important;
  color:white;
}
#botones {
  position: absolute;
  right: 30px;
  top: 20px;
}
</style>
