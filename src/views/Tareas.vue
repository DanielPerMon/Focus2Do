<template>
  <div class="nav">
    <NavBar />
  </div>
  <div class="maincontainer">
    <div class="card">
      <div class="content">
        <h2>Hoy</h2>
        <div class="tarea">
          <div class="priority"><i class="fa fa-circle" style="color: #85d35b "></i></div>
          <div class="task">
            <div class="item">Lectura</div>
            <div class="item">08/12/2021</div>
          </div>
          <div class="divbtn">
            <button class="iconbtn"><i class="fa fa-trash"></i></button>
          </div>
        </div>
        <button class="button">Agregar Tarea</button>
      </div>
    </div>
    <div class="card">
      <div class="content">
        <h2>Mañana</h2>
        <div class="tarea">
          <div class="priority"><i class="fa fa-circle" style="color: #C70039 "></i></div>
          <div class="task">
            <div class="item">Pagar Gas</div>
            <div class="item">09/12/2021</div>
          </div>
          <div class="divbtn">
            <button class="iconbtn"><i class="fa fa-trash"></i></button>
          </div>
        </div>
        <button class="button">Agregar Tarea</button>
      </div>
    </div>
    <div class="card">
      <div class="content">
        <h2>Proximo</h2>
        <div class="tarea">
          <div class="priority"><i class="fa fa-circle" style="color: #FFC300 "></i></div>
          <div class="task">
            <div class="item">Reservar Boletos</div>
            <div class="item">11/12/2021</div>
          </div>
          <div class="divbtn">
            <button class="iconbtn"><i class="fa fa-trash"></i></button>
          </div>
        </div>
        <button class="button">Agregar Tarea</button>
      </div>
    </div>
    <div class="card">
      <div class="content">
        <h2>Eventos</h2>
        <button class="button">Agregar Evento</button>
      </div>
    </div>
  </div>
</template>
<script>
import NavBar from "../components/NavBar.vue";

export default {
  components: {
    NavBar,
  },
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
  width: 20%;
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
    padding-top: 0.5rem;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
}
.button {
  width: 90%;
  background-color: #ef5350;
  font-family: Rhodium Libre;
  border-radius: 4px;
  color: white;
  border: 0.1rem solid rgba(255, 255, 255, 0.18);
  position: relative;
  margin-left: 0;
}
.tarea {
  background-color: white;
  color: black;
  width: 90%;
  border-radius: 4px;
  margin-left: 0;
  margin-bottom: 5px;
  display:flex;
}
.item {
  font-size: 10px;
}
.iconbtn {
  width: 80%;
  background-color: #ef5350;
  color: white;
  border-radius: 4px;
  border: 0.1rem solid rgba(255, 255, 255, 0.18);
  margin-left: 6 0%;
  margin-top: 20%;
}
.priority{
    width: 10%;
}
.priority i{
    margin-top: 40%;
    margin-left: 20%;
}
.task{
    width:75%;
}
.divbtn{
    width:15%;
}
</style>
