import { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import styles from './styles';
import { withStyles, WithStyles } from '@material-ui/styles';
import { ColorBoxProps } from '../Types/ComponentProps.type';
import { ColorBoxStates } from '../Types/ComponentStates.type';

type Props = ColorBoxProps & WithStyles<typeof styles>;

class ColorBox extends Component<Props, ColorBoxStates> {
  constructor(props: Props) {
    super(props);
    this.state = { copied: false };
    this.changeCopyState = this.changeCopyState.bind(this);
  }

  changeCopyState() {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500);
    });
  }

  render() {
    const { name, color } = this.props.color;
    const { moreUrl, showLink, classes } = this.props;
    const { copied } = this.state;

    return (
      <CopyToClipboard text={color} onCopy={this.changeCopyState}>
        <div className={classes.ColorBox} style={{ background: color }}>
          <div
            style={{ background: color }}
            className={`${classes.copyOverlay} ${
              copied && classes.showcopyOverlay
            }`}
          />
          <div
            className={`${classes.copyMessage} ${
              copied && classes.showCopyMessage
            }`}
          >
            <h1>copied!</h1>
            <p className={classes.copyText}>{color}</p>
          </div>
          <div className="copy-container">
            <div className={classes.boxContent}>
              <span className={classes.colorName}>{name}</span>
            </div>
            <button className={classes.copyButton}>Copy</button>
          </div>
          {showLink && (
            <Link to={moreUrl} onClick={(e) => e.stopPropagation()}>
              <span className={classes.seeMore}>MORE</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default withStyles(styles)(ColorBox);
