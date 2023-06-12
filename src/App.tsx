import { BrowserRouter } from "react-router-dom";
import Layout from "./layouts/layout";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-center" toastOptions={{ duration: 500 }} />
      <Layout />
    </BrowserRouter>
  );
}

export default App;
