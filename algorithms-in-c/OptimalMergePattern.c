#include <stdio.h>
#include <stdlib.h>

int n = 0;

struct vertex {

  struct vertex *left;
  int weight;
  struct vertex *right;
};

struct list {

  struct vertex *node;
  struct list *next;

} *head = NULL;

int create(int value) {

  struct list *ll = (struct list *)malloc(sizeof(struct list));

  struct vertex *p = (struct vertex *)malloc(sizeof(struct vertex));

  p->weight = value;
  ll->next = head;
  ll->node = p;
  p->left = NULL;
  p->right = NULL;
  head = ll;
  n++;

  return 0;
}

struct list *least() {

  struct list *pt = head;
  struct list *ls = head;
  struct list *itr = pt;
  struct list *mind = NULL;

  if (pt) {
    int min = pt->node->weight;

    while (pt) {

      if (min > pt->node->weight) {

        min = pt->node->weight;
        mind = itr;
        ls = pt;
      }

      itr = pt;
      pt = pt->next;
    }

    if (ls == head) {
      if (head)
        head = head->next;

    } else {
      mind->next = ls->next;
    }

    ls->next = NULL;

    n--;
  }

  return ls;
}

struct list *tre() {

  while (n) {

    struct list *temp = NULL;

    struct list *tree = (struct list *)malloc(sizeof(struct list));
    struct vertex *p = (struct vertex *)malloc(sizeof(struct vertex));
    tree->node = p;
    temp = least();

    if (temp)
      tree->node->left = temp->node;
    else
      return NULL;

    temp = least();

    if (temp)
      tree->node->right = temp->node;
    else {
      tree->node->weight = tree->node->left->weight;
      return tree;
    }

    tree->node->weight =
        (tree->node->left->weight) + (tree->node->right->weight);

    tree->next = head;

    head = tree;
  }

  return least();
}

int WeightedExpternalPathLength(struct vertex *tree) {

  static int weight = 0;

  /*if(tree->left){

                  weight+=WeightedExpternalPathLength(tree->left,n+1);
                  weight+=WeightedExpternalPathLength(tree->right,n+1);
          }
  else
          return weight+tree->weight*n;

  */

  if (tree) {
    WeightedExpternalPathLength(tree->left);
    if (tree->left && tree->right) {
      weight += tree->weight;
    }
    printf("%d ", tree->weight);
    WeightedExpternalPathLength(tree->right);
  }

  return weight;
}

int main() {

  int choice = 1;
  int value;
  int weight;
  int n = 0;
  struct list *ll = NULL;

  while (choice) {

    printf("\n\tEnter your choice\n\t1:insert in list\n\t2:Find Least "
           "Value\n\t3:Find Optimal Merge pattern\n\t0:Exit\n");
    scanf("%d", &choice);

    switch (choice) {

    case 1:
      printf("\ninsert a node in the list ");
      scanf("%d", &value);
      create(value);

      break;

    case 2:
      ll = NULL;
      printf("N is %d ", n);
      ll = least();

      if (ll)
        printf("\nThe least value is: %d", ll->node->weight);
      else
        printf("\n Tree is not present");
      break;

    case 3:
      ll = NULL;
      printf("N is %d ", n);

      printf("Im in switch");

      ll = tre();

      if (ll)
        printf("omptimal merge patten is: %d", ll->node->weight);
      else
        printf("\n Tree not present");

      break;

    case 4:
      printf("\nInorder of the Tree");

      weight = WeightedExpternalPathLength(ll->node);

      printf("\nWeighted Expternal Path Length %d", weight);

      break;

    case 0:
      exit(0);

    default:
      break;
    }
  }
  return 0;
}
