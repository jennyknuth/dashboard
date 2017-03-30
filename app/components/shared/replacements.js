import config from 'config';

const replacements = {
  MOBILE_URL: `https://nio.school/mobile${config.MOBILE_URL}`,
  PI_INSTANCE: `pi${config.MOBILE_URL}`,
  CLOUD_INSTANCE: `cloud${config.MOBILE_URL}`,
};

export default replacements;
