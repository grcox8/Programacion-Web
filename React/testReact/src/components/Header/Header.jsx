import "./header.css";

//los nombres de los componentes siempre van a ir en mayuscula
export function Header() {
  return (
    <>
      <div>
        <h1>Logo</h1>
        <nav className="contenedor-header">
          <div>
            <a href="https://www.facebook.com">Facebook</a>
          </div>
          <div>
            <a href="https://www.instagram.com">Instagram</a>
          </div>
        </nav>
      </div>
    </>
  );
}
