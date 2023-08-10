import { Carousel, Col, Row } from 'antd';
import { useTranslation } from 'react-i18next';
import { Card } from 'components/card';
import { isMobile } from 'utils/helper';
import { AnimateBox } from 'components/animate-box';

const contentStyle: React.CSSProperties = {
  height: '400px',
  padding: '0 16px',
};

export function Projects() {
  const { t } = useTranslation();
  const mobile = isMobile();

  const projects: App.CardItem[] = [
    {
      title: 'EduPro System',
      description: t('edu_system'),
      tags: [
        'Angular',
        'C#',
        'EntityFramework Core',
        'SQL Server',
        'Typescript',
        'MatterialUI',
      ],
      role: 'Back-end & Front-end Developer',
      timesheet: t('timesheet_edu'),
    },
    {
      title: 'ZMining Ecosystem',
      description: t('zmining_ecosystem_description'),
      tags: [
        'ReactJS',
        'TypeScript',
        'C#',
        'EntityFramework Core',
        'SQL Server',
        'Micro-services',
      ],
      role: 'Back-end and Front-end',
      timesheet: t('timesheet_zmining'),
    },
    {
      title: 'User manager system',
      description: t('casino_system'),
      tags: [
        'C#',
        '.NET6.0',
        'SQL Server',
        'GraphApi',
        'Angular',
        'Typescript',
      ],
      role: 'Back-end & Front-end developer',
      timesheet: t('timesheet_tp'),
    },
    {
      title: 'Inbox Detection and Response',
      description: t('inbox_detection_and_response'),
      tags: ['GraphApi', 'C#', 'EntityFramework 3.5', 'ASP.NET Webform'],
      role: 'Backend developer',
      timesheet: t('timesheet_idr'),
    },
    {
      title: 'Diament warehouse',
      description: t('diament_warehouse'),
      tags: ['ReactJS'],
      role: 'Front-end developer',
      timesheet: t('timesheet_diament'),
    },
    {
      title: 'QNet reporting system - version 3',
      description: t('qnet_reporting_system_version_3_description'),
      tags: ['ReactJS', 'Typescript'],
      role: 'Front-end developer',
      timesheet: t('timesheet_qnet'),
    },
  ];

  const renderProjects = () => {
    if (mobile) {
      return (
        <Carousel touchMove infinite arrows draggable swipeToSlide autoplay>
          {projects.map((project, index) => (
            <div>
              <div style={contentStyle}>
                <Row key={index} justify="center">
                  <Card card={project} border />
                </Row>
              </div>
            </div>
          ))}
        </Carousel>
      );
    }
    return (
      <>
        {projects.map((project, index) => (
          <Col key={index} xs={24} sm={24} md={24} lg={8}>
            <AnimateBox duration={index * 0.1 + 0.1}>
              <Card card={project} border />
            </AnimateBox>
          </Col>
        ))}
      </>
    );
  };

  return (
    <div className="home-page__section" id="my-projects">
      <div className="home-page__section-wrapper">
        <Row gutter={[32, 32]}>
          <Col span={24}>
            <AnimateBox>
              <h4 className="home-page__header-text home-page--center">
                {t('my_projects')}
              </h4>
            </AnimateBox>
          </Col>
          <Row gutter={[24, 24]}>{renderProjects()}</Row>
        </Row>
      </div>
    </div>
  );
}
