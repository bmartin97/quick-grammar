import { useState } from 'react';
import lineStyle from '../styles/Line.module.scss';
import DropArea, { DropAreaProps } from './DropArea';

const Line = () => {
  return <div className={lineStyle.line} />;
};

function DropAreaWithIndicator({
  onHoverChange = () => {},
  children,
  ...props
}: DropAreaProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <DropArea
      onHoverChange={(_isHovered) => {
        setIsHovered(_isHovered);
        onHoverChange(_isHovered);
      }}
      {...props}>
      {isHovered && <Line />}
      {children}
    </DropArea>
  );
}

export default DropAreaWithIndicator;
