import test from 'node:test';import assert from 'node:assert/strict';import {parseQuery,searchProducts,pricePerUnit} from '../backend/services/search.js';
test('parses a natural language quantity',()=>assert.deepEqual(parseQuery('2 kg Huletts Brown Sugar').quantity,2));
test('matches reordered Huletts terms but not a different pack size',()=>{assert.equal(searchProducts('Huletts 2kg brown')[0].id,'huletts-brown-sugar-2kg');assert.equal(searchProducts('Huletts brown sugar 1kg').length,0)});
test('calculates kilograms and litres consistently',()=>assert.equal(pricePerUnit({quantity:2,unit:'kg'},49.99),24.995));
