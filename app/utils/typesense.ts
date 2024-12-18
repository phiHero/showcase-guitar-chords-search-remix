import TypesenseInstantsearchAdapter from 'typesense-instantsearch-adapter';

export const typesenseInstantsearchAdapter = new TypesenseInstantsearchAdapter({
  server: {
    apiKey: window.ENV.PUBLIC_TYPESENSE_SEARCH_ONLY_API_KEY || 'xyz',
    nodes: [
      {
        host: window.ENV.PUBLIC_TYPESENSE_HOST || 'localhost',
        port: parseInt(window.ENV.PUBLIC_TYPESENSE_PORT || '8108'),
        protocol: window.ENV.PUBLIC_TYPESENSE_PROTOCOL || 'http',
      },
    ],
  },
  additionalSearchParameters: {
    query_by: 'key,suffix',
    num_typos: 0,
  },
});
