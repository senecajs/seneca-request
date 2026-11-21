# Changes

## 0.5.0 2026-11-21

First entry of this change log. Earlier versions are on npm and in the git
history.

* Seneca 4: the peer dependency is `seneca` `^4.0.0` (was `>=3`). Seneca 3
  users stay on `@seneca/request@0.4`.
* The `seneca-promisify` peer dependency is removed. Seneca 4 has promises
  built in; do not call `use('promisify')` (D4).
* Node.js 24 or later (`engines.node` `>=24`; there was no `engines`).
* Tests run on Seneca 4 with `seneca-msg-test` 5 and no longer load
  `promisify`. The failed request case uses a refused connection to
  `127.0.0.1:1` (`ECONNREFUSED`) instead of an unknown host, whose error code
  depends on the resolver and failed in CI. The test server is
  `serve-handler`, now declared, instead of the `serve` command that only
  brought it in. devDependencies: `seneca` `^4.0.0`, `seneca-msg-test`
  `^5.0.0`, `@seneca/doc` `^9.0.0` and `serve-handler` `^6.1.6`;
  `seneca-promisify` and `serve` are removed.
* `repository.url` uses `git+https`, `publishConfig` sets public access, and
  the package includes `README.md` and `CHANGES.md`.
