export default function Navbar(props) {
  const { list } = props;

  return (
    <nav>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </nav>
  );
}

export default function Navbar({ list }) {
  return (
    <nav>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
            ))}
      </ul>
    </nav>
  );
}
