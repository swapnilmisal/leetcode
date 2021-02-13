#include <stdbool.h>
#include <stdio.h>

long long int eucludian(long long int g, long long int a, long long int p) {

  long long int bin = a;
  long long int sum = 0;
  bool temp = 0;

  long long int i = 0;
  long long int j = 1;
  long long int k = 0;
  long long int d = 1;

  //	bool expand[64];

  while (bin != 0) {
    temp = bin % 2;
    sum = sum + (j * temp);
    bin = bin / 2;
    j *= 10;
    i++;
  }
  printf("%lld\n", i);

  bool expand[i];

  k = i;
  while (--k >= 0) {

    expand[k] = sum % 10;
    sum /= 10;
  }

  k = 0;

  while (k < i) {

    printf("%d ", expand[k++]);
  }

  for (k = 0, d = 1; k < i; k++) {

    d = (d * d) % p;

    if (expand[k])
      d = (d * g) % p;
  }

  return d;
}

long long int private(long long int n) {

  long long int i = 2;
  long long int itr = n;
  long long int val;
  long long int temp;
  while (i < n) {
    temp = i;
    val = n;
    itr = n;
    while (val > 1 && itr != 0) {
      itr = val - (val / temp) * temp;
      val = temp;
      temp = itr;
    }
    if (val == 1)
      return i;
    i++;
  }
  return 0;
}

long long int public(long long int d, long long int z) {

  long long int e = 2;

  while ((e * d) % z != 1) {
    e++;
  }

  return e;
}
int main() {

  long long int p, q, n, z, e, d;
  long long int c = 'a';

  printf("Enter two prime numbers \n");
  scanf("%lld%lld", &p, &q);
  n = p * q;
  z = (p - 1) * (q - 1);
  d = private(z);

  printf("\ndecryption key %lld ", d);
  e = public(d, z);

  printf("\nEncryption key %lld ", e);

  printf("\nEnter character to encode ");

  //	scanf("%c",&c);

  printf("your character %lld \n", c);

  c = eucludian(c, e, n);

  printf("your encrypted character %lld\n", c);

  c = eucludian(c, d, n);

  printf("your dencrypted character %lld \n", c);

  return 0;
}
