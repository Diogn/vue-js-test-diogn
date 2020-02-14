function duplicateRemover(array) {
    return array.filter((a, b) => array.indexOf(a) === b);
};

const city = ['Jakarta', 'Aceh', 'Malang', 'Medan', 'Bontang', 'Jogja', 'Jakarta', 'Bandung', 'Malang', 'Solo', 'Palembang', 'Bandung']

duplicateRemover(city);