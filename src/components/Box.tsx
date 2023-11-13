import styles from './styles/Box.module.scss';

interface BoxProps {
  theme: 'dashed' | 'cartoon';
  orientation?: 'row' | 'column';
  children: any;
}

function Box({ theme, orientation, children }: BoxProps) {
  return (
    <div
      className={[styles.box, styles[theme]].join(' ')}
      style={{
        flexDirection: orientation || 'row'
      }}>
      {children}
    </div>
  );
}

export default Box;
