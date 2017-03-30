import config from 'config';

const replacements = {
  MOBILE_URL: `https://nio.school/mobile${config.LAB_NUMBER}`,
  PI_INSTANCE: `pi${config.LAB_NUMBER}`,
  CLOUD_INSTANCE: `cloud${config.LAB_NUMBER}`,
};

export default replacements;
