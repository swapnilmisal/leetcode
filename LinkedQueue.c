#include<stdio.h>
#include<stdlib.h>


struct node{

int data;
struct node* next;
}*rear=NULL,*front=NULL;


int AddQ(int item){

	struct node *p=(struct node*)malloc(sizeof(struct node));
	
	p->data=item;	
	p->next=NULL;

	if(!front){
	front=p;
	}
	else{
	rear->next=p;
	}

	rear=p;
return 0;
}

int deleteQ(){
	
	if(!front){
	printf("\n\tempty queue");
	}
	else if(front==rear){
	free(rear);
	front=rear=NULL;
	}
	else {
	struct node *p=front;
	front=front->next;	
	free(p);
	}	
	
}


	int search(int item){

		struct node *p=(struct node *)front;
		while(p){

		if(p->data==item)
		break;
		else
		p=p->next;
		}
		if(!p)
		printf("\n\tElement not present");
		else
		printf("\n\tElement is found");
	return 0;
	}

int main(){

int choice=1;
int item;
	while(choice){	

	printf("\n\tEnter choice\n\t1:insert\n\t2:delete\n\t3:search\n\t4:rear\n\t5:front\n\t0:Exit");
	scanf("%d",&choice);

	switch(choice){

	case 1: printf("\n\tEnter element");
	        scanf("%d",&item);
		AddQ(item);
	break;

	case 2: deleteQ();
	break;
		
	case 3: printf("\n\tEnter element");
	        scanf("%d",&item);
		search(item);

	break;

	case 4:	printf("\n\t%d",rear->data);

		break;	
	case 5: printf("\n\t%d",front->data);
		break;
	default:
		break;
}

}

return 0;
}

