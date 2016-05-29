#include<stdio.h>
#include<stdlib.h>


struct node{

	int n;
	struct node * next;

	}*head=NULL;

struct node* create_node(){

	struct node* p=(struct node*)malloc(sizeof(struct node));
	return p;

	}

struct node* create(int n){

	struct node *p=(struct node *)create_node();
	p->n=n;
	p->next=NULL;
	return p;
	}




struct node * insert(){

	int n;
	printf("Enter number to insert: ");
	scanf("%d",&n);

	struct node *p=(struct node *)create(n);	
	
	if(!head){
	head=p;
	}

	else{
	struct node *i=head;
	
	while(i->next)
	i=i->next;

	i->next=p;
	
	}

	return p;

	}

int print_list(struct node *p){
	
	if(!p){
	printf("   %d\n",p->n);
	print_list(p->next);
}


return 0;
}



int length(){

	int len=0;
	struct node *p=head;
	
	while(p){
	len++;
	p=p->next;
	}

return len;
}

	int insert_at_position(int position){
	
	
	int n;
	printf("Enter number to insert: ");
	scanf("%d",&n);

	struct node *new=(struct node *)create(n);	

	if(position==1){

	new->next=head;
	head=new;
	}

	else{


	struct node *p=head;
	struct node *q=head;
	

	while(--position && p->next){
	
	q=p;
	p=p->next;

	}

	new->next=p;
	q->next=new;


	}
	return 0;

	}



	int delete(){

	struct node*p=head;

	if(!length()){
	printf("\nNot Possible to delete no node");
	}
	else if(length()==1){
	head=NULL;
	free(p);
	}
	else{
	head=head->next;
	free(p);
	
	return 0;
	}
}

	int delete_at_last(){

	struct node*p=head;
	struct node*q=head;
	
	while(p){

	q=p;
	p=p->next;
	}

	q->next=NULL;
	free(p);

	return 0;
	
	}






	int delete_at_position(int position){


	struct node *p=head;
	struct node *q=head;
	

	while(--position){
	q=p;
	p=p->next;
	}

	q->next=p->next;
	free(p);


	return 0;
	
}



















int main(){

	int choice=1;
	int position;	
	while(choice){
		printf("Select one of the option following\n\t1:insert\n\t2:Display\n\t3:insert At Postion\n\t4:delete at position\n\t5:delete last\n\t6:delete at first\n\t0:Exit\n");
		scanf("%d",&choice);

		switch(choice){
		


			case 1:insert();

			break;

			case 2: print_list(head);

			break;
		
			case 3: printf("\n\tEnter position: ");
				scanf("%d",&position);
				if(position>length() || position<1){
				printf("\n\tout of bound\n");
				}
				else{
				insert_at_position(position);
				}
			break;	
			
			case 4:	printf("\n\tEnter position: ");
				scanf("%d",&position);
				if(position>length() || position<0){
				printf("\n\tout of bound\n");
				}
				else{
				delete_at_position(position);
				}		

			case 5: delete_at_last();
				break;
			case 6: delete();
				break;
			break;
	
			default: exit(0);
			break;			

			}
		}	
return 0;
}
