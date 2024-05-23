import React, { useState, useEffect } from "react";
import { Layout, Menu } from "antd";
import {
  NumberOutlined,
  HomeOutlined,
  StarOutlined,
  SettingOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import logo from "./kindpng_2878923.png";

const { Sider } = Layout;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenWidth < 768) {
      setCollapsed(true);
    } else {
      setCollapsed(false);
    }
  }, [screenWidth]);

  return (
    <Layout hasSider>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={toggleCollapsed}
        trigger={
          screenWidth > 768 ? (
            collapsed ? (
              <MenuUnfoldOutlined className="trigger" />
            ) : (
              <MenuFoldOutlined className="trigger" />
            )
          ) : null
        }
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          width: 400, // Adjust the width here
        }}
      >
        <div className={`text-3xl font-bold text-slate-200  `}>
          <img
            src={logo}
            className={` w-auto ${
              collapsed ? "mx-4 my-10 h-10" : "h-20.5 w-auto p-5 "
            }`}
            alt="Logo"
          />
          {!collapsed && <span className="mx-2">Ghar Karma</span>}
        </div>
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<NumberOutlined />}>
            <Link to="/numerology">{collapsed ? "" : "Numerology"}</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<HomeOutlined />}>
            <Link to="/vastu">{collapsed ? "" : "Vastu"}</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<StarOutlined />}>
            <Link to="/astro">{collapsed ? "" : "Astro"}</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<SettingOutlined />}>
            <Link to="/settings">{collapsed ? "" : "Settings"}</Link>
          </Menu.Item>
        </Menu>
      </Sider>
    </Layout>
  );
};

export default Sidebar;
