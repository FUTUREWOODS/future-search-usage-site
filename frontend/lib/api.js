import WPAPI from 'wpapi';

class Api {
  constructor() {
    const isProduction = process.env.NODE_ENV === 'production';
    const endpoint = isProduction ? process.env.WP_URL : `http://wp-api:80`;
    this.endpoint = new WPAPI({ endpoint: `${endpoint}/wp-json` });
  }

  mailTemplates() {
    this.endpoint.mailTemplates = this.endpoint.registerRoute('wp/v2', '/mail_templates/(?P<id>[0-9]+)');
    return this.endpoint.mailTemplates();
  }

  searchCases() {
    this.endpoint.searchCases = this.endpoint.registerRoute('wp/v2','/cases/(?P<id>[0-9]+)');
    return this.endpoint.searchCases();
  }
}

export default Api;
