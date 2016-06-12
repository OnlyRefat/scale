import React from 'react';
import ReactDOM from 'react-dom';
import SideBar from './sidebar.js';
import TopBar from './topbar.js';
import DashBoard from './dashboard.js';
const documentRoot = document.getElementById('component');

class App extends React.Component {
  render() {
    return (
        <section className="vbox">
            <TopBar />
            <section>
                <section className="hbox stretch">
                    <SideBar />
                    <DashBoard />
                </section>
            </section>
        </section>
    );
  }
}
ReactDOM.render(<App/>, documentRoot);


