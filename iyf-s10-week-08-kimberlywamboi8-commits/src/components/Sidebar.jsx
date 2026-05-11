export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h3 style={{ textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.8rem', borderBottom: '1px solid #000', paddingBottom: '10px' }}>
        the edit
      </h3>
      <p style={{ fontStyle: 'italic', fontFamily: 'Playfair Display', fontSize: '1.2rem', color: '#444' }}>
        "fashion is instant language."
      </p>
      <ul style={{ listStyle: 'none', padding: 0, marginTop: '30px', fontSize: '0.9rem', color: '#777' }}>
        <li style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>— parisian chic</li>
        <li style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>— monochrome</li>
      </ul>
    </aside>
  );
}