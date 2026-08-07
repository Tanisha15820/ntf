import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const cards = [
    {
      title: "Dashboard",
      path: "/dashboard",
    },
    {
      title: "LMS",
      path: "/lms",
    },
    {
      title: "CMS",
      path: "",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-xl border border-primary/20 p-10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <h2 className="text-3xl font-bold text-center text-dark">
              {card.title}
            </h2>

            <p className="text-secondary text-center mt-4">
              Click here to access the {card.title}.
            </p>

            <button
              onClick={() => navigate(card.path)}
              className="mt-8 w-full bg-gradient-to-r from-primary-light to-primary-dark text-white py-3 rounded-lg font-semibold shadow-lg hover:opacity-90 transition-all duration-300"
            >
              Open
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
