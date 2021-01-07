import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { Color } from '../Types/DataModels.type';

import useStyles from './styles';
import { SortableElement } from 'react-sortable-hoc';

export type DraggableColorBoxProps = {
  color: Color;
  onDelete: (colorName: string) => void;
};

const DraggableColorBox: React.FC<DraggableColorBoxProps> = (props) => {
  const { color, onDelete } = props;
  const classes = useStyles(props);

  return (
    <div className={classes.root} style={{ backgroundColor: color.color }}>
      <div className={classes.boxContent}>
        <span>{color.name}</span>
        <DeleteIcon
          className={classes.deleteIcon}
          onClick={() => onDelete(color.name)}
        />
      </div>
    </div>
  );
};

export default SortableElement(DraggableColorBox);
