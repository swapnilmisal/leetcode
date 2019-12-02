#include <stdio.h>
#include <stdlib.h>
#define N 7

int front = -1, rear = 0;
int q[N];

int AddQ(int item) {

  if (front == -1) {

    front = 0;
    q[front] = item;
  }

  else {
    rear = (rear + 1) % N;

    if (front == rear) {

      printf("\n\tQueue is full!");

      if (rear == 0) {
        rear = N - 1;
      }

      else {
        rear--;
      }

      return -1;
    }

    else
      q[rear] = item;
  }

  return item;
}

int deleteQ() {

  int item;

  if (front == rear) {
    printf("\n\tQueue is Empty!");

    return -1;
  } else {

    front = (front + 1) % N;
    item = q[front];
  }

  return item;
}

int rearQ() { return q[rear]; }

int main() {

  int choice;
  int item;

  printf("\n\tSelect you choice\n\t1:Add\n\t2:Delete\n\t3:Rear\n\t");
  scanf("%d", &choice);

  while (choice) {

    switch (choice) {

    case 1:
      printf("\n\tItem:");
      scanf("%d", &item);
      AddQ(item);
      break;

    case 2:
      item = deleteQ();
      printf("\n\tfront %d", item);
      break;

    case 3:
      item = rearQ();
      printf("\n\tReared Item %d", item);
      break;

    default:
      break;
    }

    printf(
        "\n\tSelect you choice\n\t1:Add\n\t2:Delete\n\t3:Rear\n\t0:Exit\n\t");
    scanf("%d", &choice);
  }

  return 0;
}
