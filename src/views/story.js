import React from "react";

import http from "../utils/http";
import Close from "../components/close";
import Loading from "../components/loading";

function isDescendant(parent, child) {
  var node = child.parentNode;
  while (node != null) {
    if (node === parent) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
}

class Comment extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      loading: true,
      data: {}
    };
  }

  async componentDidMount() {
    const data = await http.get(`/item/${this.props.id}.json`);

    this.setState({ data, loading: false });
  }

  render() {
    return (
      <div className="comment">
        {this.state.loading && <Loading />}
        {this.state.data.id && (
          <div className="comment-body">
            <h4>{this.state.data.by}</h4>
            <div
              className="text"
              dangerouslySetInnerHTML={{ __html: this.state.data.text }}
            />
          </div>
        )}
        {this.state.data.kids &&
          this.state.data.kids.length > 0 && (
            <div className="comment-sub">
              {this.state.data.kids.map((id, key) => (
                <Comment id={id} key={key} />
              ))}
            </div>
          )}
      </div>
    );
  }
}

class Story extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      className: "",
      data: {
        kids: []
      }
    };
  }

  onRequestClose = (e, bypassKey = false) => {
    this.setState({ className: "" });
    setTimeout(
      () =>
        ((e && e.key === "Escape") || bypassKey) && this.props.history.goBack(),
      250
    );
  };

  componentDidMount() {
    setTimeout(() => this.setState({ className: "open" }));
    this.props.location &&
      this.props.location.state &&
      this.setState({
        data: this.props.location.state.data
      });

    document.addEventListener("keydown", this.onRequestClose);
  }

  onHandleOverlayClick = e => {
    if (e.target !== this.content && !isDescendant(this.content, e.target)) {
      this.onRequestClose(null, true);
    }
  };

  render() {
    return (
      <div className="modal-overlay" onClick={this.onHandleOverlayClick}>
        <div
          className={`modal-content ${this.state.className}`}
          ref={c => (this.content = c)}
        >
          <Close
            className="close"
            onClick={() => this.onRequestClose(null, true)}
          />
          <h2>
            <a href={this.state.data.url} target="_blank" rel="noopener noreferrer">
              {this.state.data.title}
            </a>
          </h2>
          {this.state.data.kids &&
            this.state.data.kids.length > 0 && (
              <div>
                <h4>Comments</h4>
                {this.state.data.kids.map((id, key) => (
                  <Comment id={id} key={key} />
                ))}
              </div>
            )}
        </div>
      </div>
    );
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.onRequestClose);
  }
}

export default Story;
