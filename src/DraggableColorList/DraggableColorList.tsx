import React from 'react';
import { SortableContainer } from 'react-sortable-hoc';
import DraggableColorBox from '../DraggableColorBox/DraggableColorBox';
import { Color } from '../Types/DataModels.type';

export type DraggableColorListProps = {
  colors: Color[];
  deleteColor: (colorName: string) => void;
};

const DraggableColorList: React.FC<DraggableColorListProps> = ({
  colors,
  deleteColor
}) => {
  return (
    <div style={{ height: '100%' }}>
      {colors.map((color, index) => (
        <DraggableColorBox
          key={color.name}
          color={color}
          onDelete={deleteColor}
          index={index}
        />
      ))}
    </div>
  );
};

export default SortableContainer(DraggableColorList);
