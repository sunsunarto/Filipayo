"use client";
import React, { useState } from 'react';
import { Layout, Menu, Button, Typography, Card, Row, Col, Space, Drawer, List } from 'antd';
import { MailOutlined, PhoneOutlined, PushpinOutlined, MenuOutlined, SolutionOutlined, ShoppingCartOutlined, CloudServerOutlined, CheckCircleOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Text } = Typography;


const App = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onCloseDrawer = () => {
    setDrawerVisible(false);
  };

  const companyProfileServices = [
    "Desain UI/UX responsif (mobile dan Desktop)",
    "Pembuatan hingga 5 halaman (Home, About, Services, Gallery, Contact)",
    "Formulir kontak yang terintegrasi dengan email",
    "Optimasi SEO dasar",
    "Pengujian dan revisi (maks. 4 kali)",
    "Panduan penggunaan website"
  ];

  const eCommerceServices = [
    "Desain UI/UX responsif",
    "Pembuatan hingga 10 halaman (Home, Shop, Product Detail, Cart, Checkout, dll.)",
    "Manajemen produk (tambah, ubah, hapus)",
    "Optimasi SEO dasar",
    "Pengujian dan revisi (maks. 3 kali)",
    "Panduan penggunaan website"
  ];

  const customWebAppServices = [
    "Analisis kebutuhan & requirement gathering",
    "Desain UI/UX responsif sesuai kebutuhan klien",
    "Pengembangan fitur khusus (custom system)",
    "Integrasi dengan API pihak ketiga",
    "Panduan penggunaan sistem",
    "Support teknis selama 1 bulan setelah launching",
    "Pengujian menyeluruh & revisi (maks. 4 kali)"
  ];

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.24.16/antd.min.css"
      />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />

      <style>
        {`
          body {
            font-family: 'Inter', sans-serif;
            background-color: #000; /* Main background color */
          }
          #components-layout-demo-top .logo {
            float: left;
            width: 120px;
            height: 31px;
            margin: 16px 24px 16px 0;
            background: rgba(255, 255, 255, 0.2);
          }
          .ant-row-rtl #components-layout-demo-top .logo {
            float: right;
            margin: 16px 0 16px 24px;
          }
          .site-layout-background {
            background: #fff;
          }
          .ant-layout-header {
            background-color: #000 !important; /* Ensure header is black */
            padding: 0 50px !important;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
          }
          .ant-menu {
            background-color: #000 !important; /* Ensure menu is black */
          }
          .ant-menu-item {
            color: rgba(255, 255, 255, 0.85) !important;
          }
          .ant-menu-item-selected {
            color: #EBED8D !important; /* Accent color for selected item */
            background-color: rgba(255, 255, 255, 0.1) !important;
          }
          .ant-menu-item:hover {
            color: #0060AF !important; /* Main brand color on hover */
          }
          .ant-layout-content {
            padding: 0;
          }
          .site-layout-content {
            min-height: calc(100vh - 134px); /* Adjust height based on header/footer */
            text-align: center;
          }
          .hero-section {
            background: linear-gradient(to right, #0060AF, #336699); /* Blend of brand colors */
            color: white;
            padding: 80px 20px;
            text-align: center;
            border-bottom-left-radius: 40px;
            border-bottom-right-radius: 40px;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
          }
          .service-item-container {
            background: #1a1a1a; /* Dark gray for list item containers */
            color: white;
            border-radius: 15px;
            padding: 30px;
            margin-bottom: 32px; /* Space between list items */
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
            transition: all 0.3s ease-in-out;
            border-left: 5px solid; /* Use border-left for list items */
            text-align: left; /* Align text to left */
          }
          .service-item-container:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.6);
          }
          .about-section {
            background-color: #0d0d0d; /* Slightly lighter black for about section */
            color: white;
            padding: 80px 20px;
            border-top-left-radius: 40px;
            border-top-right-radius: 40px;
            box-shadow: inset 0 8px 16px rgba(0, 0, 0, 0.3);
          }
          .call-to-action-section {
            background: linear-gradient(to right, #336699, #0060AF); /* Another blend for CTA */
            color: white;
            padding: 80px 20px;
            text-align: center;
            border-bottom-left-radius: 40px;
            border-bottom-right-radius: 40px;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
          }
          .contact-card {
            background: #1a1a1a;
            color: white;
            border-radius: 15px;
            padding: 30px;
            text-align: center;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
            transition: all 0.3s ease-in-out;
            border-top: 5px solid;
          }
          .contact-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.6);
          }
          .ant-layout-footer {
            background-color: #000 !important;
            color: rgba(255, 255, 255, 0.85);
            text-align: center;
            padding: 24px 50px;
            border-top-left-radius: 15px;
            border-top-right-radius: 15px;
          }

          /* Swiper Custom Styling removed */

          /* Responsive adjustments for smaller screens */
          @media (max-width: 768px) {
            .ant-layout-header {
              padding: 0 20px !important;
            }
            .ant-menu-horizontal {
              display: none !important; /* Hide horizontal menu on small screens */
            }
            .mobile-menu-button {
              display: block !important; /* Show hamburger button on small screens */
            }
            .hero-section, .service-item-container, .about-section, .call-to-action-section, .contact-card {
              padding: 40px 15px;
            }
            .ant-layout-footer {
              padding: 20px;
            }
          }
          /* Hide hamburger menu on larger screens */
          @media (min-width: 769px) {
            .mobile-menu-button {
              display: none !important;
            }
          }
        `}
      </style>

      <Layout style={{ minHeight: '100vh', backgroundColor: '#000' }}>

        <Header>
          <div className="logo" />
          <Row justify="space-between" align="middle">
            <Col>
              <Title level={1} style={{ color: '#0060AF', margin: 0, padding: '10px 0' }}>Filipayo</Title>
            </Col>
            <Col>
              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                <Menu.Item key="1"><a href="#home">Home</a></Menu.Item>
                <Menu.Item key="2"><a href="#about">About Us</a></Menu.Item>
                <Menu.Item key="3"><a href="#services">Services</a></Menu.Item>
                <Menu.Item key="4"><a href="#contact">Contact</a></Menu.Item>
              </Menu>

              <Button
                type="text"
                className="mobile-menu-button"
                onClick={showDrawer}
                style={{ color: '#EBED8D', fontSize: '24px' }}
              >
                <MenuOutlined />
              </Button>
            </Col>
          </Row>
        </Header>

        <Drawer
          title={<span style={{ color: '#0060AF', fontWeight: 'bold' }}>Filipayo Menu</span>}
          placement="right"
          closable={true}
          onClose={onCloseDrawer}
          visible={drawerVisible}
          key="drawer"
          bodyStyle={{ backgroundColor: '#1a1a1a', padding: 0 }}
          headerStyle={{ backgroundColor: '#000', borderBottom: '1px solid rgba(255,255,255,0.1)' }}
        >
          <Menu theme="dark" mode="vertical" defaultSelectedKeys={['1']} onClick={onCloseDrawer}>
            <Menu.Item key="1"><a href="#home">Home</a></Menu.Item>
            <Menu.Item key="2"><a href="#about">About Us</a></Menu.Item>
            <Menu.Item key="3"><a href="#services">Services</a></Menu.Item>
            <Menu.Item key="4"><a href="#contact">Contact</a></Menu.Item>
          </Menu>
        </Drawer>

        <Content className="site-layout-content">

          <section id="home" className="hero-section">
            <Title level={2} style={{ color: 'white', fontSize: '3.5em', fontWeight: 'bold' }}>
              Find your passion and make your dream came true with <span style={{ color: '#EBED8D' }}>Filipayo</span>
            </Title>
            <Paragraph style={{ color: 'white', fontSize: '1.5em', maxWidth: '800px', margin: '20px auto' }}>
              Transforming ideas into stunning, high-performing websites.
              We build digital experiences that drive growth and connect with your audience.
            </Paragraph>
            <Button
              href="#contact"
              type="primary"
              size="large"
              style={{
                backgroundColor: 'white',
                color: '#0060AF',
                borderColor: 'white',
                height: 'auto',
                padding: '15px 40px',
                borderRadius: '50px',
                fontSize: '1.2em',
                fontWeight: 'bold',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
              }}
              className="hover:scale-105 transition duration-300"
            >
              Get Your Free Consultation
            </Button>
          </section>

          <section id="about" className="about-section">
            <Row gutter={32} align="middle" justify="center">
              <Col xs={24} lg={12} style={{ textAlign: 'left' }}>
                <Title level={3} style={{ color: 'white', marginBottom: 20, fontSize: '2.5em' }}>About Filipayo</Title>
                <Paragraph style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1em', lineHeight: '1.8' }}>
                  Filipayo Tech offers website development solutions that support the digitalization of businesses in Indonesia, from micro-enterprises to startups and large corporations. Amidst the rapid growth of digital demand, we believe every business deserves an online platform that reflects their identity and values. While many small businesses find the digital world "complicated" and demanding a 24/7 presence, we prove that websites can be simple, efficient, and impactful. Using modern technologies like React, NextJS, Tailwind CSS, and various supporting libraries, we build high-quality websites—from company profiles to online shopping features—with a strong commitment to ensuring that customers are at the heart of every solution we create.
                </Paragraph>
              </Col>
              <Col xs={24} lg={12} style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <img
                  src="https://placehold.co/500x300/0060AF/ffffff?text=Filipayo+Team"
                  alt="Filipayo Team"
                  style={{ borderRadius: '15px', maxWidth: '100%', height: 'auto', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)' }}
                  onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/500x300/0060AF/ffffff?text=Filipayo+Image+Error"; }}
                />
              </Col>
            </Row>
          </section>

          <section id="services" style={{ padding: '80px 20px', backgroundColor: '#000' }}>
            <Title level={3} style={{ color: 'white', marginBottom: 50, fontSize: '2.5em' }}>Our Core Services</Title>
            
            <div className="service-item-container" style={{ borderColor: '#0060AF' }}>
              <Space direction="horizontal" align="start" size="middle">
                <SolutionOutlined style={{ fontSize: '3em', color: '#0060AF' }} />
                <div>
                  <Title level={4} style={{ color: 'white', margin: 0 }}>Paket Company Profile/Portofolio (Rp. 1.700.000,-)</Title>
                  <List
                    dataSource={companyProfileServices}
                    renderItem={item => (
                      <List.Item style={{ borderBottom: 'none', padding: '8px 0' }}>
                        <List.Item.Meta
                          avatar={<CheckCircleOutlined style={{ color: '#EBED8D' }} />}
                          title={<Text style={{ color: 'rgba(255,255,255,0.85)' }}>{item}</Text>}
                        />
                      </List.Item>
                    )}
                    style={{ color: 'white', marginTop: '10px' }}
                  />
                </div>
              </Space>
            </div>

            <div className="service-item-container" style={{ borderColor: '#EBED8D' }}>
              <Space direction="horizontal" align="start" size="middle">
                <ShoppingCartOutlined style={{ fontSize: '3em', color: '#EBED8D' }} />
                <div>
                  <Title level={4} style={{ color: 'white', margin: 0 }}>Paket E-Commerce/Website Penjualan (Rp. 2.050.000,-)</Title>
                  <List
                    dataSource={eCommerceServices}
                    renderItem={item => (
                      <List.Item style={{ borderBottom: 'none', padding: '8px 0' }}>
                        <List.Item.Meta
                          avatar={<CheckCircleOutlined style={{ color: '#0060AF' }} />}
                          title={<Text style={{ color: 'rgba(255,255,255,0.85)' }}>{item}</Text>}
                        />
                      </List.Item>
                    )}
                    style={{ color: 'white', marginTop: '10px' }}
                  />
                </div>
              </Space>
            </div>

            <div className="service-item-container" style={{ borderColor: '#FF6F00' }}>
              <Space direction="horizontal" align="start" size="middle">
                <CloudServerOutlined style={{ fontSize: '3em', color: '#FF6F00' }} />
                <div>
                  <Title level={4} style={{ color: 'white', margin: 0 }}>Paket Custom Web Application (Rp. 1.950.000,-)</Title>
                  <List
                    dataSource={customWebAppServices}
                    renderItem={item => (
                      <List.Item style={{ borderBottom: 'none', padding: '8px 0' }}>
                        <List.Item.Meta
                          avatar={<CheckCircleOutlined style={{ color: '#EBED8D' }} />}
                          title={<Text style={{ color: 'rgba(255,255,255,0.85)' }}>{item}</Text>}
                        />
                      </List.Item>
                    )}
                    style={{ color: 'white', marginTop: '10px' }}
                  />
                </div>
              </Space>
            </div>
          </section>
        
          <section className="call-to-action-section">
            <Title level={3} style={{ color: 'white', marginBottom: 20, fontSize: '2.5em' }}>Ready to Elevate Your Online Presence?</Title>
            <Paragraph style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.2em', maxWidth: '800px', margin: '20px auto' }}>
              Let's create something extraordinary together.
              Contact us today for a personalized quote.
            </Paragraph>
            <Button
              href="#contact"
              type="primary"
              size="large"
              style={{
                backgroundColor: 'white',
                color: '#0060AF',
                borderColor: 'white',
                height: 'auto',
                padding: '15px 40px',
                borderRadius: '50px',
                fontSize: '1.2em',
                fontWeight: 'bold',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
              }}
              className="hover:scale-105 transition duration-300"
            >
              Start Your Project Now
            </Button>
          </section>

          <section className="projects-section">
            <Title level={3} style={{ color: 'white', marginBottom: 50, fontSize: '2.5em' }}>Project</Title>
            <div className="projets">
              <div className="1" style={{ padding: "10px", display: "flex", flexDirection: "row", alignItems: "top", gap: "20px" }}>
                <img style={{ width: '50%', borderRadius: '10px' }} src="../Screenshot 2025-03-27 101644.png" alt="" />
                <div className="text" style={{ textAlign: "left" }}>
                  <Title level={1} style={{ color: 'white', fontSize: '2.5em' }}>Socio</Title>
                  <Text style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.2em', maxWidth: '800px', margin: '20px auto' }}> The application named "socio" is a social media platform designed for user interaction and content sharing. It features a clean and structured interface, enabling users to post updates, add multimedia, and engage with trending discussions.</Text>
                  <div className="button" style={{ marginTop: '20px' }}>
                    <Button type="primary" href ="https://quiz-16-sunaryo.vercel.app/">Website</Button>
                  </div>
                </div>
              </div>
              <div className="2" style={{ padding: "10px", display: "flex", flexDirection: "row", alignItems: "top", gap: "20px" }}>
                <img style={{ width: '50%', borderRadius: '10px' }} src="../Screenshot 2025-03-27 105058.png" alt="" />
                <div className="text" style={{ textAlign: "left" }}>
                  <Title level={1} style={{ color: 'white', fontSize: '2.5em' }}>Cerita Anekdot</Title>
                  <Text style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.2em', maxWidth: '800px', margin: '20px auto' }}> The application appears to be a story-sharing website titled "Cerita Anekdot" (Anecdote Stories). It features a clean and user-friendly interface, allowing users to share their stories and engage in entertainment discussions.</Text>
                  <div className="button" style={{ marginTop: '20px' }}>
                    <Button type="primary" href ="https://projekbi-3i6x.vercel.app/">Website</Button>
                  </div>
                </div>
              </div>
              <div className="3" style={{ padding: "10px", display: "flex", flexDirection: "row", alignItems: "top", gap: "20px" }}>
                <img style={{ width: '50%', borderRadius: '10px' }} src="../Screenshot 2025-03-27 110325.png" alt="" />
                <div className="text" style={{ textAlign: "left" }}>
                  <Title level={1} style={{ color: 'white', fontSize: '2.5em' }}>Dessert Shop</Title>
                  <Text style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.2em', maxWidth: '800px', margin: '20px auto' }}>The shop offers various desserts with images, names, and prices displayed. You also can buy a dessert by clicking the "Comfirm Order" button.</Text>
                  <div className="button" style={{ marginTop: '20px' }}>
                    <Button type="primary" href ="https://post-management-app-939m.vercel.app/">Website</Button>
                  </div>
                </div>
              </div>
              <div className="4" style={{ padding: "10px", display: "flex", flexDirection: "row", alignItems: "top", gap: "20px" }}>
                <img style={{ width: '50%', borderRadius: '10px' }} src="../Screenshot 2025-03-27 112937.png" alt="" />
                <div className="text" style={{ textAlign: "left" }}>
                  <Title level={1} style={{ color: 'white', fontSize: '2.5em' }}>User Management Post</Title>
                  <Text style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.2em', maxWidth: '800px', margin: '20px auto' }}>A Post Management App with a clean and simple interface designed for handling user-generated posts.</Text>
                  <div className="button" style={{ marginTop: '20px' }}>
                    <Button type="primary" href ="https://projekbi-3i6x.vercel.app/">Website</Button>
                  </div>
                </div>
              </div>
              <div className="5" style={{ padding: "10px", display: "flex", flexDirection: "row", alignItems: "top", gap: "20px" }}>
                <img style={{ width: '50%', borderRadius: '10px' }} src="../Screenshot 2025-03-27 113854.png" alt="" />
                <div className="text" style={{ textAlign: "left" }}>
                <Title level={1} style={{ color: 'white', fontSize: '2.5em' }}>User Authentication System</Title>
                  <Text style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.2em', maxWidth: '800px', margin: '20px auto' }}>The application appears to be a user-friendly form interface designed for registration and login. It features a blue background with white text for easy readability. Users can choose between two options they are. This is not connected to database.</Text>
                  <div className="button" style={{ marginTop: '20px' }}>
                    <Button type="primary" href ="https://user-authentication-system-ten.vercel.app/">Website</Button>
                  </div>
                </div>
              </div>
              <div className="6" style={{ padding: "10px", display: "flex", flexDirection: "row", alignItems: "top", gap: "20px" }}>
                <img style={{ width: '50%', borderRadius: '10px' }} src="../Screenshot 2025-03-27 115030.png" alt="" />
                <div className="text" style={{ textAlign: "left" }}>
                  <Title level={1} style={{ color: 'white', fontSize: '2.5em' }}>Movie Collection</Title>
                  <Text style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.2em', maxWidth: '800px', margin: '20px auto' }}> The application appears to be a story-sharing website titled "Cerita Anekdot" (Anecdote Stories). It features a clean and user-friendly interface, allowing users to share their stories and engage in entertainment discussions.</Text>
                  <div className="button" style={{ marginTop: '20px' }}>
                    <Button type="primary" href ="https://projekbi-3i6x.vercel.app/">Website</Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="contact" style={{ padding: '80px 20px', backgroundColor: '#000' }}>
            <Title level={3} style={{ color: 'white', marginBottom: 50, fontSize: '2.5em' }}>Get in Touch</Title>
            <Row gutter={[32, 32]} justify="center">
              <Col xs={24} sm={12} lg={8}>
                <Card className="contact-card" style={{ borderColor: '#0060AF' }}>
                  <Space direction="vertical" align="center" size="middle">
                    <MailOutlined style={{ fontSize: '4em', color: '#0060AF' }} />
                    <Title level={4} style={{ color: 'white', margin: 0 }}>Email Us</Title>
                    <Paragraph style={{ color: 'rgba(255,255,255,0.7)' }}>
                      <a href="mailto:Filipayotech@gmail.com" style={{ color: '#EBED8D' }}>info@filipayo.com</a>
                    </Paragraph>
                  </Space>
                </Card>
              </Col>
              <Col xs={24} sm={12} lg={8}>
                <Card className="contact-card" style={{ borderColor: '#EBED8D' }}>
                  <Space direction="vertical" align="center" size="middle">
                    <PhoneOutlined style={{ fontSize: '4em', color: '#EBED8D' }} />
                    <Title level={4} style={{ color: 'white', margin: 0 }}>Call Us</Title>
                    <Paragraph style={{ color: 'rgba(255,255,255,0.7)' }}>
                      <a href="https://wa.me/+6285934427040" style={{ color: '#0060AF' }}>+6285934427040</a>
                      <a href="https://wa.me/+6281514495675" style={{ color: '#0060AF' }}>+6281514495675</a>
                    </Paragraph>
                  </Space>
                </Card>
              </Col>
              <Col xs={24} sm={12} lg={8}>
                <Card className="contact-card" style={{ borderColor: '#FF6F00' }}>
                  <Space direction="vertical" align="center" size="middle">
                    <PushpinOutlined style={{ fontSize: '4em', color: '#FF6F00' }} />
                    <Title level={4} style={{ color: 'white', margin: 0 }}>Visit Us</Title>
                    <Paragraph style={{ color: 'rgba(255,255,255,0.7)' }}>
                      123 Web Dev Street, Tech City, Digital Land
                    </Paragraph>
                  </Space>
                </Card>
              </Col>
            </Row>

          </section>
        </Content>

        <Footer>
          <Text style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1em' }}>&copy; {new Date().getFullYear()} Filipayo. All rights reserved.</Text>
          <div style={{ marginTop: '10px' }}>
            <a href="#" style={{ color: 'rgba(255, 255, 255, 0.6)', marginRight: '20px' }}>Privacy Policy</a>
            <a href="#" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>Terms of Service</a>
          </div>
        </Footer>
      </Layout>
    </>
  );
};

export default App;
