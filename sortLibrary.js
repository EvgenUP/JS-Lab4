class SortLibrary {
    static swap(arr, i, j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    static logSparseArray(arr) {
        if (arr.some(item => item === undefined)) {
            console.log("Sparse array contains undefined elements.");
        }
    }

    static bubbleSort(arr, ascending = true) {
        this.logSparseArray(arr);
        let comparisons = 0;
        let swaps = 0;
        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = 0; j < arr.length - 1 - i; j++) {
                if ((ascending && arr[j] > arr[j + 1]) || (!ascending && arr[j] < arr[j + 1])) {
                    this.swap(arr, j, j + 1);
                    swaps++;
                }
                comparisons++;
            }
        }
        console.log(`Bubble Sort - Comparisons: ${comparisons}, Swaps: ${swaps}`);
    }

    static selectionSort(arr, ascending = true) {
        this.logSparseArray(arr);
        let comparisons = 0;
        let swaps = 0;
        for (let i = 0; i < arr.length - 1; i++) {
            let minMaxIdx = i;
            for (let j = i + 1; j < arr.length; j++) {
                if ((ascending && arr[j] < arr[minMaxIdx]) || (!ascending && arr[j] > arr[minMaxIdx])) {
                    minMaxIdx = j;
                }
                comparisons++;
            }
            if (minMaxIdx !== i) {
                this.swap(arr, i, minMaxIdx);
                swaps++;
            }
        }
        console.log(`Selection Sort - Comparisons: ${comparisons}, Swaps: ${swaps}`);
    }

    static insertionSort(arr, ascending = true) {
        this.logSparseArray(arr);
        let comparisons = 0;
        let shifts = 0;
        for (let i = 1; i < arr.length; i++) {
            let current = arr[i];
            let j = i - 1;
            while (j >= 0 && ((ascending && arr[j] > current) || (!ascending && arr[j] < current))) {
                arr[j + 1] = arr[j];
                j--;
                shifts++;
                comparisons++;
            }
            arr[j + 1] = current;
        }
        console.log(`Insertion Sort - Comparisons: ${comparisons}, Shifts: ${shifts}`);
    }

    static shellSort(arr, ascending = true) {
        this.logSparseArray(arr);
        let comparisons = 0;
        let swaps = 0;
        let gaps = [701, 301, 132, 57, 23, 10, 4, 1]; // Knuth sequence
        for (let gap of gaps) {
            for (let i = gap; i < arr.length; i++) {
                let temp = arr[i];
                let j = i;
                while (j >= gap && ((ascending && arr[j - gap] > temp) || (!ascending && arr[j - gap] < temp))) {
                    arr[j] = arr[j - gap];
                    j -= gap;
                    swaps++;
                    comparisons++;
                }
                arr[j] = temp;
            }
        }
        console.log(`Shell Sort - Comparisons: ${comparisons}, Swaps: ${swaps}`);
    }

    static quickSort(arr, ascending = true) {
        this.logSparseArray(arr);
        let comparisons = 0;
        let swaps = 0;

        const partition = (low, high) => {
            let pivot = arr[Math.floor((low + high) / 2)];
            let left = low;
            let right = high;

            while (left <= right) {
                while ((ascending && arr[left] < pivot) || (!ascending && arr[left] > pivot)) {
                    left++;
                    comparisons++;
                }
                while ((ascending && arr[right] > pivot) || (!ascending && arr[right] < pivot)) {
                    right--;
                    comparisons++;
                }
                if (left <= right) {
                    this.swap(arr, left, right);
                    swaps++;
                    left++;
                    right--;
                }
            }
            return left;
        }

        const quickSortRecursive = (low, high) => {
            if (low < high) {
                let index = partition(low, high);
                quickSortRecursive(low, index - 1);
                quickSortRecursive(index, high);
            }
        }

        quickSortRecursive(0, arr.length - 1);
        console.log(`Quick Sort - Comparisons: ${comparisons}, Swaps: ${swaps}`);
    }
}

