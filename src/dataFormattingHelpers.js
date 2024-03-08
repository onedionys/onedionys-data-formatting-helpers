/**
 * Format number to currency format
 * @param {number} number - The number to be formatted
 * @param {string} currency - The currency code (e.g., USD, EUR)
 * @returns {string} - Formatted currency string
 */
function formatCurrency(number, currency) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency
    }).format(number);
}

/**
 * Format date to specified format
 * @param {Date} date - The date object to be formatted
 * @param {string} format - The desired format (e.g., 'yyyy-MM-dd', 'MM/dd/yyyy')
 * @returns {string} - Formatted date string
 */
function formatDate(date, format) {
    const options = {
        year: format.includes('yyyy') ? 'numeric' : undefined,
        month: format.includes('MM') ? '2-digit' : undefined,
        day: format.includes('dd') ? '2-digit' : undefined
    };

    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);

    // Konversi format jika diperlukan
    const parts = formattedDate.split('/');
    const yyyy = parts[2];
    const mm = parts[0].padStart(2, '0');
    const dd = parts[1].padStart(2, '0');

    return format.replace('yyyy', yyyy).replace('MM', mm).replace('dd', dd);
}




module.exports = { formatCurrency, formatDate };
