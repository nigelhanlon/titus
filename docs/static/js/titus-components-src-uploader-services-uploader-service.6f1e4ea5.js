(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"../titus-components/src/uploader/services/UploaderService.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return f});var o=t("./node_modules/react/index.js"),r=t.n(o),a=t("./node_modules/@mdx-js/tag/dist/index.js");function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function i(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function p(e,n){return!n||"object"!==c(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,n){return(u=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var f=function(e){function n(e){var t;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(t=p(this,l(n).call(this,e))).layout=null,t}var t,o,c;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&u(e,n)}(n,r.a.Component),t=n,(o=[{key:"render",value:function(){var e=this.props,n=e.components;s(e,["components"]);return r.a.createElement(a.MDXTag,{name:"wrapper",components:n},r.a.createElement(a.MDXTag,{name:"h1",components:n,props:{id:"uploaderservice"}},"UploaderService"),r.a.createElement(a.MDXTag,{name:"p",components:n},"UploaderService handles uploading files into ",r.a.createElement(a.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://aws.amazon.com/"}},"AWS"),"."),r.a.createElement(a.MDXTag,{name:"h2",components:n,props:{id:"typings-definitions"}},"Typings Definitions"),r.a.createElement(a.MDXTag,{name:"pre",components:n},r.a.createElement(a.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-ts"}},"export interface UploaderServiceOptions {\n  awsConfig?: object\n  bucket: string\n  getParams?: (file: object) => object\n  getTags?: (file: object) => Array<{ Key: string; Value: string }>\n}\n")),r.a.createElement(a.MDXTag,{name:"h2",components:n,props:{id:"example"}},"Example"),r.a.createElement(a.MDXTag,{name:"pre",components:n},r.a.createElement(a.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"const awsConfig = {\n  accessKeyId: '',\n  secretAccessKey: '',\n  region: '',\n  computeChecksums: false,\n  sslEnabled: false,\n  s3ForcePathStyle: true,\n  s3: {\n    endpoint: '',\n    s3BucketEndpoint: false,\n    computeChecksums: false\n  }\n}\n\nfunction getParams(file) {\n  return {\n    Key: file.id,\n    Body: file.orig,\n    ContentType: file.type,\n    Metadata: { 'original-name': file.name }\n  }\n}\n\n// TODO Tags are currently disabled due an access S3 policies issue\nfunction getTags(file) {\n  return [{ Key: 'OriginalName', Value: file.name }]\n}\n\nconst service = new UploaderService({\n  awsConfig,\n  bucket: 'name-of-your-bucket',\n  getParams,\n  getTags\n})\n")))}}])&&i(t.prototype,o),c&&i(t,c),n}();f.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=titus-components-src-uploader-services-uploader-service.ad2b91880db95d6d2233.js.map