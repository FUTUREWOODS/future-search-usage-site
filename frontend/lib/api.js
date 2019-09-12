import WPAPI from 'wpapi';

class Api {
  constructor() {
    this.endpoint = new WPAPI({ endpoint: `http://wp-api:80/wp-json` });
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
