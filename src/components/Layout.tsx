import { AiFillHome, AiFillShopping } from "react-icons/ai";
import { Link, Outlet } from "react-router-dom";
import Search from "./Search";

type LayoutProps = {
  categories: any;
};

function Layout({ categories }: LayoutProps) {
  const renderCategories = () => {
    return categories.data.map((cat: any) => (
      <li key={cat.id}>
        <Link to={`categories/${cat.id}`}> {cat.title} </Link>
      </li>
    ));
  };

  return (
    <>
      <header>
        <div id="headerHomeIcon">
          <Link to={"/"}>
            <AiFillHome size={40} />
          </Link>
        </div>

        <Search />
        <div id="headerTitle">Our Store</div>

        <div id="headerCartIcon">
          <Link to={"/basket"}>
            <AiFillShopping size={40} />
          </Link>
        </div>
      </header>
      <section>
        <nav>
          {categories.error && <div>Error: {categories.error}</div>}
          {categories.data && renderCategories()}
        </nav>

        <main>
          <Outlet />
        </main>
      </section>

      <footer>
        <Link to="/">Home</Link> |<Link to="/basket">Basket</Link>
      </footer>
    </>
  );
}

export default Layout;
