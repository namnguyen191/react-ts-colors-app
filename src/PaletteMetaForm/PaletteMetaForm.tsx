import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import { PaletteObj } from '../Types/DataModels.type';
import 'emoji-mart/css/emoji-mart.css';
import { Picker, BaseEmoji } from 'emoji-mart';

export type PaletteMetaFormProps = {
  palettes: PaletteObj[];
  handleSubmit: (paletteName: string, emoji: string) => void;
  hideForm: () => void;
};

const PaletteMetaForm: React.FC<PaletteMetaFormProps> = ({
  palettes,
  handleSubmit,
  hideForm
}) => {
  const [newPaletteName, setNewPaletteName] = React.useState('');
  const [stage, setStage] = React.useState<'form' | 'emoji' | undefined>(
    'form'
  );

  const handleClose = () => {
    hideForm();
  };

  useEffect(() => {
    ValidatorForm.addValidationRule('isPaletteNameUnique', (value: string) => {
      return palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      );
    });
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === 'newPaletteName') {
      setNewPaletteName(event.target.value);
    }
  };

  const showEmojiPicker = () => {
    setStage('emoji');
  };

  const savePalette = (emoji: BaseEmoji) => {
    handleSubmit(newPaletteName, emoji.native);
    setStage(undefined);
  };

  return (
    <div>
      <Dialog open={stage === 'emoji'} onClose={handleClose}>
        <DialogTitle id="form-dialog-title">Choose a Palette Emoji</DialogTitle>
        <Picker onSelect={savePalette} title="Pick a Palette Emoji" />
      </Dialog>
      <Dialog
        open={stage === 'form'}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Choose A Palette Name</DialogTitle>
        <ValidatorForm onSubmit={showEmojiPicker}>
          <DialogContent>
            <DialogContentText>
              Please enter a name for your new beautiful palette, Make sure it's
              unique!
            </DialogContentText>
            <TextValidator
              name="newPaletteName"
              value={newPaletteName}
              label="Palette Name"
              onChange={handleChange}
              fullWidth
              margin="normal"
              validators={['required', 'isPaletteNameUnique']}
              errorMessages={['Enter Palette Name', 'Name already used']}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button variant="contained" color="primary" type="submit">
              Save Palette
            </Button>
          </DialogActions>
        </ValidatorForm>
      </Dialog>
    </div>
  );
};

export default PaletteMetaForm;
