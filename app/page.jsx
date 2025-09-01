"use client";
import React, { useState } from 'react';
import { Layout, Menu, Button, Typography, Card, Row, Col, Space, Drawer, List } from 'antd';
import { MailOutlined, PhoneOutlined, PushpinOutlined, MenuOutlined, SolutionOutlined, ShoppingCartOutlined, CloudServerOutlined, CheckCircleOutlined, EyeOutlined, UserOutlined, StarFilled, GlobalOutlined, ExportOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Text } = Typography;


const projects = [
  {
    id: 1,
    title: "Socio",
    description: "The application named \"socio\" is a social media platform designed for user interaction and content sharing. It features a clean and structured interface, enabling users to post updates, add multimedia, and engage with trending discussions.",
    imageSrc: "../Screenshot 2025-03-27 101644.png",
    websiteLink: "https://quiz-16-sunaryo.vercel.app/"
  },
  {
    id: 2,
    title: "Cerita Anekdot",
    description: "The application appears to be a story-sharing website titled \"Cerita Anekdot\" (Anecdote Stories). It features a clean and user-friendly interface, allowing users to share their stories and engage in entertainment discussions.",
    imageSrc: "../Screenshot 2025-03-27 105058.png",
    websiteLink: "https://projekbi-3i6x.vercel.app/"
  },
  {
    id: 3,
    title: "Dessert Shop",
    description: "The shop offers various desserts with images, names, and prices displayed. You also can buy a dessert by clicking the \"Comfirm Order\" button.",
    imageSrc: "../Screenshot 2025-03-27 110325.png",
    websiteLink: "https://post-management-app-939m.vercel.app/"
  },
  {
    id: 4,
    title: "User Management Post",
    description: "A Post Management App with a clean and simple interface designed for handling user-generated posts.",
    imageSrc: "../Screenshot 2025-03-27 112937.png",
    websiteLink: "https://projekbi-3i6x.vercel.app/"
  },
  {
    id: 5,
    title: "User Authentication System",
    description: "The application appears to be a user-friendly form interface designed for registration and login. It features a blue background with white text for easy readability. Users can choose between two options they are. This is not connected to database.",
    imageSrc: "../Screenshot 2025-03-27 113854.png",
    websiteLink: "https://user-authentication-system-ten.vercel.app/"
  },
  {
    id: 6,
    title: "Movie Collection",
    description: "this is a website about movie collection. this website is not connected to API (Application Programming Interface). you can search any movie you want. but you can't watch just see about the movies.",
    imageSrc: "../Screenshot 2025-03-27 115030.png",
    websiteLink: "https://projekbi-3i6x.vercel.app/"
  },
  {
    id: 7,
    title: "Charity Organization (Rebuild)",
    description: "This website belongs to a charity organization dedicated to supporting homeless animals. we just rebuild it. for lesson",
    imageSrc: "../Screenshot 2025-03-27 115551.png",
    websiteLink: "https://quiz-gsap-scroll-trigger-bi21.vercel.app//"
  },
  {
    id: 8,
    title: "Paste (Rebuild)",
    description: "The Paste app appears to be a clipboard manager designed to improve efficiency and organization. Based on its promotional banner, the app has received a major update with a new look and feel, emphasizing a more intuitive and user-centric experience.",
    imageSrc: "../Screenshot 2025-03-27 120319.png",
    websiteLink: "https://sunaryo-mid-test-gsap-e86f.vercel.app/"
  },
  {
    id: 9,
    title: "Adive Generator",
    description: "The Adive generator app is a user-friendly interface that allows users to generate random adjectives and nouns, which they can then use to create unique and creative names for their projects.",
    imageSrc: "../Screenshot 2025-03-27 120348.png",
    websiteLink: "https://advice-generator-coral-iota.vercel.app/"
  },
  {
    id: 10,
    title: "Weight Calculator",
    description: "The weight Calculator app is a user-friendly interface that allows users to calculate their weight based on their height and age.",
    imageSrc: "../Screenshot 2025-07-26 111335.png",
    websiteLink: "https://calculator-sunaryo.vercel.app/"
  },
  {
    id: 10,
    title: "Latest News",
    description: "The Latest News app is a user-friendly interface that allows users to read the latest news from the world of aviation, such as teh Air India news, and the Hijack Plane news.",
    imageSrc: "../Screenshot 2025-07-26 113733.png",
    websiteLink: "https://latest-news-sunaryo.vercel.app/"
  },
  {
    id: 11,
    title: "Brandingfolio (Rebuild)",
    description: "The Brandingfolio app is a user-friendly interface that allows users to create and share their branding projects, such as logos, websites, and social media profiles.",
    imageSrc: "../Screenshot 2025-07-26 114748.png",
    websiteLink: "https://brandingfoliotemplate-ofaw-2f8ry1u1r-sunsunartos-projects.vercel.app/"
  },
  {
    id: 12,
    title: "My Art Space",
    description: "The My Art Space app is a user-friendly interface that allows users introduce to one of my creation on making a portfolio website. ",
    imageSrc: "../Screenshot 2025-07-26 122647.png",
    websiteLink: "https://calculator-sunaryo.vercel.app/"
  }
];

const testimonials = [
  {
    id: 1,
    name: "Darmawan",
    company: "CEO, Tech Solutions Inc.",
    quote: "Filipayo Tech delivered a fantastic website for our company. The design is modern, and the performance is outstanding. They were professional and a pleasure to work with.",
  },
  {
    id: 2,
    name: "Suryani",
    company: "Founder, Creative Agency",
    quote: "Our new portfolio website is a game-changer. The team at Filipayo understood our vision perfectly and brought it to life with great attention to detail. Highly recommend!",
  },
  {
    id: 3,
    name: "Ardiansyah",
    company: "Marketing Manager, E-Shop",
    quote: "We needed a robust e-commerce platform, and Filipayo Tech delivered. The site is fast, secure, and easy to manage. Our sales have seen a significant increase since the launch.",
  },
];


const INITIAL_PROJECT_COUNT = 2;

const App = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [visibleProjectsCount, setVisibleProjectsCount] = useState(INITIAL_PROJECT_COUNT);
  const totalProjects = projects.length;
  const isExpanded = visibleProjectsCount === totalProjects;

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onCloseDrawer = () => {
    setDrawerVisible(false);
  };

  const toggleProjectsVisibility = () => {
    if (isExpanded) {
      setVisibleProjectsCount(INITIAL_PROJECT_COUNT);
    } else {
      setVisibleProjectsCount(totalProjects);
    }
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
          /* ... (Other existing styles) ... */
          .ant-layout-header {
            background-color: #000 !important;
            padding: 0 50px !important;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
          }
          .ant-menu {
            background-color: #000 !important;
          }
          .ant-menu-item {
            color: rgba(255, 255, 255, 0.85) !important;
          }
          .ant-menu-item-selected {
            color: #EBED8D !important;
            background-color: rgba(255, 255, 255, 0.1) !important;
          }
          .ant-menu-item:hover {
            color: #0060AF !important;
          }
          .ant-layout-content {
            padding: 0;
          }
          .site-layout-content {
            min-height: calc(100vh - 134px);
            text-align: center;
          }
          .hero-section {
            background: linear-gradient(to right, #0060AF, #336699);
            color: white;
            padding: 80px 20px;
            text-align: center;
            border-bottom-left-radius: 40px;
            border-bottom-right-radius: 40px;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
          }
          .service-item-container {
            background: #1a1a1a;
            color: white;
            border-radius: 15px;
            padding: 30px;
            margin-bottom: 32px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
            transition: all 0.3s ease-in-out;
            border-left: 5px solid;
            text-align: left;
          }
          .service-item-container:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.6);
          }
          .about-section {
            background-color: #0d0d0d;
            color: white;
            padding: 80px 20px;
            border-top-left-radius: 40px;
            border-top-right-radius: 40px;
            box-shadow: inset 0 8px 16px rgba(0, 0, 0, 0.3);
          }
          .call-to-action-section {
            background: linear-gradient(to right, #336699, #0060AF);
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

          /* New/Updated Project Section Styles */
          .project-item {
            padding: 20px;
            display: flex;
            flex-direction: row;
            align-items: top;
            gap: 20px;
            margin-bottom: 40px; /* Spacing between projects */
            border-bottom: 1px solid rgba(255, 255, 255, 0.1); /* Subtle separator */
          }
          .project-item:last-child {
            border-bottom: none;
            margin-bottom: 0;
          }
          .project-image-col {
            flex: 0 0 50%;
            max-width: 50%;
          }
          .project-text-col {
            flex: 1 1 50%;
            text-align: left;
          }
          .project-image {
            width: 100%;
            border-radius: 10px;
            height: auto;
            display: block; /* ensure it behaves well in flexbox */
          }

          /* New section styles */
          .vision-mission-section {
            padding: 80px 20px;
            background-color: #0d0d0d;
          }
          .vision-mission-card {
            background: #1a1a1a;
            color: white;
            border-radius: 15px;
            padding: 30px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
            height: 100%; /* Ensure cards have the same height */
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
          .testimonial-section {
            padding: 80px 20px;
            background-color: #0d0d0d;
          }
          .testimonial-card {
            background: #1a1a1a;
            color: white;
            border-radius: 15px;
            padding: 30px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
            height: 100%;
            text-align: center;
          }
          
          /* Responsive adjustments for smaller screens */
          @media (max-width: 991px) { /* Changed from 768px to ensure better stacking for tablets too */
            .ant-layout-header {
              padding: 0 20px !important;
            }
            .ant-menu-horizontal {
              display: none !important;
            }
            .mobile-menu-button {
              display: block !important;
            }
            .hero-section, .service-item-container, .about-section, .call-to-action-section, .contact-card {
              padding: 40px 15px;
            }
            .ant-layout-footer {
              padding: 20px;
            }
            
            /* Project section responsiveness */
            .project-item {
              flex-direction: column; /* Stack image and text */
              padding: 10px 0;
              align-items: center; /* Center content when stacked */
            }
            .project-image-col {
              flex: 0 0 100%;
              max-width: 100%;
              margin-bottom: 20px;
            }
            .project-text-col {
              flex: 1 1 100%;
              text-align: center; /* Center text on mobile */
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
              <Title level={1} style={{ color: '#0060AF', margin: 0, padding: '10px 0' }}>Filipayo <span style={{ color: '#EBED8D' }}>Tech</span><span style={{ color: 'white' }}> | Profile</span></Title>
            </Col>
            <Col>
              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                <Menu.Item key="1"><a href="#home">Home</a></Menu.Item>
                <Menu.Item key="2"><a href="#about">About Us</a></Menu.Item>
                <Menu.Item key="3"><a href="#services">Services</a></Menu.Item>
                <Menu.Item key="4"><a href="#projects">Projects</a></Menu.Item>
                <Menu.Item key="5"><a href="#contact">Contact</a></Menu.Item>
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
            <Menu.Item key="4"><a href="#projects">Projects</a></Menu.Item>
            <Menu.Item key="5"><a href="#contact">Contact</a></Menu.Item>
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

          <section id="vision-mission" className="vision-mission-section">
            <Title level={3} style={{ color: 'white', marginBottom: 50, fontSize: '2.5em' }}>Vision and Mission</Title>
            <Row gutter={[32, 32]} justify="center">
              <Col xs={24} md={12}>
                <Card className="vision-mission-card">
                  <EyeOutlined style={{ fontSize: '4em', color: '#EBED8D' }} />
                  <Title level={4} style={{ color: 'white', marginTop: 16 }}>Our Vision</Title>
                  <Paragraph style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1em', textAlign: 'center' }}>
                    To be the leading website development partner in Indonesia, empowering businesses of all sizes to thrive in the digital landscape with innovative and impactful solutions.
                  </Paragraph>
                </Card>
              </Col>
              <Col xs={24} md={12}>
                <Card className="vision-mission-card">
                  <StarFilled style={{ fontSize: '4em', color: '#0060AF' }} />
                  <Title level={4} style={{ color: 'white', marginTop: 16 }}>Our Mission</Title>
                  <Paragraph style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1em', textAlign: 'center' }}>
                    We are dedicated to building high-quality, user-friendly, and cost-effective websites that meet our clients' specific needs, while providing exceptional service and technical support.
                  </Paragraph>
                </Card>
              </Col>
            </Row>
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
        
          <section id="projects" className="projects-section" style={{ padding: '80px 20px', backgroundColor: '#0d0d0d' }}>
            <Title level={3} style={{ color: 'white', marginBottom: 50, fontSize: '2.5em' }}>Featured Projects</Title>
            <div className="projects-list">
              {projects.slice(0, visibleProjectsCount).map((project, index) => (
                <div key={project.id} className="project-item">
                  <div className="project-image-col">
                    {index % 2 === 0 && ( 
                      <img className="project-image" src={project.imageSrc} alt={project.title} />
                    )}
                    {index % 2 !== 0 && ( 
                      <img className="project-image" src={project.imageSrc} alt={project.title} />
                    )}
                  </div>
                  <div className="project-text-col">
                    <Title level={1} style={{ color: 'white', fontSize: '2.5em', marginBottom: '10px' }}>{project.title}</Title>
                    <Text style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.2em', display: 'block', marginBottom: '20px' }}>{project.description}</Text>
                    <div className="button">
                      <Button type="primary" size="large" style={{ backgroundColor: '#0060AF', borderColor: '#0060AF', fontWeight: 'bold' }} href={project.websiteLink} target="_blank">View Website</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {totalProjects > INITIAL_PROJECT_COUNT && (
              <Button
                type="default"
                size="large"
                style={{
                  marginTop: '30px',
                  backgroundColor: isExpanded ? '#EBED8D' : '#0060AF',
                  color: isExpanded ? '#000' : 'white',
                  borderColor: isExpanded ? '#EBED8D' : '#0060AF',
                  fontWeight: 'bold',
                  borderRadius: '50px',
                  padding: '10px 30px',
                  height: 'auto'
                }}
                onClick={toggleProjectsVisibility}
              >
                {isExpanded ? 'Show Less' : `Show More (${totalProjects - INITIAL_PROJECT_COUNT} More)`}
              </Button>
            )}
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

          <section id="contact" style={{ padding: '80px 20px', backgroundColor: '#000' }}>
            <Title level={3} style={{ color: 'white', marginBottom: 50, fontSize: '2.5em' }}>Get in Touch</Title>
            <Row gutter={[32, 32]} justify="center">
              <Col xs={24} sm={12} lg={8}>
                <Card className="contact-card" style={{ borderColor: '#0060AF' }}>
                  <Space direction="vertical" align="center" size="middle">
                    <MailOutlined style={{ fontSize: '4em', color: '#0060AF' }} />
                    <Title level={4} style={{ color: 'white', margin: 0 }}>Email Us</Title>
                    <Paragraph style={{ color: 'rgba(255,255,255,0.7)' }}>
                      <a href="mailto:filipayotech@gmail.com" style={{ color: '#EBED8D' }}>filipayotech@gmail.com</a>
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
                      <br/>
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
                      Ruko Crown Blok G-15. Green Lake City, Jl. Kresek Raya, Petir, Cipondoh, RT.004/RW.008, Petir, Cipondoh, Tangerang City, Banten 15147
                    </Paragraph>
                  </Space>
                </Card>
              </Col>
            </Row>
          </section>

          <section id="testimonials" className="testimonial-section">
            <Title level={3} style={{ color: 'white', marginBottom: 50, fontSize: '2.5em' }}>What Our Clients Say</Title>
            <Row gutter={[32, 32]} justify="center">
              {testimonials.map((testimonial) => (
                <Col key={testimonial.id} xs={24} md={8}>
                  <Card className="testimonial-card">
                    <StarFilled style={{ fontSize: '2em', color: '#EBED8D', marginBottom: '10px' }} />
                    <StarFilled style={{ fontSize: '2em', color: '#EBED8D', marginBottom: '10px' }} />
                    <StarFilled style={{ fontSize: '2em', color: '#EBED8D', marginBottom: '10px' }} />
                    <StarFilled style={{ fontSize: '2em', color: '#EBED8D', marginBottom: '10px' }} />
                    <StarFilled style={{ fontSize: '2em', color: '#EBED8D', marginBottom: '10px' }} />
                    <Paragraph style={{ color: 'rgba(255,255,255,0.85)', fontStyle: 'italic', fontSize: '1.1em' }}>
                      "{testimonial.quote}"
                    </Paragraph>
                    <Paragraph style={{ color: 'white', fontWeight: 'bold', margin: '20px 0 5px' }}>
                      <UserOutlined style={{ marginRight: '8px' }}/> {testimonial.name}
                    </Paragraph>
                    <Paragraph style={{ color: 'rgba(255,255,255,0.6)' }}>
                      {testimonial.company}
                    </Paragraph>
                  </Card>
                </Col>
              ))}
            </Row>
          </section>

        </Content>

        <Footer style={{ backgroundColor: '#0A1929', color: 'rgba(255, 255, 255, 0.85)', padding: '50px 50px 24px', borderTopLeftRadius: '0px', borderTopRightRadius: '0px' }}>
           <Row gutter={[32, 32]} justify="space-between">
             {/* Company Info */}
             <Col xs={24} md={12} lg={8} style={{ textAlign: 'left' }}>
               <Title level={3} style={{ color: '#0060AF', margin: 0 }}>code<span style={{ color: '#EBED8D' }}>ORCA</span></Title>
               <Paragraph style={{ color: 'rgba(255, 255, 255, 0.7)', marginTop: '15px' }}>
                 Kami adalah perusahaan teknologi yang berfokus pada pengembangan solusi software modern dan inovatif untuk membantu bisnis bertransformasi digital.
               </Paragraph>
               <Space size="middle" style={{ marginTop: '20px' }}>
                 <MailOutlined style={{ fontSize: '24px', color: 'rgba(255, 255, 255, 0.85)' }} />
                 <PhoneOutlined style={{ fontSize: '24px', color: 'rgba(255, 255, 255, 0.85)' }} />
               </Space>
             </Col>

             {/* Quick Links */}
             <Col xs={24} md={6} lg={4} style={{ textAlign: 'left' }}>
               <Title level={4} style={{ color: 'white', marginBottom: '20px' }}>Quick Links</Title>
               <List
                 dataSource={['Home', 'About', 'Services', 'Projects']}
                 renderItem={item => (
                   <List.Item style={{ borderBottom: 'none', padding: '5px 0' }}>
                     <a href={`#${item.toLowerCase()}`} style={{ color: 'rgba(255, 255, 255, 0.7)' }}>{item}</a>
                   </List.Item>
                 )}
               />
             </Col>

             {/* Services */}
             <Col xs={24} md={6} lg={4} style={{ textAlign: 'left' }}>
               <Title level={4} style={{ color: 'white', marginBottom: '20px' }}>Services</Title>
               <List
                 dataSource={['Web Development', 'E-Commerce Solutions', 'Performance Optimization', 'UI/UX Design']}
                 renderItem={item => (
                   <List.Item style={{ borderBottom: 'none', padding: '5px 0' }}>
                     <a href={`#services`} style={{ color: 'rgba(255, 255, 255, 0.7)' }}>{item}</a>
                   </List.Item>
                 )}
               />
             </Col>
           </Row>

           {/* Bottom Bar */}
           <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '24px', marginTop: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
             <Text style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9em' }}>&copy; {new Date().getFullYear()} codeORCA. All rights reserved.</Text>
             <Space size="large">
               <a href="#" style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9em' }}>Privacy Policy</a>
               <a href="#" style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9em' }}>Terms of Service</a>
               <GlobalOutlined style={{ fontSize: '18px', color: 'rgba(255, 255, 255, 0.7)' }} />
               <ExportOutlined style={{ fontSize: '18px', color: 'rgba(255, 255, 255, 0.7)' }} />
             </Space>
           </div>
         </Footer>
      </Layout>
    </>
  );
};

export default App;