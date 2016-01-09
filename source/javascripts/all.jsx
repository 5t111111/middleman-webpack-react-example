import React from "react";
import ReactDom from "react-dom";

class ExampleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false
    }
  }

  styles() {
    return {
      container: {
        fontFamily: "helvetica, arial, 'hiragino kaku gothic pro', meiryo, 'ms pgothic', sans-serif",
        fontSize: 11
      },
      normal: {
        display: "inline-block",
        background: "#3b5998",
        margin: "10px",
        padding: "0px 5px",
        borderRadius: 2,
        cursor: "pointer",
        lineHeight: "20px",
        color: "#fff"
      },
      hover: {
        background: "#444"
      }
    };
  }

  onMouseEnter() {
    this.setState({hovered: true});
  }

  onMouseLeave() {
    this.setState({hovered: false});
  }

  render() {
    const styles = this.styles();
    const buttonStyle = this.state.hovered ? {...styles.normal, ...styles.hover} : styles.normal;
    return (
      <span style={styles.container}>
        <span style={buttonStyle} onMouseEnter={::this.onMouseEnter} onMouseLeave={::this.onMouseLeave}>
          Button
        </span>
      </span>
    );
  }
}

ReactDom.render(
  <ExampleComponent />,
  document.getElementById("example-component")
);
