// Imperial Height
new Cleave('.input-10', {
    numericOnly: true,
    delimiters: ['ft ', 'in'],
    blocks: [1, 1, 0]
});

// Imperial Weight: 10st 8lbs
new Cleave('.input-11', {
    numericOnly: true,
    delimiters: ['st ', 'lbs'],
    blocks: [2, 2, 0]
});

// Metric Weight: 67.45kg
new Cleave('.input-12', {
    numericOnly: true,
    delimiters: ['.', 'kg'],
    blocks: [2, 2, 0]
});

// Metric height: 180cm
new Cleave('.input-13', {
    numericOnly: true,
    delimiter: 'cm',
    blocks: [3, 0]
});