export default function Users({ usersData }) {
  console.log(usersData);

  return (
    <div className="container my-24 mx-auto px-4 w-full sm:w-[94%] ">
      <h2 className="text-4xl font-semibold mb-10">Our Users</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {usersData.map(function (user) {
          return (
            <div
              key={user.id}
              className="m-2 rounded-lg border bg-gray-100 border-gray-300 p-4"
            >
              <h2 className="mb-2 text-lg font-semibold">{user.name}</h2>
              <p className="text-sm text-gray-600">Email: {user.email}</p>
              <p className="text-sm text-gray-600">Age: {user.age}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
