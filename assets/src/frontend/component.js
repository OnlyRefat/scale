import React from 'react';
import ReactDOM from 'react-dom';
import SideBar from './sidebar.js';
import TopBar from './topbar.js';
const documentRoot = document.getElementById('component');

class App extends React.Component {
  render() {
    return (<div>
        <section className="vbox">
            <TopBar />
            <section>
                <section className="hbox stretch">
                    <SideBar />
                </section>
            </section>
        </section>
    </div>);
  }
}
ReactDOM.render(<App/>, documentRoot);


