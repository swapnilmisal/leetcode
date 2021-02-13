#include <stdio.h>
#include <stdlib.h>

struct node {
  int n;
  struct node *next;
} *top = NULL, *head = NULL;

struct node *create_node(int n) {

  struct node *p = (struct node *)malloc(sizeof(struct node));
  p->n = n;
  p->next = NULL;

  return p;
}

int push(int n) {

  struct node *p = create_node(n);
  struct node *q = head;

  if (!top) {
    head = p;
  } else {
    top->next = p;
  }

  top = p;

  return 0;
}
int pop() {

  struct node *p = head;
  struct node *q = head;

  if (!top) {
    printf("\nStack Underflow");
  } else {

    while (p->next) {

      q = p;
      p = p->next;
    }

    printf("\nPopped object:  %d", p->n);
    q->next = NULL;
    top = q;
    if (top == p) {
      head = top = NULL;
    }
    free(p);
  }
  return 0;
}

int stack_top() {

  if (!top)
    printf("\nStack Underflow");
  else
    printf("\n\tTOP OBJECT: %d", top->n);
  return 0;
}

int main() {

  int choice;
  int n;

  printf("\n\tEnter your "
         "choice\n\t1:push\n\t2:pop\n\t3:top\n\t4:print\n\t0:Exit\n\t");
  scanf("%d", &choice);

  while (choice) {

    switch (choice) {

    case 1:
      printf("\nEnter number to insert");
      scanf("%d", &n);
      push(n);
      break;

    case 2:
      pop();
      break;

    case 3:
      stack_top();
      break;

    case 4:
      exit(0);

    default:
      exit(0);
      break;
    }

    printf("\n\tEnter your "
           "choice\n\t1:push\n\t2:pop\n\t3:top\n\t4:print\n\t0:Exit\n\t");
    scanf("%d", &choice);
  }

  return 0;
}
