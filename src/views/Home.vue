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
    <div class="card">
      <div class="content">
        <h2>Tareas de Hoy</h2>
        <button class="button"><router-link style="text-decoration: none; color: inherit" to="/tareas">
          Tareas
        </router-link></button>
      </div>
    </div>
    <div class="card">
      <div class="content">
        <h2>Tareas Completadas</h2>
        <button class="button"><router-link style="text-decoration: none; color: inherit" to="/Login">
          Reporte
        </router-link></button>
      </div>
    </div>
    <div class="card">
      <div class="content">
        <h2>Cronómetro</h2>
        <button class="button">Empezar</button>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";

export default {
  name: "Home",
  components: { NavBar },
};
</script>

<style scoped>


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
.card {
  border-radius: 1rem;
  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  margin: 1.5rem;
  overflow: hidden;
  width: 30%;
  background-color: #dc2626;
  border: 0.1rem solid rgba(255, 255, 255, 0.18);
  color: white;
}
.card h2 {
  letter-spacing: 0.1rem;
  margin: 1rem 0;
}
.content {
  padding: 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
}
.button {
  background-color: #ef5350;
  font-family: Rhodium Libre;
  border-radius: 4px;
  color: white;
  margin-left: 70%;
  border: 0.1rem solid rgba(255, 255, 255, 0.18);
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
  color: white;
}
#botones {
  position: absolute;
  right: 30px;
  top: 20px;
}
</style>
