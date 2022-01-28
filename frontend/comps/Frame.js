export default function Frame(props) {
  return (
    <div
      style={{
        border: 'solid black 1px',
        height: 'fit-content',
        width: 'fit-content',
      }}
    >
      <iframe
        src={`http://localhost:3000/email${props.route}`}
        title='W3Schools Free Online Web Tutorials'
      ></iframe>
    </div>
  );
}
