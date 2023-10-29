import HomeLayout from './Templates/HomeLayout'
import Home from "./Templates/Home";
import Sepet from './Templates/Sepet'
import AuthLayout from './Templates/AuthLayout'
import SignIn from './Templates/SignIn'
import SignUp from './Templates/SignUp'
import { Provider } from "react-redux";
import { Store } from './Features/Store'
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {

  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route index={true} element={<Home />} />
            <Route path="sepet" element={<Sepet />} />
            <Route path='/auth' element={<AuthLayout />}>
              <Route index={true} element={<SignIn />} />
              <Route path='signup' element={<SignUp />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider >
  );
}

export default App;
