/**
 * A rules to check data is right
 * @typedef {Object} Rules
 * @property {boolean} required
 * @property {array} type - string,boolean,object,number in array
 * @property {boolean} [empty] - allow empty string
 */
/**
 * @type {'localStorage'} position
 */
/**
 *
 * @typedef {Object} Options
 * @property {boolean} [global=true]
 * @property {string} position - string,boolean,object,number in array
 */
import {simpleParamsValidator} from "./utils.js";

const defaultOptions = {
    global: false,
    saveIn: 'localStorage'
}
const _env = {
    main: window || (global || {}),
    doc: document
}
/**
 * @description StorageIn Main Class
 * @param {Options} options
 */
export class StorageIn {
    /**
     * @description check data format
     * @param {Options} options
     */
    constructor(options) {
        if (!options) {
            options = defaultOptions
        }
        this._allow = ''
        this.check()
        if (options.position && !this._allow.includes(options.position)) {
            throw new Error('not supported')
        }
        if (options.global) {
            window.noStorage = this
        }
        console.log(options)
    }

    /**
     * @description check data format
     */
    validator(data, rules) {
    }

    /**
     * @description add a new item in storage
     * @param {string|object} keyOrObj
     * @param { (string|number) } [data=''] - except the number ,data will be transfer to string,you would better use string
     * @param {number} [expires=0] - data expires seconds,if expires=0 will never be expired
     * @param { (string|number) } [defaultVal = ''] - if the item is not existed,this will be returned
     */
    add(keyOrObj, data = '', expires = 0, defaultVal = '') {
        let key, val, expireSecond, defaultReturn, errorMessage;
        if (typeof keyOrObj === 'object' && arguments.length === 1) {
            errorMessage = simpleParamsValidator(keyOrObj, {
                key: {required: true, type: ['string'], empty: false},
                data: {required: true, type: ['string', 'number'], empty: true}
            })
            if (errorMessage) {
                throw  new Error(errorMessage)
            }

        } else if (typeof keyOrObj === 'string' && arguments.length >= 2) {

        } else {

        }
    }

    get() {
    }

    getAll() {
    }

    softDelete() {
    }

    delete() {
    }

    clear() {
    }

    updateTime() {
    }

    check() {

        if (typeof _env.doc.cookie === 'string') {
            this._allow += 'Cookies|'
        }
        if (_env.main.hasOwnProperty('localStorage')) {
            this._allow += 'localStorage|'
        }
        if (_env.main.hasOwnProperty('sessionStorage')) {
            this._allow += 'sessionStorage|'
        }
        if (_env.main.hasOwnProperty('openDatabase')) {
            this._allow += 'webSQL|'
        }
        if (_env.main.hasOwnProperty('indexedDB')) {
            this._allow += 'indexedDB|'
        }
        if (_env.main.hasOwnProperty('caches')) {
            this._allow += 'cacheStorage|'
        }

    }
}
