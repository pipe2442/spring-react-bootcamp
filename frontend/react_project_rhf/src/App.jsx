import "./App.css";
import { useState } from "react";
import FormularioCursos from "./components/FormularioCursos";
import FormularioCursosRhf from "./components/FormularioCursosRhf";

function App() {
  const [cursos, setCursos] = useState([
    { titulo: "Bootcamp react", nivel: "Intermedio", duracion: "25h" },
    { titulo: "Bootcamp Spring", nivel: "Intermedio", duracion: "45h" },
    { titulo: "Docker", nivel: "Intermedio", duracion: "5h" },
  ]);

  const [cursoEditado, setCursoEditado] = useState(null);

  const handleEdit = (curso, index) => {
    setCursoEditado({ ...curso, index });
    console.log(cursoEditado);
  };

  return (
    <>
      <h2>Cursos:</h2>
      <ul>
        {cursos.map((curso, index) => (
          <li key={index}>
            <p>{curso.titulo}</p>
            <p>{curso.nivel}</p>
            <p>{curso.duracion}</p>

            <button onClick={() => handleEdit(curso, index)}>Editar</button>
          </li>
        ))}
      </ul>

      {/* <FormularioCursos
        cursos={cursos}
        setCursos={setCursos}
        cursoEditado={cursoEditado}
        setCursoEditado={setCursoEditado}
      /> */}

      <FormularioCursosRhf
        cursos={cursos}
        setCursos={setCursos}
        cursoEditado={cursoEditado}
        setCursoEditado={setCursoEditado}
      />
    </>
  );
}

export default App;
