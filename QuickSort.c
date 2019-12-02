#include <stdio.h>
#define N 9

int a[N] = {65, 70, 75, 80, 85, 60, 55, 50, 45};

int interchange(int i, int j) {

  int temp;
  temp = a[i];

  a[i] = a[j];

  a[j] = temp;

  return 0;
}

int partition(int m, int q) {

  int j = q;
  int i = m;
  int v = a[m];

  do {
    do {
      i++;

    } while (v >= a[i] && i < N);

    do {

      j--;

    } while (v <= a[j] && j > -1);

    if (i < j)
      interchange(i, j);

  } while (i <= j);

  a[m] = a[j];
  a[j] = v;

  return j;
}

int QuickSort(int p, int q) {

  int j;
  if (p < q) {

    j = partition(p, q + 1);

    QuickSort(p, j - 1);

    QuickSort(j + 1, q);
  }

  return 0;
}

int main() {

  int i = 0;

  while (i < N)
    printf("%d ", a[i++]);
  printf("\n");

  QuickSort(0, N - 1);

  i = 0;
  while (i < N)
    printf("%d ", a[i++]);
  printf("\n");

  return 0;
}
