import styles from './styles/Box.module.scss';

interface BoxProps {
  theme: 'dashed' | 'cartoon';
  width?: React.CSSProperties['width'];
  height?: React.CSSProperties['height'];
  inline?: boolean;
  orientation?: 'row' | 'column';
  children: any;
}

function Box({
  theme,
  orientation = 'row',
  width = '600px',
  height = '88px',
  inline = false,
  children
}: BoxProps) {
  return (
    <div
      className={[styles.box, styles[theme]].join(' ')}
      style={{
        display: inline ? 'inline-flex' : 'flex',
        flexDirection: orientation,
        minWidth: width,
        minHeight: height
      }}>
      {children}
    </div>
  );
}

export default Box;
