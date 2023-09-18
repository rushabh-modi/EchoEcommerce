import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import { ProductProvider } from "./context/ProductProvider";
import { FilterProvider } from "./context/FilterProvider";
import { CartProvider } from "./context/CartProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
const domain = process.env.REACT_APP_AUTH_DOMAIN;
const clientId = process.env.REACT_APP_CLIENT_ID;

root.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <ProductProvider>
      <FilterProvider>
        <CartProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </CartProvider>
      </FilterProvider>
    </ProductProvider>
  </Auth0Provider>
);
