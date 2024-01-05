const { default: axios } = require('axios');
const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');

const composeSignature = require('./compose-signature');

dayjs.extend(utc);

/**
 *
 * @param {string} apiId
 * @param {string} apiKey
 * @param {string} query
 * @param {string} [apiUrl="https://api.myip.ms"]
 */
module.exports = async (apiId, apiKey, query, apiUrl) => {
  const timestamp = dayjs.utc().format('YYYY-MM-DD_HH:mm:ss');
  const signature = composeSignature(apiId, apiKey, apiUrl, query, timestamp);

  const hitUrl = [
    apiUrl || 'https://api.myip.ms',
    query,
    'api_id',
    apiId,
    'api_key',
    apiKey,
    'signature',
    signature,
    'timestamp',
    timestamp
  ].join('/');

  try {
    const response = await axios.get(hitUrl);
    return response?.data;
  } catch (e) {
    const newE = new Error('MYIP.MS: Exception');
    newE.code = 'MYIPMS_EXCEPTION';
    newE.originalError = e;

    throw newE;
  }
};
