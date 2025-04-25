export default function Layout(props) {
  const { children } = props;
  const header = (
    <header>
      <h1 className="text-gradient">The BroGram</h1>
      <p>
        <strong>The 30 simple Workouts Program</strong>
      </p>
    </header>
  );
  const footer = (
    <footer>
      <p>
        built by{' '}
        <a href="https://github.com/Hermit-commits-code" target="_blank">
          Joseph Chu
        </a>
        <br />
        styled with <a href="https://www.fantacss.smoljames.com">FantaCSS</a>
      </p>
    </footer>
  );
  return (
    <>
      {header}
      {children}
      {footer}
    </>
  );
}
