#include <stdio.h>
#include <stdlib.h>
#define N 8

int A[N];
int last = 1;

int insert(int item) {

  int i;

  if (last > N) {
    printf("\n\t!!!ARRAY BOUND REACHED!!!\n");
    return 0;
  }

  if (last == 1) {
    A[last - 1] = item;
    last++;
  }

  else {
    i = last;
    while (i > 1 && A[i / 2 - 1] < item) {

      A[i - 1] = A[(i / 2) - 1];
      i = i / 2;
    }
    A[i - 1] = item;
    last++;
  }

  return 0;
}

int adjust(int *a, int i, int n) {

  int j = 2 * i;
  int item = a[i - 1];

  while (j <= n) {

    if (j < n && a[j - 1] < a[j])
      j++;
    if (item >= a[j - 1])
      break;

    a[(j / 2) - 1] = a[j - 1];
    j = 2 * j;
  }

  a[j / 2 - 1] = item;

  return 0;
}

int delete () {

  int temp;

  if (last == 1) {
    printf("\n\t Heap is empty");
    return 0;
  } else {
    last--;
    temp = A[0];
    A[0] = A[last - 1];
    A[last - 1] = temp;

    adjust(A, 1, (last - 1));
  }

  return temp;
}

int heapify(int *a, int n) {

  int i = n / 2;

  for (; i >= 1; i--)

    adjust(a, i, n);

  return 0;
}

int heapsort(int *a, int n) {

  int i;
  int temp;
  heapify(a, n);

  for (i = n; i > 1; i--) {

    temp = a[0];

    a[0] = a[i - 1];

    a[i - 1] = temp;

    adjust(a, 1, i - 1);
  }
  return 0;
}

int main() {

  int choice = 1;
  int item;
  int i;

  int a[N] = {100, 119, 118, 171, 112, 151, 132, 146};

  while (choice) {

    printf("\n\tEnter your choice\n\t1:Insert\n\t2:view "
           "array\n\t3:priority\n\t4:Heapify\n\t5:Heap Sort\n\t0:Exit\n");
    scanf("%d", &choice);

    switch (choice) {

    case 1:
      printf("\n\tEnter your number to insert");
      scanf("\n\t%d", &item);
      insert(item);
      break;
    case 2:
      i = 0;
      while (i < N)
        printf("%d ", a[i++]);
      break;

    case 3:
      item = delete ();
      printf("\n\tThe priority item is: %d", item);
      break;

    case 4:
      heapify(a, N);
      break;

    case 5:
      heapsort(a, N);
      break;
    default:
      break;
    }
  }

  return 0;
}
