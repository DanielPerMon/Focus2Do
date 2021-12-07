<template>
  <div class="nav">
    <NavBar />
  </div>
  <section>
    <form>
      <span style="color: white">Login</span>
      <div class="row">
        <input type="text" required /><label>Usuario</label>
      </div>
      <div class="row">
        <input type="text" required /><label>Contraseña</label>
      </div>
      <div class="row">
        <v-btn
          ><router-link style="text-decoration: none; color: white" to="/Login">
            Iniciar Sesión
          </router-link>
        </v-btn>
      </div>
    </form>
  </section>
  <div class="link">
    <span>¿No tienes cuenta? <router-link style="color: inherit" to="/registro">
      Crear cuenta
    </router-link></span>
    
  </div>
</template>
<script>
import NavBar from "../components/NavBar.vue";

export default {
  components: { NavBar },
};
</script>

<style >
.link{
  margin:auto;
  width: 20%;
}
section {
  margin: auto;
  background-color: #dc2626;
  width: 20%;
  min-height: 70vh;
  display: flex;
  border-radius: 4px !important;
}
span,
v-btn {
  margin: auto;
}
form {
  margin: auto;
}
.row {
  width: 100%;
  max-width: 500px;
  padding: 20px 0;
  position: relative;
}

.row input {
  width: 100%;
  padding: 10px 0;
  display: block;
  background-color: transparent;
  border: none;
  outline: none;
  border-bottom: 1px solid white;
  color: white;
  font-size: 13px;
  font-family: Rhodium Libre;
}

.row label {
  position: absolute;
  top: 0;
  color: white;
  font-size: 13px;
  font-weight: 100;
  pointer-events: none;
  transform: translateY(30px);
  transition: all 400ms ease-in-out;
}
.row input:valid + label,
.row input:focus + label {
  font-size: 13px;
  transform: translateY(0);
}
</style>
