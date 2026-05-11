function CommunityPost({ post, onLike, onDelete }) {
  return (
    <div className="post-card">
      <div className="post-header">
        <h2 style={{ fontFamily: 'Playfair Display', margin: 0 }}>{post.title}</h2>
        <button className="delete-btn" onClick={() => onDelete(post.id)}>✕</button>
      </div>

      {post.image && (
        <div className="post-image-container">
          <img src={post.image} alt={post.title} className="outfit-image" />
        </div>
      )}

      <p className="outfit-desc">{post.outfit}</p>
      
      <div className="post-footer" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
        <span className="author" style={{ fontSize: '0.8rem', color: '#888' }}>@{post.author}</span>
        <button className="like-btn" onClick={() => onLike(post.id)}>
          love {post.likes}
        </button>
      </div>
    </div>
  );
}

export default CommunityPost;