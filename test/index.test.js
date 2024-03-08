const assert = require('assert');
const { formatCurrency, formatDate } = require('../src/dataFormattingHelpers');

describe('Data Formatting Helpers', function() {
    describe('#formatCurrency()', function() {
        it('should format number to currency format', function() {
            assert.strictEqual(formatCurrency(1000, 'USD'), '$1,000.00');
            assert.strictEqual(formatCurrency(1500.50, 'EUR'), '€1,500.50');
        });
    });

    describe('#formatDate()', function() {
        it('should format date to specified format', function() {
            const date = new Date('2024-03-07');
            assert.strictEqual(formatDate(date, 'yyyy-MM-dd'), '2024-03-07');
            assert.strictEqual(formatDate(date, 'MM/dd/yyyy'), '03/07/2024');
        });
    });
});
