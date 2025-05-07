import { lazy, Suspense } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Trailer from "./components/modals/Trailer";

import TriggerLoadingLazy from './components/triggerLoadingLazy/TriggerLoadingLazy';
import Loading from "./components/loading/Loading";

//layout
const HomeLayout = lazy(() => import("./layouts/HomeLayout"));
const UserLayout = lazy(() => import('./layouts/userLayout/UserLayout'));
//page
const Login = lazy(() => import('./pages/user/Login'));
const Register = lazy(() => import('./pages/user/Register'));
const Detail = lazy(() => import('./pages/detail/Detail'));
const Error = lazy(() => import('./pages/error/Error'));

function App() {
  return (
    <BrowserRouter>
      <Loading/>
      <Suspense fallback={<TriggerLoadingLazy/>}>
        <Routes>
          <Route path="/" element={<HomeLayout />} />
          <Route path="/dangnhap" element={<UserLayout Component={Login} />} />
          <Route path="/dangky" element={<UserLayout Component={Register} />} />
          <Route path="/chitiet/:id" element={<Detail />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>
      <Trailer />
    </BrowserRouter>
  );
}

export default App;
