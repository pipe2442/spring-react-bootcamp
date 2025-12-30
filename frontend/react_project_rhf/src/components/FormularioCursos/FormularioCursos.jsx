import "./FormularioCursos.css";
import { useState, useEffect } from "react";

const FormularioCursos = ({
  cursos,
  setCursos,
  cursoEditado,
  setCursoEditado,
}) => {
  const [error, setError] = useState(null);

  useEffect(() => {
    if (cursoEditado) {
      const form = document.querySelector("form");

      form.titulo.value = cursoEditado.titulo;
      form.nivel.value = cursoEditado.nivel;
      form.duracion.value = cursoEditado.duracion;
    }
  }, [cursoEditado]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const cursoActual = {
      titulo: formData.get("titulo"),
      nivel: formData.get("nivel"),
      duracion: formData.get("duracion"),
    };

    if (!cursoActual.titulo.trim()) return setError("El titulo falta");
    if (!cursoActual.nivel.trim()) return setError("El nivel falta");
    if (!cursoActual.duracion.trim()) return setError("La duracion falta");

    if (cursoEditado) {
      const updated = [...cursos];
      updated[cursoEditado.index] = cursoActual;
      setCursos(updated);
      setCursoEditado(null);
    } else {
      setCursos([...cursos, cursoActual]);
    }

    e.target.reset();
    setError(null);
  };

  return (
    <>
      <h2>Formulario:</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input placeholder="titulo" name="titulo" />
        <input placeholder="nivel" name="nivel" />
        <input placeholder="duracion" name="duracion" />
        {error && <p>{error}</p>}
        <button>Submit</button>
      </form>
    </>
  );
};

export default FormularioCursos;
