import styles from './PageNotFound.module.scss';

function PageNotFound() {
  const option = Math.random() > 0.5;
  const image = option ? '/images/sherlock.png' : '/images/shakespeare.png';
  const text = option
    ? "Even Sherlock Holmes couldn't find this page.~"
    : 'Thou hast stumbled upon an uncharted kingdom of 404!~';

  return (
    <>
      <div className={styles.pageNotFound}>
        <div className={styles.textColumn}>
          <div className={styles.errorCode}> 404 </div>
          <div className={styles.sorryText}> SORRY! </div>
          <div>{text}</div>
        </div>
        <div className={styles.imageColumn}>
          <img src={image} alt='An fun image to look at' />
        </div>
      </div>
    </>
  );
}

export default PageNotFound;
