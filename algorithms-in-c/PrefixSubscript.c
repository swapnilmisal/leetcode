#include <stdio.h>

int k[5] = {0, 1, 2, 3, 4};

int main() {

  int i = 2;
  int l = 5;

  k[i--] = k[i++];

  while (l)

    printf("%d\n", k[--l]);

  printf("%d", i);

  return 0;
}
