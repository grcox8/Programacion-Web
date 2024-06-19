export function Prueba({ nombre, Apellido }) {
  const products = [
    { title: "Col", id: 1, description: "Hortaliza" },
    { title: "Ajo", id: 2, description: "liliácea" },
    { title: "Manzana", id: 3, description: "Fruta" },
  ];

  return (
    <>
      <h1>
        Hola {nombre} {Apellido}
      </h1>

      {products.map((producto, i) => {
        return (
          <div key={producto.id}>
            <h2 className="bg-color">Title: {producto.title}</h2>
            <p>{producto.description}</p>
          </div>
        );
      })}
    </>
  );
}
