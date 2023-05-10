import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  MenuItem,
  TextField
} from '@mui/material';
import Dispatcher from 'common/Dispatcher';
import * as mainButtons from 'features/mainButtonsSlice';
import * as loadFenDialog from 'features/dialog/loadFenDialogSlice';
import * as progressDialog from 'features/dialog/progressDialogSlice';
import * as modeConst from 'features/mode/modeConst';
import * as variantConst from 'features/variant/variantConst';
import WsAction from 'features/ws/WsAction';

const LoadFenDialog = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const [variant, setVariant] = useState(variantConst.CLASSICAL);

  const handleVariantChange = (event: Event) => {
    setVariant(event.target.value);
  };

  const handleLoad = (event) => {
    event.preventDefault();
    dispatch(mainButtons.setAnalysis());
    dispatch(loadFenDialog.close());
    dispatch(progressDialog.open());
    Dispatcher.initGui(dispatch);
    let settings = {
      fen: event.target.elements.fen.value
    };
    if (variant === variantConst.CHESS_960) {
      settings.startPos = event.target.elements.startPos.value
    }
    WsAction.start(event.target.elements.variant.value, modeConst.FEN, settings);
  };

  return (
    <Dialog open={state.loadFenDialog.open} maxWidth="xs" fullWidth={true}>
      <DialogTitle>
        FEN String
        <IconButton onClick={() => dispatch(loadFenDialog.close())}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <form onSubmit={handleLoad}>
          <TextField
            id="LoadFenDialog-TextField-variant"
            select
            required
            fullWidth
            name="variant"
            label="Variant"
            variant="filled"
            value={variant}
            margin="normal"
            onChange={handleVariantChange}
          >
            <MenuItem
              id="LoadFenDialog-TextField-variant-MenuItem-classical"
              key={0}
              value="classical"
            >
              Classical
            </MenuItem>
            <MenuItem
              id="LoadFenDialog-TextField-variant-MenuItem-960"
              key={1}
              value="960"
            >
              Fischer Random 960
            </MenuItem>
            <MenuItem
              id="LoadFenDialog-TextField-variant-MenuItem-capablanca80"
              key={2}
              value="capablanca80"
            >
              Capablanca
            </MenuItem>
          </TextField>
          {
            variant === variantConst.CHESS_960
              ? <TextField
                  id="LoadFenDialog-TextField-startPos"
                  fullWidth
                  required
                  name="startPos"
                  label="Start position"
                  variant="filled"
                  helperText="Examples: RNBQKBNR, RBBKRQNN, NRKNBBQR, etc."
              />
              : null
          }
          <TextField
            id="LoadFenDialog-TextField-fen"
            fullWidth
            required
            name="fen"
            label="From FEN position"
            variant="filled"
            margin="normal"
          />
          <Button
            id="LoadFenDialog-Button-load"
            fullWidth
            type="submit"
            variant="outlined"
            sx={{ mt: 2 }}
          >
            Load
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LoadFenDialog;
