import React, { useEffect } from 'react';
import { ChromePicker, ColorResult } from 'react-color';

import { Button } from '@material-ui/core';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import { Color } from '../Types/DataModels.type';
import useStyles from './styles';

export type ColorPickerFormProps = {
  paletteIsFull: boolean;
  addColor: (newColor: Color) => void;
  colors: Color[];
};

const ColorPickerForm: React.FC<ColorPickerFormProps> = ({
  paletteIsFull,
  addColor,
  colors
}) => {
  const classes = useStyles();

  const [currentColor, setCurrentColor] = React.useState<Color>({
    name: 'black',
    color: 'black'
  });

  const [newColorName, setNewColorName] = React.useState('');

  useEffect(() => {
    ValidatorForm.addValidationRule('isColorNameUnique', (value: string) => {
      return colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      );
    });

    ValidatorForm.addValidationRule('isColorUnique', (value: string) => {
      return colors.every((color) => color.color !== currentColor.color);
    });
  });

  const updateCurrentColor = (color: ColorResult) => {
    setCurrentColor({ name: newColorName, color: color.hex });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === 'newColorName') {
      setNewColorName(event.target.value);
    }
  };

  const handleSumbit = () => {
    const newColor = {
      name: newColorName,
      color: currentColor.color
    };
    addColor(newColor);
    setNewColorName('');
  };

  return (
    <div className={classes.root}>
      <ChromePicker
        onChangeComplete={updateCurrentColor}
        color={currentColor.color}
        className={classes.picker}
      />
      <ValidatorForm onSubmit={handleSumbit} instantValidate={false}>
        <TextValidator
          name="newColorName"
          className={classes.colorNameInput}
          variant="filled"
          margin="normal"
          placeholder="Color Name"
          value={newColorName}
          onChange={handleChange}
          validators={['required', 'isColorNameUnique', 'isColorUnique']}
          errorMessages={[
            'Enter a color name',
            'Color name must be unique',
            'This color already exist'
          ]}
        />
        <Button
          variant="contained"
          color="primary"
          disabled={paletteIsFull}
          style={{
            backgroundColor: paletteIsFull ? 'grey' : currentColor.color
          }}
          type="submit"
          className={classes.addColor}
        >
          {paletteIsFull ? 'Palette Full' : 'Add Color'}
        </Button>
      </ValidatorForm>
    </div>
  );
};

export default ColorPickerForm;
