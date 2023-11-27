
import React, {useState} from "react";

function App() {
  
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');
  const [msj, setMsj] = useState('');

  const agregarTarea = (e) => {

    e.preventDefault();
    if (nuevaTarea.trim() !== '') {

      setTareas([...tareas, {id: Date.now(), text: nuevaTarea, completada: false}]);
      setNuevaTarea('');
      console.log(tareas);

    }

  }

  const actualizarTarea = (tareaId) => {
    setTareas(
      tareas.map((tarea) => {
        if (tarea.id === tareaId) {
          return {
            ...tarea,
            completada: !tarea.completada
          };
        } else {
          return tarea;
        }
      })
    )
  }

  const eliminarTarea = (tareaId) => {
    setTareas(tareas.filter((tarea) => tarea.id !== tareaId));
  }

  return (
    <div>

      <div className="w-full  bg-indigo-400">
        <h1 className="text-center text-6xl p-5">Tareas</h1>
        <h2 className="text-center text-2xl pb-2">Comience a organizar sus tareas</h2>
      </div>

      <div className="flex">

        <div className="mx-auto p-5">

          <form onSubmit={agregarTarea}>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg m-1 p-2"
              type="text"
              placeholder="Ingrese una tarea"
              value={nuevaTarea}
              onChange={(e) => setNuevaTarea(e.target.value)}
            />
            <button type="submit" className="bg-green-300 font-bold py-2 px-4 rounded">Agregar</button>
          </form>

        </div>

        <div className="mx-auto p-5">

        <h3 className="text-center text-2xl m-2">Tareas</h3>

          <ul>
            
            {tareas.map((tarea) => 
              <li key={tarea.id}>
                <input className="w-4 h-4 text-blue-600" type="checkbox" checked={tarea.completada} onChange={() => actualizarTarea(tarea.id)} />
                <span className="mx-2 text-lg font-medium" style={{textDecoration: tarea.completada ? 'line-through' : 'none'}}>
                  {tarea.text}
                </span>
                <button className="bg-red-400 hover:bg-red-800 font-bold py-1 px-1 rounded" onClick={() => eliminarTarea(tarea.id)}>X</button>
              </li>
            )}

          </ul>

        </div>

      </div>

      <div>{msj}</div>

    </div>
  )
}

export default App