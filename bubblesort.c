#include <stdio.h>
#include <stdlib.h>
#define N 7

int swap(int *a, int *b) {
  int temp;

  temp = *a;
  *a = *b;
  *b = temp;

  return 0;
}

int bubble(int *A, int n) {

  int i;

  while (--n) {

    for (i = 0; i < n; i++)
      if (A[i] > A[i + 1])
        swap(A + i, A + (i + 1));
  }

  return 0;
}

int main() {

  int n = N;
  int i = 0;
  int A[N] = {8, 9, 2, 1, 3, 4, 6};

  while (i < n) {
    printf("  %d \n", A[i]);
    i++;
  }

  bubble(A, N);
  i = 0;
  printf("\n");
  while (i < n) {
    printf("  %d \n", A[i]);
    i++;
  }
  return 0;
}
