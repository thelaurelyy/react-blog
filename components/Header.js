import React from 'react';
import '../static/style/components/header.css';
import { Row, Col, Menu } from 'antd';
import { HomeOutlined, YoutubeOutlined, SmileOutlined } from '@ant-design/icons';

const Header = () => (
    <div className="header">
        <Row justify="center">
            <Col xs={24} sm={24} md={10} lg={15} xl={12}>
                <span className="header-logo">程序媛</span>
                <span className="header-txt">专注前端开发，学习技术胖的视频。</span>
            </Col>
            <Col xs={0} sm={0} md={14} lg={8} xl={6}>
                <Menu mode="horizontal">
                    <Menu.Item key="home">
                        <HomeOutlined /> 博客首页
                    </Menu.Item>
                    <Menu.Item key="video">
                        <YoutubeOutlined /> 视频教程
                    </Menu.Item>
                    <Menu.Item key="life">
                        <SmileOutlined /> 快乐生活
                    </Menu.Item>
                </Menu>
            </Col>
        </Row>
    </div>
)
export default Header;
