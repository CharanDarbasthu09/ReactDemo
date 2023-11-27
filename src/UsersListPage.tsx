import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

function UsersListPage() {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState<User[]>([]);

  let navigate = useNavigate();

  async function deleteUser(user: User) {
    try {
      const response = await fetch(
        "https://localhost:7251/api/User/" + user.id,
        {
          method: "DELETE",
        }
      );
      console.log("Response:", response);
      setUsers(users.filter((row) => row.id !== user.id));
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);

      try {
        const response = await fetch("https://localhost:7251/api/User");
        const usersResponse = (await response.json()) as User[];
        setUsers(usersResponse);
      } catch (e: any) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUsers();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Something went wrong! Please try again...</div>;
  }

  const DisplayData = users.map((user) => (
    <tr key={user.id}>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.email}</td>
      <td>
        <button
          onClick={() => {
            return navigate("/edituser", { state: { user } });
          }}
        >
          Edit
        </button>
        &nbsp;&nbsp;
        <button onClick={() => deleteUser(user)}>Delete</button>
      </td>
    </tr>
  ));
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Firts Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>{DisplayData}</tbody>
      </table>
    </div>
  );
}

export default UsersListPage;
