export default function Mainlayout(props) {
  return (
    <>
      <header>This is header</header>
      <main id="main">{props.children}</main>
      <footer>This is footer</footer>
    </>
  );
}
