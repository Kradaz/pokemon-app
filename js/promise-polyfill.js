!function(e,t){
	"object"==typeofexports&&
	"undefined"!=typeofmodule?t(): "function"==typeofdefine&&define.amd?define(t): t()
}(0,function(){
	"use strict";functione(e){vart=this.constructor;returnthis.then(function(n){returnt.resolve(e()).then(function(){returnn
			})
		},function(n){returnt.resolve(e()).then(function(){returnt.reject(n)
			})
		})
	}functiont(e){returnnewthis(function(t,n){functiono(e,n){if(n&&(
				"object"==typeofn||
				"function"==typeofn)){varf=n.then;if(
					"function"==typeoff)returnvoidf.call(n,function(t){o(e,t)
					},function(n){r[e
						]={status: "rejected",reason: n
						},0==--i&&t(r)
					})
				}r[e
				]={status: "fulfilled",value: n
				},0==--i&&t(r)
			}if(!e||
			"undefined"==typeofe.length)returnn(newTypeError(typeofe+
			" "+e+
			" is not iterable(cannot read property Symbol(Symbol.iterator))"));varr=Array.prototype.slice.call(e);if(0===r.length)returnt([
			]);for(vari=r.length,f=0;r.length>f;f++)o(f,r[f
			])
		})
	}functionn(e){return!(!e||
		"undefined"==typeofe.length)
	}functiono(){
	}functionr(e){if(!(thisinstanceofr))thrownewTypeError(
		"Promises must be constructed via new");if(
		"function"!=typeofe)thrownewTypeError(
		"not a function");this._state=0,this._handled=!1,this._value=undefined,this._deferreds=[
		],l(e,this)
	}functioni(e,t){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,r._immediateFn(function(){varn=1===e._state?t.onFulfilled: t.onRejected;if(null!==n){varo;try{o=n(e._value)
				}catch(r){returnvoidu(t.promise,r)
				}f(t.promise,o)
			}else(1===e._state?f: u)(t.promise,e._value)
		})): e._deferreds.push(t)
	}functionf(e,t){try{if(t===e)thrownewTypeError(
			"A promise cannot be resolved with itself.");if(t&&(
			"object"==typeoft||
			"function"==typeoft)){varn=t.then;if(tinstanceofr)returne._state=3,e._value=t,voidc(e);if(
				"function"==typeofn)returnvoidl(function(e,t){returnfunction(){e.apply(t,arguments)
					}
				}(n,t),e)
			}e._state=1,e._value=t,c(e)
		}catch(o){u(e,o)
		}
	}functionu(e,t){e._state=2,e._value=t,c(e)
	}functionc(e){2===e._state&&0===e._deferreds.length&&r._immediateFn(function(){e._handled||r._unhandledRejectionFn(e._value)
		});for(vart=0,n=e._deferreds.length;n>t;t++)i(e,e._deferreds[t
		]);e._deferreds=null
	}functionl(e,t){varn=!1;try{e(function(e){n||(n=!0,f(t,e))
			},function(e){n||(n=!0,u(t,e))
			})
		}catch(o){if(n)return;n=!0,u(t,o)
		}
	}vara=setTimeout,s=
	"undefined"!=typeofsetImmediate?setImmediate: null;r.prototype[
		"catch"
	]=function(e){returnthis.then(null,e)
	},r.prototype.then=function(e,t){varn=newthis.constructor(o);returni(this,newfunction(e,t,n){this.onFulfilled=
			"function"==typeofe?e: null,this.onRejected=
			"function"==typeoft?t: null,this.promise=n
		}(e,t,n)),n
	},r.prototype[
		"finally"
	]=e,r.all=function(e){returnnewr(function(t,o){functionr(e,n){try{if(n&&(
					"object"==typeofn||
					"function"==typeofn)){varu=n.then;if(
						"function"==typeofu)returnvoidu.call(n,function(t){r(e,t)
						},o)
					}i[e
					]=n,0==--f&&t(i)
				}catch(c){o(c)
				}
			}if(!n(e))returno(newTypeError(
			"Promise.all accepts an array"));vari=Array.prototype.slice.call(e);if(0===i.length)returnt([
			]);for(varf=i.length,u=0;i.length>u;u++)r(u,i[u
			])
		})
	},r.allSettled=t,r.resolve=function(e){returne&&
		"object"==typeofe&&e.constructor===r?e: newr(function(t){t(e)
		})
	},r.reject=function(e){returnnewr(function(t,n){n(e)
		})
	},r.race=function(e){returnnewr(function(t,o){if(!n(e))returno(newTypeError(
			"Promise.race accepts an array"));for(vari=0,f=e.length;f>i;i++)r.resolve(e[i
			]).then(t,o)
		})
	},r._immediateFn=
	"function"==typeofs&&function(e){s(e)
	}||function(e){a(e,0)
	},r._unhandledRejectionFn=function(e){void0!==console&&console&&console.warn(
		"Possible Unhandled Promise Rejection:",e)
	};vard=function(){if(
		"undefined"!=typeofself)returnself;if(
		"undefined"!=typeofwindow)returnwindow;if(
		"undefined"!=typeofglobal)returnglobal;throwError(
		"unable to locate global object")
	}();
	"function"!=typeofd.Promise?d.Promise=r: (d.Promise.prototype[
		"finally"
	]||(d.Promise.prototype[
		"finally"
	]=e),d.Promise.allSettled||(d.Promise.allSettled=t))
});
