import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegistrationForm from "./pages/RegistartionForm";
import UsersListPage from "./UsersListPage";
import EditUser from "./pages/EditUser";
import Signup from "./pages/Signup";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Signup />} /> */}
        <Route path="/" element={<RegistrationForm />} />
        <Route path="/userslistpage" element={<UsersListPage />} />
        <Route path="/EditUser" element={<EditUser />} />
      </Routes>
    </Router>
  );
}

export default App;
