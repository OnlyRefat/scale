import React from 'react';
import ReactDOM from 'react-dom';

export default class SideBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<div>
    <header className="bg-white header header-md navbar navbar-fixed-top-xs box-shadow">
      <div className="navbar-header aside-md dk">
        <a className="btn btn-link visible-xs" data-toggle="class:nav-off-screen,open" data-target="#nav,html">
          <i className="fa fa-bars"></i>
        </a>
        <a href="index.html" className="navbar-brand">
        <img src={"../../../../scale/assets/dist/img/logo.png"} className="m-r-sm" alt="scale" />
          <span className="hidden-nav-xs">Scale</span>
        </a>
        <a className="btn btn-link visible-xs" data-toggle="dropdown" data-target=".user">
          <i className="fa fa-cog"></i>
        </a>
      </div>
      <ul className="nav navbar-nav hidden-xs">
        <li className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown">
            <i className="i i-grid"></i>
          </a>
          <section className="dropdown-menu aside-lg bg-white on animated fadeInLeft">
            <div className="row m-l-none m-r-none m-t m-b text-center">
              <div className="col-xs-4">
                <div className="padder-v">
                  <a href="#">
                    <span className="m-b-xs block">
                      <i className="i i-mail i-2x text-primary-lt"></i>
                    </span>
                    <small className="text-muted">Mailbox</small>
                  </a>
                </div>
              </div>
              <div className="col-xs-4">
                <div className="padder-v">
                  <a href="#">
                    <span className="m-b-xs block">
                      <i className="i i-calendar i-2x text-danger-lt"></i>
                    </span>
                    <small className="text-muted">Calendar</small>
                  </a>
                </div>
              </div>
              <div className="col-xs-4">
                <div className="padder-v">
                  <a href="#">
                    <span className="m-b-xs block">
                      <i className="i i-map i-2x text-success-lt"></i>
                    </span>
                    <small className="text-muted">Map</small>
                  </a>
                </div>
              </div>
              <div className="col-xs-4">
                <div className="padder-v">
                  <a href="#">
                    <span className="m-b-xs block">
                      <i className="i i-paperplane i-2x text-info-lt"></i>
                    </span>
                    <small className="text-muted">Trainning</small>
                  </a>
                </div>
              </div>
              <div className="col-xs-4">
                <div className="padder-v">
                  <a href="#">
                    <span className="m-b-xs block">
                      <i className="i i-images i-2x text-muted"></i>
                    </span>
                    <small className="text-muted">Photos</small>
                  </a>
                </div>
              </div>
              <div className="col-xs-4">
                <div className="padder-v">
                  <a href="#">
                    <span className="m-b-xs block">
                      <i className="i i-clock i-2x text-warning-lter"></i>
                    </span>
                    <small className="text-muted">Timeline</small>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </li>
      </ul>
      <form className="navbar-form navbar-left input-s-lg m-t m-l-n-xs hidden-xs" role="search">
        <div className="form-group">
          <div className="input-group">
            <span className="input-group-btn">
              <button type="submit" className="btn btn-sm bg-white b-white btn-icon"><i className="fa fa-search"></i></button>
            </span>
            <input type="text" className="form-control input-sm no-border" placeholder="Search apps, projects..." />            
          </div>
        </div>
      </form>
      <ul className="nav navbar-nav navbar-right m-n hidden-xs nav-user user">
        <li className="hidden-xs">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown">
            <i className="i i-chat3"></i>
            <span className="badge badge-sm up bg-danger count">2</span>
          </a>
          <section className="dropdown-menu aside-xl animated flipInY">
            <section className="panel bg-white">
              <div className="panel-heading b-light bg-light">
                <strong>You have <span className="count">2</span> notifications</strong>
              </div>
              <div className="list-group list-group-alt">
                <a href="#" className="media list-group-item">
                  <span className="pull-left thumb-sm">
                    <img src={"../../../../scale/assets/dist/img/logo.png"} alt="..." className="img-circle" />
                  </span>
                  <span className="media-body block m-b-none">
                    Use awesome animate.css<br />
                    <small className="text-muted">10 minutes ago</small>
                  </span>
                </a>
                <a href="#" className="media list-group-item">
                  <span className="media-body block m-b-none">
                    1.0 initial released<br />
                    <small className="text-muted">1 hour ago</small>
                  </span>
                </a>
              </div>
              <div className="panel-footer text-sm">
                <a href="#" className="pull-right"><i className="fa fa-cog"></i></a>
                <a href="#notes" data-toggle="class:show animated fadeInRight">See all the notifications</a>
              </div>
            </section>
          </section>
        </li>
        <li className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown">
            <span className="thumb-sm avatar pull-left">
              <img src={"../../../../scale/assets/dist/img/a0.png"}  alt="..." />
            </span>
            John.Smith <b className="caret"></b>
          </a>
          <ul className="dropdown-menu animated fadeInRight">            
            <li>
              <span className="arrow top"></span>
              <a href="#">Settings</a>
            </li>
            <li>
              <a href="profile.html">Profile</a>
            </li>
            <li>
              <a href="#">
                <span className="badge bg-danger pull-right">3</span>
                Notifications
              </a>
            </li>
            <li>
              <a href="docs.html">Help</a>
            </li>
            <li className="divider"></li>
            <li>
              <a href="modal.lockme.html" data-toggle="ajaxModal" >Logout</a>
            </li>
          </ul>
        </li>
      </ul>      
    </header>
    </div>);
  }
}