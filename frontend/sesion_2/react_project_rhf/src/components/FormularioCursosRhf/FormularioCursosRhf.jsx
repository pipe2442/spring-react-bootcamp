import { useEffect } from "react";
import { useForm } from "react-hook-form";

const FORMULARIO_VACIO = {
  titulo: "",
  nivel: "",
  duracion: "",
};

const FormularioCursosRhf = ({
  cursos,
  setCursos,
  cursoEditado,
  setCursoEditado,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (cursoEditado) {
      reset(cursoEditado);
    }
  }, [cursoEditado, reset]);

  const submitForm = (data) => {
    if (cursoEditado) {
      const updated = [...cursos];
      updated[cursoEditado.index] = data;
      setCursos(updated);
      setCursoEditado(null);
    } else {
      setCursos([...cursos, data]);
    }

    reset(FORMULARIO_VACIO);
  };

  return (
    <>
      <h2>React hook form</h2>

      <form className="form" onSubmit={handleSubmit(submitForm)}>
        <input
          placeholder="titulo"
          {...register("titulo", { required: "El titulo es requerido" })}
        />
        {errors.titulo && <p>{errors.titulo.message}</p>}
        <input
          placeholder="nivel"
          {...register("nivel", { required: "El nivel es requerido" })}
        />
        {errors.nivel && <p>{errors.nivel.message}</p>}
        <input
          placeholder="duracion"
          {...register("duracion", { required: "La duracion es requerida" })}
        />
        {errors.duracion && <p>{errors.duracion.message}</p>}

        <button type="submit">{cursoEditado ? "editar" : "crear"}</button>
      </form>
    </>
  );
};

export default FormularioCursosRhf;
