'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./index"));
const multipleHosts = {
    'hosts': [
        'http://example.com',
        'http://test.example.com',
    ]
};
const singleHost = {
    'hosts': ['http://example.com']
};
const testLink = 'https://example.com';
if (singleHost) {
    console.log((0, index_1.default)(testLink, singleHost));
}
if (multipleHosts) {
    console.log((0, index_1.default)(testLink, multipleHosts));
}
