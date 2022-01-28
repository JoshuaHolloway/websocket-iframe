export default function Frame() {
  return (
    <div style={{ border: 'solid black 1px', height: '100px', width: '100px' }}>
      <iframe
        src='http://localhost:3000/email'
        title='W3Schools Free Online Web Tutorials'
      ></iframe>
    </div>
  );
}
