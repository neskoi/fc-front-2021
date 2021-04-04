import React from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '../../../components/Button/Primary'
import Label from './styles'

const Filters = (props) => {
  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      maxWidth="xl"
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Filtros</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <form>
            <div>
              <Label>Escola: </Label>
              <input />
            </div>
            <div>
              <Label>Série: </Label>
              <input />
            </div>
            <div>
              <Label>Valor: </Label>
              <input />
              <Label>de: </Label>
              <input />
              <Label>até: </Label>
              <input />
            </div>
            <div>
              <Label>Aluno: </Label>
              <input />
            </div>
          </form>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button name="Aplicar" onClick={props.handleClose} />
      </DialogActions>
    </Dialog>
  )
}

export default Filters