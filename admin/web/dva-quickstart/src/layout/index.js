import React, { Component } from 'react';
import {Layout} from 'antd';
import Silder from './silder.js';
import Head from './head.js';
import Main from './main.js';
import Foot from './foot.js';
import styles from './index.less';
import { connect } from 'dva';
const { Header, Sider, Content } = Layout;
class Maincontain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    componentWillMount(){
    }
    componentDidMount(){
    }
    render() {
        return (
            <div>
                <Layout className={styles.wrap}>
                  <Header className={styles.header} >
                      <Head that={this}></Head>
                  </Header>
                  <Layout>
                    <Sider className={styles.sider}>
                        <Silder></Silder>
                    </Sider>
                    <Content>
                        <div>
                            <Main ></Main>
                        </div>
                    </Content>
                  </Layout>
                  <Foot >
                  </Foot>
                </Layout>
            </div>
        );
    }
}
export default connect(({ layout }) => ({
  layout,
}))(Maincontain);