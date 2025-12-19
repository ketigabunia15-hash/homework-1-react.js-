export default function Footer({ socialList }) {
  return (
    <footer>
      <ul>
        {socialList.map((social, index) => (
          <li key={index}>{social}</li>
           ))}
      </ul>
    </footer>
  );
}
