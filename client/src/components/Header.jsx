// function Header() {
//   return (
//     <header>
//       <nav>
//         <ul>
//           <li>
//             <a href="/">Home</a>
//           </li>
//           <li>
//             <a href="/login">Login</a>
//           </li>
//           <li>
//             <a href="/campaign">Campaign</a>
//           </li>
//           <li>
//             <a href="/create">Create</a>
//           </li>
//           <li>
//             <a href="new-environment">New Environment</a>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// }

// export default Header;
function Header() {
  return (
    <header>
      <div className="logo">
        <a href="/">
          <img src="/images/logo2.PNG" alt="Logo" />
        </a>
      </div>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="/campaign">Campaign</a>
          </li>
          <li>
            <a href="/create">Create</a>
          </li>
          <li>
            <a href="/new-environment">New Environment</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
