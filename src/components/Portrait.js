import styles from './Portrait.module.css';

function Portrait({src, alt}) {
    return (
      <div className={styles.container}>
        <img src={src} alt={alt} />
      </div>
    );
  }
  
  export default Portrait;
  