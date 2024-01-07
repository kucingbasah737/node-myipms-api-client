# node-myipms-api-client
[![Version npm](https://img.shields.io/npm/v/myipms-api-client)](https://www.npmjs.com/package/myipms-api-client)
[![node.js version](https://img.shields.io/node/v/myipms-api-client)](https://www.npmjs.com/package/myipms-api-client)
[![js-semistandard-style](https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg)](https://github.com/standard/semistandard)

Query Myip.ms data using API

## Instal

```shell
npm install myipms-api-client
```

## Usage
```javascript
const myipms = require('myipms-api-client');

(async () => {
  const apiId = 'PLEASE_CHANE_ME';
  const apiKey = 'PLEASE_CHANGE_ME';
  const result = await myipms(apiId, apiKey, '185.199.108.153');
})();
```

result will contain something like these:
```json
{
  "query": "185.199.108.153",
  "ip_address": "185.199.108.153",
  "status": "ok",
  "location": {
    "countryID": "USA",
    "countryName": "United States",
    "countryIcon": "https://myip.ms/images/devices/16/flags/USA.png"
  },
  "owners": {
      "owner": {
        "range": "185.199.108.0 - 185.199.111.255",
        "cidr": "185.199.108.0/22",
        "rangeSize": "1024",
        "ownerName": "Github, Inc",
        "provider": "",
        "address": "88 Colin P. Kelly Jr. Street, 94107, San Francisco, United States",
        "countryID": "USA",
        "countryName": "USA",
        "countryIcon": "https://myip.ms/images/devices/16/flags/USA.png",
        "website": "",
        "phone": "+1 415 735 4488",
        "sites": "22274",
        "topSites": "185",
        "logo": "",
        "screenshot": "",
        "link": "https://myip.ms/view/ip_owners/802978"
      }
    },
  "statistics": {
    "total_websites_on_ip_now": "21396",
    "total_websites_on_ip_before": "9696",
    "total_not_working_websites_on_ip": "975",
    "total_dns_on_ip": 1,
    "total_os_on_ip": 0,
    "total_browsers_on_ip": 0,
    "total_useragents_on_ip": 0
  },
  "crawlerbot_use_ip": "yes",
  "ip_blacklist": {
    "blacklist": "yes",
    "latest_thread": "User Submission - Spam from this IP",
    "latest_site_visit_date": "06 Dec 2018"
  },
  "websites_on_ip_now": [
    {
      "website": "nn.ci",
      "rank": "1914",
      "visitors": "203000",
      "image": "https://myip.ms/images/popularity/rating9.png",
      "text": "203,000 visitors per day"
    },
    {
      "website": "pytorch.org",
      "rank": "2758",
      "visitors": "159000",
      "image": "https://myip.ms/images/popularity/rating9.png",
      "text": "159,000 visitors per day"
    },
    // ...
  ],
  "dns_on_ip": [
    {
      "nameserver": "185.199.108.153",
      "sites": "1",
      "topSites": "0"
    }
  ],
  "os_on_ip": [],
  "browsers_on_ip": [],
  "useragents_on_ip": []
}
```

## Notes
API will only return 100 websites. There is no documented API to get next page on myip.ms.
