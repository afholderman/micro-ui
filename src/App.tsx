import React, { useState } from "react";
import { Row, Menu } from "antd";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "antd/dist/antd.css";
import { ToDoModule } from "./modules/ToDo";
const MenuItem = Menu.Item;

export enum Routes {
  HOME = "/",
  TODO = "/todo"
}

const App: React.FC = () => {
  const [current, setCurrent] = useState<string>("/");
  return (
    <Router>
      <Menu
        mode="horizontal"
        selectedKeys={[current]}
        defaultSelectedKeys={[Routes.HOME]}
        onClick={e => setCurrent(e.key)}
      >
        <MenuItem key={Routes.HOME}>
          <Link to={Routes.HOME}>Home</Link>
        </MenuItem>
        <MenuItem key={Routes.TODO}>
          <Link to={Routes.TODO}>ToDo</Link>
        </MenuItem>
      </Menu>
      <Row type="flex" justify="center" className="App">
        <Route exact path={Routes.HOME} render={() => <div>Home</div>} />
        <Route path={Routes.TODO} component={ToDoModule} />
      </Row>
    </Router>
  );
};

export default App;
