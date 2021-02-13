#include <stdio.h>
#include <stdlib.h>
#define D 9

int x = D;
int weight = 0;
int id = 1;
struct tree {

  int n;
  struct tree *next;
};

struct edge {

  int w;
  int u;
  int v;
};

struct arr {

  struct tree *link;
  int i;
  struct arr *point;
} *head = NULL;

struct edge *ed[D];

int adjust(int i) {

  //	int item=ed[i-1]->w;
  int j = i * 2;
  struct edge *item = ed[i - 1];

  while (j <= x) {

    if (j < x && ed[j - 1]->w > ed[j]->w)

      j++;
    if (item->w <= ed[j - 1]->w)
      break;

    ed[j / 2 - 1] = ed[j - 1];
    j = 2 * j;
  }

  ed[j / 2 - 1] = item;

  return 0;
}

int heapify() {

  int i = x / 2;

  while (i) {
    adjust(i);
    i--;
  }

  return 0;
}

int Enter() {

  int i = 0;
  struct edge *p;
  for (; i < D; i++) {

    p = (struct edge *)malloc(sizeof(struct edge));
    printf("\nEnter 1 node");
    scanf("%d", &p->u);
    printf("\nEnter 2 node");
    scanf("%d", &p->v);
    printf("\nEnter Weight");
    scanf("%d", &p->w);

    ed[i] = p;
  }
  heapify();
  return 0;
}
struct edge *delete () {

  struct edge *min = ed[0];

  ed[0] = ed[x - 1];
  x--;
  heapify();

  return min;
}

int set(int vertex, struct arr **upper, struct tree **del) {

  struct arr *p = head;
  struct tree *itr;

  while (p) {
    itr = p->link;

    while (itr) {

      if (itr->n == vertex) {

        *upper = p;
        *del = itr;
        printf("\nset p->i %d", p->i);
        return p->i;
      }
      itr = itr->next;
    }

    p = p->point;
  }
  return 0;
}

int kruskal() {

  int i;
  int one = 0;
  int two = 0;

  struct edge *priority;
  struct tree *del = NULL;
  struct tree *m;

  struct tree *itr = NULL;

  struct arr *upper = NULL;
  struct arr *lower = NULL;
  struct arr *artr = NULL;

  for (i = 0; i < D; i++) {

    del = NULL;
    priority = delete ();

    one = set(priority->u, &upper, &del);
    two = set(priority->v, &lower, &del);

    printf("\n one %d two %d ", one, two);
    if (one + two == 0) {

      weight += priority->w;
      printf("\n%d weight", weight);

      struct arr *a = (struct arr *)malloc(sizeof(struct arr));
      struct tree *p = (struct tree *)malloc(sizeof(struct tree));
      struct tree *q = (struct tree *)malloc(sizeof(struct tree));
      a->point = head;
      head = a;

      a->link = p;
      a->i = id++;
      p->next = q;
      q->next = NULL;
      p->n = priority->u;
      q->n = priority->v;

    } else if (one + two == 2 * one) {
      printf("\nLoop is forming");
    }

    else if (one + two == one) {

      weight += priority->w;
      printf("\n%d weight", weight);

      while (del->next)
        del = del->next;

      m = (struct tree *)malloc(sizeof(struct tree));
      m->next = NULL;
      m->n = priority->v;
      del->next = m;

    } else if (one + two == two) {

      printf("priority->w %d", priority->w);

      weight += priority->w;

      printf("priority->w %d", priority->w);

      printf("\n%d weight", weight);
      while (del->next)
        del = del->next;

      m = (struct tree *)malloc(sizeof(struct tree));
      m->next = NULL;
      m->n = priority->u;
      del->next = m;

    }

    else {
      if (one > two) {

        weight += priority->w;

        printf("\n%d weight", weight);
        itr = upper->link;

        while (itr->next)
          itr = itr->next;

        itr->next = lower->link;

        // if(head && head->i==lower->i)

        artr = head;
        //	else
        while (artr->point && artr->point->i != lower->i)
          artr = artr->point;

        artr->point = lower->point;
        free(lower);
      }

      else {

        printf("\n%d weight", weight);
        printf("\n%d weight", weight);
        printf("\n%d weight", weight);
        weight += priority->w;

        printf("\n%d weight", weight);
        itr = lower->link;

        while (itr->next)
          itr = itr->next;

        itr->next = upper->link;

        //	if(head && head->i==upper->i)
        artr = head;

        // else
        while (artr->point->i != upper->i) // artr->point &&
          artr = artr->point;

        artr->point = upper->point;
        free(upper);
      }
    }
  }
  return 0;
}

int main() {

  int choice = 1;
  int k;

  struct edge *priority;

  while (choice) {

    printf("\n\tYour Choice \n\t1:Enter Egdes\n\t2:Print "
           "Edges\n\t3:Delete\n\t4:Kruskal\n\t");
    scanf("%d", &choice);

    switch (choice) {

    case 1:

      Enter();
      break;

    case 2:
      for (k = 0; k < x && head; k++) {
        printf("\n\t %d  %d ", ed[k]->w, head->i);
        head = head->point;
      }

      break;

    case 3:
      if (!x)
        printf("\nSorry Cant delete the item");
      else {
        priority = delete ();
        printf("\n1st Vertex %d\n2nd Vertex %d\nweight %d", priority->u,
               priority->v, priority->w);
      }
      break;

    case 4:

      kruskal();
      printf("\n\n\t\tweight is %d", weight);
      break;
    default:
      exit(0);
      break;
    }
  }

  return 0;
}
