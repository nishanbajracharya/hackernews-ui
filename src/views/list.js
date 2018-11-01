import React from "react";
import http from "./http";
import { Link } from "react-router-dom";

import Arrow from "../components/arrow";
import Loading, { LoadingSVG } from "../components/loading";

const SwitchPage = ({ page = 0, changePage = f => f }) => (
  <div className="pages">
    <Arrow onClick={() => changePage(-1)} />
    {page + 1}
    <Arrow className="forward" onClick={() => changePage(1)} />
  </div>
);

class ListItem extends React.PureComponent {
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
      <div className="list-item">
        {this.state.loading && <Loading className="centered" />}
        {this.state.data.id && (
          <div>
            <Link
              to={{
                state: { data: this.state.data },
                pathname: `/${this.props.id}`
              }}
            >
              {this.state.data.title}
            </Link>
          </div>
        )}
      </div>
    );
  }
}

class List extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      page: 0,
      pageSize: 50,
      loading: true,
      list: []
    };
  }

  async componentDidMount() {
    const list = await http.get("/topstories.json");

    this.setState({ list, loading: false });
  }

  changePage = (by = 1) => {
    if (this.state.page === 0 && by === -1) return;
    this.setState({ page: this.state.page + by });
  };

  render() {
    return (
      <div>
        <h2 className="main-title">
          Hacker News Stories
          <SwitchPage page={this.state.page} changePage={this.changePage} />
        </h2>
        {this.state.loading && (
          <div className="container">
            <LoadingSVG />
            <p>Fetching Stories</p>
          </div>
        )}
        <div className="container">
          {this.state.list
            .slice(
              this.state.page * this.state.pageSize,
              (this.state.page + 1) * this.state.pageSize
            )
            .map(id => <ListItem id={id} key={id} />)}
        </div>
      </div>
    );
  }
}

export default List;
