import WPAPI from 'wpapi';

class Api {
  constructor() {
    const endpoint = "http://fsusage.xsrv.jp/";
    this.endpoint = new WPAPI({ endpoint: `${endpoint}/wp-json` });
  }

  documents(slug) {
    return this.endpoint.pages().slug(slug);
  }

  mailTemplates() {
    this.endpoint.mailTemplates = this.endpoint.registerRoute(
      'wp/v2',
      '/mail_templates/(?P<id>[0-9]+)'
    );
    return this.endpoint.mailTemplates();
  }

  searchCases() {
    this.endpoint.searchCases = this.endpoint.registerRoute(
      'wp/v2',
      '/cases/(?P<id>[0-9]+)'
    );
    return this.endpoint.searchCases();
  }
}

export default Api;
