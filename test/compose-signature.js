/* global describe, it, before */

require('should');
require('dotenv').config();

const composeSignature = require('../lib/compose-signature');
const { APIID: apiId, APIKEY: apiKey } = process.env;

describe('#compose-signature', () => {
  before(() => {
    if (!apiId) throw new Error('Missing APIID env');
    if (!apiKey) throw new Error('Missing APIKEY env');
  });

  it('should return correct signature', () => {
    composeSignature(apiId, apiKey, null, '12.12.12.100', '2024-01-05_08:10:03')
      .should.equal('51cf3e684c80ef3d6c063316cf38f11a');
  });
});
