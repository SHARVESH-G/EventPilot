import "./exploreCategory.css";
import { CategoriesLinks } from "../../datas/eventIcons";
import { useState } from "react";

const ExploreCategory = () => {

  const [showAll , setShowAll] = useState(false);

  const LessCategoryLink = CategoriesLinks.slice(0,7);
  const displayCategories = showAll ? CategoriesLinks : LessCategoryLink;

  return (
    <section className="explore">
      <div className="explore-header">
        <div>
          <h2>Explore Categories</h2>
          <p>Find events that match your interests</p>
        </div>

        <span 
          className="view-all" 
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less" : "Show All"}
        </span>
      </div>

      <div className="category-grid">
        {displayCategories.map((cat) => {
          const Icon = cat.icon;

          return (
            <div key={cat._id} className="category-card">
              <div className="icon-wrapper">
                <Icon size={22}/>
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
