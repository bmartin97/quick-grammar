import styles from './PageNotFound.module.scss';
import Sherlock from '@/assets/images/sherlock.png';
import Shakespeare from '@/assets/images/shakespeare.png';
import Typography from '@mui/material/Typography';

function PageNotFound() {
  const option = Math.random() > 0.5;
  const image = option ? Sherlock : Shakespeare;
  const text = option
    ? "Even Sherlock Holmes couldn't find this page.~"
    : 'Thou hast stumbled upon an uncharted kingdom of 404!~';

  return (
    <div className={styles.pageNotFound}>
      <div className={styles.textColumn}>
        <Typography className={styles.errorCode}> 404 </Typography>
        <Typography className={styles.sorryText}> SORRY! </Typography>
        <Typography>{text}</Typography>
      </div>
      <div className={styles.imageColumn}>
        <img src={image} alt='An fun image to look at' />
      </div>
    </div>
  );
}

export default PageNotFound;
