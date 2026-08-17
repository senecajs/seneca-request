![Seneca](http://senecajs.org/files/assets/seneca-logo.png)
> A [Seneca.js](http://senecajs.org) plugin

# @seneca/request

[![npm version](https://img.shields.io/npm/v/@seneca/request.svg)](https://npmjs.com/package/@seneca/request)
[![build](https://github.com/senecajs/seneca-request/actions/workflows/build.yml/badge.svg)](https://github.com/senecajs/seneca-request/actions/workflows/build.yml)
[![Known Vulnerabilities](https://snyk.io/test/github/senecajs/seneca-request/badge.svg)](https://snyk.io/test/github/senecajs/seneca-request)
[![Coverage Status](https://coveralls.io/repos/github/senecajs/request/badge.svg?branch=main)](https://coveralls.io/github/senecajs/request?branch=main)
[![DeepScan grade](https://deepscan.io/api/teams/5016/projects/20269/branches/548519/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=5016&pid=20269&bid=548519)
[![Maintainability](https://api.codeclimate.com/v1/badges/a959a0996a357735c1d1/maintainability)](https://codeclimate.com/github/senecajs/request/maintainability)

| ![Voxgig](https://www.voxgig.com/res/img/vgt01r.png) | This open source module is sponsored and supported by [Voxgig](https://www.voxgig.com). |
|---|---|

## Install

```sh
$ npm install @seneca/request
```



<!--START:options-->

## Quick Example

```js


```

## More Examples

See [test/](test/) for more usage examples.

## Motivation

A [Seneca.js](http://senecajs.org) plugin.

## Support

If you're using this module and need help, you can:

- Post a [github issue](https://github.com/senecajs/seneca-request/issues)
- Tweet to [@senecajs](http://twitter.com/senecajs)
- Ask on the [Gitter](https://gitter.im/senecajs/seneca)

## API

### Options

* `debug` : boolean <i><small>false</small></i>


Set plugin options when loading with:
```js


seneca.use('request', { name: value, ... })


```


<small>Note: <code>foo.bar</code> in the list above means 
<code>{ foo: { bar: ... } }</code></small> 



<!--END:options-->

<!--START:action-list-->

### Action Patterns

* [sys:request,request:send](#-sysrequestrequestsend-)
* [sys:request,request:spread](#-sysrequestrequestspread-)
* [sys:request,response:handle](#-sysrequestresponsehandle-)


<!--END:action-list-->

<!--START:action-desc-->

### Action Descriptions

### &laquo; `sys:request,request:send` &raquo;

Send a web request.



----------
### &laquo; `sys:request,request:spread` &raquo;

No description provided.



----------
### &laquo; `sys:request,response:handle` &raquo;

No description provided.



----------


<!--END:action-desc-->

## Contributing

The [Senecajs org](https://github.com/senecajs/) encourages open participation. If you feel you can help in any way, be it with documentation, examples, extra testing, or new features please get in touch.

### Running tests

```sh
npm run test
```

## Background

Part of the [Senecajs org](https://github.com/senecajs/).
