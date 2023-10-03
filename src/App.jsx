import Route from "./router/router";
import { useAuth } from "./hooks/use-auth";
import Loading from "./components/Loading";
import { ToastContainer } from 'react-toastify';


function App() {
  const { initialLoading } = useAuth();
  if (initialLoading) {
    return <Loading />
  }
  return (
    <>
      <Route />
      <ToastContainer position='bottom-center' autoClose={3000} theme='dark' />
    </>
  )
}

export default App;
