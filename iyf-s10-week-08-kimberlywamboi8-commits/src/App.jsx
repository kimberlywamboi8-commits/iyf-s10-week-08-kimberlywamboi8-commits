import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import CommunityPost from "./components/CommunityPost";
import CreatePost from "./components/CreatePost";
import Footer from "./components/Footer";

function App() {
  const [posts, setPosts] = useState([
    { 
      id: 1, 
      title: "vogue editorial", 
      outfit: "oversized blazer and silk trousers.", 
      image: "https://images.unsplash.com/photo-1539109132314-34759616b408?q=80&w=1000",
      author: "kimberly", 
      likes: 24 
    },
    { 
      id: 2, 
      title: "minimalist aura", 
      outfit: "clean lines and neutral tones for the season.", 
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000",
      author: "aura_admin", 
      likes: 15 
    }
  ]);

  const addPost = (newPost) => {
    setPosts([{ id: Date.now(), likes: 0, ...newPost }, ...posts]);
  };

  const handleLike = (id) => {
    setPosts(posts.map(p => p.id === id ? { ...p, likes: p.likes + 1 } : p));
  };

  const handleDelete = (id) => {
    setPosts(posts.filter(p => p.id !== id));
  };

  return (
    <div className="app-container">
      <Header />
      <div className="main-layout">
        <main>
          <CreatePost onAddPost={addPost} />
          <div className="posts-container">
            {posts.map((post) => (
              <CommunityPost 
                key={post.id} 
                post={post} 
                onLike={handleLike} 
                onDelete={handleDelete} 
              />
            ))}
          </div>
        </main>
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
}

export default App;