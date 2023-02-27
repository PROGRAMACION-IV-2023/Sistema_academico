export default {
    template: `
    <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">::.. SISTEMA ACADEMICO ..::</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <a class="nav-link" @click="abrirCerrarFormulario('docente')" href="/docentes.html">Docentes</a>
                <a class="nav-link" @click="abrirCerrarFormulario('alumno')" href="/alumnos.html">Alumnos</a>
                <a class="nav-link" @click="abrirCerrarFormulario('materia')" href="/materias.html">Materia</a>
                <a class="nav-link" @click="abrirCerrarFormulario('matricula')" href="/Matricula.html">Matrícula</a>
                <a class="nav-link" @click="abrirCerrarFormulario('inscripcion')" href="/inscricion.html">Inscripción</a>
            </div>
        </div>
    </div>
</nav>
<br>
    `
  }