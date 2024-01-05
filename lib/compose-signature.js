const crypto = require('node:crypto');

const { DEBUG } = process.env;
/**
 * Compose signature
 *
 * @param {string} apiId
 * @param {string} apiKey
 * @param {?string} [apiUrl="https://api.myip.ms"] - default: "https://api.myip.ms"
 * @param {string} query
 * @param {string} timestamp - UTC timestamp, format: "YYYY-MM-DD_HH:mm:ss", eg: "2024-01-05_08:10:03"
 * @returns {string}
 *
 * @todo validate timestamp string format
 */
module.exports = (apiId, apiKey, apiUrl, query, timestamp) => {
  if (!apiId || typeof apiId !== 'string') {
    const e = new Error('MYIP.MS: Invalid APIID for signature');
    e.code = 'MYIPMS_INVALID_APIID_FOR_SIGNATURE';

    throw e;
  }

  if (!apiKey || typeof apiKey !== 'string') {
    const e = new Error('MYIP.MS: Invalid APIKEY for signature');
    e.code = 'MYIPMS_INVALID_APIKEY_FOR_SIGNATURE';

    throw e;
  }

  if (!query || typeof query !== 'string') {
    const e = new Error('MYIP.MS: Invalid QUERY for signature');
    e.code = 'MYIPMS_INVALID_QUERY_FOR_SIGNATURE';

    throw e;
  }

  if (!timestamp || typeof timestamp !== 'string') {
    const e = new Error('MYIP.MS: Invalid TIMESTAMP for signature');
    e.code = 'MYIPMS_INVALID_TIMESTAMP_FOR_SIGNATURE';

    throw e;
  }

  const plain = [
    apiUrl || 'https://api.myip.ms',
    query,
    'api_id',
    apiId,
    'api_key',
    apiKey,
    'timestamp',
    timestamp
  ].join('/');

  if (DEBUG) {
    console.error('COMPOSE_SIGNATURE PLAIN: ', plain);
  }

  return crypto
    .createHash('md5')
    .update(plain)
    .digest('hex');
};
