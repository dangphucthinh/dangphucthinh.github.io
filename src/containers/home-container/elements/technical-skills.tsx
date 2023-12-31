import { Col, Row } from 'antd';
import { useTranslation } from 'react-i18next';
import { AnimateBox } from 'components/animate-box';

export function TechnicalSkills() {
  const { t } = useTranslation();

  const frontendSkills = [
    {
      label: 'languages',
      value: 'languages_frontend',
    },
    {
      label: 'javascript_frameworks',
      value: 'javascript_frameworks_frontend',
    },
    {
      label: 'css_frameworks',
      value: 'css_frameworks_frontend',
    },
  ];

  const backendSkills = [
    {
      label: 'languages',
      value: 'languages_backend',
    },
    {
      label: 'frameworks',
      value: 'frameworks_backend',
    },
    {
      label: 'database',
      value: 'database_backend',
    },
    {
      label: 'authorization',
      value: 'authorization_frontend',
    },
    {
      label: 'patterns',
      value: 'patterns_backend',
    },
  ];

  return (
    <div className="home-page__section home-page__background">
      <div className="home-page__section-wrapper">
        <AnimateBox anmateName="slideInBottom">
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Row justify="center">
                <h4 className="home-page__header-text home-page--center">
                  {t('technical_skills')}
                </h4>
              </Row>
            </Col>
            <Col span={24}>
              <Row justify="center">
                <Col>
                  <h6 className="home-page__sub-title home-page--center">
                    {t('frontend_development')}
                  </h6>
                  <ul>
                    {frontendSkills.map((skill) => (
                      <li key={skill.label}>
                        <strong>{t(skill.label)}:</strong>
                        <span> {t(skill.value)}</span>
                      </li>
                    ))}
                  </ul>
                </Col>
              </Row>
            </Col>
            <Col span={24}>
              <Row justify="center">
                <Col>
                  <h6 className="home-page__sub-title home-page--center">
                    {t('backend_development')}
                  </h6>
                  <ul>
                    {backendSkills.map((skill) => (
                      <li key={skill.label}>
                        <strong>{t(skill.label)}:</strong>
                        <span> {t(skill.value)}</span>
                      </li>
                    ))}
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
        </AnimateBox>
      </div>
    </div>
  );
}
