import './Portrait.module.css';

function Portrait({src, alt}) {
    return (
      <div className="container">
        <img src={src} alt={alt} />
      </div>
    );
  }
  
  export default Portrait;
  