const About = async () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const response = await fetch(url);
  const users = await response.json();

  return (
    <div>
      <h3>API fetch useStateを使わない場合</h3>

      {users.map((user) => (
        <ul>
          {user.id}
          <li className="title">{user.title}</li>
          <li>{user.body}</li>
        </ul>
      ))}
    </div>
  );
};

export default About;
