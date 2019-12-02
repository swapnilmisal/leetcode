#include <stdio.h>
#include <stdlib.h>

#define N 8
#define M 4

int arr[M][N];
int val[M][2] = {1, 1, 4, 3, 5, 4, 7, 5};

int max(int a, int b) {

  if (a > b)
    return a;
  else
    return b;
}

int main() {

  int i = 0;
  int j = 1;

  while (i < 4) {

    printf("%d ", val[i++][0]);
  }

  for (i = 0; i < M; i++)

    for (j = 1; j < N; j++) {

      if (j < val[i][1])
        if (i != 0)
          arr[i][j] = arr[i - 1][j];
        else
          arr[i][j] = arr[i - 1][j];

      else if (i != 0)
        arr[i][j] = max(val[i][0] + arr[i - 1][j - (val[i][1])], arr[i - 1][j]);

      else
        arr[i][j] = val[i][0];
    }

  for (i = 0; i < M; i++) {
    printf("\n");
    for (j = 0; j < N; j++)

      printf("%d ", arr[i][j]);
  }

  printf("\n");

  for (i = M - 1, j = N - 1; j > 0 && i > 0; i--) {

    if (arr[i][j] <= arr[i - 1][j]) {

    } else {
      printf("%d ", i);
      j = j - val[i][1] + 1;
    }
  }

  return 0;
}
