type TSortArray = number[];

interface ISortingStraregy {
  sort: (arr: TSortArray) => void;
}

class Sorting {
  sortingStrategy: ISortingStraregy;

  constructor(sortingStrategy: ISortingStraregy) {
    this.sortingStrategy = sortingStrategy;
  }

  changeSortingStrategy(sortingStrategy: ISortingStraregy) {
    this.sortingStrategy = sortingStrategy;
  }

  sort(arr: TSortArray) {
    this.sortingStrategy.sort(arr);
  }
}

class BubbleSortStrategy implements ISortingStraregy {
  sort(arr: TSortArray) {
    console.log(arr, "Bubble sort");
  }
}

class MergeSortStrategy implements ISortingStraregy {
  sort(arr: TSortArray) {
    console.log(arr, "Merge sort");
  }
}

class QuickSortStrategy implements ISortingStraregy {
  sort(arr: TSortArray) {
    console.log(arr, "Quick sort");
  }
}

const sortArray = [4, 2, 1, 3];

const sorting = new Sorting(new BubbleSortStrategy());

sorting.sort(sortArray); // Bubble sort

sorting.changeSortingStrategy(new MergeSortStrategy());

sorting.sort(sortArray); // Merge sort

sorting.changeSortingStrategy(new QuickSortStrategy());

sorting.sort(sortArray); // Quich sort
