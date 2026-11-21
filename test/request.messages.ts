/* Copyright © 2022 Seneca Project Contributors, MIT License. */

export default {
  print: false,
  pattern: 'sys:request',
  allow: { missing: true },

  calls: [
    {
      pattern: 'request:send',
      params: { url: 'http://localhost:41414/test.json' },
      out: {
        ok: true,
        status: 200,
        json: { test: true }
      },
    },

    {
      pattern: 'request:send',
      params: { url: 'http://localhost:41414/missing.json' },
      out: {
        ok: false,
        status: 404,
      },
    },

    {
      pattern: 'request:send',
      // Nothing listens on port 1, so the connection is refused. A host
      // name that does not resolve gives a different error code with each
      // resolver.
      params: { url: 'http://127.0.0.1:1/missing.json' },
      out: {
        ok: false,
        status: -1,
        err: {
          code: 'ECONNREFUSED'
        }
      },
    },

  ]
}

