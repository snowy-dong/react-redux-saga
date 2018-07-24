import React from 'react';
import { connect } from 'react-redux'
import { Form, Input, Select, Button } from 'antd';
import { addWorks } from '../../actions'
import WorkList from '../../components/worksList/workList'
const FormItem = Form.Item;
const Option = Select.Option;
 class Add extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      text:''
    }
    this.input = null
    this.handleSubmit=this.handleSubmit.bind(this);
    this.hand = this.hand.bind(this);
  }
  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.text.trim()) {
      return
    }
    this.props.dispatch(addWorks(this.state.text))
    this.setState({text: ''})
  }
  hand(e){
    let value = e.target.value;
    this.setState({text: value})
  }
  render() {
    return (
      <div>
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <FormItem>
        <Input
          type="text"
          value={this.state.text}
          onChange={this.hand}
        />
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit">Submit</Button>
        </FormItem>
      </Form>
      <WorkList/>
      </div>
    );
  }
}
export default connect()(Add)