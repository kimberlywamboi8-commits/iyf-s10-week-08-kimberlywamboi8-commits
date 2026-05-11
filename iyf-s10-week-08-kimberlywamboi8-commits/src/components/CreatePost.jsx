import { useState } from "react";

function CreatePost({ onAddPost }) {
  const [title, setTitle] = useState("");
  const [outfit, setOutfit] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !outfit) return;
    onAddPost({ title, outfit, image, author: "stylist_me" });
    setTitle("");
    setOutfit("");
    setImage("");
  };

  return (
    <section className="create-post-section" style={{ marginBottom: '40px' }}>
      <form onSubmit={handleSubmit} className="post-card">
        <h3 style={{ fontFamily: 'Playfair Display', marginBottom: '20px' }}>Share Your Look</h3>
        <input 
          placeholder="Collection Title (e.g. Summer Silk)" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
        />
        <input 
          placeholder="Paste Image URL (Pinterest/Unsplash link)" 
          value={image} 
          onChange={(e) => setImage(e.target.value)} 
        />
        <textarea 
          placeholder="Describe the aesthetic details..." 
          value={outfit} 
          onChange={(e) => setOutfit(e.target.value)} 
          rows="3"
        />
        <button type="submit">Publish to Journal</button>
      </form>
    </section>
  );
}

export default CreatePost;