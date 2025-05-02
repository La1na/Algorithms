const arr1 = [100, 112, 256, 349, 770];
const arr2 = [72, 86, 113, 119, 265, 445, 892];
const k = 7;

// Интуитивно-очевидный вариант

function findKthElement(arr1, arr2, k) {
    let i = 0, j = 0, count = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            count++;
            if (count === k) return arr1[i];
            i++;
        } else {
            count++;
            if (count === k) return arr2[j];
            j++;
        }
    }

    while (i < arr1.length) {
        count++;
        if (count === k) return arr1[i];
        i++;
    }

    while (j < arr2.length) {
        count++;
        if (count === k) return arr2[j];
        j++;
    }

    return -1;
}
console.log(findKthElement(arr1, arr2, k)); 



// Оптимальный вариант

function getKthInSortedArrays(arr1, arr2, k) {
    function kth(a, b, k) {
        const lenA = a.length;
        const lenB = b.length;

        if (lenA > lenB) return kth(b, a, k);
        if (lenA === 0) return b[k - 1];
        if (k === 1) return Math.min(a[0], b[0]);

        const i = Math.min(lenA, Math.floor(k / 2));
        const j = k - i;

        if (a[i - 1] < b[j - 1]) {
            return kth(a.slice(i), b, k - i);
        } else {
            return kth(a, b.slice(j), k - j);
        }
    }

    return kth(arr1, arr2, k);
}

console.log(getKthInSortedArrays(arr1, arr2, k));