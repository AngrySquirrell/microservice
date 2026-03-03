import React, { Suspense, lazy } from "react";
import "./App.css";

function RemoteUnavailable({ name }) {
  return (
    <div className="mfe-error-fallback" role="alert">
      <h3>{name} indisponible</h3>
      <p>Impossible de charger ce micro-frontend pour le moment.</p>
      <button
        className="retry-button"
        type="button"
        onClick={() => window.location.reload()}
      >
        Réessayer
      </button>
    </div>
  );
}

function safeLazy(loader, name) {
  return lazy(() =>
    loader().catch((error) => {
      console.error(`[Shell] Echec de chargement ${name}`, error);
      return { default: () => <RemoteUnavailable name={name} /> };
    }),
  );
}

const Header = safeLazy(() => import("mfeHeader/Navbar"), "Header");
const Lobby = safeLazy(() => import("mfeLobby/Lobby"), "Lobby");
const Catalog = safeLazy(() => import("mfeCatalog/Catalog"), "Catalog");
const Cart = safeLazy(() => import("mfeCart/Cart"), "Cart");

function LoadingFallback({ name }) {
  return <div className="loading-fallback">Chargement {name}...</div>;
}

class MfeErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    console.error(`[Shell] ${this.props.name} indisponible`, error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="mfe-error-fallback" role="alert">
          <h3>{this.props.name} indisponible</h3>
          <p>Ce micro-frontend ne répond plus pour le moment.</p>
          <button
            className="retry-button"
            type="button"
            onClick={() => window.location.reload()}
          >
            Réessayer
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

function MfeSlot({ name, children }) {
  return (
    <MfeErrorBoundary name={name}>
      <Suspense fallback={<LoadingFallback name={name} />}>{children}</Suspense>
    </MfeErrorBoundary>
  );
}

function App() {
  return (
    <div className="shell">
      <MfeSlot name="Header">
        <Header />
      </MfeSlot>

      <main className="shell-content">
        <div className="content-grid-3">
          <section className="section">
            <MfeSlot name="Lobby">
              <Lobby />
            </MfeSlot>
          </section>

          <section className="section">
            <MfeSlot name="Catalog">
              <Catalog />
            </MfeSlot>
          </section>

          <section className="section">
            <MfeSlot name="Cart">
              <Cart />
            </MfeSlot>
          </section>
        </div>
      </main>

      <footer className="shell-footer">
        <p>
          Shell (3000) | Header (3001) | Lobby (3002) | Catalog (3003) | Cart
          (3004)
        </p>
      </footer>
    </div>
  );
}

export default App;
