#include <stdio.h>
#include <stdlib.h>

typedef struct node {

  struct node *p;
  struct node *l;
  struct node *r;
  int val;

} node;

node *root = NULL;

node *create(int value) {

  node *vertex = (node *)malloc(sizeof(node));
  vertex->val = value;
  vertex->p = NULL;
  vertex->l = NULL;
  vertex->r = NULL;
  return vertex;
}

void insert(int value) {

  node *vertex = create(value);

  if (!root)
    root = vertex;
  else {
    node *itr = root;
    node *parent = NULL;

    while (itr) {
      parent = itr;
      if (value <= itr->val)
        itr = itr->l;
      else
        itr = itr->r;
    }

    vertex->p = parent;

    if (value <= parent->val)
      parent->l = vertex;
    else
      parent->r = vertex;
  }
}

void inorder(node *itr) {

  if (itr) {
    inorder(itr->l);
    printf(" %d", itr->val);
    inorder(itr->r);
  }
}

void delete (int value) {

  node *itr = root;

  while (itr && itr->val != value) {

    if (value <= itr->val)
      itr = itr->l;
    else
      itr = itr->r;
  }

  if (itr->val == value) {

    if (!itr->l && !itr->r) {
      if (itr->val <= itr->p->val)
        itr->p->l = NULL;
      else
        itr->p->r = NULL;
      free(itr);
    }

    else if (itr->l && itr->r) {

      node *navigator = itr->l;

      while (navigator->r)
        navigator = navigator->r;

      navigator->p->r = navigator->l;

      if (navigator->l)
        navigator->l->p = navigator->p;

      itr->val = navigator->val;
      free(navigator);

    }

    else if (itr->l || itr->r) {

      if (itr->l) {

        if (itr->val <= itr->p->val)
          itr->p->l = itr->l;
        else
          itr->p->r = itr->l;
      } else {

        if (itr->val <= itr->p->val)
          itr->p->l = itr->r;
        else
          itr->p->r = itr->r;
      }
    }

  } else
    printf("\n Element Not Present");
}

int main() {

  int choice;
  int value;

  while (1) {

    printf("\tMenu:\n\t1.Insert\n\t2.Display\n\t3\n\tDelete\n\t0.Exit");
    scanf("\n%d", &choice);

    switch (choice) {

    case 1:
      printf("\nEnter Value");
      scanf(" %d", &value);
      insert(value);
      break;

    case 2:
      inorder(root);
      break;

    case 3:
      printf("\nEnter Value");
      scanf(" %d", &value);

      delete (value);
      break;
    case 0:
      exit(0);
      break;

    default:
      break;
    }
  }

  return 0;
}
