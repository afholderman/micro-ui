import React, { useState, Suspense, lazy } from "react";
import { Row, Menu } from "antd";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import "antd/dist/antd.css";
const ToDoModule = lazy(() => import("./modules/ToDo"));
const NoteModule = lazy(() => import("./modules/Notes"));
const MenuItem = Menu.Item;

export enum Routes {
  HOME = "/",
  TODO = "/todos",
  NOTE = "/notesdotnet"
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
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path={Routes.HOME} render={() => <div>Home</div>} />
            <Route path={Routes.TODO} component={ToDoModule} />
            <Route path={Routes.NOTE} component={NoteModule} />
          </Switch>
        </Suspense>
      </Row>
    </Router>
  );
};

export default App;
