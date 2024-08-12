import React, { useState } from "react";
import "./AdminDjsStyle.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const AdminDjs = () => {
  const [djs, setDjs] = useState([]);
  const [newDj, setNewDj] = useState({
    name: "",
    photos: [],
    bio: "",
    socialMedia: ["", "", ""],
  });
  const [showForm, setShowForm] = useState(false);
  const [editingDj, setEditingDj] = useState(null);

  const handleInputChange = (e, index) => {
    const { name, files } = e.target;

    if (name === "photos") {
      const selectedPhotos = Array.from(files).slice(0, 5); // En fazla 5 dosya al
      console.log("Seçilen fotoğraflar:", selectedPhotos);
      setNewDj({ ...newDj, photos: selectedPhotos });
    } else if (name.startsWith("socialMedia")) {
      const socialMedia = [...newDj.socialMedia];
      socialMedia[index] = e.target.value;
      setNewDj({ ...newDj, socialMedia });
    } else {
      setNewDj({ ...newDj, [name]: e.target.value });
    }
  };

  const addOrUpdateDj = () => {
    if (
      newDj.name &&
      newDj.photos.length > 0 &&
      newDj.bio &&
      newDj.socialMedia.every((link) => link)
    ) {
      if (editingDj) {
        setDjs(
          djs.map((dj) =>
            dj.id === editingDj.id ? { ...newDj, id: editingDj.id } : dj
          )
        );
        toast.success("DJ successfully update");
      } else {
        setDjs([...djs, { ...newDj, id: djs.length + 1 }]);
        toast.success("DJ successfully add");
      }
      setNewDj({
        name: "",
        photos: [],
        bio: "",
        socialMedia: ["", "", ""],
      });
      setEditingDj(null);
      setShowForm(false);
    } else {
      toast.error("Please fill in all fields");
    }
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const closeForm = () => {
    setShowForm(false);
    setEditingDj(null);
    setNewDj({
      name: "",
      photos: [],
      bio: "",
      socialMedia: ["", "", ""],
    });
  };

  const editDj = (dj) => {
    setEditingDj(dj);
    setNewDj(dj);
    setShowForm(true);
  };

  const deleteDj = (id) => {
    setDjs(djs.filter((dj) => dj.id !== id));
    toast.success("DJ successfully delete");
  };

  const renderSocialIcon = (link) => {
    if (link.includes("facebook.com")) {
      return <FontAwesomeIcon icon={faFacebook} />;
    } else if (link.includes("twitter.com")) {
      return <FontAwesomeIcon icon={faTwitter} />;
    } else if (link.includes("instagram.com")) {
      return <FontAwesomeIcon icon={faInstagram} />;
    } else {
      return null;
    }
  };

  return (
    <div className="admin-djs-container">
      <ToastContainer />
      {/* DJ Ekleme Formu */}
      <div className={`dj-form-container ${showForm ? "active" : ""}`}>
        <div className="dj-form">
          <div className="close-form-btn" onClick={closeForm}>
            X
          </div>
          <h2>{editingDj ? "Update DJ" : "Add New DJ"}</h2>
          <input
            type="text"
            name="name"
            placeholder="DJ Name"
            value={newDj.name}
            onChange={(e) => handleInputChange(e)}
          />
          <input
            type="file"
            name="photos"
            multiple // Birden fazla dosya seçimini etkinleştirir
            onChange={(e) => handleInputChange(e)}
          />
          <textarea
            name="bio"
            placeholder="Biography"
            value={newDj.bio}
            onChange={(e) => handleInputChange(e)}
          ></textarea>
          {newDj.socialMedia.map((link, index) => (
            <input
              key={index}
              type="text"
              name={`socialMedia${index}`}
              placeholder={`Social Media Link ${index + 1}`}
              value={link}
              onChange={(e) => handleInputChange(e, index)}
            />
          ))}
          <button className="add-btn" onClick={addOrUpdateDj}>
            {editingDj ? "Update DJ" : "Add DJ"}
          </button>
        </div>
      </div>
      {/* DJ Listesi */}
      <div className="dj-list">
        <h2>DJ List</h2>
        <ul className="grid-container">
          {djs.map((dj) => (
            <li key={dj.id} className="dj-list-item">
              <h3>{dj.name}</h3>
              <div className="photo-list">
                {dj.photos.map((photo, index) => (
                  <img
                    key={index}
                    src={URL.createObjectURL(photo)}
                    alt={`${dj.name} Photo ${index + 1}`}
                    className="dj-photo"
                  />
                ))}
              </div>
              <p>{dj.bio}</p>
              <ul className="social-media-links">
                {dj.socialMedia.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.startsWith("http") ? link : `https://${link}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {renderSocialIcon(link)}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="button-container">
                <button className="update-btn" onClick={() => editDj(dj)}>
                  Update 
                </button>
                <button className="delete-btn" onClick={() => deleteDj(dj.id)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* Add DJ Button */}
      <button className="add-btn" onClick={toggleForm}>
        Add New DJ
      </button>
    </div>
  );
};

export default AdminDjs;
