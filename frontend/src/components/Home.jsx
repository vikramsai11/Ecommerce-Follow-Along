import Product from "./auth/Product";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="bg-gray-800 min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="py-1 px-1 sm:px-1">
        <h2 className="text-center text-4xl font-extrabold text-white mb-8">
          Welcome to souled store
        </h2>
        {/* Product Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-1 xl:grid-cols-1 gap-1">
          {Array.from({ length: 1 }).map((_, index) => (
            <Product key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;<div className=""></div>