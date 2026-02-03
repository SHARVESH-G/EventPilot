import { useState } from "react";
import "./createEvent.css";
import { Camera } from "lucide-react";
import { CategoriesLinks } from "../../datas/eventIcons";
import React from "react";

const CreateEvent = () => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    category: "",
    date: "",
    price: "",
    location: "",
    seats: "",
    refund: true,
    minAge: "",
    eventType: "Offline",
  });

  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      setPreview(URL.createObjectURL(file));
      setForm({
        ...form,
        image: file,
      });
    }
  };

  const toggleButton = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };



  return (
    <section className="create-event">
      <form className="event-form" onSubmit={handleSubmit}>
        <h2>Create Event</h2>

        <label className="image-upload">
          {preview ? (
            <img src={preview} alt="preview" />
          ) : (
            <div className="upload-placeholder">
              <span>
                <Camera />
                Upload Event Banner
              </span>
              <p>Recommended: 1200 x 600px</p>
            </div>
          )}

          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            hidden
          />
        </label>

        <div className="form-grid">
          <input
            name="name"
            placeholder="Event Name"
            onChange={handleChange}
            required
          />
          <input
            type="datetime-local"
            name="date"
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Price (0 = Free)"
            onChange={handleChange}
          />
          <input
            name="location"
            placeholder="Location / Link"
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="seats"
            placeholder="Seats"
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="minAge"
            placeholder="Minimum Age"
            onChange={handleChange}
          />
        </div>

        <textarea
          name="description"
          placeholder="Event Description"
          rows="4"
          onChange={handleChange}
          required
        />

        <div className="toggle-group">
          <label>Category</label>

          <div className="category-buttons">
            {CategoriesLinks.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat._id}
                  type="button"
                  className={form.category === cat.name ? "active" : ""}
                  onClick={() => toggleButton("category", cat.name)}
                >
                  <Icon size={18} />
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>

        <div className="toggles">
          <div className="toggle-group">
            <label>Refund</label>
            <div className="toggle-buttons">
              <button
                type="button"
                className={form.refund ? "active" : ""}
                onClick={() => toggleButton("refund", true)}
              >
                Yes
              </button>

              <button
                type="button"
                className={!form.refund ? "active" : ""}
                onClick={() => toggleButton("refund", false)}
              >
                No
              </button>
            </div>
          </div>

          <div className="toggle-group">
            <label>Event Type</label>
            <div className="toggle-buttons">
              {["Online", "Offline"].map((type) => (
                <button
                  key={type}
                  type="button"
                  className={form.eventType === type ? "active" : ""}
                  onClick={() => toggleButton("eventType", type)}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>

        <button className="submit-btn">Create Event</button>
      </form>
    </section>
  );
};

export default CreateEvent;
