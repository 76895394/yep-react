import React, {PureComponent} from 'react'
import {Popup, Button} from "@jdcfe/lrc-m"
import Page from "../../components/Page";
import WhiteSpace from "../../components/WhiteSpace";
import './index.scss'
export default class Demo extends PureComponent {

  constructor() {
    super()
    this.handleToggleShow = this.handleToggleShow.bind(this)
    this.handleToggleSlideDownShow = this.handleToggleSlideDownShow.bind(this)
    this.handleToggleSlideRightShow = this.handleToggleSlideRightShow.bind(this)
    this.state = {
      show: false,
      slideDownShow:false,
      slideRightShow:false,
    }
  }

  handleToggleShow() {
    this.setState({
      show: !this.state.show
    })
  }

  handleToggleSlideDownShow() {
    this.setState({
      slideDownShow: !this.state.slideDownShow
    })
  }
  handleToggleSlideRightShow() {
    this.setState({
      slideRightShow: !this.state.slideRightShow
    })
  }


  render() {
    return (
      <Page title="Popup">
        <WhiteSpace/>
        <Button type="primary" onClick={this.handleToggleShow}>显示</Button>
        <WhiteSpace/>
        <Button onClick={this.handleToggleSlideDownShow}>从上向下显示</Button>
        <WhiteSpace/>
        <Button type="primary" onClick={this.handleToggleSlideRightShow}>从右向左显示</Button>
        <WhiteSpace/>
        <Popup show={this.state.show} onCancel={this.handleToggleShow}>
          <div className="ul">
            <div className="cur" onClick={() => {alert('未婚')}}>未婚</div>
            <div className="" onClick={() => {alert('已婚')}}>已婚</div>
            <div className="" onClick={() => {alert('离异')}}>离异</div>
          </div>
        </Popup>

        <Popup show={this.state.slideDownShow} onCancel={this.handleToggleSlideDownShow} popupTransition="slide-down">
          <div className="up">
            <div className="cur" onClick={() => {alert('未婚')}}>未婚</div>
          </div>
        </Popup>
        <Popup show={this.state.slideRightShow} onCancel={this.handleToggleSlideRightShow} popupTransition="slide-right">
          <div className="right">
            <div className="cur" onClick={() => {alert('未婚')}}>未婚</div>
          </div>
        </Popup>
      </Page>
    );
  }
}
