import React, { memo } from 'react';

// atoms
import Text from '../../atoms/text/text';
import Icon from '../../atoms/icon/icon';

// atoms

const Copy = (props) => {

  const {
    children,
    color,
    description,
    iconType,
    title,
  } = props;

  return (
    <article className="copy flex flex--2 flex--column mar--48-b">
      <div className="copy_details flex flex--align-center">
        <div className="flex flex--2 mar--24-b">
          <Icon
            color={color}
            iconType={iconType}
            size="34"
          />
          <div>
            <Text
              className="mar--24-b"
              color={color}
              tag="h3"
              size="34"
            >
              {title}
            </Text>
            <Text
              tag="span"
              size="16"
            >
              {description}
            </Text>
          </div>
        </div>
      </div>
      <div className="copy_graphic">
        {children}
      </div>
    </article>
  );

};

// const arePropsEqual = (prevProps, nextProps) => {
//   return JSON.stringify(prevProps) === JSON.stringify(nextProps);
// };

// export default memo(Copy, arePropsEqual);
export default memo(Copy);
