import React, { useState } from "react";
import { Row, Menu } from "antd";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import "antd/dist/antd.css";
import { ToDoModule } from "./modules/ToDo";
import { NoteModule } from "./modules/Notes";
const MenuItem = Menu.Item;

export enum Routes {
  HOME = "/",
  TODO = "/todos",
  NOTE = "/notes"
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
          <Link to={Routes.TODO}>ToDos</Link>
        </MenuItem>
        <MenuItem key={Routes.NOTE}>
          <Link to={Routes.NOTE}>Notes</Link>
        </MenuItem>
      </Menu>
      <Row type="flex" justify="center" className="App">
        <Switch>
          <Route exact path={Routes.HOME} render={() => <div>Home</div>} />
          <Route path={Routes.TODO} component={ToDoModule} />
          <Route path={Routes.NOTE} component={NoteModule} />
        </Switch>
      </Row>
    </Router>
  );
};

export default App;
