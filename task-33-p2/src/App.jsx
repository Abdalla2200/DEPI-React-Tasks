import Users from "./components/Users";

export default function App() {
  const users = [
    { id: 1, name: "Ahmed Mohsen", email: "ahmedmoshen21@gmail.com", age: 22 },
    { id: 2, name: "Omar Ahmed", email: "omarahmed44@gmail.com", age: 26 },
    {
      id: 3,
      name: "Mostafa Samir",
      email: "mostafasamir78@gmail.com",
      age: 23,
    },
    { id: 4, name: "Sami Ahmed", email: "samiahmed65@gmail.com", age: 30 },
  ];

  return (
    <div>
      <Users usersData={users} />
    </div>
  );
}
