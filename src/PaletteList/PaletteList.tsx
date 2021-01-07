import {
  WithStyles,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText
} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import MiniPalette from '../MiniPalette/MiniPalette';
import { PaletteListProps } from '../Types/ComponentProps.type';
import Button from '@material-ui/core/Button';
import styles from './styles';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Dialog from '@material-ui/core/Dialog';
import { blue, red } from '@material-ui/core/colors';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import DialogTitle from '@material-ui/core/DialogTitle';

type PalleteListStates = {
  openDeleteDialog: boolean;
  deletetingId: string;
};

type Props = PaletteListProps & WithStyles<typeof styles>;

class PaletteList extends Component<Props, PalleteListStates> {
  constructor(props: Props) {
    super(props);
    this.state = {
      openDeleteDialog: false,
      deletetingId: ''
    };
    this.openDialog = this.openDialog.bind(this);
    this.closeDialog = this.closeDialog.bind(this);
    this.goToPalette = this.goToPalette.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  openDialog(id: string) {
    this.setState({ openDeleteDialog: true, deletetingId: id });
  }

  closeDialog() {
    this.setState({ openDeleteDialog: false, deletetingId: '' });
  }

  goToPalette(id: string) {
    this.props.history.push(`/palette/${id}`);
  }

  handleDelete() {
    this.props.deletePalette(this.state.deletetingId);
    this.closeDialog();
  }

  render() {
    const { palettes, classes } = this.props;
    const { openDeleteDialog } = this.state;

    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1 className={classes.heading}>React Colors</h1>
            <Link to="/palette/new">
              <Button
                variant="outlined"
                style={{ color: 'white', borderColor: 'white' }}
              >
                Create a New Palette
              </Button>
            </Link>
          </nav>
          <TransitionGroup className={classes.palettes}>
            {palettes.map((palette) => (
              <CSSTransition key={palette.id} classNames="item" timeout={300}>
                <MiniPalette
                  {...palette}
                  handleClick={this.goToPalette}
                  openDialog={this.openDialog}
                  id={palette.id}
                  key={palette.id}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
        <Dialog
          open={openDeleteDialog}
          aria-labelledby="delete-dialog-title"
          onClose={this.closeDialog}
        >
          <DialogTitle id="delete-dialog-title">
            Delete This Palette?
          </DialogTitle>
          <List>
            <ListItem button onClick={this.handleDelete}>
              <ListItemAvatar>
                <Avatar
                  style={{ backgroundColor: blue[100], color: blue[600] }}
                >
                  <CheckIcon></CheckIcon>
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Delete" />
            </ListItem>
            <ListItem button onClick={this.closeDialog}>
              <ListItemAvatar>
                <Avatar style={{ backgroundColor: red[100], color: red[600] }}>
                  <CloseIcon></CloseIcon>
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Cancel" />
            </ListItem>
          </List>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
