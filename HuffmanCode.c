#include<stdio.h>
#include<stdlib.h>
#define N 5
#define K 21

float array[N]={0.05,0.11,0.15,0.23,0.46};
int stream[K]={1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0};

struct node{

struct node* left;
float data;
struct node* right;

}*tree=NULL,*itr=NULL;


int code(){


int i=1;
		for(;i<N;i++){

	struct node* new=(struct node*)malloc(sizeof(struct node));
	
		new->left=new->right=NULL;
		new->data=array[i];
	
	struct node* add=(struct node*)malloc(sizeof(struct node));

		add->left=new;
		add->right=tree;
		add->data=(tree->data)+(new->data);

		tree=add;

		}
	

return 0;
}
int NumberOfBits(){
int n=0;
itr=tree;
	while(itr){
		itr=itr->right;
		n++;
		}

return n;
}




int main(){
int n;
int i=0;
tree=(struct node*)malloc(sizeof(struct node));
	
tree->data=array[0];
tree->left=NULL;
tree->right=NULL;



code();

printf("\nTotal %f ",tree->data);

n=NumberOfBits();

printf("\nLength %d",n);

n=((n*n+n)/2)-1;

printf("\nNumber of bits %d\n ",n);

itr=tree;	
printf("\nDecoded Message:- ");
	while(i<K){



	if(stream[i] && itr->right)
		itr=itr->right;

	else if(itr->right){
		printf(" %f ",itr->left->data);
			itr=tree;
		}
	else{
			printf(" %f ",itr->data);
			itr=tree;
		}

	i++;
	}


return 0;
}
