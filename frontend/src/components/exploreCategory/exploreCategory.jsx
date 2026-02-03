import "./exploreCategory.css";
import { CategoriesLinks } from "../../datas/eventIcons";

const ExploreCategory = () => {
  return (
    <section className="explore">
      <div className="explore-header">
        <div>
          <h2>Explore Categories</h2>
          <p>Find events that match your interests</p>
        </div>

        <span className="view-all">View all</span>
      </div>

      <div className="category-grid">
        {CategoriesLinks.map((cat) => {
          return (
            <div key={cat._id} className="category-card">
              <div className="icon-wrapper">
                {cat.icon}
              </div>
              <span>{cat.name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ExploreCategory;
